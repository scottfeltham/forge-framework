# PRD: Lightweight Cycle Management

**Feature**: Simple Development Cycle Tracking  
**Version**: 1.0  
**Date**: 2025-07-29  
**Status**: Draft

## Executive Summary

Implement the FORGE development cycle (Focus, Orchestrate, Refine, Generate, Evaluate) using simple markdown files and natural language progression, removing all complexity while maintaining the methodology's benefits.

## Problem Statement

Current cycle management systems require:
- Complex state machines
- Database tracking
- Workflow engines
- Status dashboards
- Rigid phase transitions

This complexity obscures the simple reality that development is a conversation between intent and implementation.

## Solution Overview

Track development cycles in a single markdown file that serves as both documentation and state, with AI agents guiding natural progression through phases based on conversation and checklists.

## User Stories

### As a Developer
- I want to see exactly where I am in the development process
- I want to move between phases naturally, not through commands
- I want to capture context and decisions as I work
- I want flexibility to revisit phases as needed

### As a Project Manager
- I want to see progress at a glance
- I want to understand blockers and decisions
- I want historical records of all cycles
- I want no complex tools or training

### As an AI Agent
- I need to understand the current phase and context
- I need to guide users through appropriate next steps
- I need to track progress without external state
- I need to learn from completed cycles

## Functional Requirements

### 1. Cycle Structure

#### Phases with Emoji Indicators
- Focus 🎯 - Understanding and planning
- Orchestrate 📝 - Breaking down and organizing
- Refine 🔨 - Building and improving
- Generate 🚀 - Deploying and delivering
- Evaluate 📊 - Learning and measuring

#### Progress Tracking
```markdown
### Phase 1: Focus 🎯 [Complete]
- [x] Gather requirements
- [x] Analyze impact
- [x] Design architecture
- [x] Identify risks

### Phase 2: Orchestrate 📝 [Active]
- [x] Break down tasks
- [ ] Assign priorities
- [ ] Plan dependencies
```

### 2. Phase Transitions

#### Natural Progression
- No explicit commands to change phases
- AI recognizes completion patterns
- Checklists drive progress
- Flexible revisiting allowed

#### AI Guidance
```
Claude: I see you've completed all Focus phase tasks. Ready to move to 
        Orchestrate? I can help break down the work into manageable pieces.
```

### 3. Context Preservation

#### Within-Phase Notes
```markdown
## 📝 Notes

### Requirements
- OAuth with Google and GitHub
- Session management needed
- Must work with existing user table

### Architecture Decisions
- Use Passport.js for OAuth
- Redis for session storage
- JWT for API authentication

### Open Questions
- How long should sessions last?
- Do we need "remember me" functionality?
```

### 4. Cycle Operations

#### Start New Cycle
```bash
forge new "feature name"
# Creates from template with all phases
```

#### Update Progress
- Check boxes in markdown
- Add notes in appropriate sections
- AI updates through conversation

#### Complete Cycle
```bash
forge complete
# Archives with timestamp
# Preserves all context
```

#### Review History
```bash
ls .forge/history/
# Simple file listing
# Grep-able archive
```

## Non-Functional Requirements

### Simplicity
- One file per active cycle
- No phase state machine
- No external dependencies
- Natural language flow

### Flexibility
- Skip phases if needed
- Revisit completed phases
- Parallel phase work
- Custom phase additions

### Transparency
- All state visible in one file
- Progress clear from checkboxes
- Context preserved inline
- No hidden metadata

### Learnability
- Intuitive emoji indicators
- Self-documenting format
- No command memorization
- Natural conversation flow

## Success Metrics

1. **Cycle Completion Rate**: 80% of started cycles reach Evaluate
2. **Phase Clarity**: 95% users know current phase without asking
3. **Context Preservation**: 90% of decisions documented
4. **Flexibility Usage**: 30% of cycles revisit phases

## Technical Constraints

- Single markdown file per cycle
- No external state tracking
- File-based history only
- No automated transitions

## Out of Scope

- Gantt charts or timelines
- Resource allocation
- Multi-cycle dependencies
- Automated scheduling

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Lost progress | Medium | Git commit regularly |
| Phase confusion | Low | Clear emoji indicators |
| Incomplete transitions | Low | AI recognition patterns |
| Context loss | Medium | Structured note sections |

## Implementation Details

### Cycle Template Structure

```markdown
# Feature: {{FEATURE}}

**Started**: {{DATE}}  
**Status**: Focus Phase

## 📋 Progress

### Phase 1: Focus 🎯 [Active]
- [ ] Gather requirements
- [ ] Analyze impact
- [ ] Design architecture
- [ ] Identify risks

### Phase 2: Orchestrate 📝 [Pending]
- [ ] Break down tasks
- [ ] Assign priorities
- [ ] Plan dependencies

### Phase 3: Refine 🔨 [Pending]
- [ ] Implement features
- [ ] Write tests
- [ ] Code review

### Phase 4: Generate 🚀 [Pending]
- [ ] Build artifacts
- [ ] Prepare deployment
- [ ] Update documentation

### Phase 5: Evaluate 📊 [Pending]
- [ ] Measure success
- [ ] Gather feedback
- [ ] Plan improvements

## 📝 Notes

### Requirements
*AI will help capture these*

### Architecture Decisions
*Document key choices*

### Tasks
*Created during Orchestrate*

### Learnings
*Captured during Evaluate*

## 🤖 Next Action
{{NEXT_ACTION}}
```

### Phase Recognition Patterns

AI recognizes phase transitions through:

1. **Checklist Completion**
   - All boxes checked in current phase
   - Natural progression to next

2. **Conversation Cues**
   - "I'm ready to start building"
   - "Let's break this down"
   - "Time to deploy"

3. **Content Patterns**
   - Requirements documented → Orchestrate
   - Tasks created → Refine
   - Code complete → Generate
   - Deployed → Evaluate

### Historical Analysis

```bash
# Find all completed auth features
grep -l "Feature: .*auth" .forge/history/*.md

# See how long cycles typically take
ls -la .forge/history/ | awk '{print $6, $7, $8, $9}'

# Find common patterns
grep "Architecture Decisions" .forge/history/*.md
```

## Appendix

### Phase-Specific AI Behaviors

#### Focus Phase
- Ask clarifying questions
- Suggest missing requirements
- Identify risks and constraints
- Recommend architecture patterns

#### Orchestrate Phase
- Break down into 2-4 hour tasks
- Identify dependencies
- Suggest parallel work streams
- Create clear acceptance criteria

#### Refine Phase
- Provide code suggestions
- Generate test cases
- Review implementation
- Suggest improvements

#### Generate Phase
- Check deployment readiness
- Verify documentation
- Suggest rollout strategy
- Monitor initial deployment

#### Evaluate Phase
- Analyze metrics
- Gather feedback
- Identify improvements
- Plan next iterations

### Example Cycle Evolution

Day 1 → Day 5 → Day 10 showing natural progression through phases with accumulated context and learning.