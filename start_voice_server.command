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
echo "🎙️ Studio Live Voice Server 已启动: http://127.0.0.1:8765"
echo "👉 请保持 Chrome 中打开 index.html（或直接访问 http://127.0.0.1:8765）即可实时使用微软真人法语语音！"
echo "   学习期间请保持此终端窗口开启，按 Ctrl+C 可随时关闭。"
echo ""

exec "$VENV_DIR/bin/python" scripts/local_tts_server.py --port 8765
