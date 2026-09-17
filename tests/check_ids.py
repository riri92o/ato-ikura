import re
from pathlib import Path

SCRIPT_FILES = [
    "app.js",
    "storage.js",
    "cards.js",
    "emoney.js",
    "subscriptions.js",
    "reports.js",
    "main.js",
]

# 1. Read index.html and extract all element IDs
with open("index.html", "r", encoding="utf-8") as f:
    html_content = f.read()

html_ids = set(re.findall(r'id=["\']([^"\']+)["\']', html_content))
print(f"Total IDs in index.html: {len(html_ids)}")

# 2. Read all application scripts and extract all byId("...") queries
app_content = "\n".join(Path(path).read_text(encoding="utf-8") for path in SCRIPT_FILES)

js_ids = set(re.findall(r'byId\(["\']([^"\']+)["\']\)', app_content))
print(f"Total IDs queried across application scripts: {len(js_ids)}")

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
