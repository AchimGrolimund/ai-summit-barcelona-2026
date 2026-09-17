# Task 1. The naked loop

**8 minutes.** Ask for a feature with no context at all, then try to say whether the result is safe to merge.

## What you do

1. Give your agent this prompt, exactly as written. Add nothing.

   ```
   Add an endpoint that lets a user update the title of an existing task.
   ```

2. Accept what it gives you. Do not correct it, do not guide it.

3. Read the diff.

4. Write down one thing in it you cannot defend.

5. Commit it, and put a bookmark on the commit so you can find it again in Task 2.

   ```bash
   git add -A
   git commit -m "task 1: naked loop"
   git tag task-1
   ```

   A tag is just a name for a commit. You stay on `main` the whole workshop.

## Checkpoint

Look for what the agent decided on your behalf without being asked:

- Did it validate the input, and if so, against what rules?
- What happens when the task ID does not exist?
- Did it match the style of the code around it, or invent its own?
- Did it add a dependency?
- Did it write a test?

Ask yourself the real question: **would you put your name on this in a change review?**

That commit is your baseline. You compare against it in Task 2.
