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

def pick_valid_directory(excluded_dirs=None, manual_dir=None):
    """
    Selects a directory to process.
    If manual_dir is provided, uses that.
    Otherwise, iterates through TARGET_DIRS to find one with <= 30 files,
    ignoring any in excluded_dirs.
    """
    if manual_dir:
        candidates = [manual_dir]
    else:
        candidates = list(TARGET_DIRS)
        random.shuffle(candidates)
    
    # Filter out excluded
    if excluded_dirs:
        candidates = [d for d in candidates if d not in excluded_dirs]
        
    for relative_path in candidates:
        if not os.path.exists(relative_path):
            continue
            
        files = get_existing_files(relative_path)
        count = len(files)
        
        if count > 30:
            print(f"Skipping {relative_path}: Too many files ({count} > 30).")
            continue
            
        return relative_path, files
        
    return None, None

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dir", help="Specific directory to process")
    parser.add_argument("--count", type=int, default=5, help="Number of articles to generate")
    parser.add_argument("--dry-run", action="store_true", help="Do not write files")
    args = parser.parse_args()
    
    generated_files = []
    processed_dirs = []
    
    # If specific dir is requested, we only do that one, ignoring count (or we could do multiple in one dir? 
    # Logic usually implies 1 post per topic per timeframe to avoid spamming one folder. 
    # So if manual dir is set, max 1 post.)
    max_count = 1 if args.dir else args.count
    
    print(f"Plan: Generate up to {max_count} articles.")

    for i in range(max_count):
        print(f"\n--- Batch {i+1}/{max_count} ---")
        target_dir, valid_files = pick_valid_directory(excluded_dirs=processed_dirs, manual_dir=args.dir)
        
        if not target_dir:
            print("No more valid directories found.")
            break
            
        print(f"Selected directory: {target_dir}")
        processed_dirs.append(target_dir) # Mark as processed so we don't pick it again
        
        if args.dry_run:
            print("Dry run enabled. Skipping generation.")
            continue

        try:
            filename, content = analyze_and_generate(target_dir, valid_files)
            
            output_path = os.path.join(target_dir, filename)
            with open(output_path, "w", encoding="utf-8") as f:
                f.write(content)
                
            print(f"SUCCESS: Generated {output_path}")
            generated_files.append(output_path)
            
        except Exception as e:
            print(f"Error generating content for {target_dir}: {e}")
            # Continue to next iteration even if one fails
            continue

    if generated_files:
        # Output for GitHub Actions
        # We'll output the first one or a list. 
        # Actually workflow can just git add docs/ so specific path passing is less critical for commit,
        # but useful for PR body.
        if "GITHUB_OUTPUT" in os.environ:
             with open(os.environ["GITHUB_OUTPUT"], "a") as gh_out:
                 gh_out.write(f"generated_count={len(generated_files)}\n")
                 # Join with newline or space? GITHUB_OUTPUT is a KV file.
                 # Let's just output a summary string
                 summary = ", ".join([os.path.basename(f) for f in generated_files])
                 gh_out.write(f"summary_filenames={summary}\n")
    else:
        print("No files generated.")

if __name__ == "__main__":
    main()
