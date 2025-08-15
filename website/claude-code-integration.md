---
layout: default
title: Claude Code Integration
parent: Advanced Topics
nav_order: 4
---

# Claude Code Integration
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

FORGE automatically configures Claude Code subagents during installation, providing specialized AI assistants with isolated contexts and domain expertise.

## Automatic Subagent Configuration

### Installation Process
```bash
# Global installation (recommended)
npm install -g forge-framework

# Output:
# ✓ FORGE v0.6.0 installed globally
# ✓ CLI available as 'forge' command
# ✓ 6 Claude Code subagents configured:
#   • forge-architect - System design specialist
#   • forge-developer - Implementation expert
#   • forge-tester - Quality assurance specialist
#   • forge-devops - Infrastructure specialist
#   • forge-reviewer - Code review expert
#   • forge-analyzer - Codebase analysis specialist
# ✓ Ready to use! Run 'forge init' in your project
```

### The 6 Specialized Subagents

FORGE automatically configures 6 Claude Code subagents, each with specific expertise and tool access:

| Subagent | Purpose | Key Tools |
| **forge-architect** | System architecture design and planning | Read, Write, Edit, Glob, Grep, Task, TodoWrite |
| **forge-developer** | Code implementation and feature development | Read, Write, Edit, MultiEdit, Glob, Grep, Bash, Task, TodoWrite |
| **forge-tester** | Testing strategies and quality assurance | Read, Write, Edit, Glob, Grep, Bash, Task, TodoWrite |
| **forge-devops** | Infrastructure and deployment automation | Read, Write, Edit, Bash, Glob, Grep, Task, TodoWrite |
| **forge-reviewer** | Code review and quality assessment | Read, Grep, Glob, Edit, Task, TodoWrite |
| **forge-analyzer** | Codebase analysis and insights | Read, Glob, Grep, Task, TodoWrite |

## How Subagents Work

### Isolated Context
Each subagent operates in its own conversation context, preventing:
- Context pollution from mixing different expertise areas
- Long conversation degradation
- Confusion between different roles and responsibilities

### Automatic Delegation
Claude Code automatically routes tasks to appropriate subagents based on:
- Task description keywords
- Context analysis
- Domain expertise requirements

### Explicit Invocation
You can explicitly request specific subagents:
```
"Use the forge-architect to design the authentication system"
"Have the forge-tester create test scenarios for the payment flow"
"Ask the forge-analyzer to review our codebase structure"
```

## Practical Examples

### Example 1: New Feature Development
```
User: "I need to implement user authentication"

Claude: I'll use the forge-architect subagent to design this system...

[forge-architect activated]
As your architecture specialist, I'll design a secure authentication system:

1. First, let me analyze your current codebase structure...
[Uses Read, Glob, Grep to understand project]

2. I'll create test scenarios before designing...
[Uses TodoWrite to track requirements]

3. Designing the authentication architecture...
[Creates detailed system design]
```

### Example 2: Code Review Process
```
User: "Review this authentication implementation for security"

Claude: I'll delegate this to the forge-reviewer subagent for thorough analysis...

[forge-reviewer activated]
As your code review specialist, I'll conduct a comprehensive security review:

[Uses Grep to find security patterns]
[Uses Read to examine implementation details]
[Provides detailed feedback with specific recommendations]
```

### Example 3: Performance Optimization
```
User: "Our API is slow, help optimize it"

Claude: This requires both analysis and development expertise. Let me coordinate subagents...

First, I'll use forge-analyzer to identify bottlenecks:
[forge-analyzer examines codebase and provides insights]

Then forge-developer will implement optimizations:
[forge-developer implements specific performance improvements]

Finally, forge-tester will validate the improvements:
[forge-tester creates performance benchmarks]
```

## FORGE Cycle Integration

### Phase-Based Subagent Usage

Each FORGE phase naturally aligns with specific subagents:

```yaml
Focus Phase:
  - forge-architect: Requirements analysis and system design
  - forge-analyzer: Codebase understanding and impact assessment

Orchestrate Phase:
  - forge-architect: Task breakdown and dependency planning
  - forge-developer: Implementation planning

Refine Phase:
  - forge-developer: Code implementation
  - forge-tester: Test creation and execution
  - forge-reviewer: Code quality assessment

Generate Phase:
  - forge-devops: Build and deployment automation
  - forge-developer: Final implementation touches

Evaluate Phase:
  - forge-reviewer: Final quality assessment
  - forge-analyzer: Success metrics and learning capture
```

### Multi-Subagent Coordination
```
Claude: This complex feature requires multiple perspectives:

1. forge-architect: Design the system architecture
2. forge-developer: Implement core functionality  
3. forge-tester: Create comprehensive test suite
4. forge-devops: Plan deployment strategy
5. forge-reviewer: Conduct final quality review

I'll coordinate these subagents through the FORGE cycle...
```

