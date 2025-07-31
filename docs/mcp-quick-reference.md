# MCP Quick Reference

## Overview
FORGE now supports MCP (Model Context Protocol) servers for enhanced AI capabilities.

## Commands

### List Available MCP Servers
```bash
forge mcp list
# or
forge mcp
```
Shows all available MCP servers with descriptions and recommendations.

### Get Project-Specific Suggestions
```bash
forge mcp suggest
```
Recommends MCP servers based on your project type (web, api, fullstack, etc.).

### Add MCP Server to Configuration
```bash
forge mcp add <server-name>

# Examples:
forge mcp add context7      # Enhanced codebase understanding
forge mcp add playwright    # E2E testing automation
forge mcp add github        # GitHub API integration
```

### Add Multiple Servers
```bash
# Add all suggested servers for your project type
forge mcp add context7 filesystem github playwright web-search
```

## Recommended MCP Servers

### Essential (⭐ Recommended for all projects)
- **context7**: Enhanced context management and codebase understanding
- **filesystem**: Safe, controlled file access with enhanced capabilities
- **github**: Direct GitHub API access for issues, PRs, and releases
- **playwright**: Browser automation and E2E testing

### By Category

#### Testing
- **playwright**: Browser automation, E2E testing, visual regression

#### Databases
- **postgres**: PostgreSQL queries and schema management
- **sqlite**: Local database access

#### Communication
- **slack**: Team notifications and alerts

#### Research
- **web-search**: Documentation and package research

#### Version Control
- **git**: Advanced Git operations
- **github**: GitHub API integration

## Configuration Example

After running `forge mcp add`, your forge.yaml will include:

```yaml
mcp:
  enabled: true
  servers:
    - name: context7
      command: "npx"
      args: ["-y", "@context7/mcp-server"]
    
    - name: playwright
      command: "npx"
      args: ["-y", "@modelcontextprotocol/server-playwright"]
    
    - name: github
      command: "npx"
      args: ["-y", "@modelcontextprotocol/server-github"]
      env:
        GITHUB_TOKEN: ${GITHUB_TOKEN}
```

## Environment Variables

Some MCP servers require environment variables:

```bash
# GitHub MCP
export GITHUB_TOKEN=your_github_token

# Slack MCP
export SLACK_TOKEN=your_slack_token

# Database MCPs
export DATABASE_URL=postgresql://user:pass@host/db
```

## Agent Usage

Each FORGE agent leverages different MCP servers:

- **Developer**: context7, filesystem, databases
- **Tester**: playwright, filesystem, github
- **Architect**: context7, databases, github
- **DevOps**: github, slack, databases
- **Reviewer**: context7, github, git

## Graceful Fallback

FORGE works perfectly without MCP. When MCP servers are unavailable:
- Agents use standard tools (Read, Write, Bash)
- Provide manual instructions instead of automation
- No functionality is lost, just enhanced when MCP is available

## Quick Start

1. View available servers: `forge mcp list`
2. Get suggestions: `forge mcp suggest`
3. Add recommended: `forge mcp add context7 playwright github`
4. Set environment variables as needed
5. Agents will automatically use MCP when available

## Updating MCP Registry

The MCP server list is stored in `recommended-mcp-servers.json` and can be updated as new servers become available.