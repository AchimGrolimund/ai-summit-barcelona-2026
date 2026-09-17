# Task 5. Package it as a skill

**10 minutes.** Turn the check-and-fix routine into something your whole team runs the same way, every time.

Right now the loop lives in your head and in the sentence you typed. That does not survive you.

> **Behind after Task 4?** Commit or stash anything you want to keep, then:
>
> ```bash
> git switch task-5-start
> ```
>
> Context file, update endpoint and delete endpoint, all checked and clean.

## What you do

1. Create a skill file. Where it goes depends on your tool:

   | Tool | Location |
   |---|---|
   | Claude Code | `.claude/skills/check-and-fix/SKILL.md` |
   | Cursor | `.cursor/rules/check-and-fix.md` |
   | Others | Check your tool's docs for custom commands or rules |

   A complete working example is in [`examples/check-and-fix/SKILL.md`](../examples/check-and-fix/SKILL.md). Copy it.

2. Give it a clear trigger and numbered steps. The trigger matters more than the prose: it decides whether the skill ever fires.

3. Invoke it on a fresh change:

   ```
   Add pagination to the GET /tasks endpoint, then run check-and-fix.
   ```

4. Commit it.

   ```bash
   git add -A
   git commit -m "task 5: add check-and-fix skill"
   ```

5. Look back at what you built, in one command:

   ```bash
   git log --oneline
   ```

   Five commits, in order, each one a decision you can point at.

6. Push it to your fork, so it outlives the room.

   ```bash
   git push origin HEAD
   ```

   `HEAD` just means "the branch I am on", so this works whether you stayed on `main` or picked up a catch-up branch along the way.

   Your work is now at `github.com/YOUR-USERNAME/ai-summit-barcelona-2026`. That is the repository to point Norma at on Monday.

## Checkpoint

The repository now carries the loop. Anyone who clones it, including an agent nobody told you about, inherits the same standard.

**A skill is how a habit survives the person who invented it.**

---

[← Task 4. Close the loop](task-4-close-the-loop.md) · [All tasks](../README.md#the-tasks) · [After the workshop →](../README.md#after-the-workshop)
