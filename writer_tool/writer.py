import os
import sys
from zai import ZhipuAiClient

# Configuration
API_KEY = 'a301da8f75d1467ab3d3d375ad1d58adb.n3SHY5s5W18yOzQAs'
STYLE_GUIDE_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), ".github", "STYLE_GUIDE.md")
MODEL_NAME = "glm-4.5-air" # As requested by user

def load_style_guide():
    try:
        with open(STYLE_GUIDE_PATH, "r", encoding="utf-8") as f:
            return f.read()
    except FileNotFoundError:
        print(f"Error: Style guide not found at {STYLE_GUIDE_PATH}")
        sys.exit(1)

import argparse

def main():
    if not API_KEY:
        print("Error: ZHIPUAI_API_KEY environment variable not set.")
        # print("Please set it directly or in your environment.") # User hardcoded it, so maybe skipping this warning or keeping it is fine, but I'll keep the logic generic.
        # Actually user hardcoded it in previous turn, so the check might pass if variable is set or if hardcoded. 
        # But wait, looking at file content, user hardcoded it.
        pass 

    parser = argparse.ArgumentParser(description="GLM-4.5 Article Writer")
    parser.add_argument("input_file", nargs="?", help="Relative path to the input file (optional)")
    args = parser.parse_args()

    style_guide = load_style_guide()
    
    print("--- GLM-4.5 Article Writer ---")
    print(f"Using model: {MODEL_NAME}")

    user_input = ""
    if args.input_file:
        try:
            # Resolve relative path with respect to CWD (workspace root usually)
            # The script is run from workspace root usually.
            file_path = os.path.abspath(args.input_file)
            print(f"Reading input from: {file_path}")
            with open(file_path, "r", encoding="utf-8") as f:
                user_input = f.read()
        except Exception as e:
            print(f"Error reading input file: {e}")
            return
    else:
        print("Enter the context or content you want to rewrite/expand (Press Ctrl+Z/Ctrl+D and Enter to finish):")
        try:
            user_input = sys.stdin.read()
        except KeyboardInterrupt:
            return

    if not user_input.strip():
        print("No input provided.")
        return

    client = ZhipuAiClient(api_key=API_KEY)

    system_prompt = f"""
You are an expert technical writer for a personal blog.
Your task is to write or rewrite articles following the strict guidelines provided below.

# Style Guide
{style_guide}

# Instructions
1. Adopt the persona, tone, and formatting described in the Style Guide.
2. If the user provides a draft, rewrite it to match the style.
3. If the user provides a topic/context, write a new article based on it.
4. Ensure the output is valid Markdown with Frontmatter.
5. make sure the output is Chinese.
"""

    try:
        response = client.chat.completions.create(
            model=MODEL_NAME,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_input}
            ],
            stream=True,
            temperature=0.7
        )

        print("\n--- Generated Article ---\n")
        for chunk in response:
            if hasattr(chunk.choices[0].delta, 'content'):
                content = chunk.choices[0].delta.content
                print(content, end="", flush=True)
        print("\n")

    except Exception as e:
        print(f"\nError calling API: {e}")

if __name__ == "__main__":
    main()
