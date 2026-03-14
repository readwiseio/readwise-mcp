# Readwise MCP (Deprecated)

> **This MCP server is deprecated.** Please use the new Readwise MCP server instead: **[readwise.io/mcp](https://readwise.io/mcp)**
>
> The new server is hosted — no local installation needed. It supports both Readwise and Reader data, and works with Claude Desktop, ChatGPT, Claude Code, Cursor, and any MCP-compatible app.

---

## Migration

Replace your existing `claude_desktop_config.json` entry with the new server. Setup instructions for all clients are at **[readwise.io/mcp](https://readwise.io/mcp)**.

If you also want CLI access and agent skills, see **[readwise.io/cli](https://readwise.io/cli)**.

---

## Legacy Installation (not recommended)

<details>
<summary>Click to expand old installation instructions</summary>

### Installation in Claude

0. Please make sure you have [Node](https://nodejs.org/en/download) installed.
1. Open Claude desktop app.
2. Navigate to Settings > Developer.
3. Click `Edit Config`.
4. Add the following entry to the `claude_desktop_config.json` file, replacing `ACCESS_TOKEN` value with your [Readwise Access Token](https://readwise.io/access_token).
```
{
  "mcpServers": {
    "Readwise MCP": {
      "command": "npx",
      "args": [
        "-y",
        "@readwise/readwise-mcp"
      ],
      "env": {
        "ACCESS_TOKEN": "XXXXXXXXX"
      }
    }
  }
}
```

### Troubleshooting

For general troubleshooting guidance, please refer to the official Model Context Protocol Claude Desktop [Troubleshooting section](https://modelcontextprotocol.io/quickstart/user#troubleshooting).

#### "Could not attach to MCP server Readwise MCP"
A very likely reason for this to happen is that you have an incorrect npx/Node version set up. If you're using `nvm`, try running `nvm use 18` in your terminal. If not, consider reinstalling Node.

#### Errors when calling Readwise tools
When using this MCP server, you may occasionally encounter MCP errors during your conversations with Claude. If you experience such errors, we recommend trying to switch between different Claude models (e.g., from Claude 3.5 Haiku to Claude 3.7 Sonnet) as this often resolves the issue.

</details>
