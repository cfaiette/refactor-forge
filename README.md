# RefactorForge

Refactoring training platform: practice design patterns on small, messy code examples. See [refactor_forge_architecture.md](refactor_forge_architecture.md) for full architecture.

## Quick start

- **Docker**: `docker compose up --build` (app on port 80, MySQL on 3306, Ollama on 11434)
- **Backend (after containers are up)**: from project root run  
  `docker compose exec app bash -c "cd /var/www/html/backend && bash scripts/deploy.sh"`  
  This installs dependencies, creates `.env` if missing, generates key, runs migrations and seeders, and prints LLM setup instructions.
- **Frontend**: `cd web-client && npm install && npm start`
- **Local hosts setup**:
  - `refactorforge.test` -> `127.0.0.1` (frontend with `npm start` on port `4200`)
  - `api.refactorforge.test` -> `127.0.0.1` (backend on port `80`)

## Ollama and DeepSeek-Coder-V2 Lite

The backend can use **DeepSeek-Coder-V2 Lite** (via Ollama) for:

- **AI critique** on attempt submission (cohesion, naming, SOLID, suggestions). Deterministic score remains authoritative.
- **Challenge generation** (varied messy-code challenges by pattern and language).

### Running Ollama in Docker

1. Start the stack: `docker compose up -d`
2. Pull the model once (inside the ollama container):
   ```bash
   docker compose exec ollama ollama run deepseek-coder-v2-lite-base-q4_k_m
   ```
   If that model name is not found, try the library variant, e.g.:
   ```bash
   docker compose exec ollama ollama run networkjohnny/deepseek-coder-v2-lite-base-q4_k_m-gguf
   ```
3. Ensure the app has `LLM_URL=http://ollama:11434` and `LLM_ENABLED=true` (set in docker-compose for the app service).

The app talks to Ollama at `http://ollama:11434`. If Ollama is down or the model is not pulled, AI critique and challenge generation are skipped; deterministic evaluation still works.

### Env vars (backend)

- `LLM_URL` – Ollama API base (default `http://ollama:11434`)
- `LLM_MODEL` – Model name (e.g. `deepseek-coder-v2-lite-base-q4_k_m`)
- `LLM_ENABLED` – Master switch for LLM
- `LLM_CRITIQUE_ENABLED` – Enable AI critique on attempt submit
- `LLM_CHALLENGE_GENERATION_ENABLED` – Enable challenge generation (API and Artisan command)

### Challenge generation

- **API**: `POST /api/challenges/generate` with body `{ "pattern_name": "strategy", "language": "php", "difficulty": "beginner" }`
- **CLI**: `php artisan challenges:generate --pattern=strategy --language=php --save` (optional `--save` to persist to DB)
