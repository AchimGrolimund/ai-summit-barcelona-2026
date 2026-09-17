# Task 2. The context layer

**10 minutes.** Give the agent the same task again, this time with your conventions written where it will read them.

## What you do

1. Put the code back to where it started, without losing Task 1.

   ```bash
   git revert --no-edit task-1
   ```

   This undoes the Task 1 code and records the undo, so the `task-1` commit is still there to compare against. You are back to the service as you found it.

2. Create a context file in the repository root. The name depends on your tool:

   | Tool | File |
   |---|---|
   | Claude Code | `CLAUDE.md` |
   | Cursor | `AGENTS.md` or `.cursorrules` |
   | Codex | `AGENTS.md` |
   | Most others | `AGENTS.md` |

3. Write five rules your team actually holds. Not aspirations, rules you would enforce in a review.

   There is a working example in [`examples/AGENTS.md`](../examples/AGENTS.md). Copy it and change it, or write your own.

4. Run the **exact same prompt** again.

   ```
   Add an endpoint that lets a user update the title of an existing task.
   ```

5. Commit the second attempt, then diff the two.

   ```bash
   git add -A
   git commit -m "task 2: with context"
   git tag task-2
   git diff task-1 task-2 -- src/
   ```

   That diff is Task 1's answer on the left and Task 2's on the right. Nothing else.

## Checkpoint

The second result should differ in ways you can point at and name. If it does not, your five rules were too vague. Rewrite one of them to be specific enough that a machine could check it, and run the prompt a third time.

**Five short lines of context do more than a long prompt.**
