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

4. **Start a new chat**, then run the exact same prompt again.

   This step is not optional. Your agent still has Task 1 in its context: ask it in the same conversation and it will remember what it already wrote, and you will be measuring its memory instead of your context file.

   | Tool | How |
   |---|---|
   | Claude Code | `/clear` |
   | Cursor, Codex, Windsurf | New chat, or new conversation |
   | Anything else | Whatever starts a fresh session |

   Then, in the clean session:

   ```
   Add an endpoint that lets a user update the title of an existing task.
   ```

   If your tool has no way to start a clean session, put this line in front of the prompt instead. It is weaker than a new chat, so use it only as a fallback:

   ```
   Ignore everything earlier in this conversation. Read the repository as it is now and do this:
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

The second result should differ in ways you can point at and name. If it does not, your five rules were too vague. Rewrite one of them to be specific enough that a machine could check it, and run the prompt a third time, in another new chat.

**Five short lines of context do more than a long prompt.**

---

[← Task 1. The naked loop](task-1-naked-loop.md) · [All tasks](../README.md#the-tasks) · [Task 3. Configure Norma →](task-3-configure-norma.md)
