import os
import re

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

# Pattern to match: permalink: /pages/xxxxxx/
# where xxxxxx is 6 alphanumeric characters.
# We want to keep lines that match this, and remove lines that start with
# 'permalink: /pages/' but have a DIFFERENT value after /pages/.
PERMALINK_PREFIX = "permalink: /pages/"
VALID_PATTERN = re.compile(r'^permalink: /pages/([a-zA-Z0-9]{6})/$')

def process_file(file_path):
    print(f"Processing: {file_path}")
    changed = False
    new_lines = []
    
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        
    for line in lines:
        stripped_line = line.strip()
        if stripped_line.startswith(PERMALINK_PREFIX):
            print(f"  Removing permalink: {stripped_line}")
            changed = True
            continue # Skip this line
        new_lines.append(line)
        
    if changed:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"  Updated: {file_path}")

def main():
    base_dir = r"d:\workspace\blog"
    for target in TARGET_DIRS:
        target_path = os.path.join(base_dir, target)
        if not os.path.exists(target_path):
            print(f"Directory not found: {target_path}")
            continue
            
        for root, dirs, files in os.walk(target_path):
            for file in files:
                if file.endswith(".md"):
                    file_path = os.path.join(root, file)
                    process_file(file_path)

if __name__ == "__main__":
    main()
