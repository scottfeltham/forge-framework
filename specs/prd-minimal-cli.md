# PRD: Minimal CLI Design

**Feature**: Ultra-Lightweight Command Line Interface  
**Version**: 1.0  
**Date**: 2025-07-29  
**Status**: Draft

## Executive Summary

Create a command-line interface so simple that it requires no documentation, focuses on natural language interaction, and stays under 100 lines of code while providing full FORGE functionality.

## Problem Statement

Traditional CLIs suffer from:
- Dozens of commands to memorize
- Complex flag combinations
- Extensive documentation requirements
- Feature creep over time
- Steep learning curves

Users spend more time reading CLI docs than building features.

## Solution Overview

A minimal CLI with just 4 intuitive commands that map to natural development flow. All complexity is handled through AI conversation, not command flags.

## User Stories

### As a New User
- I want to start using FORGE without reading documentation
- I want commands that make intuitive sense
- I want helpful output when I make mistakes
- I want to focus on my feature, not the tool

### As an Experienced Developer
- I want fast, predictable commands
- I want to integrate with my existing workflow
- I want no surprising behavior changes
- I want extensibility through simplicity

### As an AI Agent
- I need to guide users naturally
- I need context from the file system
- I need to suggest next steps
- I need to handle complexity in conversation

## Functional Requirements

### 1. Core Commands

#### forge init
- Creates forge.yaml configuration
- Sets up .forge directory
- No flags or options
- Idempotent operation

```bash
$ forge init
🔨 FORGE initialized!
📝 Edit forge.yaml to customize your project
🤖 Run "forge new <feature>" to start building
```

#### forge new <feature>
- Starts a new development cycle
- Single argument: feature name
- Creates from template
- Activates AI guidance

```bash
$ forge new "user authentication" 
✨ Started new cycle: user authentication
📋 Current phase: Focus
🤖 Claude will guide you through each phase
```

#### forge status
- Shows current cycle state
- No arguments needed
- Displays markdown content
- Works from any directory

```bash
$ forge status
# Feature: user authentication

**Started**: 2024-01-15  
**Status**: Focus Phase

## 📋 Progress

### Phase 1: Focus 🎯 [Active]
- [x] Gather requirements
- [ ] Analyze impact
...
```

#### forge complete
- Archives current cycle
- No arguments needed
- Preserves all history
- Ready for next cycle

```bash
$ forge complete
✅ Cycle completed and archived
```

### 2. Command Philosophy

#### No Flags
- Every command has one clear purpose
- Options handled through conversation
- No complex combinations
- No hidden behaviors

#### Natural Flow
```
init → new → (work) → status → complete → new → ...
```

#### Helpful Errors
```bash
$ forge deploy
Unknown command: deploy

🔨 FORGE commands:
  forge init          Initialize FORGE
  forge new <name>    Start a feature  
  forge status        Show progress
  forge complete      Archive cycle

💡 For deployment, ask Claude: "How do I deploy this?"
```

### 3. Implementation Simplicity

```javascript
#!/usr/bin/env node

const commands = {
  init: () => { /* ~10 lines */ },
  new: (name) => { /* ~15 lines */ },
  status: () => { /* ~5 lines */ },
  complete: () => { /* ~10 lines */ }
};

// Command routing: ~10 lines
// Help display: ~10 lines
// Error handling: ~10 lines
// Total: <100 lines
```

### 4. AI Integration Points

Instead of CLI complexity, AI handles:
- Configuration options
- Workflow customization
- Advanced operations
- Tool integrations
- Best practices

Example:
```
User: How do I configure CI/CD?

Claude: I'll help you set up CI/CD. Based on your project, I recommend...
        [Reads forge.yaml and current.md for context]
```

## Non-Functional Requirements

### Simplicity
- Under 100 lines of code
- No external dependencies beyond js-yaml
- Single file implementation
- No build process

### Speed
- Instant command execution
- No startup delay
- No cache warming
- No network calls

### Reliability
- Clear error messages
- No silent failures
- Idempotent operations
- Graceful degradation

