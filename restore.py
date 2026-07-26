import json
import os

with open("/home/arbab/.gemini/antigravity/brain/01adbd5e-ddd5-44b3-aa39-2281edfb2fdc/.system_generated/logs/overview.txt") as f:
    lines = f.readlines()

tool_calls = []
for line in lines:
    idx = line.find('{')
    if idx != -1:
        try:
            data = json.loads(line[idx:])
            if "tool_calls" in data:
                for tc in data["tool_calls"]:
                    if tc["name"] in ["replace_file_content", "multi_replace_file_content"]:
                        tool_calls.append(tc)
        except Exception as e:
            pass

# Let's write the first 8 tool calls (which comprise the good state)
# We know tool call 9 was my attempt to make the hero full screen, which I don't want to repeat.
good_calls = tool_calls[:8]

def apply_chunk(content, chunk):
    target = chunk["TargetContent"]
    replacement = chunk["ReplacementContent"]
    if target in content:
        return content.replace(target, replacement)
    else:
        print("Failed to replace:", target[:50])
        return content

for tc in good_calls:
    args = tc["args"]
    file_path = args["TargetFile"]
    
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, "r") as f:
        content = f.read()
        
    if tc["name"] == "replace_file_content":
        content = apply_chunk(content, args)
    elif tc["name"] == "multi_replace_file_content":
        chunks = args.get("ReplacementChunks", [])
        if isinstance(chunks, str):
            chunks = json.loads(chunks)
        for chunk in chunks:
            content = apply_chunk(content, chunk)
            
    with open(file_path, "w") as f:
        f.write(content)

print("Restoration complete.")
