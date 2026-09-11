import re

# 1. Read index.html and extract all element IDs
with open("index.html", "r", encoding="utf-8") as f:
    html_content = f.read()

html_ids = set(re.findall(r'id=["\']([^"\']+)["\']', html_content))
print(f"Total IDs in index.html: {len(html_ids)}")

# 2. Read app.js and extract all $("...") queries
with open("app.js", "r", encoding="utf-8") as f:
    app_content = f.read()

js_ids = set(re.findall(r'\$\(["\']([^"\']+)["\']\)', app_content))
print(f"Total IDs queried in app.js via $(...): {len(js_ids)}")

missing_ids = []
for jid in sorted(js_ids):
    if jid not in html_ids:
        missing_ids.append(jid)

print(f"Missing IDs ({len(missing_ids)}):")
for mid in missing_ids:
    print(f"  - {mid}")

# 3. Check for any syntax errors or unhandled queries
with open("core.js", "r", encoding="utf-8") as f:
    core_content = f.read()

print("Core.js size:", len(core_content))
