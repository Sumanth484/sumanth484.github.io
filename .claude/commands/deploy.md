# /project:deploy — Deployment Checklist & Guide

**Trigger:** `/project:deploy`

## Pre-Deployment Checklist

Claude will run through this checklist before any deployment:

### ✅ Code Quality
- [ ] All TypeScript errors resolved (`pnpm tsc --noEmit`)
- [ ] Linting passes (`pnpm lint`)
- [ ] All tests pass (`pnpm test`)
- [ ] No `console.log` left in production code

### ✅ Environment
- [ ] `.env.local` values are set in deployment platform
- [ ] `NEXT_PUBLIC_*` variables are correct for target environment
- [ ] No hardcoded localhost URLs

### ✅ Database
- [ ] Migrations reviewed and tested on staging
- [ ] RLS policies verified
- [ ] No breaking schema changes without a rollback plan

### ✅ Security
- [ ] No secrets in code or git history
- [ ] API routes have proper auth checks
- [ ] CORS settings are correct for production domain

### ✅ Build
- [ ] `pnpm build` succeeds locally
- [ ] Bundle size is acceptable
- [ ] Images are optimized

## Deployment Steps

```bash
# 1. Run checks
pnpm tsc --noEmit && pnpm lint && pnpm test

# 2. Build
pnpm build

# 3. Deploy (adjust for your platform)
# Vercel: git push triggers auto-deploy
# Manual: pnpm deploy
```

---

_Follows workflow in `.claude/skills/deploy/`_