---
layout: forge
title: Learning Process
parent: Core Concepts
nav_order: 3
---

# Learning Process
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

FORGE incorporates a continuous learning system that captures, shares, and applies knowledge gained throughout the development process. This creates a cumulative knowledge base that improves both AI agents and human developers over time.

## Core Components

### 1. LEARNINGS.md File

The central knowledge repository located at `.forge/LEARNINGS.md` that accumulates:
- Successful patterns and approaches
- Common pitfalls and how to avoid them
- Performance optimizations discovered
- Team-specific conventions that emerge
- Technical decisions and their outcomes

### 2. Retrospective System

Structured reflection after each development cycle:
- **When**: After completing a feature or at regular intervals
- **How**: Use `forge learn retrospective` to create template
- **What**: Capture what worked, what didn't, and key learnings
- **Result**: Insights incorporated into LEARNINGS.md

### 3. Pattern Documentation

Reusable solutions documented in `patterns/` directory:
- **Creation**: Use `forge learn pattern` for template
- **Content**: Problem, solution, implementation, evidence
- **Usage**: Referenced by agents and developers
- **Evolution**: Patterns improve based on usage

### 4. Agent Learning Integration

All FORGE agents are learning-aware:
- **Before Acting**: Agents consult LEARNINGS.md
- **During Work**: Apply proven patterns and avoid known pitfalls
- **After Success**: Document new effective approaches
- **On Issues**: Record problems and solutions

### 5. Memory System Integration

When available, FORGE leverages AI memory systems for persistent learning:
- **Claude Memory**: Key patterns and project context stored in Claude's memory
- **CLAUDE.md Integration**: Project-specific conventions documented for AI awareness
- **Cross-Session Learning**: Insights persist across development sessions
- **Contextual Recall**: AI automatically recalls relevant past experiences

## Learning Workflow

### 1. During Development

Agents automatically:
```markdown
Architect: Checking LEARNINGS.md for similar architectural decisions...
          Found: Microservice pattern worked well for user service
          Applying similar approach for payment service
```

### 2. After Cycle Completion

Run retrospective:
```bash
# Create retrospective template
forge learn retrospective

# Fill out retrospective
edit .forge/retrospective-2024-01-20.md

# Review and update learnings
forge learn update
```

### 3. Pattern Emergence

When patterns prove valuable:
```bash
# Create pattern documentation
forge learn pattern

# Document the pattern
edit patterns/circuit-breaker-api.md

# Agents will discover and apply
```

## Learning Categories

### Technical Learnings
- Code patterns that improve quality
- Performance optimizations
- Security best practices
- Testing strategies

### Process Learnings
- Effective workflows
- Team collaboration patterns
- Communication improvements
- Tool usage optimizations

### Project-Specific Learnings
- Domain knowledge
- Business rule clarifications
- Integration gotchas
- Deployment considerations

## Best Practices

### 1. Regular Updates
- Update learnings immediately after discoveries
- Don't wait for retrospectives for critical insights
- Keep entries concise and actionable

### 2. Clear Documentation
- Use examples to illustrate learnings
- Link to relevant code or PRs
- Include metrics when possible

### 3. Active Application
- Agents reference learnings in their reasoning
- Developers check learnings before starting work
- Teams review learnings in planning

### 4. Continuous Refinement
- Remove outdated learnings
- Consolidate similar insights
- Promote proven patterns

## Examples

### Learning Entry
```markdown
## Performance: Database Query Optimization
**Date**: 2024-01-15
**Context**: User listing API was slow (>2s response)
**Learning**: Using database views with proper indexes reduced response time to <100ms
**Applied**: Created views for all listing endpoints
**Result**: 95% performance improvement across all list APIs
```

### Pattern Reference
```markdown
## API Design: Pagination Pattern
**Proven Pattern**: patterns/api-pagination.md
**Usage Count**: 12 endpoints
**Success Rate**: 100% - no pagination bugs since adoption
```

