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

def fix_directory(directory):
    if not os.path.exists(directory):
        print(f"Directory {directory} does not exist. Skipping.")
        return

    files = [f for f in os.listdir(directory) if f.endswith(".md")]
    
    # Use Regex to extract serial number and the rest of the file name
    pattern = re.compile(r'^(\d+)\.(.*)\.md$')
    
    parsed_files = []
    for f in files:
        match = pattern.match(f)
        if match:
            serial = int(match.group(1))
            name = match.group(2)
            parsed_files.append({"original": f, "serial": serial, "name": name})
        else:
            print(f"Skipping {f} - doesn't match expected pattern.")

    # Sort by serial number, then by original name for stability
    parsed_files.sort(key=lambda x: (x["serial"], x["original"]))

    if not parsed_files:
        return

    # Algorithm to ensure progressive increase (at least current_serial + 1)
    # However, user specifically asked to fix SAME serial numbers.
    # So if they are different, we keep them. If they are the same, we increment.
    
    renamed_counts = 0
    used_serials = set()
    
    # We need to be careful with renames to avoid overwriting existing files or 
    # conflicts during the process. We'll build a plan first.
    
    rename_plan = []
    current_used = set(f["serial"] for f in parsed_files)
    
    last_serial = -1
    for item in parsed_files:
        target_serial = item["serial"]
        
        # If this serial is already used in this pass, increment it until it's unique
        # We start from max(item["serial"], last_serial + 1) if we wanted STRICT progressive,
        # but user said "if there are same serial number, should change it one by one".
        # This implies we only increment when there's a collision.
        
        if target_serial <= last_serial:
            target_serial = last_serial + 1
            
        if target_serial != item["serial"]:
            new_filename = f"{target_serial:02d}.{item['name']}.md"
            rename_plan.append((item["original"], new_filename))
            last_serial = target_serial
        else:
            last_serial = target_serial

    if not rename_plan:
        print(f"No serial number collisions found in {directory}.")
        return

    print(f"Renaming {len(rename_plan)} files in {directory}...")
    for old, new in rename_plan:
        old_path = os.path.join(directory, old)
        new_path = os.path.join(directory, new)
        
        # Check if destination exists to prevent data loss
        if os.path.exists(new_path):
             # This could happen if we are incrementing into a number that exists later in the list.
             # We should probably process the list in reverse if moving upwards, 
             # OR use a temporary name.
             pass

    # Better strategy: perform renames in a way that avoids collisions
    # We use a temporary prefix to avoid collisions with existing files during the process.
    temp_renames = []
    for old, new in rename_plan:
        old_path = os.path.join(directory, old)
        temp_path = os.path.join(directory, f"temp_{old}")
        os.rename(old_path, temp_path)
        temp_renames.append((temp_path, os.path.join(directory, new)))
    
    for temp, final in temp_renames:
        os.rename(temp, final)
        print(f"  {os.path.basename(temp)[5:]} -> {os.path.basename(final)}")

def main():
    for d in TARGET_DIRS:
        print(f"Processing {d}...")
        fix_directory(d)

if __name__ == "__main__":
    main()
