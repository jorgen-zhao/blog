import os
import sys
import datetime
import re
from zai import ZhipuAiClient
from github import Github

# 配置
API_KEY = os.environ.get("ZHIPUAI_API_KEY")
GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN")
REPO_NAME = os.environ.get("GITHUB_REPOSITORY")
ISSUE_NUMBER = int(os.environ.get("ISSUE_NUMBER"))

# 初始化
client = ZhipuAiClient(api_key=API_KEY)
g = Github(GITHUB_TOKEN)
repo = g.get_repo(REPO_NAME)
issue = repo.get_issue(number=ISSUE_NUMBER)

def get_style_guide():
    try:
        with open(".github/STYLE_GUIDE.md", "r", encoding="utf-8") as f:
            return f.read()
    except FileNotFoundError:
        return "请使用专业、简洁的技术博客风格。"

def generate_article(style_guide, input_content):
    prompt = f"""
    【角色设定】
    {style_guide}

    【任务指令】
    请根据下方的【用户输入】，判断其类型并完成任务：
    1. 如果输入是碎片化笔记/大纲 -> 请扩写成一篇完整的技术博客。
    2. 如果输入是英文文章/报告 -> 请深度阅读后，用中文按照你的风格重写（非直译）。
    
    【输出要求】
    1. 必须输出标准的 Markdown 格式。
    2. 包含 Front Matter (Jekyll/Hexo 格式)，如下：
    ---
    title: [根据内容自动生成的标题]
    date: {datetime.date.today()}
    tags: [自动提取2-3个标签]
    ---
    
    【用户输入】
    {input_content}
    """

    response = client.chat.completions.create(
        model="glm-4.5-air",
        messages=[{"role": "user", "content": prompt}],
    )
    return response.choices[0].message.content

def get_next_filename(target_dir, issue_number):
    # Scan directory for files starting with digits
    files = os.listdir(target_dir)
    pattern = re.compile(r'^(\d+)\.')
    
    max_prefix = 0
    for f in files:
        match = pattern.match(f)
        if match:
            prefix = int(match.group(1))
            if prefix > max_prefix:
                max_prefix = prefix
    
    # Next prefix
    next_prefix = max_prefix + 10
    if next_prefix == 10 and max_prefix == 0 and "00.newland.md" in files:
         # Special case: if only 00 exists, next is 10. My logic covers this (0 -> 10).
         pass

    # Pad with leading zero if needed (though user example '10.' implies 2 digits minimum, 
    # but '01.网站.md' exists in other dirs. '10' is 2 digits. '00' is 2 digits.
    # User said "first page should 10... then 20".
    # I will format as {:02d} to be safe/consistent with 00.
    
    filename = f"{next_prefix:02d}.{datetime.date.today()}-issue-{issue_number}.md"
    return filename

def main():
    print(f"处理 Issue #{ISSUE_NUMBER}: {issue.title}")
    
    # 1. 获取风格和内容
    style = get_style_guide()
    content = f"Title: {issue.title}\n\nBody:\n{issue.body}"
    
    # 2. 调用 LLM
    print("正在调用智谱 AI (GLM-4.5-Air) 生成文章...")
    article_md = generate_article(style, content)
    
    # 3. 确定文件名和路径
    target_dir = "docs/04.newland"
    os.makedirs(target_dir, exist_ok=True)
    
    filename = get_next_filename(target_dir, ISSUE_NUMBER)
    file_path = os.path.join(target_dir, filename)
    
    # 4. 输出到文件系统
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(article_md)
    
    print(f"文章已生成: {file_path}")
    
    # 可选：生成成功后自动评论 Issue
    try:
        issue.create_comment(f"✅ AI 文章生成成功！已生成 PR 等待审核。\n文件路径: `{file_path}`")
    except Exception as e:
        print(f"Comment creation failed: {e}")

if __name__ == "__main__":
    main()
