import os
import sys
import datetime
import argparse
import re
from zai import ZhipuAiClient

# Configuration
API_KEY = os.environ.get("ZHIPUAI_API_KEY")

if not API_KEY:
    # Fallback for local testing if env var not set, though in CI it will be.
    # We'll just print a warning or fail if actual generation is needed.
    print("Warning: ZHIPUAI_API_KEY not set.")

def get_style_guide():
    try:
        if os.path.exists(".github/STYLE_GUIDE.md"):
            with open(".github/STYLE_GUIDE.md", "r", encoding="utf-8") as f:
                return f.read()
    except Exception:
        pass
    return "请使用专业、简洁的技术博客风格。内容要有深度，代码示例要准确。"

def get_existing_files(target_dir):
    if not os.path.exists(target_dir):
        return []
    return [f for f in os.listdir(target_dir) if f.endswith(".md") and not f.startswith(".")]

def analyze_and_generate(target_dir, valid_files):
    client = ZhipuAiClient(api_key=API_KEY)
    style_guide = get_style_guide()
    
    dir_name = os.path.basename(os.path.normpath(target_dir))
    
    # Check for stubs (files < 300 bytes)
    stub_file = None
    for f in valid_files:
        path = os.path.join(target_dir, f)
        if os.path.getsize(path) < 300:
            stub_file = f
            break
            
    if stub_file:
        print(f"Found stub file to rewrite: {stub_file}")
        with open(os.path.join(target_dir, stub_file), "r", encoding="utf-8") as f:
            content = f.read()
        
        prompt = f"""
        【角色设定】
        {style_guide}
        
        【任务】
        这是一个关于 "{dir_name}" 主题的目录下的一篇笔记或草稿。
        请将其扩写成一篇完整的、深度的技术博客文章。
        
        【现有内容】
        {content}
        
        【输出要求】
        1. 保持原有文件名（这很重要，不要改名）。
        2. 输出标准的 Markdown。
        3. 包含 Front Matter。
        """
        
        response = client.chat.completions.create(
            model="glm-4.5-air",
            messages=[{"role": "user", "content": prompt}],
        )
        return stub_file, response.choices[0].message.content
        
    else:
        print(f"No stubs found. Identifying missing topic for: {dir_name}")
        file_list_str = "\n".join(valid_files)
        
        planning_prompt = f"""
        【背景】
        我正在维护一个技术博客，目录是 "{dir_name}"。
        
        【现有文章列表】
        {file_list_str}
        
        【任务】
        1. 分析上述列表，找出该主题下缺失的一个重要子主题或概念。
        2. 以该缺失主题写一篇新的技术博客。
        
        【输出要求】
        1. 只输出 Markdown 内容。
        2. 包含 Front Matter，title 必须明确。
        """
        
        response = client.chat.completions.create(
            model="glm-4.5-air",
            messages=[
                {"role": "system", "content": style_guide},
                {"role": "user", "content": planning_prompt}
            ],
        )
        content = response.choices[0].message.content
        
        # Determine filename
        # Extract title from front matter or first line to hint at name (optional), 
        # but better to stick to index + date format.
        
        # Calculate next index
        max_prefix = 0
        pattern = re.compile(r'^(\d+)\.')
        for f in valid_files:
            match = pattern.match(f)
            if match:
                prefix = int(match.group(1))
                if prefix > max_prefix:
                    max_prefix = prefix
        
        next_prefix = max_prefix + 10
        if next_prefix == 10 and max_prefix == 0:
             # Check if 00 exists
             has_00 = any(f.startswith("00.") for f in valid_files)
             if not has_00:
                 next_prefix = 0 # Start at 00 if nothing exists? Or 10? User said "first page should 10... then 20", but implies 00 might exist. 
                 # Let's stick to adding 10 to max. If max is 0 (found 00.xxx), next is 10.
        
        # Generate safe filename from content title or just generic?
        # Let's try to extract title from content
        title_match = re.search(r'title:\s*(.+)', content)
        title_slug = "new-post"
        if title_match:
            title_clean = title_match.group(1).strip().strip('"').strip("'")
            # Simple slugify
            title_slug = re.sub(r'[^\w\u4e00-\u9fa5]+', '-', title_clean).strip('-')
            
        filename = f"{next_prefix:02d}.{title_slug}.md"
        
        return filename, content

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dir", required=True, help="Target directory to process")
    parser.add_argument("--dry-run", action="store_true", help="Do not write files")
    args = parser.parse_args()
    
    target_dir = args.dir
    print(f"Processing directory: {target_dir}")
    
    if not os.path.exists(target_dir):
        print(f"Directory {target_dir} does not exist. Creating it.")
        os.makedirs(target_dir, exist_ok=True)
        
    valid_files = get_existing_files(target_dir)
    print(f"Found {len(valid_files)} existing files.")
    
    if args.dry_run:
        print("Dry run enabled. Exiting before API call.")
        return

    try:
        filename, content = analyze_and_generate(target_dir, valid_files)
        
        output_path = os.path.join(target_dir, filename)
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(content)
            
        print(f"SUCCESS: Generated {output_path}")
        # Output for GitHub Actions
        if "GITHUB_OUTPUT" in os.environ:
             with open(os.environ["GITHUB_OUTPUT"], "a") as gh_out:
                 gh_out.write(f"filepath={output_path}\n")
                 
    except Exception as e:
        print(f"Error generating content: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
