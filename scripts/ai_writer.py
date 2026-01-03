import os
import sys
import datetime
import re
from zhipuai import ZhipuAI
from github import Github

# 配置
API_KEY = os.environ.get("ZHIPUAI_API_KEY")
GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN")
REPO_NAME = os.environ.get("GITHUB_REPOSITORY")
ISSUE_NUMBER = int(os.environ.get("ISSUE_NUMBER"))

# 初始化
client = ZhipuAI(api_key=API_KEY)
g = Github(GITHUB_TOKEN)
repo = g.get_repo(REPO_NAME)
issue = repo.get_issue(number=ISSUE_NUMBER)

def get_style_guide():
    try:
        # Adjusted path to standard location relative to repo root
        # Script is run from repo root in CI, so .github/STYLE_GUIDE.md is correct
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
        model="glm-4-flash", # 或者 glm-4-plus，看你预算
        messages=[{"role": "user", "content": prompt}],
    )
    return response.choices[0].message.content

def main():
    print(f"处理 Issue #{ISSUE_NUMBER}: {issue.title}")
    
    # 1. 获取风格和内容
    style = get_style_guide()
    content = f"Title: {issue.title}\n\nBody:\n{issue.body}"
    
    # 2. 调用 LLM
    print("正在调用智谱 AI 生成文章...")
    article_md = generate_article(style, content)
    
    # 3. 提取文件名 (简单的正则提取 title，或者直接用时间戳)
    # 这里为了防错，直接用 日期-issueID.md
    filename = f"_posts/{datetime.date.today()}-issue-{ISSUE_NUMBER}.md"
    
    # 4. 输出到文件系统 (供 Action 进行 commit)
    # 确保目录存在
    os.makedirs("_posts", exist_ok=True)
    
    with open(filename, "w", encoding="utf-8") as f:
        f.write(article_md)
    
    print(f"文章已生成: {filename}")
    
    # 可选：生成成功后自动评论 Issue
    try:
        issue.create_comment(f"✅ AI 文章生成成功！已生成 PR 等待审核。\n文件路径: `{filename}`")
    except Exception as e:
        print(f"Comment creation failed: {e}")

if __name__ == "__main__":
    main()
