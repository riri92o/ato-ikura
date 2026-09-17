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

with open("index.html", "r", encoding="utf-8") as f:
    html_content = f.read()

html_ids = set(re.findall(r'id=["\']([^"\']+)["\']', html_content))

print("Scanning application scripts for byId(...) calls that might be missing in index.html...")

for script_path in SCRIPT_FILES:
    for idx, line in enumerate(Path(script_path).read_text(encoding="utf-8").splitlines(), start=1):
        matches = re.findall(r'byId\(["\']([^"\']+)["\']\)', line)
        for mid in matches:
            if mid not in html_ids:
                print(f"{script_path}:{idx}: ID '{mid}' not in HTML -> {line.strip()}")
