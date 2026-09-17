# Task 3. Configure Norma

**13 minutes.** Wire real coding standards into the agent over MCP, then check the file it just wrote.

Your five rules in Task 2 were yours. They are also unenforced: nothing checks that the agent followed them. This task puts a real ruleset inside the agent's own turn.

> **Behind after Task 2?** Commit or stash anything you want to keep, then jump to a finished Task 2:
>
> ```bash
> git switch task-3-start
> ```
>
> Context file in place, update endpoint written. Your own work stays on `main`.

## What you do

1. Add the Norma MCP server to your tool. Config for each tool is in [`examples/mcp-config.md`](../examples/mcp-config.md).

   Endpoint: `https://api.qualityclouds.ai/mcp`

2. Restart your tool. It will open a browser window to authorize over OAuth. There is no API key to paste.

3. Pull the rulesets and read what they actually enforce:

   ```
   List the Norma rulesets that apply here, and show me the rules in the one for JavaScript.
   ```

   Read them. This is the part people skip, and it is the part that tells you whether the standard is any good.

4. Run a live check on the file the agent changed in Task 2:

   ```
   Run a Norma live check on src/handlers.js.
   ```

**You do not need to link a repository for any of this.** Rulesets and live checks work on their own. Linking is for pointing Norma at a repository you own, which is a thing to do after the workshop, not during it.

## Checkpoint

You should get findings back with the rule that fired, the line, and why it matters.

If you get nothing at all, the file was probably not saved, or your tool never finished authorizing. Ask it:

```
What Norma tools do you have available?
```

No tools listed means the MCP server is not connected. Go back to step 1.

**From here the agent checks against real rules, not the ones we invented in Task 2.**
