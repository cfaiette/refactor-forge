#!/usr/bin/env bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKEND_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$BACKEND_DIR"

if [ ! -f .env ]; then
  cp .env.example .env
  echo "Created .env from .env.example"
fi

composer install --no-interaction

if ! grep -q '^APP_KEY=.\+' .env 2>/dev/null; then
  php artisan key:generate
fi

php artisan migrate --force
php artisan db:seed --force

echo ""
echo "Laravel app is ready."
echo ""
echo "To enable AI (critique and challenge generation), pull the LLM model once from the host:"
echo "  docker compose exec ollama ollama run deepseek-coder-v2-lite-base-q4_k_m"
echo "  (or: ollama run networkjohnny/deepseek-coder-v2-lite-base-q4_k_m-gguf)"
echo "Then set LLM_MODEL in .env to match the model name you used."
