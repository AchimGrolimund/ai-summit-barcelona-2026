# Task 0. Setup check

**5 minutes.** Prove your tool can see the repository before we build anything on top of it.

## What you do

1. Fork the repository, if you have not already.

   Go to [github.com/qualityclouds/ai-summit-barcelona-2026](https://github.com/qualityclouds/ai-summit-barcelona-2026) and click **Fork**. Leave **"Copy the DEFAULT branch only" unchecked**, or you will not get the catch-up branches that Tasks 3, 4 and 5 rely on.

2. Clone your fork and run the service. Your fork, with your username, not `qualityclouds`:

   ```bash
   git clone https://github.com/YOUR-USERNAME/ai-summit-barcelona-2026.git
   cd ai-summit-barcelona-2026
   node src/server.js
   ```

   In a second terminal:

   ```bash
   curl http://localhost:3000/tasks
   ```

   Check you got your own copy, and that the branches came with it:

   ```bash
   git remote get-url origin   # should say YOUR-USERNAME
   git branch -r               # should list task-3-start, task-4-start, task-5-start
   ```

   If the branches are missing, delete the fork and fork it again with that box unchecked.

3. Open the folder in your AI coding tool.

4. Ask it two questions:

   ```
   What does this service do?
   Where are the tests?
   ```

5. If you do not have a Norma account yet, create one now at [norma.qualityclouds.com](https://norma.qualityclouds.com). GitHub, Bitbucket, or email, no credit card. Task 3 assumes you are already logged in, so do not leave it until then.

## Checkpoint

Your agent should answer from the files, not from a guess. It should also tell you there are no tests, because there are none. If it invents some, that is your first finding of the day.

**If your agent cannot read files, raise a hand now.** Not in ten minutes.

---

[← Start here](../README.md#start-here-before-the-session-begins) · [All tasks](../README.md#the-tasks) · [Task 1. The naked loop →](task-1-naked-loop.md)
