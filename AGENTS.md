# AGENTS.md

## Project Overview
JAV Search — a simple Express.js app that proxies search requests to external JAV sites (javgg.me, javx357.com) and displays results in a static HTML frontend.

## Setup
- Node.js Express app, no database (in-memory array for recent searches).
- No external credentials required.
- Run via `docker compose -f docker-compose.base44.yml up -d`.
- App listens on port 3000.

## Architecture Notes
- Static files (index.html, script.js, styles.css) live at the repo root, served by Express via `express.static(__dirname)`.
- API routes are in `src/routes/`, middleware in `src/middleware/`, utils in `src/utils/`.
- `database.js`, `fetchData.js`, `combineData.js` are at the repo root — files in `src/` must require them with `../../` (two levels up).
- `nodemon` provides live reload on file changes.

## Verification
- `curl http://localhost:3000/` returns the HTML page (200).
- `curl http://localhost:3000/api/recent-searches` returns `[]` initially.
- `curl http://localhost:3000/api/search?query=test&page=1` returns JSON with results array (may be empty if external sites are unreachable).
