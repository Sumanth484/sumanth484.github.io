# SKILL.md — Security Review Workflow

> Auto-invoked when Claude is asked to review code for security, handle auth code,
> or when touching API routes, DB queries, or environment variables.

---

## When This Skill Activates

- Reviewing any API route or middleware
- Writing or modifying authentication/authorization code
- Handling user input (forms, URL params, request bodies)
- Working with database queries
- Managing environment variables or secrets
- Any mention of "security", "auth", "permissions", "RLS"

---

## Security Checklist Claude Must Run

### 🔐 Authentication & Authorization
- [ ] Is the user identity verified server-side (not just client-side)?
- [ ] Are all protected routes checking auth before responding?
- [ ] Is the principle of least privilege applied?
- [ ] Are Supabase RLS policies enabled for all tables?

### 🛡️ Input Validation
- [ ] Is all user input validated with Zod/Pydantic before use?
- [ ] Are SQL queries parameterized (no string interpolation)?
- [ ] Are file uploads type-checked and size-limited?
- [ ] Is HTML output escaped to prevent XSS?

### 🔑 Secrets & Environment
- [ ] No hardcoded API keys, passwords, or tokens in code?
- [ ] Are secrets accessed only via `process.env`?
- [ ] Is `.env.local` in `.gitignore`?
- [ ] Are `NEXT_PUBLIC_*` vars safe to be public?

### 🌐 API Security
- [ ] Are CORS headers configured correctly for production?
- [ ] Is rate limiting applied to sensitive endpoints?
- [ ] Are error messages safe (not leaking stack traces to clients)?
- [ ] Are HTTP methods restricted correctly per route?

### 🗄️ Database
- [ ] Are queries using parameterized statements or ORM?
- [ ] Is RLS enabled and tested for all Supabase tables?
- [ ] Are foreign keys and constraints in place?
- [ ] Is sensitive data (passwords) hashed (never stored plain)?

---

## Reporting Format

```
🔴 CRITICAL: [Issue] — [Why it's dangerous] — [Fix]
🟡 WARNING:  [Issue] — [Risk level] — [Recommended fix]
🟢 PASS:     [Check passed]
```

---

## Common Vulnerabilities to Always Check

1. **IDOR** — Can users access other users' resources by changing an ID?
2. **Mass assignment** — Are you accidentally allowing users to set admin fields?
3. **Open redirect** — Are redirect URLs validated?
4. **SSRF** — Are server-side HTTP requests to user-supplied URLs blocked?
5. **Broken auth** — JWT not verified, session not invalidated on logout