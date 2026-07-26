import json

with open("/home/arbab/.gemini/antigravity/brain/01adbd5e-ddd5-44b3-aa39-2281edfb2fdc/.system_generated/logs/overview.txt") as f:
    for line in f:
        # Each line might be prefixed with "12:{" etc.
        idx = line.find('{')
        if idx != -1:
            try:
                data = json.loads(line[idx:])
                if "tool_calls" in data:
                    for tc in data["tool_calls"]:
                        if tc["name"] in ["replace_file_content", "multi_replace_file_content"]:
                            print(tc["name"], tc["args"].get("TargetFile"))
            except Exception as e:
                pass
