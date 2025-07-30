---
layout: default
title: MCP Integration
parent: Advanced Topics
nav_order: 2
---

# MCP Integration
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

FORGE can leverage MCP (Model Context Protocol) servers when available to provide enhanced capabilities for file access, database connections, API integrations, and more. MCP provides a standardized way for AI assistants to interact with external systems.

## What is MCP?

Model Context Protocol is an open protocol that enables AI assistants to securely access local services and tools through a standardized interface. When using Claude Desktop or other MCP-enabled environments, FORGE can take advantage of these capabilities.

## Configuration

### Basic Setup

Enable MCP in your `forge.yaml`:

```yaml
mcp:
  enabled: true  # Enable MCP usage when available
```

### Adding MCP Servers

Configure specific MCP servers based on your needs:

```yaml
mcp:
  enabled: true
  
  servers:
    # File system access
    - name: filesystem
      command: "npx"
      args: ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/project"]
    
    # GitHub integration
    - name: github
      command: "npx"
      args: ["-y", "@modelcontextprotocol/server-github"]
      env:
        GITHUB_TOKEN: ${GITHUB_TOKEN}
    
    # Database access
    - name: postgres
      command: "npx"
      args: ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/mydb"]
    
    # Web search
    - name: web-search
      command: "npx"
      args: ["-y", "@modelcontextprotocol/server-web-search"]
```

## How FORGE Uses MCP

### Automatic Detection

When MCP is enabled, FORGE agents will:
1. Check if MCP servers are available
2. Use MCP tools when they provide better access
3. Fall back to native tools if MCP is unavailable

### Agent Adaptation

Agents automatically adapt their behavior based on available MCP tools:

```markdown
Claude: I'll check your database schema using MCP...
[Uses mcp_postgres_query instead of manual connection]

Claude: Let me search for that npm package information...
[Uses mcp_web_search for up-to-date package data]
```

### Tool Preferences

Configure when to use MCP vs native tools:

```yaml
mcp:
  preferences:
    file_access: mcp       # Always use MCP for files
    web_fetch: native      # Use built-in web fetch
    database: mcp          # Use MCP for database
    git: auto             # Automatically choose best option
```

## Common MCP Servers for Development

### 1. Filesystem Server
Provides safe, controlled access to project files:
```yaml
- name: filesystem
  command: "npx"
  args: ["-y", "@modelcontextprotocol/server-filesystem", "./"]
```

### 2. GitHub Server
Direct GitHub API access:
```yaml
- name: github
  command: "npx"
  args: ["-y", "@modelcontextprotocol/server-github"]
  env:
    GITHUB_TOKEN: ${GITHUB_TOKEN}
```

### 3. PostgreSQL Server
Database access without connection strings in code:
```yaml
- name: postgres
  command: "npx"
  args: ["-y", "@modelcontextprotocol/server-postgres", "${DATABASE_URL}"]
```

### 4. Playwright Server
Browser automation for testing:
```yaml
- name: playwright
  command: "npx"
  args: ["-y", "@modelcontextprotocol/server-playwright"]
```

### 5. Slack Server
Team communication integration:
```yaml
- name: slack
  command: "npx"
  args: ["-y", "@modelcontextprotocol/server-slack"]
  env:
    SLACK_TOKEN: ${SLACK_TOKEN}
```

## Benefits of MCP Integration

### 1. **Enhanced Security**
- No credentials in prompts
- Controlled access to resources
- Audit trail of operations

### 2. **Better Performance**
- Direct access to systems
- No need for command execution
- Structured data responses

### 3. **Richer Capabilities**
- Database queries
- API integrations
- File system operations
- Web searches

### 4. **Consistency**
- Standardized interfaces
- Predictable behavior
- Better error handling

## Example Workflows

### Database-Driven Development

```yaml
mcp:
  servers:
    - name: postgres
      command: "npx"
      args: ["-y", "@modelcontextprotocol/server-postgres", "${DATABASE_URL}"]
```

Agent behavior:
```
Developer: I need to add a users table

Claude: I'll check the current schema first...
[Uses MCP to query database]

Based on your existing schema, here's a migration that follows your patterns...
```

### GitHub Integration

```yaml
mcp:
  servers:
    - name: github
      command: "npx"
      args: ["-y", "@modelcontextprotocol/server-github"]
```

Agent behavior:
```
Developer: What issues are open for the auth feature?

Claude: Let me check GitHub...
[Uses MCP to query issues]

I found 3 open issues related to authentication...
```

### Full-Stack Development

```yaml
mcp:
  servers:
    - name: filesystem
      command: "npx"
      args: ["-y", "@modelcontextprotocol/server-filesystem", "./"]
    
    - name: postgres
      command: "npx"
      args: ["-y", "@modelcontextprotocol/server-postgres", "${DATABASE_URL}"]
    
    - name: web-search
      command: "npx"
      args: ["-y", "@modelcontextprotocol/server-web-search"]
```

## Agent MCP Awareness

Agents can check for and utilize MCP capabilities:

```markdown
As your Developer Agent, I notice you have MCP configured with:
- Filesystem access for direct file operations
- PostgreSQL for database queries
- Web search for package research

I'll use these tools to provide better assistance.
```

## Troubleshooting

### MCP Not Working

1. Check if running in MCP-enabled environment
2. Verify server configurations
3. Check environment variables
4. Review server logs

### Fallback Behavior

When MCP is unavailable, FORGE automatically falls back to:
- Native file operations
- Command-line tools
- Manual instructions

### Permission Issues

Ensure MCP servers have appropriate permissions:
```yaml
- name: filesystem
  command: "npx"
  args: ["-y", "@modelcontextprotocol/server-filesystem", "./", "--read-write"]
```

## Best Practices

1. **Start Simple**: Begin with filesystem MCP, add others as needed
2. **Use Environment Variables**: Keep sensitive data out of config
3. **Document MCP Dependencies**: Note which features require MCP
4. **Test Fallbacks**: Ensure project works without MCP
5. **Security First**: Only grant necessary permissions

## Future Enhancements

As MCP ecosystem grows, FORGE will support:
- Custom MCP servers for proprietary tools
- MCP server discovery
- Dynamic capability negotiation
- Enhanced agent specialization based on available MCP tools

## Resources

- [MCP Documentation](https://modelcontextprotocol.io)
- [MCP Server List](https://github.com/modelcontextprotocol/servers)
- [Creating Custom MCP Servers](https://modelcontextprotocol.io/docs/create-server)

---

MCP integration makes FORGE more powerful while maintaining its simplicity. Agents become more capable with direct access to tools and services, providing a better development experience.