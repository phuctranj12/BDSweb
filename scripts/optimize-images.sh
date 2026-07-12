#!/usr/bin/env bash
# Resizes and re-compresses the source images that the app actually imports.
#
# Originals are 3000–6000px wide (one is 7.8 MB). Nothing on the site is ever
# rendered wider than ~1600 CSS px, and the largest slot is the hero at 2x DPR.
# Shipping the originals would blow the LCP budget for no visible gain.
#
# Writes web-ready copies into assets/image/web/ and leaves originals untouched.
set -euo pipefail
cd "$(dirname "$0")/.."

SRC=src/components/assets/image
OUT=$SRC/web
mkdir -p "$OUT"

# WebP/AVIF are emitted next to the JPG so <picture> can prefer them and fall
# back to the JPG on old browsers. cwebp/avifenc are optional — the JPG path
# always works; if a tool is missing we just skip that format with a notice.
HAS_CWEBP=$(command -v cwebp >/dev/null 2>&1 && echo 1 || echo 0)
HAS_AVIF=$(command -v avifenc >/dev/null 2>&1 && echo 1 || echo 0)

# name                                            max-width  quality
process() {
  local file="$1" maxw="$2" q="$3"
  local base out w h target
  base=$(basename "$file")
  out="$OUT/${base%.*}.jpg"

  w=$(sips -g pixelWidth  "$file" | tail -1 | awk '{print $2}')
  h=$(sips -g pixelHeight "$file" | tail -1 | awk '{print $2}')
  # -Z upscales when the source is smaller than the cap. Never do that: it
  # inflates the file without adding a single pixel of real detail.
  local long=$(( w > h ? w : h ))
  target=$(( long < maxw ? long : maxw ))

  sips -s format jpeg -s formatOptions "$q" -Z "$target" "$file" --out "$out" >/dev/null 2>&1

  # Modern formats are derived from the freshly sized JPG so they share its
  # dimensions exactly (no second resize, no CLS surprises).
  local extra=""
  if [ "$HAS_CWEBP" = 1 ]; then
    cwebp -quiet -q "$q" "$out" -o "${out%.jpg}.webp" >/dev/null 2>&1 \
      && extra+="  webp:$(du -h "${out%.jpg}.webp" | cut -f1 | tr -d ' ')"
  fi
  if [ "$HAS_AVIF" = 1 ]; then
    # AVIF quality scale is inverted vs JPEG; map q~70-80 to a sensible range.
    avifenc --min 20 --max 30 -s 6 "$out" "${out%.jpg}.avif" >/dev/null 2>&1 \
      && extra+="  avif:$(du -h "${out%.jpg}.avif" | cut -f1 | tr -d ' ')"
  fi

  printf "  %-46s %5sx%-5s -> %4spx  jpg:%s%s\n" "$base" "$w" "$h" "$target" "$(du -h "$out" | cut -f1 | tr -d ' ')" "$extra"
}

echo "==> Hero (full-bleed, 2560px)"
for f in DuAn2.jpg DuAn1.jpg LK1.jpg; do process "$SRC/$f" 2560 70; done

echo "==> Lot cards + section imagery (1400px)"
for f in breno-assis-r3WAWU5Fi5Q-unsplash.jpg \
         elite-prop-hmlP-v0vJ5o-unsplash.jpg \
         alexander-andrews-A3DPhhAL6Zg-unsplash.jpg \
         kc-shum-tVbA4YUguG4-unsplash.jpg \
         etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg \
         franco-debartolo-7xA4Pe7sWLY-unsplash.jpg \
         marina-nazina-dWH92v9E6j4-unsplash.jpg \
         marina-nazina-XAyj4ATVE9g-unsplash.jpg \
         s1.JPG s3.JPG; do process "$SRC/$f" 1400 72; done

echo "==> Market listing thumbnails (broker's other projects, 900px)"
for f in GlobalCity.jpg VHomeGrand.jpg Sunshine.jpg AquaCity.jpg \
         MasteriCentrePoint.jpg EcoParkSkyOasis.jpg CelestaRise.jpg \
         "EmpireCity .jpg" The9Stellars.jpg VinhomesOceanPark2.jpg; do
  process "$SRC/$f" 900 72
done

echo "==> News thumbnails (900px)"
for f in news1.jpg news2.jpg news3.jpg news4.jpg news5.jpg news6.jpg; do
  process "$SRC/$f" 900 72
done

echo "==> Plan drawing (keep detail, it gets zoomed)"
process "$SRC/chiaLo.jpeg" 2400 80

echo
[ "$HAS_CWEBP" = 1 ] || echo "note: cwebp not found — skipped WebP (brew install webp)"
[ "$HAS_AVIF" = 1 ]  || echo "note: avifenc not found — skipped AVIF (brew install libavif)"
echo "Before: $(du -sh $SRC --exclude=web 2>/dev/null | cut -f1 || du -sh $SRC | cut -f1)"
echo "After (web/): $(du -sh $OUT | cut -f1)"
