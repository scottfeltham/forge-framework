# FORGE Quick Start

Get up and running with FORGE in under 5 minutes.

## Installation

```bash
npm install -g forge-framework@beta
```

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

This starts a new development cycle. Your AI assistant will guide you through the 5 phases:
1. **Focus** - Understand requirements and design
2. **Orchestrate** - Plan tasks and dependencies
3. **Refine** - Implement with TDD
4. **Generate** - Prepare for deployment
5. **Evaluate** - Learn and improve

## Core Commands

- `forge init` - Initialize FORGE in your project
- `forge new <feature>` - Start a new development cycle
- `forge status` - Check current progress
- `forge complete` - Archive completed cycle
- `forge document` - Manage documentation
- `forge learn` - View and update learnings

## Working with AI

FORGE is designed for AI-driven development. After each command, engage with your AI assistant:

```
You: forge new "shopping cart"
You: Let's design a shopping cart feature

Claude: I'll guide us through the Focus phase as the Architect Agent...
```

## Key Concepts

### Agents
FORGE includes specialized AI agents:
- **Architect** - System design and planning
- **Developer** - Code implementation
- **Tester** - Quality assurance
- **DevOps** - Infrastructure and deployment
- **Reviewer** - Code and design review

### Test-First Development
All agents enforce TDD. You must define test scenarios before writing code.

### Documentation
- PRDs go in `specs/`
- All other docs go in `docs/`
- Use `forge document` for AI-powered documentation management

## Beta Notes

This is a beta release! Please report issues at:
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