#!/bin/bash
set -e
cd "$(dirname "$0")"
VENV_DIR=".tts_venv"

if [ ! -d "$VENV_DIR" ]; then
  echo "🔧 首次运行：正在创建本地 Python 语音环境 (.tts_venv)..."
  python3 -m venv "$VENV_DIR"
fi

if ! "$VENV_DIR/bin/python" -c "import edge_tts" 2>/dev/null; then
  echo "📦 正在安装免费微软真人神经语音库 (edge-tts)..."
  "$VENV_DIR/bin/python" -m pip install --upgrade pip >/dev/null 2>&1 || true
  "$VENV_DIR/bin/python" -m pip install edge-tts
fi

echo ""
echo "🎙️ 正在补全所有缺失的微软真人法语音频并打包至 data/audio_packs/..."
echo ""
"$VENV_DIR/bin/python" scripts/build_neural_audio.py

echo ""
echo "✅ 完成！所有真人音频已按模块打包至 data/audio_packs/ 并更新至 data/audio_manifest.js。"
echo "👉 下一步：git push 到 GitHub，手机和电脑 Chrome 无需开任何脚本即可 100% 播放真人语音！"
