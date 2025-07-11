# MCP Configuration in Dev Environment

This development environment comes pre-configured with MCP (Model Context Protocol) support for Cursor, using `envmcp` for secure credential management.

## Pre-installed Configuration

When you start a new dev environment, the following MCP files are automatically set up:

- `~/.cursor/mcp.json` - The MCP configuration file that defines available MCP servers
- `~/.cursor/.env.mcp` - An empty environment file for your API credentials (with secure 600 permissions)
- `~/.cursor/.env.mcp.template` - A template showing how to configure your credentials

## Setting Up Your API Tokens

### For Notion MCP Server

1. Navigate to your home directory and check the template:
   ```bash
   cat ~/.cursor/.env.mcp.template
   ```

2. Get your Notion API token:
   - Go to https://www.notion.so/my-integrations
   - Create a new integration or use an existing one
   - Copy the Internal Integration Token

3. Edit the environment file:
   ```bash
   nano ~/.cursor/.env.mcp
   # or use your preferred editor
   ```

4. Add your token:
   ```
   NOTION_MCP_HEADERS={"Authorization": "Bearer ntn_YOUR_ACTUAL_TOKEN", "Notion-Version": "2022-06-28"}
   ```

5. Save the file (it already has secure 600 permissions)

## How It Works

- The configuration uses `envmcp` to load environment variables from `.env.mcp`
- When Cursor starts the MCP server, it runs through `npx -y envmcp`
- This keeps your credentials secure and separate from the configuration
- The Notion MCP server and envmcp will be automatically installed on first use

## Security Notes

- **NEVER** commit `.env.mcp` with real tokens to version control
- The `.env.mcp` file is created with 600 permissions (readable only by you)
- Use environment variables or secrets management for production deployments

## Adding More MCP Servers

To add additional MCP servers, edit `~/.cursor/mcp.json` and add new server configurations. For servers that need credentials, add corresponding environment variables to `.env.mcp`.

## Troubleshooting

- Ensure Node.js and npm are available (they are pre-installed in this dev environment)
- Check Cursor logs for MCP-related errors
- Verify your API tokens are valid and have necessary permissions