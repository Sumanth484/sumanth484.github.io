# API Conventions — FastAPI

> All routes and services must follow these conventions.

---

## URL Structure

```
GET    /api/v1/users          # List
GET    /api/v1/users/{id}     # Get one
POST   /api/v1/users          # Create
PUT    /api/v1/users/{id}     # Replace
PATCH  /api/v1/users/{id}     # Partial update
DELETE /api/v1/users/{id}     # Delete
```

- Plural nouns for resources (`/users`, not `/user`)
- kebab-case for multi-word segments (`/user-profiles`)
- Never verbs in URLs (`/getUser` ❌)
- Max 2 levels of nesting (`/users/{id}/posts` ✅)
- Always prefix with `/api/v1/`

---

## Response Envelope

All responses use a consistent structure:

```python
# schemas/common.py
from pydantic import BaseModel
from typing import Generic, TypeVar

T = TypeVar("T")

class SuccessResponse(BaseModel, Generic[T]):
    success: bool = True
    data: T

class PaginatedResponse(BaseModel, Generic[T]):
    success: bool = True
    data: list[T]
    meta: PaginationMeta

class PaginationMeta(BaseModel):
    page: int
    per_page: int
    total: int
    total_pages: int

class ErrorResponse(BaseModel):
    success: bool = False
    error: ErrorDetail

class ErrorDetail(BaseModel):
    code: str
    message: str
    details: dict | None = None
```

---

## HTTP Status Codes

| Status | When                                    |
|--------|-----------------------------------------|
| 200    | Successful GET, PATCH, PUT              |
| 201    | Successful POST (resource created)      |
| 204    | Successful DELETE (no body)             |
| 400    | Bad request / validation error          |
| 401    | Not authenticated                       |
| 403    | Authenticated but not authorized        |
| 404    | Resource not found                      |
| 409    | Conflict (e.g. duplicate entry)         |
| 422    | Pydantic validation error (automatic)   |
| 500    | Internal server error                   |

---

## Authentication

- Bearer token via `Authorization: Bearer <token>` header
- Extract and verify in a `get_current_user` dependency:

```python
# app/dependencies.py
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from app.core.security import verify_token

security = HTTPBearer()

async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: AsyncSession = Depends(get_db),
) -> User:
    token = credentials.credentials
    user_id = verify_token(token)
    if not user_id:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    user = await user_repo.get_by_id(db, user_id)
    if not user:
        raise HTTPException(status_code=401, detail="User not found")
    return user
```

---

## Input Validation

All request bodies validated with Pydantic automatically by FastAPI.
Add field-level constraints directly in schemas:

```python
class UserCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    age: int = Field(..., ge=0, le=150)
    role: Literal["admin", "user"] = "user"
```

FastAPI returns 422 with field-level error details automatically on validation failure.

---

## Error Codes (Enum)

```python
# app/core/errors.py
from enum import StrEnum

class ErrorCode(StrEnum):
    NOT_FOUND = "NOT_FOUND"
    UNAUTHORIZED = "UNAUTHORIZED"
    FORBIDDEN = "FORBIDDEN"
    VALIDATION_ERROR = "VALIDATION_ERROR"
    DUPLICATE_ENTRY = "DUPLICATE_ENTRY"
    INTERNAL_ERROR = "INTERNAL_ERROR"
```

---

## Router Organization

Each domain gets its own router file:

```python
# app/routers/users.py
from fastapi import APIRouter

router = APIRouter(prefix="/users", tags=["users"])

@router.get("/{user_id}", response_model=UserResponse)
async def get_user(...): ...
```

Registered in `main.py`:

```python
app.include_router(users.router, prefix="/api/v1")
```

---

## Settings via pydantic-settings

```python
# app/config.py
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    database_url: str
    secret_key: str
    environment: str = "development"
    debug: bool = False

settings = Settings()
```

Never use `os.environ.get()` directly — always go through `settings`.