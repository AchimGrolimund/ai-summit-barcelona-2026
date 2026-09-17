# Task 4. Close the loop

**12 minutes.** Hand the violations back to the agent and let it fix its own work. This is the whole idea in one step.

> **Still fighting OAuth?** Commit or stash anything you want to keep, then:
>
> ```bash
> git switch task-4-start
> ```
>
> Task 3 changes no code, so this is the same state as `task-3-start`. You still need the MCP server connected to do this task: grab a mentor.

## What you do

1. Give the agent the check results:

   ```
   Fix every violation the Norma live check found in src/handlers.js.
   Explain each fix in one sentence and tell me which rule it satisfies.
   ```

2. Re-run the check:

   ```
   Run the Norma live check on src/handlers.js again.
   ```

3. Repeat until it comes back clean.

4. Now do it in one instruction, so the loop runs without you driving each step:

   ```
   Add an endpoint that deletes a task.
   Before you show me the result, run a Norma live check on the files you changed,
   fix every violation, and re-check until it passes.
   ```

5. Commit the clean version.

   ```bash
   git add -A
   git commit -m "task 4: checked and fixed"
   ```

## Checkpoint

Watch for a fix that games the rule instead of meeting it: a suppression comment, a renamed variable, a check that returns early so the rule never fires. Call it out. An agent optimizing for a green result is a real failure mode and it is worth seeing once, deliberately, in a room where it costs nothing.

**What changed:** review now starts from what was checked and what failed, instead of from the whole diff.

---

[← Task 3. Configure Norma](task-3-configure-norma.md) · [All tasks](../README.md#the-tasks) · [Task 5. Package it as a skill →](task-5-package-a-skill.md)
