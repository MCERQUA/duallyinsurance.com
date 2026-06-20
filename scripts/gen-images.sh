#!/usr/bin/env bash
set -euo pipefail
HF_TOKEN="${HF_TOKEN:-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}"
MODEL="black-forest-labs/FLUX.1-schnell"
API="https://router.huggingface.co/hf-inference/models/${MODEL}"
OUT="/workspace/Websites/duallyinsurance.com/public/images"
mkdir -p "$OUT"

gen() {
  local name="$1" prompt="$2"
  local dest="$OUT/${name}.jpg"
  [ -f "$dest" ] && { echo "SKIP $name (exists)"; return; }
  echo "GEN $name…"
  curl -sS -X POST "$API" \
    -H "Authorization: Bearer $HF_TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"inputs\":\"${prompt}\"}" \
    -o "$dest"
  local size; size=$(stat -c%s "$dest")
  [ "$size" -lt 5000 ] && { echo "WARN small ($size bytes)"; cat "$dest"; } || echo "OK $name (${size}b)"
}

gen "commercial-auto" "F-350 dually truck on highway hauling gooseneck trailer, commercial auto insurance concept, dark navy and chrome, professional"
gen "physical-damage" "Ram 3500 dually truck with agreed value insurance concept, chrome silver finish, professional truck photography"
gen "liability" "Silverado 3500 dually truck commercial liability coverage concept, dark navy blue truck, professional"
gen "non-trucking-liability" "Dually truck owner-operator driving off-dispatch, non-trucking liability insurance concept, empty highway"
gen "cargo" "Dually truck with livestock trailer hauling cattle, cargo insurance concept, Texas ranch background"
gen "umbrella" "Commercial umbrella insurance concept with dually truck, dark navy and chrome, professional insurance graphic"
gen "tools-equipment" "Contractor truck bed with tools and equipment in F-350 dually, tool coverage concept, professional"
gen "gap-coverage" "GAP insurance concept for dually truck, loan balance and insurance payout graphic, dark navy"
gen "hero" "F-350 dually truck on open highway at sunset, dark navy sky, chrome trim, working truck insurance"
gen "about" "Insurance professionals helping a dually truck owner, professional office, dark navy branding"
gen "coverage-map" "USA map with all 50 states highlighted, dually truck insurance coverage concept, dark navy and chrome"
gen "process" "Dually truck owner filling out insurance quote on tablet, simple digital process, dark navy background"

echo "All images done."
