---
layout: default
title: AI-Driven Workflow
parent: Getting Started
nav_order: 3
---

# AI-Driven Workflow
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Philosophy

FORGE is radically simple by design. The CLI just creates files - all intelligence lives in the AI. This means:
- No outdated detection logic
- No hardcoded assumptions
- No complex configuration
- Infinite adaptability

## The Workflow

### 1. Initialize FORGE

```bash
forge init
```

This creates:
- Minimal `forge.yaml`
- Empty `.forge/` directory
- That's it!

### 2. Let AI Configure

Ask Claude (or any AI with file access):

```
"Analyze my project and configure FORGE appropriately"
```

The AI will:
- Explore your project structure
- Detect frameworks and tools
- Find existing setups
- Update forge.yaml intelligently

### 3. Start Building

```
"Let's build user authentication with FORGE"
```

The AI becomes your guide through the FORGE phases.

## Example Conversations

### New Project

```
User: I just ran forge init in an empty directory

Claude: Great! I see this is a new project. What are you planning to build?

User: A React app with TypeScript and PostgreSQL

Claude: I'll configure FORGE for a modern React + TypeScript stack...
[Updates forge.yaml with appropriate settings]
[Creates CLAUDE.md with project context]

Ready to start your first feature! Try: forge new "project setup"
```

### Existing Node.js Project

```
User: I ran forge init in my Express API project. Can you configure it?

Claude: I'll analyze your Express project...
[Explores project structure]

Found:
- Express.js API with TypeScript
- PostgreSQL with Sequelize ORM  
- Jest for testing
- Docker configuration

I've updated forge.yaml with your stack. FORGE will work alongside your existing workflow!
```

### Complex Enterprise Project

```
User: We have a microservices architecture. How should FORGE work here?

Claude: Let me understand your architecture...
[Analyzes multiple services]

I see you have:
- 5 microservices
- Kubernetes deployments
- Shared libraries
- Mono-repo structure

I'll configure FORGE for:
- Service-specific cycles
- Shared pattern library
- Team collaboration mode
- Cross-service learnings

Each service can have its own FORGE cycles while sharing knowledge!
```

## AI Agent Roles

When working with FORGE, Claude can act as:

### Project Analyzer
```
"Analyze this project and update forge.yaml"
```

### Architect Agent
```
"As the Architect, help me design this feature"
```

### Developer Agent
```
"Act as the Developer agent and implement this"
```

### Dynamic Specialist
```
"We need Redis caching - can you be a Redis specialist?"
```

## Best Practices

### 1. Start Simple
Don't over-configure initially. Let needs drive complexity.

### 2. Trust the AI
The AI has access to your actual code - it makes better decisions than hardcoded logic.

### 3. Iterate Naturally
Your forge.yaml grows with your project, guided by AI insights.

### 4. Document Intent
Use CLAUDE.md to capture high-level decisions the AI should remember.

## Advanced Patterns

### Multi-Project Workspace

```
User: I have 3 related projects. How should I use FORGE?

Claude: I'll set up a workspace approach...
- Root forge.yaml for shared configuration
- Project-specific configs inherit from root
- Shared .forge/LEARNINGS.md
- Cross-project patterns directory
```

### Legacy Integration

```
User: This is a 10-year-old Java project. Can FORGE help?

Claude: Absolutely! For legacy projects, I'll configure FORGE to:
- Document existing patterns first
- Introduce changes gradually  
- Respect established conventions
- Focus on new feature development
```

### CI/CD Integration

```
User: How do we integrate FORGE with our pipeline?

Claude: FORGE is just markdown files, so integration is simple:
- Cycles can trigger on PR creation
- Completion can update tickets
- Learnings can feed into documentation
- No special tooling needed!
```

## The Power of Simplicity

Because FORGE has no complex logic:
- It works with any language
- It adapts to any workflow  
- It integrates with any tool
- It improves as AI improves

The framework is just a conversation structure. The AI provides all the intelligence.

## Getting Started

1. Run `forge init`
2. Ask AI to analyze your project
3. Start your first feature cycle
4. Let AI guide you through the phases

That's it. No documentation to study, no configuration to master. Just natural conversation about building software.