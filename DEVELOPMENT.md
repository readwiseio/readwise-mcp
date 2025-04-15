# Development

This document outlines the development setup and workflow for the Readwise MCP server. Below you'll find instructions for setting up your development environment and configuring Claude for local development.

## Getting started
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
