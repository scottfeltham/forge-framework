# Project Context for Claude

This file provides persistent context for Claude and other AI assistants working on the FORGE framework.

## Project Overview

**Name**: FORGE Framework
**Type**: AI-powered development framework
**Tech Stack**: Node.js, JavaScript
**Started**: 2024

## Architecture Patterns

### Overall Architecture
- Minimal CLI (88 lines of code)
- Markdown-based state management
- AI-driven intelligence (no hardcoded logic)
- Conversational interface

### Core Philosophy
- AI handles complexity, humans handle creativity
- Radical simplicity - intelligence lives in agents, not code
- No framework detection or complex logic in CLI
- Pure file creation with AI-driven configuration

### Framework Structure
- **forge**: Main CLI script
- **templates/**: Markdown templates for cycles, agents, etc.
- **agents/**: AI agent role definitions
- **docs/**: Comprehensive documentation
- **.forge/**: Working directory for active development

## Coding Standards

### Language Conventions
- JavaScript (Node.js)
- Minimal dependencies (only js-yaml)
- No TypeScript - keep it simple
- Unix philosophy - do one thing well

### Code Quality Principles
- Under 100 lines for main CLI
- No hardcoded project detection
- Let AI handle all complexity
- Markdown for all configuration

### Git Conventions
- Semantic commit messages
- Feature branches
- Clean, focused commits

## Key Decisions

### Technical Decisions
1. **No hardcoded detection**: AI analyzes projects instead of CLI
2. **Markdown everything**: State, config, and docs all in markdown
3. **Minimal dependencies**: Only js-yaml for config parsing

### Design Philosophy
- Conversation over configuration
- Transparency through simplicity
- AI as amplifier, not replacement
- Progress over perfection

## Performance Targets

- **CLI startup**: < 100ms
- **Command execution**: < 50ms
- **File operations**: Instant
- **AI analysis**: Dependent on AI service

## Key Learnings

### What Works Well
- Minimal CLI keeps maintenance near zero
- AI-driven approach scales infinitely
- Markdown state is universally readable
- No compilation or build steps needed

### Core Innovations
- First framework designed for AI-first development
- Proves powerful doesn't mean complex
- Shows frameworks can be conversation-based

## Team Conventions

### Development Workflow
1. Keep CLI under 100 lines
2. Put intelligence in agents/docs
3. Test with real AI interactions
4. Document in markdown

### Communication
- GitHub issues for features/bugs
- PRs for all changes
- Clear commit messages
- Update docs with code

## Important Context

### Framework Purpose
FORGE enables AI-driven development through structured conversations. It provides just enough scaffolding to guide productive work while letting AI handle all complexity.

### Target Users
- Developers using AI assistants (Claude, GPT, etc.)
- Teams wanting structured AI collaboration
- Projects needing flexible, adaptive workflows

### Design Constraints
- Must work with any AI that can read/write files
- No language or framework lock-in
- Zero configuration philosophy
- Universal markdown format

## Memory Prompts

When working on FORGE, remember:
1. Simplicity is the ultimate sophistication
2. If it requires code in the CLI, ask if AI could handle it instead
3. Documentation and agents are where intelligence lives
4. Every line of code must justify its existence

---

*This file helps AI assistants understand and work effectively with the FORGE framework.*