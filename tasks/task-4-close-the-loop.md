# Task 4. Close the loop

**12 minutes.** Hand the violations back to the agent and let it fix its own work. This is the whole idea in one step.

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

## Checkpoint

Watch for a fix that games the rule instead of meeting it: a suppression comment, a renamed variable, a check that returns early so the rule never fires. Call it out. An agent optimizing for a green result is a real failure mode and it is worth seeing once, deliberately, in a room where it costs nothing.

**What changed:** review now starts from what was checked and what failed, instead of from the whole diff.
