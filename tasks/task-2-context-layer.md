# Task 2. The context layer

**10 minutes.** Give the agent the same task again, this time with your conventions written where it will read them.

## What you do

1. Create a context file in the repository root. The name depends on your tool:

   | Tool | File |
   |---|---|
   | Claude Code | `CLAUDE.md` |
   | Cursor | `AGENTS.md` or `.cursorrules` |
   | Codex | `AGENTS.md` |
   | Most others | `AGENTS.md` |

2. Write five rules your team actually holds. Not aspirations, rules you would enforce in a review.

   There is a working example in [`examples/AGENTS.md`](../examples/AGENTS.md). Copy it and change it, or write your own.

3. Undo the change from Task 1 (`git checkout .`), then run the **exact same prompt** again.

   ```
   Add an endpoint that lets a user update the title of an existing task.
   ```

4. Diff the two results side by side.

## Checkpoint

The second result should differ in ways you can point at and name. If it does not, your five rules were too vague. Rewrite one of them to be specific enough that a machine could check it, and run the prompt a third time.

**Five short lines of context do more than a long prompt.**
