# SKILL.md — Deploy Workflow (FastAPI / Python)

> Auto-invoked when Claude is helping with deployment, CI/CD, environment config,
> or anything touching production infrastructure.

---

## When This Skill Activates

- Any mention of "deploy", "production", "release", "ship", "docker"
- Working with Railway, Fly.io, Render, EC2, or similar platforms
- Writing Dockerfiles or docker-compose configs
- Setting up GitHub Actions or CI pipelines
- Configuring environment variables for production

---

## Pre-Deploy Checklist

### ✅ Code Quality
- [ ] `ruff check .` passes (no linting errors)
- [ ] `mypy app/` passes (no type errors)
- [ ] `pytest --cov=app` passes with 80%+ coverage
- [ ] No `print()` statements in production code

### ✅ Security
- [ ] No secrets hardcoded — all via `pydantic-settings` + `.env`
- [ ] `.env` is in `.gitignore`
- [ ] All routes have proper auth where needed
- [ ] CORS origins set correctly for production domain

### ✅ Database
- [ ] Alembic migrations reviewed: `alembic upgrade head`
- [ ] Migrations tested on staging DB first
- [ ] Rollback migration written for destructive changes
- [ ] Connection pool settings tuned for production load

### ✅ Build & Runtime
- [ ] `uvicorn` configured with correct workers for prod (`--workers 4`)
- [ ] Health check endpoint exists: `GET /health`
- [ ] Dockerfile uses multi-stage build (build → slim runtime)
- [ ] Base image pinned to a specific version

---

## Standard Deploy Flow

```
1. Run local checks
   └── ruff check . && mypy app/ && pytest

2. Build Docker image locally
   └── docker build -t your-project:latest .

3. Push to staging → run smoke tests

4. Apply DB migrations on staging
   └── alembic upgrade head

5. Merge to main → CI deploys to production

6. Apply DB migrations on production

7. Monitor for 10 minutes post-deploy
```

---

## Dockerfile Template

```dockerfile
# Build stage
FROM python:3.11-slim AS builder
WORKDIR /app
COPY pyproject.toml .
RUN pip install --no-cache-dir build && pip install --no-cache-dir .

# Runtime stage
FROM python:3.11-slim
WORKDIR /app
COPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY app/ ./app/
COPY alembic/ ./alembic/
COPY alembic.ini .

EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "4"]
```

---

## Required Environment Variables

```
DATABASE_URL=postgresql+asyncpg://user:pass@host:5432/dbname
SECRET_KEY=<long-random-string>
ENVIRONMENT=production
DEBUG=false
ANTHROPIC_API_KEY=<key>
ALLOWED_ORIGINS=https://yourdomain.com
```

---

## Health Check Endpoint

Always implement before deploying:

```python
@app.get("/health", tags=["system"])
async def health_check() -> dict[str, str]:
    return {"status": "ok", "environment": settings.environment}
```

---

## Rollback

```bash
# Alembic migration rollback
alembic downgrade -1

# Docker rollback — redeploy previous image tag
docker run your-project:previous-tag
```