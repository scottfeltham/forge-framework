# Claude Code Integration Guide

## Overview

FORGE is designed to work seamlessly with Claude Code's advanced capabilities, including subagents, specialized tools, and planning features.

## Getting Started

Simply run in any project:
```bash
forge init
```

FORGE automatically detects Claude Code setups and configures itself appropriately. No special commands needed!

## Core Integration Points

### 1. Dynamic Agent Detection and Creation

Claude Code automatically:
- Detects when specialized expertise is needed
- Creates appropriate agent prompts
- Switches context to act as that agent

Example flow:
```
User: "I need to implement JWT authentication"

Claude: [Detects security/auth context]
        I notice this requires security expertise. Let me check for a Security Developer agent...
        
        [Checks agents/ directory]
        
        Creating agents/security-developer.md specialized in:
        - JWT implementation
        - Token management
        - Security best practices
        
        Now acting as Security Developer: Let's implement secure JWT authentication...
```

### 2. Using Subagents via Task Tool

For complex tasks, Claude Code can launch specialized subagents:

```
User: "Design a microservices architecture for our e-commerce platform"

Claude: This is a complex architectural task. I'll use a specialized subagent to help.

        [Uses Task tool]
        Task(
          description="Design microservices architecture",
          prompt="As a Microservices Architect, design an e-commerce platform...",
          subagent_type="general-purpose"
        )
```

### 3. Agent Collaboration Patterns

Claude Code can coordinate multiple agents:

```
Claude: This feature requires multiple perspectives. I'll coordinate:

1. As Architect Agent: Design the API structure
2. As Developer Agent: Implement the endpoints  
3. As Tester Agent: Create test scenarios
4. As DevOps Agent: Plan deployment strategy

Starting with architecture design...
```

### 4. TodoWrite Integration

Agents use TodoWrite to track complex tasks:

```
Claude: As the Frontend Developer agent, I'll break this down:

[Uses TodoWrite tool]
- [ ] Create React component structure
- [ ] Implement state management
- [ ] Add API integration
- [ ] Write component tests
- [ ] Ensure accessibility
```

### 5. Tool Usage Patterns

Different agents prefer different tools:

- **Architect**: Read, Grep, Glob for understanding codebase
- **Developer**: Edit, MultiEdit, Write for implementation
- **Tester**: Bash for running tests, Read for verification
- **DevOps**: Bash for deployment, Write for configs
- **Reviewer**: Grep for patterns, Read for context

## Practical Examples

### Example 1: New Technology Integration

```
User: "Add Redis caching to our API"

Claude: I don't see a Redis specialist. Let me create one...

[Creates agents/redis-developer.md]

As your Redis Developer agent, I'll:
1. First use Grep to find current caching logic
2. Use Read to understand the API structure
3. Design the caching strategy
4. Implement with proper error handling

[Uses TodoWrite to track progress]
```

### Example 2: Performance Optimization

```
User: "The dashboard is loading slowly"

Claude: This needs performance expertise. Creating a Performance Engineer agent...

As Performance Engineer, I'll:
[Uses Task tool for deep analysis]
Task(
  description="Analyze dashboard performance",
  prompt="Profile and identify performance bottlenecks...",
  subagent_type="general-purpose"
)

Based on the analysis, here's my optimization plan...
```

### Example 3: Security Review

```
User: "Review our authentication code for vulnerabilities"

Claude: Switching to Security Reviewer agent mode...

[Uses Grep tool extensively]
Grep(pattern="password|token|secret", glob="**/*.js")
Grep(pattern="eval|exec", glob="**/*.js")

Found several areas to review...
```

## Configuration for Claude Code

### forge.yaml Settings

```yaml
# Optimize for Claude Code
ai:
  primary: claude
  model: sonnet      # Default model (fast, cost-effective)
  
  # Dynamic model selection
  model_strategy: adaptive
  models:
    default: sonnet
    complex: opus
    fallback: sonnet
  
agents:
  dynamic: true      # Let Claude create agents
  auto_detect: true  # Automatic specialization
  
  # Claude Code specific
  use_subagents: true     # Enable Task tool usage
  use_todo_tracking: true # TodoWrite integration
  
  # Tool preferences by agent type
  tool_hints:
    architect: [read, grep, glob]
    developer: [edit, write, multiedit]
    tester: [bash, read]
    devops: [bash, write]
    reviewer: [grep, read]

# MCP Integration (when available)
mcp:
  enabled: true
  preferences:
    file_access: auto    # Use MCP when available, fallback to native
    web_fetch: mcp      # Prefer MCP for web operations
```

### Custom Slash Commands

Create project-specific commands:

```bash
# In project root
mkdir .claude-commands

# Create command
echo "Launch FORGE architect for system design" > .claude-commands/forge-architect
```

Usage:
```
User: /forge-architect design payment system

Claude: [Reads command, acts as Architect Agent]
```

## Model Selection with Claude Code

### Dynamic Model Switching

FORGE agents are model-aware and will suggest optimal model usage:

