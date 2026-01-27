import os
import sys
import datetime
import argparse
import re
import random
from zai import ZhipuAiClient

# Configuration
API_KEY = os.environ.get("ZHIPUAI_API_KEY")

# Target directories as specified by user (corrected to match filesystem)
TARGET_DIRS = [
    "docs/android",
    "docs/big_data",
    "docs/cloud",
    "docs/code-world",
    "docs/database",
    "docs/devops",
    "docs/distributed_system",
    "docs/framework",
    "docs/frontend",
    "docs/message_queue",
    "docs/operating_system",
    "docs/programming_languages",
    "docs/protocol",
    "docs/security",
    "docs/架构思想"
]

if not API_KEY:
    # Fallback for local testing if env var not set
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

def pick_valid_directory(manual_dir=None):
    """
    Selects a directory to process.
    If manual_dir is provided, uses that.
    Otherwise, iterates through TARGET_DIRS to find one with <= 30 files.
    """
    if manual_dir:
        candidates = [manual_dir]
    else:
        # Shuffle to randomize selection order so we don't always check 'android' first
        candidates = list(TARGET_DIRS)
        random.shuffle(candidates)
    
    for relative_path in candidates:
        # Handle running from root or inside scripts (though usually run from root in CI)
        # We assume script is run from repo root or we adjust path.
        # In CI `runs-on`, we are at root.
        
        # Check if actually exists
        if not os.path.exists(relative_path):
            print(f"Skipping {relative_path}: Directory not found.")
            continue
            
        files = get_existing_files(relative_path)
        count = len(files)
        
        print(f"Checking {relative_path}: {count} files.")
        
        if count > 30:
            print(f"Skipping {relative_path}: Too many files (>30).")
            continue
            
        return relative_path, files
        
    return None, None

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
                 # Logic: if directory is empty or has non-numbered files, start at 10 (or 00?)
                 # User convention seems to be 00, 10, ...
                 pass

        # Extract title from content
        title_match = re.search(r'title:\s*(.+)', content)
        title_slug = "new-post"
        if title_match:
            title_clean = title_match.group(1).strip().strip('"').strip("'")
            title_slug = re.sub(r'[^\w\u4e00-\u9fa5]+', '-', title_clean).strip('-')
            
        filename = f"{next_prefix:02d}.{title_slug}.md"
        
        return filename, content

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dir", help="Specific directory to process")
    parser.add_argument("--dry-run", action="store_true", help="Do not write files")
    args = parser.parse_args()
    
    # Select directory
    target_dir, valid_files = pick_valid_directory(args.dir)
    
    if not target_dir:
        print("No valid directory found (all > 30 files or does not exist).")
        # Exit gracefully, maybe 0 so flow doesn't fail?
        sys.exit(0)
        
    print(f"Selected directory: {target_dir}")
    
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