### Portability
- Works on all platforms
- No shell-specific features
- Standard Node.js only
- No global pollution

## Success Metrics

1. **Learning Time**: New user productive in <5 minutes
2. **Code Size**: Core CLI stays under 100 lines
3. **Command Memory**: Users remember all commands after first use
4. **Error Rate**: <5% command errors after first day

## Technical Constraints

- Node.js 14+ compatible
- No TypeScript requirement
- Maximum 2 npm dependencies
- Single executable file

## Out of Scope

- Subcommands
- Command aliases
- Shell completions
- Interactive modes
- Configuration commands
- Plugin systems

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Too simple for power users | Medium | AI handles advanced needs |
| Missing common CLI features | Low | Intentional minimalism |
| No configuration validation | Low | AI guides correct usage |
| Limited extensibility | Medium | Fork-friendly codebase |

## Implementation Examples

### Complete CLI Implementation

```javascript
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const command = process.argv[2];
const args = process.argv.slice(3);

// Ensure .forge directory exists
if (!fs.existsSync('.forge')) {
  fs.mkdirSync('.forge', { recursive: true });
  fs.mkdirSync('.forge/history', { recursive: true });
}

const commands = {
  init: () => {
    const config = `# FORGE Framework Configuration
project: ${path.basename(process.cwd())}
description: Describe your project here

mode: conversational

ai:
  primary: claude
  model: sonnet
`;
    fs.writeFileSync('forge.yaml', config);
    console.log('🔨 FORGE initialized!');
    console.log('📝 Edit forge.yaml to customize your project');
    console.log('🤖 Run "forge new <feature>" to start building');
  },

  new: (featureName) => {
    if (!featureName) {
      console.log('Usage: forge new <feature-name>');
      return;
    }
    
    const template = fs.readFileSync(
      path.join(__dirname, 'templates/cycle.md'), 
      'utf8'
    );
    
    const cycleContent = template
      .replace(/{{FEATURE}}/g, featureName)
      .replace(/{{DATE}}/g, new Date().toISOString().split('T')[0]);
    
    fs.writeFileSync('.forge/current.md', cycleContent);
    console.log(`✨ Started new cycle: ${featureName}`);
    console.log('📋 Current phase: Focus');
    console.log('🤖 Claude will guide you through each phase');
  },

  status: () => {
    if (fs.existsSync('.forge/current.md')) {
      console.log(fs.readFileSync('.forge/current.md', 'utf8'));
    } else {
      console.log('No active cycle. Run: forge new <feature>');
    }
  },

  complete: () => {
    if (fs.existsSync('.forge/current.md')) {
      const current = fs.readFileSync('.forge/current.md', 'utf8');
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      fs.writeFileSync(`.forge/history/cycle-${timestamp}.md`, current);
      fs.unlinkSync('.forge/current.md');
      console.log('✅ Cycle completed and archived');
    }
  }
};

// Execute command
if (commands[command]) {
  commands[command](...args);
} else {
  console.log('🔨 FORGE - AI-Driven Development Framework\n');
  console.log('Commands:');
  console.log('  forge init          Initialize FORGE');
  console.log('  forge new <name>    Start a new feature');
  console.log('  forge status        Show current progress');
  console.log('  forge complete      Archive current cycle');
  
  if (command) {
    console.log(`\n❌ Unknown command: ${command}`);
    console.log('💡 Ask Claude for help with advanced features');
  }
}
```

## Appendix

### Design Decisions

1. **Why only 4 commands?**
   - Covers complete lifecycle
   - Easy to remember
   - Forces simplicity
   - AI handles complexity

2. **Why no configuration commands?**
   - Direct file editing is clearer
   - AI can guide configuration
   - Reduces command surface
   - Version control friendly

3. **Why no flags?**
   - Flags create complexity
   - Natural language is better
   - AI provides flexibility
   - Simpler mental model

### Future Considerations

If the community demands more commands, they should:
- Follow the same simplicity principles
- Be optional additions
- Not break existing workflow
- Be implementable in <20 lines each