```markdown
Architect: "This payment system requires complex security analysis. I recommend switching to Opus for deeper architectural reasoning. Continue with Sonnet?"

User: "Use Opus for security design only"

Architect: "Perfect. I'll use Sonnet for general architecture and switch to Opus specifically for security components."
```

### Cost-Optimized Development

```yaml
# forge.yaml for cost optimization
ai:
  model_strategy: cost_optimized
  opus_percentage_limit: 15  # Cap Opus usage
```

### Model Selection by Task

| Task Type | Recommended Model | Rationale |
|-----------|------------------|-----------|
| CRUD Implementation | Sonnet | Fast, routine |
| Security Design | Opus | Critical thinking |
| Bug Investigation | Sonnet → Opus | Escalate if complex |
| Documentation | Sonnet | Standard writing |
| Algorithm Design | Opus | Complex reasoning |
| Code Review | Mixed | Based on risk |

### Parallel Model Usage

```python
# Different models for different complexity
Task(description="API implementation", 
     prompt="Build REST endpoints [SONNET]")
     
Task(description="Security layer",
     prompt="Design authentication [OPUS]")
```

## Best Practices

### 1. Agent Announcement
Always announce agent switches:
```
"Switching to Frontend Developer agent for UI implementation..."
```

### 2. Context Preservation
Maintain context between agents:
```
"Based on the Architect's design, as Developer I'll implement..."
```

### 3. Tool Selection
Use appropriate tools for each agent role

### 4. Progress Tracking
Use TodoWrite for multi-step processes

### 5. Subagent Delegation
Use Task tool for complex analysis

### 6. Model Awareness
Let agents guide model selection based on task complexity

## MCP Integration

Claude Code can leverage MCP servers for enhanced capabilities:

### When MCP is Available

```yaml
mcp:
  servers:
    - name: filesystem
      command: "npx"
      args: ["-y", "@modelcontextprotocol/server-filesystem", "./"]
```

Claude will automatically:
- Use MCP for file operations (more efficient)
- Access databases directly via MCP
- Search web using MCP servers
- Integrate with GitHub/GitLab via MCP

### Tool Selection with MCP

```
Without MCP: Claude uses Read/Write/Edit tools
With MCP: Claude uses mcp_filesystem_read/write for better performance

Without MCP: Manual database setup instructions  
With MCP: Direct database queries via mcp_postgres_query
```

See [MCP Integration Guide](MCP_INTEGRATION.md) for detailed setup.

## Memory Integration

Claude Code's memory features enhance FORGE's learning system:

### Persistent Context

Create `CLAUDE.md` in your project root:
```bash
forge learn claude
```

This provides Claude with:
- Project architecture and patterns
- Coding standards and conventions
- Key decisions and their rationale
- Performance targets and constraints

### Cross-Session Learning

Claude remembers:
- Successful patterns from previous sessions
- Project-specific conventions
- Technical decisions and trade-offs
- Team preferences and workflows

Example:
```
Claude: I recall from our last session that this project uses 
        event sourcing for the order system. I'll apply the 
        same pattern to the new inventory feature.
```

### Memory-Enhanced Agents

Agents leverage memory to:
- Apply consistent patterns across features
- Avoid previously identified pitfalls
- Maintain architectural coherence
- Speed up development with recalled context

See [Memory Integration Guide](MEMORY_INTEGRATION.md) for complete details.

## Advanced Patterns

### Multi-Phase Agent Coordination

```python
# Pseudocode for Claude's internal process
phases = {
    "Focus": "Architect Agent",
    "Orchestrate": "Architect + Developer Agents",
    "Refine": "Developer + Tester Agents",
    "Generate": "DevOps Agent",
    "Evaluate": "Reviewer Agent"
}

for phase, agents in phases.items():
    activate_agents(agents)
    execute_phase_tasks()
    update_cycle_progress()
```

### Dynamic Learning

Agents can learn from project patterns:
```
Claude: I notice you frequently use Prisma for database access. 
        Should I create a Prisma Database Developer agent for future work?
```

### Intelligent Handoffs

```
Architect: "I've completed the API design. Handing off to Developer agent..."
Developer: "Received the design. Beginning implementation..."
```

## Troubleshooting

### Agent Not Detecting Context
- Ensure dynamic agents are enabled in forge.yaml
- Be explicit about technologies/needs
- Use "I need help with [specific technology]"

### Subagent Not Launching
- Check if Task tool is available
- Verify complex task warrants subagent
- Try explicit request: "Use a subagent to..."

### Tools Not Being Used
- Agents should announce tool usage
- Check tool_hints configuration
- Request specific tools if needed

## Future Enhancements

1. **Agent Memory**: Agents remember project-specific patterns
2. **Agent Evolution**: Agents improve based on feedback
3. **Agent Marketplace**: Share specialized agents
4. **Multi-Project Agents**: Reuse agents across projects

## Conclusion

FORGE + Claude Code creates an intelligent development environment where expertise appears exactly when needed, tools are used optimally, and complex tasks are broken down naturally. The combination provides both structure and flexibility for modern software development.