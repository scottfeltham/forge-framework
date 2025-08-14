# FORGE CLI Reference

## Overview

The FORGE CLI is a minimal yet powerful command-line interface designed for AI-driven development. All commands work seamlessly with AI assistants like Claude.

## Core Commands

### forge init
Initialize FORGE in your current project directory.

```bash
forge init
```

Creates:
- `forge.yaml` - Configuration file
- `.forge/` directory structure
- Initial analysis prompt

### forge new
Start a new development cycle for a feature.

```bash
forge new <feature-name>
forge new "user authentication"
forge new payment-system
```

Creates a new cycle file with the 5-phase template:
- Solo mode: `.forge/current.md`
- Team mode: `.forge/current/<feature-name>.md`

### forge status
Display current cycle progress with visual indicators.

```bash
forge status                # Show progress summary with bars
forge status --detailed      # Show full cycle content
```

Output includes:
- Visual progress bars for each phase
- Completion percentages
- Current active phase
- Next tasks to complete

Example output:
```
📋 Current Cycle: user authentication
──────────────────────────────────────────────────
✅ 🎯 Focus        [██████████] 100%
🔄 📝 Orchestrate  [████░░░░░░] 40%
⏳ 🔨 Refine       [░░░░░░░░░░] 0%
⏳ 🚀 Generate     [░░░░░░░░░░] 0%
⏳ 📊 Evaluate     [░░░░░░░░░░] 0%

📍 Current Phase: Orchestrate
   Next tasks:
   • Plan dependencies
   • Assign priorities
```

### forge complete
Archive a completed cycle with validation.

```bash
forge complete              # Validates all phases are done
forge complete --force      # Skip validation checks
forge complete feature.md   # Complete specific cycle (team mode)
```

Validation checks:
- All phases have mandatory items completed
- Shows incomplete phases and tasks
- Prevents premature archival
- Archives to `.forge/history/cycle-<timestamp>.md`

## Phase Management Commands

### forge phase status
Show detailed phase progress with all items.

```bash
forge phase status
```

Displays:
- All phases with progress bars
- Mandatory incomplete items highlighted
- Completion percentages
- Visual status indicators

### forge phase next
Move to the next phase with validation.

```bash
forge phase next           # Validates mandatory items
forge phase next --force   # Skip validation
```

Features:
- Checks mandatory items in current phase
- Updates phase markers in cycle file
- Activates next phase automatically
- Shows what's blocking progression

### forge phase complete
Mark the current active phase as complete.

```bash
forge phase complete
```

Actions:
- Marks all items in current phase as done
- Updates phase status to complete
- Useful for bulk completion

## Learning Commands

### forge learn
Manage project learnings and patterns.

```bash
forge learn                  # View current learnings
forge learn retrospective    # Create retrospective template
forge learn pattern         # Document a pattern
forge learn claude          # Generate CLAUDE.md file
```

## Documentation Command

### forge document
Start an AI-powered documentation session.

```bash
forge document
```

Creates a documentation session template for AI-guided documentation generation.

## MCP Commands

### forge mcp list
Show available MCP (Model Context Protocol) servers.

```bash
forge mcp list
```

### forge mcp suggest
Get MCP server recommendations for your project type.

```bash
forge mcp suggest
```

### forge mcp add
Add an MCP server to your configuration.

```bash
forge mcp add <server-name>
forge mcp add filesystem
forge mcp add github
```

## Utility Commands

### forge uninstall
Remove FORGE from your project.

```bash
forge uninstall --confirm
```

Removes:
- `forge.yaml` configuration
- `.forge/` directory and all contents

## Command Options

### Global Options
- `--force` - Skip validation checks (available on complete, phase next)
- `--detailed` - Show detailed output (available on status)
- `--confirm` - Confirm destructive actions (required for uninstall)

## Workflow Examples

### Standard Development Flow
```bash
# Start a new feature
forge new "shopping cart"

# Check progress
forge status

# Move through phases
forge phase next
forge phase next

# Complete when done
forge complete
```

### With Validation Bypass
```bash
# Force completion of incomplete cycle
forge complete --force

# Skip phase validation
forge phase next --force
```

### Team Collaboration
```bash
# Multiple features in parallel
forge new "feature-a"
forge new "feature-b"

# Check all active cycles
forge status

# Complete specific cycle
forge complete feature-a.md
```

## File Structure

FORGE creates and manages these files:

```
your-project/
├── forge.yaml              # Configuration
├── .forge/
│   ├── current.md         # Active cycle (solo mode)
│   ├── current/           # Active cycles (team mode)
│   ├── history/           # Archived cycles
│   ├── templates/         # Cycle templates
│   ├── agents/           # AI agent definitions
│   └── LEARNINGS.md      # Project learnings
└── .claude/
    ├── agents/           # Claude subagents
    └── commands/         # Slash commands
```

## Exit Codes

- `0` - Success
- `1` - General error
- Command not found shows help

## Tips

1. **Use with AI**: Commands are designed to be interpreted by AI assistants
2. **Natural Language**: Both `/forge new feature` and "forge new feature" work
3. **Check Progress**: Use `forge status` frequently to track progress
4. **Validate Phases**: Let FORGE guide you through proper phase completion
5. **Force When Needed**: Use `--force` flags for flexibility when required

## Version

Current version: 0.5.0

For updates and documentation:
- GitHub: https://github.com/scottfeltham/forge-framework
- Website: https://forgeframework.dev