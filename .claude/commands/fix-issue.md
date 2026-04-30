# /project:fix-issue — Fix a Bug or Issue

**Trigger:** `/project:fix-issue`

## What This Command Does

Guides Claude through a structured bug-fixing workflow:

### Step 1: Understand the Issue
- Read the error message or description
- Identify the file(s) and function(s) involved
- Reproduce the issue mentally or ask for a repro case

### Step 2: Root Cause Analysis
- Trace the code path that leads to the bug
- Identify the exact line/logic causing the problem
- Explain the root cause in plain English **before writing any fix**

### Step 3: Propose Fix
- Show the minimal code change needed
- Explain why this fix works
- Highlight any edge cases or side effects

### Step 4: Verify
- Suggest how to test the fix
- Point out any related code that might need updating
- Flag if a regression test should be added

## Usage

```
/project:fix-issue

Error: Cannot read properties of undefined (reading 'map')
File: src/components/UserList.tsx, line 42
```

---

_Follows rules in `.claude/rules/code-style.md`_