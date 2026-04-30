# Code Style Rules — Python / FastAPI

> Applied to all code generated or modified by Claude in this project.

---

## Python Fundamentals

- **Python 3.11+** only — use modern features (`match`, `tomllib`, `ExceptionGroup`)
- **Type hints everywhere** — all function params and return types must be annotated
- No bare `dict`, `list`, `tuple` — use typed generics: `dict[str, int]`, `list[User]`
- Use `from __future__ import annotations` at top of files for forward references
- `Optional[X]` → prefer `X | None` (Python 3.10+ union syntax)
- Never use `Any` unless truly unavoidable and always add a `# noqa` comment explaining why

```python
# ✅ Good
async def get_user(user_id: int, db: AsyncSession = Depends(get_db)) -> UserResponse | None:
    ...

# ❌ Bad
async def get_user(user_id, db):
    ...
```

---

## FastAPI Route Handlers

- Route handlers must be **thin** — no business logic inside them
- Always use `async def` for handlers
- Use `Depends()` for: DB sessions, auth, pagination, rate limiting
- Return **Pydantic response models** — never raw dicts
- Set explicit `response_model=` on every route
- Tag all routes with `tags=["domain"]` for OpenAPI grouping

```python
# ✅ Good
@router.get("/{user_id}", response_model=UserResponse, tags=["users"])
async def get_user(
    user_id: int,
    current_user: User = Depends(get_current_user),
    user_service: UserService = Depends(get_user_service),
) -> UserResponse:
    return await user_service.get_by_id(user_id)
```

---

## Pydantic v2 Models

- All request/response schemas inherit from `pydantic.BaseModel`
- Use `model_config = ConfigDict(...)` not the old `class Config`
- Validate with `model_validator` and `field_validator`, not custom `__init__`
- Use `Field(...)` for descriptions, examples, constraints
- Separate **input schemas** (Create/Update) from **output schemas** (Response)

```python
from pydantic import BaseModel, ConfigDict, Field

class UserCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100, examples=["Alice"])
    email: str = Field(..., examples=["alice@example.com"])

class UserResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int
    name: str
    email: str
```

---

## Async & Database

- Use `AsyncSession` from SQLAlchemy 2.0 — never sync sessions in async routes
- Always `await` DB calls — never call them synchronously
- Use `select()` not legacy `session.query()`
- Wrap mutations in explicit transactions where needed
- DB sessions injected via `Depends(get_db)` — never instantiate manually in routes

```python
# ✅ Good
async def get_user_by_id(db: AsyncSession, user_id: int) -> User | None:
    result = await db.execute(select(User).where(User.id == user_id))
    return result.scalar_one_or_none()
```

---

## Error Handling

- Use `HTTPException` for HTTP errors with meaningful `detail` messages
- Create **custom exception classes** for domain errors, map them to HTTP in exception handlers
- Never let raw SQLAlchemy errors reach the client
- Always log unexpected errors before re-raising

```python
# ✅ Good
raise HTTPException(status_code=404, detail="User not found")

# ✅ Better — custom domain error
class UserNotFoundError(Exception):
    pass

# In main.py exception handler:
@app.exception_handler(UserNotFoundError)
async def user_not_found_handler(request: Request, exc: UserNotFoundError):
    return JSONResponse(status_code=404, content={"detail": str(exc)})
```

---

## File & Module Naming

| Type           | Convention      | Example              |
|----------------|-----------------|----------------------|
| Modules        | `snake_case.py` | `user_service.py`    |
| Classes        | `PascalCase`    | `UserService`        |
| Functions      | `snake_case`    | `get_user_by_email`  |
| Constants      | `UPPER_SNAKE`   | `MAX_LOGIN_ATTEMPTS` |
| Pydantic models| `PascalCase`    | `UserCreate`         |

---

## Logging

- Use `logging` module — never `print()`
- Configure structured logging in `app/core/logging.py`
- Log at appropriate levels: `DEBUG` for dev detail, `INFO` for key events, `ERROR` for failures
- Include context: user_id, request_id where available

```python
import logging
logger = logging.getLogger(__name__)

logger.info("User created", extra={"user_id": user.id})
logger.error("DB error during user fetch", exc_info=True)
```