# Readwise MCP

[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit)](https://github.com/pre-commit/pre-commit)

## Overview

The [Model Context Protocol (MCP)](https://modelcontextprotocol.io) standardizes how applications provide context to Large Language Models (LLMs), ensuring a clean separation between context management and direct LLM interaction.

This project is a local [MCP server](https://spec.modelcontextprotocol.io) designed to act as a bridge between LLM clients (such as [Claude](https://claude.ai)) and [Readwise](https://readwise.io).

## Installation in Claude

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

### Known Issues

When using this MCP server, you may occasionally encounter MCP errors during your conversations with Claude. If you experience such errors, we recommend trying to switch between different Claude models (e.g., from Claude 3.5 Haiku to Claude 3.7 Sonnet) as this often resolves the issue.
