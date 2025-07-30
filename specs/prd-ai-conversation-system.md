# PRD: AI Conversation System

**Feature**: Conversational AI Development System  
**Version**: 1.0  
**Date**: 2025-07-29  
**Status**: Draft

## Executive Summary

Enable developers to build software through natural conversations with AI agents, removing the complexity of traditional frameworks while maintaining structure and best practices.

## Problem Statement

Current development frameworks require extensive configuration, rigid type systems, and complex architectures that create barriers between developers and AI assistance. Developers spend more time fighting the framework than building features.

## Solution Overview

A markdown-based conversation system where AI agents guide development through the FORGE phases using natural language, simple templates, and human-readable state files.

## User Stories

### As a Solo Developer
- I want to describe my feature in plain English and have AI guide me through implementation
- I want to see my progress without complex dashboards or metrics
- I want to change direction quickly without refactoring types and interfaces

### As a Team Lead
- I want my team to onboard in minutes, not days
- I want visibility into what everyone is building through simple markdown files
- I want AI to handle the complexity while we focus on business logic

### As an AI Agent
- I need to read and understand project state easily
- I need to guide users through each phase with clear prompts
- I need to adapt to different development styles and preferences

## Functional Requirements

### 1. Conversation Flow
- Natural language commands (forge new "feature name")
- AI reads context from markdown files
- Progressive disclosure of complexity
- No compilation or build steps

### 2. State Management
- Single markdown file for current work (.forge/current.md)
- History preserved in archive folder
- Human and AI readable format
- Git-friendly for version control

### 3. Agent Guidance
- 5 specialized agents (Architect, Developer, Tester, DevOps, Reviewer)
- Agents activated through conversation, not configuration
- Flexible prompt templates that can be customized
- AI determines which agent to use based on context

### 4. Phase Progression
- Clear visual indicators of current phase
- Checklist-driven progress tracking
- AI suggests when to move to next phase
- No rigid enforcement of phase order

## Non-Functional Requirements

### Performance
- Instant startup (no compilation)
- Sub-second command execution
- Minimal dependencies (just js-yaml)

### Usability
- 5-minute onboarding for new users
- Works with any programming language
- No IDE or tool requirements
- Compatible with all AI providers

### Flexibility
- Customizable through simple markdown edits
- Works for any project type
- Scales from solo to enterprise
- No lock-in or proprietary formats

## Success Metrics

1. **Adoption Speed**: New user productive in < 30 minutes
2. **Simplicity**: Core CLI under 100 lines of code
3. **Flexibility**: Works with 100% of project types
4. **AI Effectiveness**: 80%+ of suggestions accepted

## Technical Constraints

- Must work with Node.js 14+
- No TypeScript requirement
- Maximum 3 dependencies
- All configuration in YAML/Markdown

## Out of Scope

- Complex type systems
- Compiled languages for framework
- GUI/Web interface (CLI only)
- Automated code generation without review

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Too simple for complex projects | Medium | Extensible through templates |
| AI misunderstands context | High | Clear prompt engineering |
| Loss of type safety | Low | AI validates in conversation |

## Implementation Phases

### Phase 1: Core System (Week 1)
- Basic CLI commands
- Markdown state management
- Initial agent templates

### Phase 2: AI Integration (Week 2)
- Agent conversation flows
- Context awareness
- Prompt optimization

### Phase 3: Polish (Week 3)
- Documentation
- Examples
- Community templates

## Appendix

### Example Conversation Flow

```
User: forge new "user authentication"

System: ✨ Started new cycle: user authentication
        📋 Current phase: Focus
        🤖 Claude will guide you through each phase

User: I need OAuth with Google and GitHub

Claude: I'll help you design the authentication system. As the Architect Agent, 
        let me analyze your requirements:

        For OAuth with Google and GitHub, you'll need:
        1. OAuth client registration for both providers
        2. Callback URL handling
        3. User profile mapping
        4. Session management
        
        Should I create a detailed architecture plan?
```