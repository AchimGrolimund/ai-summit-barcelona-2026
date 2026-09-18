# Task 0. Setup check

**5 minutes.** Prove your tool can see the repository before we build anything on top of it.

Setup itself lives in the README: [fork, clone, open, Norma account](../README.md#start-here-before-the-session-begins). Four steps, two minutes. If you have not done them, do them now and come straight back.

## What you do

1. Check you are working in your own fork, and that the branches came with it:

   ```bash
   git remote get-url origin   # should say YOUR-USERNAME, not qualityclouds
   git branch -r               # should list task-3-start, task-4-start, task-5-start
   ```

   If the branches are missing, delete the fork and fork it again with **"Copy the DEFAULT branch only" unchecked**.

2. Check the service is running. In a second terminal:

   ```bash
   curl http://localhost:3000/tasks
   ```

3. With the folder open in your AI coding tool, ask it two questions:

   ```
   What does this service do?
   Where are the tests?
   ```

4. No Norma account yet? Create it now, while there is slack in the schedule: [two minutes, no card](../README.md#create-your-norma-account). Task 3 assumes you are already logged in.

## Checkpoint

Your agent should answer from the files, not from a guess. It should also tell you there are no tests, because there are none. If it invents some, that is your first finding of the day.

**If your agent cannot read files, raise a hand now.** Not in ten minutes.

---

[← Start here](../README.md#start-here-before-the-session-begins) · [All tasks](../README.md#the-tasks) · [Task 1. The naked loop →](task-1-naked-loop.md)
