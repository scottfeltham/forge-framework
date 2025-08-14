---
layout: default
title: Quick Start
parent: Getting Started
nav_order: 1
---

# Quick Start
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

Get up and running with FORGE in under 5 minutes.

## Installation

```bash
# Automatically configures Claude Code subagents
npm install -g forge-framework
```

This installs FORGE globally and automatically configures 6 specialized Claude Code subagents:
- **forge-architect** - System architecture design and planning
- **forge-developer** - Code implementation and feature development  
- **forge-tester** - Testing strategies and quality assurance
- **forge-devops** - Infrastructure and deployment automation
- **forge-reviewer** - Code review and quality assessment
- **forge-analyzer** - Codebase analysis and insights

## Initialize Your Project

```bash
cd your-project
forge init
```

This creates a minimal `forge.yaml` configuration. Ask your AI assistant (Claude, etc.) to analyze your project and update the configuration.

## Start Building

```bash
forge new "user authentication"
```

This starts a new development cycle. FORGE enforces progression through 5 validated phases:
1. **Focus** - Understand requirements and design (mandatory test scenarios)
2. **Orchestrate** - Plan tasks and dependencies
3. **Refine** - Implement with TDD
4. **Generate** - Prepare for deployment
5. **Evaluate** - Learn and improve

### Phase Validation
FORGE now tracks your progress and prevents premature completion:

```bash
forge status              # Visual progress bars
forge phase next          # Move to next phase (validates completion)
forge complete            # Only works when all phases done
```

## Core Commands

- `forge init` - Initialize FORGE in your project
- `forge new <feature>` - Start a new development cycle
- `forge status` - Check current progress
- `forge complete` - Archive completed cycle
- `forge document` - Manage documentation
- `forge learn` - View and update learnings

### Claude Code Slash Commands

When using Claude Code, you can also use explicit slash commands:
- `/forge init` - Initialize FORGE
- `/forge new authentication` - Start new cycle
- `/forge status` - Check progress
- `/forge complete` - Complete cycle
- `/forge help` - Get help

Both work equally well - use whichever feels natural!

## Working with AI

FORGE is designed for AI-driven development. After each command, engage with your AI assistant:

```
You: forge new "shopping cart"
You: Let's design a shopping cart feature

Claude: I'll use the forge-architect subagent to design this system...

[forge-architect activated]
As your architecture specialist, I'll design the shopping cart system:
1. First, let me analyze your current codebase...
2. I'll create test scenarios before designing...
3. Now designing the cart architecture...
```

## Key Concepts

### Claude Code Subagents
FORGE automatically configures Claude Code subagents that operate in isolated contexts:
- **forge-architect** - System design and planning (Read, Write, Edit, Glob, Grep, Task, TodoWrite)
- **forge-developer** - Code implementation (Read, Write, Edit, MultiEdit, Bash, Glob, Grep, Task, TodoWrite)
- **forge-tester** - Quality assurance (Read, Write, Edit, Bash, Glob, Grep, Task, TodoWrite)
- **forge-devops** - Infrastructure and deployment (Read, Write, Edit, Bash, Glob, Grep, Task, TodoWrite)
- **forge-reviewer** - Code and design review (Read, Grep, Glob, Edit, Task, TodoWrite)
- **forge-analyzer** - Codebase analysis and insights (Read, Glob, Grep, Task, TodoWrite)

Each subagent has specialized expertise and operates in its own context to prevent confusion.

### Test-First Development
All agents enforce TDD. You must define test scenarios before writing code.

### Documentation
- PRDs go in `specs/`
- All other docs go in `docs/`
- Use `forge document` for AI-powered documentation management

## Issues & Feedback

Please report issues at:
https://github.com/scottfeltham/forge-framework/issues

## Learn More

Full documentation coming soon at forgeframework.dev

For now, explore the included docs:
- Philosophy and concepts
- Agent customization
- Team collaboration
- Learning system

## Join the Community

- GitHub: https://github.com/scottfeltham/forge-framework
- Discussions: https://github.com/scottfeltham/forge-framework/discussions

Welcome to the future of AI-driven development! 🚀