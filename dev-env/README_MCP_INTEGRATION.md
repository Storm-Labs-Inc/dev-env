# MCP Integration for Cursor Dev Environment

This repository has been configured to automatically set up MCP (Model Context Protocol) support in every new Cursor remote development environment.

## What's Been Added

### 1. MCP Configuration Files in `dev-env/`
- **`mcp.json`** - Defines the MCP servers available to Cursor (currently configured with Notion MCP server via envmcp)
- **`.env.mcp.template`** - Template showing how to configure API credentials
- **`MCP_SETUP.md`** - User guide for configuring MCP in the dev environment

### 2. Updated Dockerfile
The `dev-env/Dockerfile` now includes:
- Automatic creation of `~/.cursor/` directory for each user
- Copying of `mcp.json` to `~/.cursor/mcp.json`
- Creation of an empty `.env.mcp` file with secure permissions (600)
- Copying of the template file for reference

### 3. Security Configuration
- Added `.env.mcp` patterns to `.gitignore` to prevent accidental commit of credentials
- The `.env.mcp` file is created with 600 permissions (read/write for owner only)

## How It Works

When a new Cursor remote environment is created:

1. The Docker image is built with the MCP configuration files included
2. During container startup, each user gets:
   - `~/.cursor/mcp.json` - Ready-to-use MCP configuration
   - `~/.cursor/.env.mcp` - Empty file with secure permissions for credentials
   - `~/.cursor/.env.mcp.template` - Template with instructions

3. Users just need to:
   - Add their API token to `~/.cursor/.env.mcp`
   - Restart Cursor to activate the MCP server

## Configuration Details

The current setup uses:
- **envmcp** - Securely manages environment variables from `.env.mcp`
- **Notion MCP Server** - Provides access to Notion API through MCP

The configuration automatically installs both tools via `npx` when first used.

## For Developers

To modify the MCP configuration:
1. Edit `dev-env/mcp.json` to add/remove MCP servers
2. Update `dev-env/.env.mcp.template` with any new environment variables
3. Rebuild the Docker image for changes to take effect

## Security Best Practices

- Never commit `.env.mcp` files with real tokens
- Use environment variables or secrets management in production
- Keep API tokens in secure password managers
- Rotate tokens regularly