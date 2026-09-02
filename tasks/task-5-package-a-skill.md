# Task 5. Package it as a skill

**10 minutes.** Turn the check-and-fix routine into something your whole team runs the same way, every time.

Right now the loop lives in your head and in the sentence you typed. That does not survive you.

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
   git add .
   git commit -m "Add check-and-fix skill and context file"
   ```

## Checkpoint

The repository now carries the loop. Anyone who clones it, including an agent nobody told you about, inherits the same standard.

**A skill is how a habit survives the person who invented it.**
