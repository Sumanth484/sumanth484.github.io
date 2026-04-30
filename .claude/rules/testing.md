# Testing Rules — Python / FastAPI

> Claude must follow these conventions when writing or suggesting tests.

---

## Testing Stack

| Tool              | Purpose                                 |
|-------------------|-----------------------------------------|
| `pytest`          | Test runner                             |
| `httpx` (async)   | HTTP client for FastAPI integration tests |
| `pytest-asyncio`  | Async test support                      |
| `factory-boy`     | Test data factories                     |
| `pytest-cov`      | Coverage reporting                      |

---

## What Must Be Tested

### Always test:
- All route handlers (happy path + error cases + auth)
- Service layer functions (business logic)
- Pydantic validators and model constraints
- Security functions (JWT, hashing, permission checks)
- Repository functions with a test DB

### Should test:
- Edge cases in data transformation
- Pagination and filtering logic
- Background tasks

### Skip:
- Simple pass-through functions with no logic
- Direct SQLAlchemy model definitions (no logic)

---

## Test Structure — `conftest.py`

Always define shared fixtures in `tests/conftest.py`:

```python
import pytest
import pytest_asyncio
from httpx import AsyncClient, ASGITransport
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from app.main import app
from app.core.database import Base, get_db

TEST_DATABASE_URL = "postgresql+asyncpg://user:pass@localhost/test_db"

@pytest_asyncio.fixture
async def db_session():
    engine = create_async_engine(TEST_DATABASE_URL)
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    async with AsyncSession(engine) as session:
        yield session
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)

@pytest_asyncio.fixture
async def client(db_session: AsyncSession):
    app.dependency_overrides[get_db] = lambda: db_session
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as c:
        yield c
    app.dependency_overrides.clear()
```

---

## Test Pattern — Arrange / Act / Assert

```python
import pytest

class TestGetUser:
    async def test_returns_user_when_found(self, client: AsyncClient, db_session):
        # Arrange
        user = await UserFactory.create(db_session, name="Alice")

        # Act
        response = await client.get(f"/api/v1/users/{user.id}")

        # Assert
        assert response.status_code == 200
        data = response.json()
        assert data["name"] == "Alice"
        assert data["id"] == user.id

    async def test_returns_404_when_not_found(self, client: AsyncClient):
        # Act
        response = await client.get("/api/v1/users/999999")

        # Assert
        assert response.status_code == 404
        assert response.json()["detail"] == "User not found"

    async def test_requires_auth(self, client: AsyncClient):
        response = await client.get("/api/v1/users/1")  # No auth header
        assert response.status_code == 401
```

---

## Naming Conventions

- Files: `test_[module_name].py` (e.g. `test_users.py`, `test_user_service.py`)
- Classes: `Test[FeatureName]` (e.g. `TestGetUser`, `TestCreatePost`)
- Functions: `test_[describes_behavior]` (e.g. `test_returns_404_when_not_found`)

---

## Async Tests

Always mark async tests and configure `pytest-asyncio`:

```python
# pyproject.toml
[tool.pytest.ini_options]
asyncio_mode = "auto"
```

No need for `@pytest.mark.asyncio` decorator when `asyncio_mode = "auto"`.

---

## Coverage Goals

| Area              | Target |
|-------------------|--------|
| Routers           | 90%+   |
| Services          | 90%+   |
| Repositories      | 80%+   |
| Core/Security     | 85%+   |
| Overall           | 80%+   |

---

## Running Tests

```bash
pytest                          # All tests
pytest tests/test_users.py      # Single file
pytest -v                       # Verbose
pytest --cov=app --cov-report=html  # With coverage
pytest -x                       # Stop on first failure
```