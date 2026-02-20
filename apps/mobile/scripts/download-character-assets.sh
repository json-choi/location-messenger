#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ASSETS_DIR="$SCRIPT_DIR/../assets/characters"
API_BASE="https://api.pixellab.ai/mcp/characters"

declare -A CHARACTER_IDS
CHARACTER_IDS["boy_casual"]="248003b2-a21b-4686-bad6-2a5a97992d8a"
CHARACTER_IDS["boy_hiphop"]="65044566-9c2f-4aef-9560-6cdf0cce8583"
CHARACTER_IDS["boy_formal"]="66ab685b-4620-461d-997c-31608224119e"
CHARACTER_IDS["girl_school"]="f71919d6-cdec-4558-80ae-584dab1e9512"
CHARACTER_IDS["girl_casual"]="facbc3f0-ee3d-4358-93b6-647dabcf3e9d"
CHARACTER_IDS["girl_career"]="fa610915-100e-4757-a4c5-c4137c7cd04b"

IDLE_FRAMES=4
WALK_FRAMES=8

for CHAR in "${!CHARACTER_IDS[@]}"; do
  ID="${CHARACTER_IDS[$CHAR]}"
  echo ">>> Downloading $CHAR ..."

  ZIP_PATH="/tmp/${CHAR}.zip"
  EXTRACT_DIR="/tmp/${CHAR}_extracted"

  curl -s --fail -L "$API_BASE/$ID/download" -o "$ZIP_PATH"
  rm -rf "$EXTRACT_DIR" && mkdir -p "$EXTRACT_DIR"
  unzip -q "$ZIP_PATH" -d "$EXTRACT_DIR"

  ROT_DEST="$ASSETS_DIR/$CHAR/rotations"
  IDLE_DEST="$ASSETS_DIR/$CHAR/animations/idle"
  WALK_DEST="$ASSETS_DIR/$CHAR/animations/walking"
  mkdir -p "$ROT_DEST" "$IDLE_DEST" "$WALK_DEST"

  for SRC in "$EXTRACT_DIR"/rotations/*.png; do
    cp "$SRC" "$ROT_DEST/$(basename "$SRC")"
  done

  for DIR_PATH in "$EXTRACT_DIR"/animations/breathing-idle/*/; do
    DIR="$(basename "$DIR_PATH")"
    for I in $(seq 0 $((IDLE_FRAMES - 1))); do
      SRC="$DIR_PATH/frame_$(printf '%03d' $I).png"
      [ -f "$SRC" ] && cp "$SRC" "$IDLE_DEST/${DIR}_${I}.png"
    done
  done

  for DIR_PATH in "$EXTRACT_DIR"/animations/walking-8-frames/*/; do
    DIR="$(basename "$DIR_PATH")"
    for I in $(seq 0 $((WALK_FRAMES - 1))); do
      SRC="$DIR_PATH/frame_$(printf '%03d' $I).png"
      [ -f "$SRC" ] && cp "$SRC" "$WALK_DEST/${DIR}_${I}.png"
    done
  done

  rm -rf "$EXTRACT_DIR" "$ZIP_PATH"
  echo "    $CHAR done"
done

echo ""
echo "All character assets downloaded."
