with open("components/Sections.tsx", "r") as f:
    lines = f.readlines()

def print_divs():
    stack = []
    for i, line in enumerate(lines):
        if "<div" in line:
            stack.append(i+1)
        if "</div" in line:
            if stack:
                stack.pop()
            else:
                print(f"Extra closing div on line {i+1}")
    print(f"Unclosed divs at lines: {stack}")

print_divs()
