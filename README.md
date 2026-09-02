# When code is cheap, governance is the hard part

Workshop 2, AI Foundations track, AI Summit Barcelona 2026.
Tuesday 22 September, 10:00 to 11:20, Workshop Room B.

This repository is the workshop. Everything you need is here: the demo service you will change, the six tasks, and copy-paste examples for every file you have to write.

**Level:** practitioner. **Format:** hands on, from minute five.

---

## Start here, before the session begins

If you are reading this in the room, do these four steps now. You will be typing by 10:05.

```bash
git clone https://github.com/qualityclouds/ai-summit-barcelona-2026.git
cd ai-summit-barcelona-2026
node src/server.js
```

No install step. The demo service has zero dependencies and runs on Node alone, so conference wifi cannot break your setup.

Then:

1. Open the folder in your AI coding tool.
2. Create your free Norma account, if you have not already. [Steps below](#create-your-norma-account), two minutes.
3. Leave a browser window open. Norma's MCP server authorizes over OAuth in Task 3.

## Create your Norma account

Do this before you travel if you can. It takes two minutes, it needs working wifi, and it is the one prerequisite that is awkward to fix from your seat.

1. Go to [norma.qualityclouds.com](https://norma.qualityclouds.com) and click **Sign up**.
2. Sign up with GitHub or Bitbucket in one click. That shares your profile and repository metadata, and your code is never stored. If you would rather not connect an account, use the email form: first name, last name, email, password.
3. That is it. No credit card, and Norma needs no repository access to create the account.

The free plan is permanent, not a trial, and it covers everything this workshop asks of it.

**Signing up on the day?** Do it during Task 0, while there is slack in the schedule. Task 3 assumes you already have an account and a browser you are logged into.

## What you need

| | |
|---|---|
| **Your tool** | Claude Code, Cursor, Codex, Windsurf, Replit, or any client that speaks MCP. Signed in and working. |
| **Your machine** | Git, Node 20 or later, a terminal you know, a laptop. |
| **Your accounts** | A GitHub account and a free Norma workspace. No API key: Norma's MCP server uses OAuth. |

If your tool has no MCP support, pair up with someone whose does. Tasks 0 to 2 work on any tool.

## What you leave with

A working repository, the configuration that made it work, and a reusable skill you can drop into your own projects on Monday.

---

## The tasks

Work through them in order. Each one takes the time listed and stands alone, so if you fall behind you can skip ahead.

| | Task | Time |
|---|---|---|
| 0 | [Setup check](tasks/task-0-setup-check.md) | 5 min |
| 1 | [The naked loop](tasks/task-1-naked-loop.md) | 8 min |
| 2 | [The context layer](tasks/task-2-context-layer.md) | 10 min |
| 3 | [Configure Norma](tasks/task-3-configure-norma.md) | 13 min |
| 4 | [Close the loop](tasks/task-4-close-the-loop.md) | 12 min |
| 5 | [Package it as a skill](tasks/task-5-package-a-skill.md) | 10 min |

## Copy-paste examples

Everything the tasks ask you to write, already written:

- [`examples/AGENTS.md`](examples/AGENTS.md) - the context file for Task 2
- [`examples/mcp-config.md`](examples/mcp-config.md) - Norma MCP setup for each tool, for Task 3
- [`examples/check-and-fix/SKILL.md`](examples/check-and-fix/SKILL.md) - the skill for Task 5

## The demo service

`src/` holds a small HTTP API for a task list. It works. It is also full of the things a code review would catch, which is the point: you are going to ask an agent to extend it, and then find out whether you can defend what comes back.

```
src/server.js     HTTP server and routing
src/handlers.js   request handlers
src/store.js      in-memory data store
```

Run it with `node src/server.js` and it listens on port 3000.

```bash
curl http://localhost:3000/tasks
curl -X POST http://localhost:3000/tasks -d '{"title":"write the talk"}'
```

---

## After the workshop

- Norma has a permanent free tier with one certificate a month. Point it at your own repository: [norma.qualityclouds.com](https://norma.qualityclouds.com)
- The Norma GitHub App reviews pull requests, so code that never went through an agent loop still gets checked: [github.com/apps/norma-by-quality-clouds](https://github.com/apps/norma-by-quality-clouds)
- Norma MCP endpoint, if you are wiring it up yourself: `https://api.qualityclouds.ai/mcp`

## HackBarna, 19 and 20 September

The Quality Clouds challenge track at HackBarna runs on the same idea: **Production Ready: ship AI code you can defend.** Norrsken House Barcelona. Come and find us at the pod.

---

Questions during the session: wave, there are mentors in the room.
Questions afterwards: [qualityclouds.ai](https://qualityclouds.ai)