## Configuration Options

### Subagent Preferences
You can customize subagent behavior in your project:

```markdown
# In your CLAUDE.md file
## Subagent Preferences

- **forge-architect**: Focus on microservices patterns, prioritize scalability
- **forge-developer**: Use TypeScript, prefer functional programming style
- **forge-tester**: Emphasize integration testing, use Jest framework
- **forge-devops**: Target AWS deployment, use Docker containers
```

### Model Selection
Subagents are model-aware and will recommend optimal Claude model usage:

```
forge-architect: "This distributed system design would benefit from Opus's deeper reasoning. Should I switch models for the architecture phase?"

forge-developer: "This is straightforward CRUD implementation - Sonnet is perfect for efficiency."
```

## Advanced Features

### Parallel Execution
Subagents can work on independent tasks simultaneously:

```
Claude: I'll launch parallel subagents for this complex feature:

Task 1: forge-architect designs the API structure
Task 2: forge-developer sets up the database schema  
Task 3: forge-tester creates initial test scenarios
Task 4: forge-devops plans the deployment pipeline

[Multiple subagents execute in parallel]
```

### Learning Integration
Subagents integrate with FORGE's learning system:

```
forge-developer: "I notice from .forge/LEARNINGS.md that this project prefers composition over inheritance. I'll apply that pattern here."

forge-reviewer: "Adding this pattern to LEARNINGS.md for future reference..."
```

### MCP Enhancement
When MCP servers are available, subagents gain enhanced capabilities:

```yaml
# Enhanced capabilities with MCP
forge-analyzer:
  - context7: Deep codebase relationship analysis
  - github: Repository history and collaboration insights
  
forge-devops:
  - postgres: Direct database administration
  - github: Automated CI/CD pipeline management
```

## Best Practices

### 1. Let Subagents Self-Select
Trust Claude Code's automatic delegation:
```
✅ "I need help with database optimization"
❌ "Use forge-developer to optimize the database"
```

### 2. Provide Context
Give subagents relevant project context:
```
✅ "Review this authentication code for our React/Node.js e-commerce app"
❌ "Review this code"
```

### 3. Leverage Specialized Expertise
Use the right subagent for the task:
```
✅ Architecture questions → forge-architect
✅ Code implementation → forge-developer  
✅ Testing strategy → forge-tester
✅ Deployment issues → forge-devops
✅ Code quality → forge-reviewer
✅ Project analysis → forge-analyzer
```

### 4. Multi-Phase Coordination
Let subagents hand off work naturally:
```
forge-architect: "Architecture complete. Ready for forge-developer handoff..."
forge-developer: "Received design. Beginning implementation..."
```

## Troubleshooting

### Subagent Not Activating
- Ensure FORGE installation completed successfully
- Check that `.claude/agents/` directory contains subagent files
- Be specific about your needs: "I need architecture help" vs "I need help"

### Wrong Subagent Selected
- Provide more context about the task
- Explicitly request the correct subagent
- Verify your task description matches the subagent's expertise

### Missing Capabilities
- Check if MCP servers are configured for enhanced features
- Verify subagent has access to necessary tools
- Update CLAUDE.md with project-specific requirements

## Customization

### Project-Specific Subagents
You can create additional subagents for your specific needs:

```markdown
# .claude/agents/database-specialist.md
---
name: project-database-specialist  
description: Specialist for our specific database architecture and patterns
tools: Read, Write, Edit, Bash, Grep, Glob
---

You are a database specialist for this project's specific PostgreSQL + Redis architecture...
```

### Subagent Extensions
Enhance existing subagents with project context:

```markdown
# In your CLAUDE.md
## forge-developer Extensions
- Always use TypeScript strict mode
- Prefer React functional components with hooks
- Follow our specific error handling patterns
- Use our custom logging utility for all operations
```

## Integration with Other Tools

### CI/CD Integration
Subagents work with your existing development workflow:
- forge-devops handles deployment automation
- forge-tester integrates with your testing pipeline
- forge-reviewer can analyze PR changes

### IDE Integration
Subagents complement your IDE:
- Use for complex refactoring guidance
- Get architecture advice for new features
- Receive code review feedback before committing

### Documentation Integration
- forge-analyzer generates project insights
- forge-architect creates system documentation
- All subagents contribute to learning capture

## Conclusion

FORGE's Claude Code subagent integration provides specialized AI expertise exactly when you need it, with isolated contexts that prevent confusion and maintain focus. The automatic configuration during installation means you get powerful AI assistance with zero setup effort.

The combination of FORGE's structured development process and Claude Code's subagent capabilities creates an intelligent development environment that scales from simple features to complex system architecture.