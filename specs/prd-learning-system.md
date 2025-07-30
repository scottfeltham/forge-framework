# PRD: Learning System

**Feature**: Continuous Learning and Knowledge Management  
**Version**: 1.0  
**Date**: 2025-07-30  
**Status**: Implemented

## Executive Summary

Create a learning system that captures, shares, and applies knowledge gained throughout development, enabling both AI agents and human developers to learn from every cycle and continuously improve their effectiveness.

## Problem Statement

Traditional development loses valuable insights after each project:
- Lessons learned are forgotten
- Mistakes are repeated
- Successful patterns aren't reused
- Team knowledge isn't shared
- AI starts fresh each session

Without systematic learning, teams miss opportunities to improve velocity, quality, and consistency over time.

## Solution Overview

Implement a markdown-based learning system centered around `.forge/LEARNINGS.md` that accumulates knowledge, integrates with AI memory systems, and provides structured retrospectives and pattern documentation.

## User Stories

### As a Developer
- I want successful patterns automatically remembered and suggested
- I want to avoid repeating past mistakes
- I want to see what worked well in similar features
- I want my learnings to benefit the whole team

### As a Team Lead
- I want cumulative team knowledge that persists
- I want to identify recurring issues and address them
- I want to share best practices across projects
- I want data-driven process improvements

### As an AI Agent
- I need to reference past decisions and their outcomes
- I need to apply proven patterns to new problems
- I need to avoid previously identified pitfalls
- I need to suggest improvements based on history

## Functional Requirements

### 1. Learning Capture

#### LEARNINGS.md Structure
```markdown
# FORGE Learning Log

## Successful Patterns
### Pattern: [Name]
**Context**: When/where this works
**Implementation**: How to apply
**Evidence**: Proof it works
**Usage Count**: Times applied

## Pitfalls to Avoid
### Pitfall: [Name]
**Context**: When this happens
**Issue**: What goes wrong
**Solution**: How to avoid/fix
**Occurrences**: Times encountered

## Performance Optimizations
[Discovered optimizations with metrics]

## Testing Strategies
[Effective test approaches]

## Team Conventions
[Emerged standards and practices]
```

#### Automatic Capture Points
- End of each cycle (Evaluate phase)
- After significant discoveries
- When patterns emerge
- On problem resolution

### 2. Retrospective System

#### Templates
- `retrospective.md` - Structured reflection
- `pattern.md` - Reusable solution documentation
- Integration with cycle completion

#### Retrospective Flow
```bash
forge learn retrospective
# Creates timestamped template
# Guides reflection process
# Updates LEARNINGS.md
```

### 3. Pattern Library

#### Pattern Documentation
```markdown
# Pattern: [Name]

**Category**: Architecture/Code/Process
**Confidence**: Low/Medium/High
**Usage Count**: N

## Context
When to use this pattern

## Solution
How to implement

## Evidence
Metrics and outcomes

## Examples
Code/config samples
```

#### Pattern Discovery
- AI identifies recurring solutions
- Developers document proven approaches
- Patterns evolve with usage

### 4. Agent Integration

#### Learning-Aware Agents
Each agent:
- Checks LEARNINGS.md before decisions
- References past patterns in suggestions
- Documents new discoveries
- Avoids recorded pitfalls

#### Example Usage
```
Architect: Checking LEARNINGS.md for similar architectural decisions...
          Found: Microservice pattern worked well for user service
          Applying similar approach for payment service
```

### 5. Memory System Integration

#### Claude Memory
- Key patterns stored in memory
- Cross-session continuity
- Project-specific recall
- Team knowledge sharing

#### CLAUDE.md Synergy
- Persistent project context
- Learning integration section
- Memory prompts for patterns

## Non-Functional Requirements

### Accessibility
- Plain markdown format
- No special tools required
- Git-friendly for versioning
- Searchable via grep

### Scalability
- Grows with project
- Handles hundreds of learnings
- Organized by categories
- Prunable over time

### Integration
- Works with existing workflow
- No additional commands for basic use
- Optional advanced features
- Compatible with all AI providers

## Success Metrics

1. **Learning Capture Rate**: 80% of cycles contribute learnings
2. **Pattern Reuse**: 60% of new features use documented patterns
3. **Error Prevention**: 50% reduction in repeated mistakes
4. **Knowledge Retention**: 90% of learnings remain relevant after 6 months
5. **Time Savings**: 30% faster implementation using patterns

## Technical Implementation

### File Structure
```
.forge/
├── LEARNINGS.md          # Central knowledge base
├── retrospectives/       # Completed retrospectives
└── patterns/            # Documented patterns

project-root/
├── patterns/            # Shared pattern library
└── CLAUDE.md           # Memory integration
```

### CLI Commands
```bash
forge learn              # View current learnings
forge learn retrospective # Create retrospective
forge learn pattern      # Create pattern template
forge learn claude       # Create CLAUDE.md
```

### Agent Prompts Update
All agents include:
```markdown
## Learning Integration
- Review .forge/LEARNINGS.md before decisions
- Apply proven patterns
- Document new discoveries
- Update learnings after success
```

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Information overload | Medium | Categorization and pruning |
| Stale learnings | Low | Date stamps and validation |
| Conflicting patterns | Medium | Confidence levels and context |
| Memory divergence | Low | Regular sync processes |

## Implementation Status

### Completed
- ✅ LEARNINGS.md template
- ✅ Retrospective templates
- ✅ Pattern documentation template
- ✅ Agent learning integration
- ✅ CLI commands
- ✅ Memory system hooks

### Future Enhancements
- Learning analytics dashboard
- Cross-project learning sharing
- AI-powered pattern detection
- Learning effectiveness metrics

## Appendix

### Learning Categories

1. **Technical Learnings**
   - Code patterns
   - Architecture decisions
   - Performance optimizations
   - Security practices

2. **Process Learnings**
   - Workflow improvements
   - Communication patterns
   - Tool usage
   - Team dynamics

3. **Domain Learnings**
   - Business logic insights
   - User behavior patterns
   - Integration gotchas
   - Compliance requirements

### Example Learning Entry

```markdown
## Performance: Database Query Optimization
**Date**: 2024-01-15
**Context**: User listing API was slow (>2s response)
**Learning**: Using database views with proper indexes reduced response time to <100ms
**Applied**: Created views for all listing endpoints
**Result**: 95% performance improvement across all list APIs
**Pattern**: Created patterns/db-view-optimization.md
```

### Integration Example

```
Developer: Implementing user search functionality

Claude: Checking LEARNINGS.md... I found that we previously optimized 
        listing queries using database views. This resulted in 95% 
        performance improvement. Shall I apply the same pattern here?

Developer: Yes, please use that approach

Claude: Implementing using the proven pattern from patterns/db-view-optimization.md...
```