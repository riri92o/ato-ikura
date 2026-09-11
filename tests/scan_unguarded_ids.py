import re

with open("index.html", "r", encoding="utf-8") as f:
    html_content = f.read()

html_ids = set(re.findall(r'id=["\']([^"\']+)["\']', html_content))

with open("app.js", "r", encoding="utf-8") as f:
    app_lines = f.readlines()

print("Scanning app.js for unguarded $(...) calls that might be missing in index.html...")

for idx, line in enumerate(app_lines, start=1):
    matches = re.findall(r'\$\(["\']([^"\']+)["\']\)', line)
    for mid in matches:
        if mid not in html_ids:
            # Check if this line does property access directly without guarding
            print(f"Line {idx}: ID '{mid}' not in HTML -> {line.strip()}")
