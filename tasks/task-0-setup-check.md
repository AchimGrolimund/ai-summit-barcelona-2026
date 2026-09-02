# Task 0. Setup check

**5 minutes.** Prove your tool can see the repository before we build anything on top of it.

## What you do

1. Clone the repository and run the service.

   ```bash
   git clone https://github.com/qualityclouds/ai-summit-barcelona-2026.git
   cd ai-summit-barcelona-2026
   node src/server.js
   ```

   In a second terminal:

   ```bash
   curl http://localhost:3000/tasks
   ```

2. Open the folder in your AI coding tool.

3. Ask it two questions:

   ```
   What does this service do?
   Where are the tests?
   ```

## Checkpoint

Your agent should answer from the files, not from a guess. It should also tell you there are no tests, because there are none. If it invents some, that is your first finding of the day.

**If your agent cannot read files, raise a hand now.** Not in ten minutes.
