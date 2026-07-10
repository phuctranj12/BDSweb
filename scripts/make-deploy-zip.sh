#!/usr/bin/env bash
# Builds the app and packages ./deploy.zip for upload to cPanel public_html.
#
# Deliberately NOT included in the zip:
#   *.map           source maps expose the full original source to anyone
#   .htaccess       the server's rewrite config; overwriting it blindly breaks routing
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> Building (warnings are errors)"
rm -rf build
CI=true npx react-scripts build

echo "==> Stripping source maps"
find build -name '*.map' -delete
find build -name '*.LICENSE.txt' -delete

echo "==> Verifying every asset referenced by index.html exists"
missing=0
while read -r p; do
  [ -f "build${p}" ] || { echo "   MISSING: $p"; missing=1; }
done < <(grep -oE '(href|src)="/[^"]+"' build/index.html | sed 's/.*"\(.*\)"/\1/' | grep -v '^https')
[ "$missing" -eq 0 ] || { echo "Aborting: index.html points at files that are not in build/"; exit 1; }

echo "==> Zipping"
rm -f deploy.zip
(cd build && zip -qr ../deploy.zip . -x '.DS_Store' '__MACOSX/*')

echo
echo "Done: $(pwd)/deploy.zip  ($(du -h deploy.zip | cut -f1), $(unzip -l deploy.zip | tail -1 | awk '{print $2}') files)"
echo
echo "Upload to public_html. Delete the old static/ folder BEFORE extracting —"
echo "filenames are content-hashed, so extracting will not remove stale assets."
