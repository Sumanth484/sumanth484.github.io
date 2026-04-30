# /project:review — Full Code Review

**Trigger:** `/project:review`

## What This Command Does

Performs a comprehensive code review of the current file or selected code, covering:

1. **Correctness** — Does the logic do what it's supposed to?
2. **TypeScript** — Are types accurate and non-trivial?
3. **Performance** — Any obvious inefficiencies or unnecessary re-renders?
4. **Security** — Any exposed secrets, SQL injection risks, unvalidated inputs?
5. **Readability** — Is naming clear? Are complex parts commented?
6. **Test coverage** — What should be tested that isn't?

## Output Format

Provide feedback as:
- 🔴 **Critical** — Must fix before merge
- 🟡 **Warning** — Should fix, impacts quality
- 🟢 **Suggestion** — Nice to have improvement
- ℹ️ **Note** — Informational, no action needed

## Example Usage

```
/project:review
```

Then paste or reference the file/function to review.

---

_This command follows rules in `.claude/rules/code-style.md` and `.claude/rules/testing.md`_