### Team Convention
```markdown
## Testing: Integration Test Structure
**Convention**: All integration tests follow Given-When-Then format
**Reason**: Improves readability and debugging
**Example**: See tests/integration/user-auth.test.js
```

## CLI Commands

### View Current Learnings
```bash
forge learn
```

### Create Retrospective
```bash
forge learn retrospective
```

### Show Pattern Template
```bash
forge learn pattern
```

### Update Guidance
```bash
forge learn update
```

## Integration with FORGE Phases

### Focus Phase
- Review learnings relevant to new feature
- Check for similar past implementations
- Identify potential challenges

### Orchestrate Phase
- Apply architectural patterns from learnings
- Plan based on past successes
- Avoid known problematic approaches

### Refine Phase
- Use proven coding patterns
- Apply optimization techniques
- Follow emerged conventions

### Generate Phase
- Deploy using successful strategies
- Apply infrastructure learnings
- Use proven CI/CD patterns

### Evaluate Phase
- Conduct retrospective
- Document new learnings
- Update pattern library
- Share insights with team

## Measuring Success

Track learning system effectiveness:
- Reduced bug rates over time
- Faster feature delivery
- Fewer architectural revisions
- Improved code consistency
- Higher team satisfaction

## Memory System Integration

### Claude Memory Features

When using Claude Code with memory enabled:

1. **Automatic Pattern Recognition**
   ```
   Claude: I remember this project uses the Repository pattern for data access.
           Let me apply that same approach to the new feature...
   ```

2. **Cross-Session Continuity**
   - Past architectural decisions recalled automatically
   - Team conventions remembered across sessions
   - Performance insights applied to new code

3. **CLAUDE.md Synergy**
   Create a `CLAUDE.md` file in your project root:
   ```markdown
   # Project Context for Claude
   
   ## Architecture Patterns
   - We use Repository pattern for data access
   - All APIs follow REST conventions
   - Authentication uses JWT tokens
   
   ## Coding Standards
   - TypeScript strict mode enabled
   - Prettier for formatting
   - ESLint with team ruleset
   
   ## Key Learnings
   - Database views improved query performance 95%
   - Circuit breaker pattern prevents cascade failures
   - Feature flags enable safe rollouts
   ```

### Configuring Memory Integration

Add to `forge.yaml`:
```yaml
learning:
  memory_integration: true
  claude_md: true
  
  # Memory hints for AI
  memory_prompts:
    - "Remember successful patterns from this project"
    - "Recall past performance optimizations"
    - "Apply team conventions consistently"
```

### Best Practices for Memory Systems

1. **Explicit Memory Requests**
   ```
   User: Remember that we decided to use GraphQL for the admin API
   Claude: I'll remember this architectural decision for future work on this project.
   ```

2. **Pattern Reinforcement**
   ```
   User: That pagination approach worked well, please remember it
   Claude: I've noted this successful pagination pattern in both my memory and LEARNINGS.md
   ```

3. **Context Building**
   - Start projects with key decisions documented
   - Explicitly ask AI to remember important patterns
   - Reference CLAUDE.md for project-specific context

### Memory-Enhanced Workflow

1. **Project Initialization**
   ```bash
   forge init
   echo "# Project conventions..." > CLAUDE.md
   ```

2. **Pattern Discovery**
   ```
   Claude: This caching strategy significantly improved performance.
           I'll remember this pattern for similar features.
   ```

3. **Cross-Session Application**
   ```
   Claude: Based on our previous sessions, I recall this project 
           prefers functional components with hooks...
   ```

## Tips for AI Agents

When working with Claude or other AI assistants:
1. Remind them to check LEARNINGS.md
2. Ask them to document discoveries
3. Have them reference past patterns
4. Request retrospective summaries
5. Explicitly ask them to remember key decisions
6. Create CLAUDE.md for persistent project context

## Conclusion

The FORGE learning system creates a virtuous cycle where every development effort contributes to collective knowledge. This accumulated wisdom makes future development faster, more reliable, and more enjoyable for both AI agents and human developers.

Remember: Every challenge overcome is a learning opportunity. Document it, share it, and apply it!