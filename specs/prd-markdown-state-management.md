# PRD: Markdown-Based State Management

**Feature**: Human-Readable Development State  
**Version**: 1.0  
**Date**: 2025-07-29  
**Status**: Draft

## Executive Summary

Replace complex databases and state management systems with simple markdown files that both humans and AI can read, write, and understand naturally.

## Problem Statement

Traditional development frameworks use complex state management systems that require:
- Database schemas
- Migration scripts  
- Serialization/deserialization
- Complex queries
- Debugging tools

This complexity prevents easy inspection, modification, and AI interaction with project state.

## Solution Overview

Use markdown files as the single source of truth for all development state, making it trivially easy for both humans and AI to understand and modify project progress.

## User Stories

### As a Developer
- I want to see my project state by opening a text file
- I want to edit state with any text editor
- I want version control to show meaningful diffs
- I want to understand state without documentation

### As an AI Agent
- I need to parse project state without complex APIs
- I need to update state with simple file writes
- I need to track history through file system
- I need to understand context from formatting

### As a Team Member
- I want to review progress without special tools
- I want to merge state changes like code
- I want to annotate and comment inline
- I want to share state via any medium

## Functional Requirements

### 1. State Structure

#### Current Cycle State (.forge/current.md)
```markdown
# Feature: [Name]

**Started**: [Date]  
**Status**: [Current Phase]

## 📋 Progress

### Phase 1: Focus 🎯 [Status]
- [x] Completed task
- [ ] Pending task

## 📝 Notes
[Free-form notes and context]

## 🤖 Next Action
[AI suggestion for next step]
```

#### Historical State (.forge/history/)
- Timestamped archive files
- Complete cycle history
- Searchable via grep
- Diffable via git

### 2. State Operations

#### Create
```bash
forge new "feature" 
# Creates .forge/current.md from template
```

#### Read
```bash
forge status
# Displays .forge/current.md
```

#### Update
- Direct file editing
- AI updates through conversation
- Git-friendly modifications

#### Archive
```bash
forge complete
# Moves current.md to history/cycle-[timestamp].md
```

### 3. State Features

#### Progress Tracking
- Checkbox lists for tasks
- Phase status indicators
- Visual progress via emoji
- Percentage complete calculations

#### Context Preservation
- Free-form notes sections
- Links to external docs
- Code snippets inline
- Decision rationale

#### AI Integration
- Structured sections AI can parse
- Clear next action prompts
- Context for agent activation
- Historical pattern learning

## Non-Functional Requirements

### Simplicity
- No schema migrations
- No database required
- No special parsers
- Standard markdown syntax

### Portability
- Works on any OS
- Readable in any editor
- Shareable via any medium
- No binary formats

### Performance
- Instant read/write
- No query overhead
- Linear search via grep
- Cached in memory if needed

### Compatibility
- Git merge friendly
- GitHub/GitLab rendering
- IDE preview support
- Terminal display ready

## Success Metrics

1. **Readability**: 100% understandable without docs
2. **Editability**: Modifications without tools
3. **AI Accuracy**: 95%+ successful state parsing
4. **Merge Success**: <5% conflicts in team use

## Technical Constraints

- Pure markdown format
- UTF-8 encoding
- Line-based diff friendly
- Maximum file size: 1MB

## Out of Scope

- Binary state data
- Encrypted state
- Real-time sync
- Database features

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| State corruption | High | Git version control |
| Concurrent edits | Medium | File locking + merge strategies |
| Large state files | Low | Archive completed cycles |
| Lost formatting | Low | Template validation |

## Implementation Details

### File Format Specification

#### Required Sections
1. Feature name and metadata
2. Progress tracking with phases
3. Notes section for context
4. Next action for AI guidance

#### Optional Sections
- Requirements captured
- Architecture decisions
- Task breakdowns
- Links and references

### State Transitions

```
None -> Created (forge new)
Created -> In Progress (editing)
In Progress -> Completed (forge complete)
Completed -> Archived (automatic)
```

### Example State Evolution

#### Day 1 - Created
```markdown
# Feature: User Authentication

**Started**: 2024-01-15  
**Status**: Focus Phase

## 📋 Progress

### Phase 1: Focus 🎯 [Active]
- [ ] Gather requirements
- [ ] Analyze impact
```

#### Day 3 - Progress
```markdown
# Feature: User Authentication

**Started**: 2024-01-15  
**Status**: Orchestrate Phase

## 📋 Progress

### Phase 1: Focus 🎯 [Complete]
- [x] Gather requirements
- [x] Analyze impact
- [x] Design architecture
- [x] Identify risks

### Phase 2: Orchestrate 📝 [Active]
- [x] Break down tasks
- [ ] Assign priorities

## 📝 Notes

### Requirements
- OAuth with Google and GitHub
- Session management with Redis
- JWT tokens for API access

### Architecture Decisions
- Passport.js for OAuth
- Express sessions
- Redis for session store
```

## Appendix

### Template Variables

| Variable | Description | Example |
|----------|-------------|---------|
| {{FEATURE}} | Feature name | "User Authentication" |
| {{DATE}} | ISO date | "2024-01-15" |
| {{STATUS}} | Current phase | "Focus Phase" |
| {{NEXT_ACTION}} | AI suggestion | "Analyze requirements" |

### Markdown Extensions

While staying compatible with standard markdown, these conventions enhance AI parsing:

- `## 📋 Progress` - Marks progress section
- `### Phase N: Name 🔄 [Status]` - Phase headers
- `- [ ] Task` - Pending tasks
- `- [x] Task` - Completed tasks
- `## 🤖 Next Action` - AI guidance section