CLAUDE.md — Project Instructions

This file is committed to git. Shared instructions for all Claude models on this project.
Personal overrides go in CLAUDE.local.md (gitignored).

🧠 Project Overview
Full-stack + backend/API project developed in VS Code with Antigravity.
Backend: Python / FastAPI. Claude models assist across all development tasks.
Always read this file before starting any task.

🏗️ Tech Stack
LayerTechnologyBackendPython 3.11+ / FastAPIValidationPydantic v2ORMSQLAlchemy 2.0 (async)DatabasePostgreSQLAuthJWT via python-jose or SupabaseTestingpytest + httpx (async)Dev EnvVS Code + AntigravityAI ModelsClaude (Anthropic API)

📐 Coding Standards
Python / FastAPI

Use Python 3.11+ features — type hints everywhere, no bare dict or list
All functions must have full type annotations (parameters + return type)
Use Pydantic v2 models for all request bodies, responses, and config
Prefer async def for all route handlers and DB calls
Use dependency injection via Depends() for auth, DB sessions, and services
Keep route handlers thin — business logic lives in services/
Use dataclasses or Pydantic for internal data structures, never plain dicts
Follow PEP 8 — enforced via ruff

Style Rules

Max line length: 88 characters (Black default)
Quotes: double quotes (Black enforces)
Imports: grouped — stdlib → third-party → local, sorted with isort
No wildcard imports (from module import \*)
Prefer explicit over implicit — readable code over clever one-liners

📁 Folder Structure
your-project/
app/
main.py # FastAPI app entry point
config.py # Settings via pydantic-settings
dependencies.py # Shared Depends() functions
routers/ # Route handlers grouped by domain
users.py
items.py
schemas/ # Pydantic request/response models
user.py
item.py
models/ # SQLAlchemy ORM models
user.py
item.py
services/ # Business logic (pure functions)
user_service.py
repositories/ # DB query layer
user_repo.py
core/
security.py # Auth, JWT, hashing
database.py # Async DB engine + session
tests/
conftest.py
test_users.py
alembic/ # DB migrations
pyproject.toml
.env

🔁 Git & PR Conventions

Branch naming: feat/, fix/, chore/, docs/
Commit format: type(scope): description (Conventional Commits)
No direct commits to main

✅ Definition of Done

Feature works as described
All inputs validated with Pydantic
Async where applicable
Tests written and passing (pytest)
No ruff or mypy errors
No secrets in code

🚫 Claude Must Never

Use bare dict or list instead of typed Pydantic models
Write sync DB calls inside async route handlers
Skip input validation — always use Pydantic
Hardcode secrets — always use pydantic-settings + .env
Run destructive DB migrations without confirmation
Add print() statements — use logging instead

📎 Related Files

.claude/settings.json — permissions and tool config
.claude/rules/ — modular rules per concern
.claude/commands/ — custom slash commands
.claude/skills/ — auto-invoked workflow guides
agents/ — subagent persona definitions
