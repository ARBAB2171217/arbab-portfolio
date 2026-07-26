import json

def extract_latest_good_code():
    log_file = "/home/arbab/.gemini/antigravity/brain/01adbd5e-ddd5-44b3-aa39-2281edfb2fdc/.system_generated/logs/overview.txt"
    with open(log_file) as f:
        lines = f.readlines()
        
    tool_calls = []
    for line in lines:
        idx = line.find("{")
        if idx != -1:
            try:
                data = json.loads(line[idx:])
                if "tool_calls" in data:
                    for tc in data["tool_calls"]:
                        if tc["name"] in ["replace_file_content", "multi_replace_file_content"]:
                            tool_calls.append(tc)
            except Exception:
                pass

    # The good state is after the first 8 tool calls.
    # Actually, if we just want the Prolio redesign, it was created by:
    # 1. replace_file_content for app/layout.tsx
    # 2. multi_replace_file_content for components/Sections.tsx (the massive redesign)
    # 3-6. replace_file_content for Sections.tsx (fixing divs)
    # 7. multi_replace_file_content for Sections2.tsx
    # 8. replace_file_content for Sections2.tsx (fixing map loop)
    # Let's just read the original files from the repo (which is HEAD right now)
    # and apply these 8 chunks sequentially.

    files = {}
    for path in [
        "/home/arbab/arbab-portfolio/app/layout.tsx",
        "/home/arbab/arbab-portfolio/app/globals.css",
        "/home/arbab/arbab-portfolio/components/Sections.tsx",
        "/home/arbab/arbab-portfolio/components/Sections2.tsx"
    ]:
        try:
            with open(path) as f:
                files[path] = f.read()
        except:
            pass

    def apply(content, target, replacement):
        # target might have weird whitespace, let's just do standard replace
        if target in content:
            return content.replace(target, replacement)
        else:
            print("WARNING: target not found!")
            print("Target starts with:", repr(target[:50]))
            return content

    for tc in tool_calls[:8]:
        name = tc["name"]
        args = tc["args"]
        path = args["TargetFile"]
        if path.startswith('"') and path.endswith('"'):
            path = json.loads(path)
            
        content = files.get(path, "")
        
        if name == "replace_file_content":
            target = args["TargetContent"]
            if target.startswith('"') and target.endswith('"'):
                target = json.loads(target)
            replacement = args["ReplacementContent"]
            if replacement.startswith('"') and replacement.endswith('"'):
                replacement = json.loads(replacement)
            content = apply(content, target, replacement)
        elif name == "multi_replace_file_content":
            chunks = args["ReplacementChunks"]
            if isinstance(chunks, str):
                if chunks.startswith('"') and chunks.endswith('"'):
                    chunks = json.loads(chunks)
                if isinstance(chunks, str):
                    chunks = json.loads(chunks)
            for chunk in chunks:
                target = chunk["TargetContent"]
                replacement = chunk["ReplacementContent"]
                content = apply(content, target, replacement)
                
        files[path] = content

    for path, content in files.items():
        with open(path, "w") as f:
            f.write(content)
            
    print("Files restored to Prolio Redesign state!")

extract_latest_good_code()
