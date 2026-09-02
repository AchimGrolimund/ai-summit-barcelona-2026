# Norma MCP setup, by tool

Endpoint: `https://api.qualityclouds.ai/mcp`
Auth: OAuth. Your tool opens a browser window the first time. There is no API key.

Create a free workspace first at [norma.qualityclouds.com](https://norma.qualityclouds.com).

---

## Claude Code

```bash
claude mcp add --transport http norma https://api.qualityclouds.ai/mcp
```

Then run `/mcp` inside Claude Code and authenticate when prompted.

## Cursor

`.cursor/mcp.json` in the project, or the global config in Settings, MCP:

```json
{
  "mcpServers": {
    "norma": {
      "url": "https://api.qualityclouds.ai/mcp"
    }
  }
}
```

Restart Cursor, then approve the OAuth prompt.

## Codex

`~/.codex/config.toml`:

```toml
[mcp_servers.norma]
url = "https://api.qualityclouds.ai/mcp"
```

## Windsurf

`~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "norma": {
      "serverUrl": "https://api.qualityclouds.ai/mcp"
    }
  }
}
```

## Anything else that speaks MCP

Point it at `https://api.qualityclouds.ai/mcp` over HTTP transport and let it handle OAuth. Norma is also in the Claude connectors directory and the official MCP Registry.

---

## Checking it worked

Ask your agent:

```
What Norma tools do you have available?
```

You should see tools for listing rulesets, reading the rules in a ruleset, running a live check on a file, and linking a repository. If you see nothing, the server is not connected: check the config path, then restart the tool completely.
