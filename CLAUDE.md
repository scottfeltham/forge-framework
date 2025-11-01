# Project Context for Claude

This file provides persistent context for Claude and other AI assistants working on the FORGE framework.

## Project Overview

**Name**: FORGE Framework
**Type**: AI-powered development framework
**Tech Stack**: Node.js, JavaScript
**Started**: 2024

## Architecture Patterns

### Overall Architecture
- Minimal CLI (under 200 lines of code)
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
- Under 200 lines for main CLI
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
1. Keep CLI minimal and concise
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

## Slash Commands

FORGE supports slash commands for explicit action recognition. When you see patterns like:
- `/forge init`
- `/forge new <feature>`
- `/forge status`
- `/forge complete`
- `/forge learn [action]`
- `/forge document`
- `/forge help`

These are explicit commands that should be executed immediately. See `.claude/commands/forge/` for detailed command definitions.

### Important: Natural Language Recognition
Even without the slash, phrases like "forge a new installer" or "forge new authentication" should be recognized as FORGE commands and trigger the appropriate cycle creation.

## Conversational PRD Building

FORGE uses an **interactive, conversational approach** when creating new development cycles:

### Starting a New Cycle

When `forge new <feature>` is called with minimal information, AI assistants should:

1. **Ask clarifying questions** about the feature requirements
2. **Guide through PRD creation** with structured prompts
3. **Validate completeness** before proceeding
4. **Request confirmation** showing what will be created

**Example Flow:**
```bash
forge new "user-authentication"

# AI should respond with questions about:
# - What authentication methods?
# - Security requirements?
# - Integration points?
# - Success criteria?
```

### PRD Requirements

A comprehensive PRD should include:

- **User Context**: Who needs this and why?
- **Acceptance Criteria**: What defines success?
- **Technical Details**: System components and integrations
- **Security & Compliance**: Requirements and standards
- **Success Metrics**: Measurable outcomes

See [docs/conversational-prd-workflow.md](docs/conversational-prd-workflow.md) for detailed examples.

## Command Safety and Destructive Operations

**CRITICAL: AI assistants must enforce safety checks for all destructive operations.**

### Protected Command Patterns

AI assistants must require human approval before executing:

**File Deletion:**
- `rm -rf` - Recursive deletion
- `rm /path/` - Directory deletion
- Any `rm` with wildcards (`rm *`)

**Git Operations:**
- `git push --force` - Force push (suggest --force-with-lease instead)
- `git reset --hard` - Hard reset (loses changes)
- `git clean -fd` - Cleaning untracked files
- `git branch -D` - Force delete branch

**System Modifications:**
- `sudo rm` - Elevated deletion
- `sudo shutdown/reboot` - System control
- `kill -9` - Force kill processes
- Package removal operations

**Database Operations:**
- `DROP DATABASE` - Database deletion
- `DROP TABLE` - Table deletion
- `TRUNCATE` - Data truncation

### AI Assistant Guidelines

When working with FORGE, AI assistants MUST:

1. **NEVER execute destructive commands without explicit human approval**
2. **ALWAYS suggest safer alternatives first**
3. **REQUIRE confirmation for any command matching destructive patterns**
4. **EXPLAIN the risks before requesting approval**
5. **LOG all destructive operations for audit trail**

### Safety Workflow

```
1. AI detects potentially destructive command
2. AI presents WARNING with:
   - Command and risk level
   - What could go wrong
   - Safer alternatives
   - Approval requirement
3. Human reviews and approves/rejects
4. Command executes only after confirmation
```

### Example: Safe vs Unsafe

❌ **UNSAFE - Require approval:**
```bash
rm -rf node_modules/
git push --force
chmod 777 -R .
```

✅ **SAFE - Recommended alternatives:**
```bash
# Instead of rm -rf, use package manager
npm ci  # Reinstalls cleanly

# Instead of force push
git push --force-with-lease

# Instead of 777
chmod 755 file.sh  # Specific, appropriate permissions
```

## Agent Specialization

FORGE includes base AI agent templates that guide different aspects of development. See [docs/AGENT_USAGE_GUIDE.md](docs/AGENT_USAGE_GUIDE.md) for:

- Phase-based agent selection
- Task-based agent mapping
- Agent collaboration patterns
- Best practices for working with agents

---

*This file helps AI assistants understand and work effectively with the FORGE framework.*