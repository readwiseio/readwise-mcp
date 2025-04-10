# Readwise MCP

[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit)](https://github.com/pre-commit/pre-commit)

## Overview

The [Model Context Protocol (MCP)](https://modelcontextprotocol.io) standardizes how applications provide context to Large Language Models (LLMs), ensuring a clean separation between context management and direct LLM interaction.

This project is a local [MCP server](https://spec.modelcontextprotocol.io) designed to act as a bridge between LLM clients (such as [Claude](https://claude.ai)) and [Readwise](https://readwise.io).

## Installation in Claude

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
        "@readwiseio/readwise-mcp"
      ],
      "env": {
        "ACCESS_TOKEN": "XXXXXXXXX"
      }
    }
  }
}
```

## Development

### Getting started
1. Install Git hooks: `uvx pre-commit install`.
2. Run `npm run dev`.
3. Use the following Claude config:
```
{
  "mcpServers": {
    "Readwise MCP": {
      "command": "node",
      "args": [
        "/path/to/your/readwise-mcp/build/index.js"
      ],
      "env": {
        "BASE_URL": "https://local.readwise.io:8000",
        "NODE_TLS_REJECT_UNAUTHORIZED": "0",
        "ACCESS_TOKEN": "XXXXXXXXX"
      }
    }
  }
}
```
4. Remember to restart Claude after each modification to the code.