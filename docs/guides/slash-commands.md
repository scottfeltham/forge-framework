# FORGE Slash Commands Guide

Slash commands provide explicit, unambiguous ways to interact with FORGE in Claude Code.

## Quick Reference

| Command | Description | Example |
|---------|-------------|---------|
| `/forge init` | Initialize FORGE | `/forge init` |
| `/forge new <feature>` | Start new cycle | `/forge new authentication` |
| `/forge status` | Show current cycle | `/forge status` |
| `/forge complete [file]` | Archive cycle | `/forge complete` |
| `/forge learn [action]` | Access learnings | `/forge learn retrospective` |
| `/forge document` | Start docs session | `/forge document` |
| `/forge help [command]` | Get help | `/forge help new` |

## Detailed Usage

### Starting a New Feature
```
/forge new user-authentication
```
Creates a new development cycle with the FORGE 5-phase process.

### Checking Progress
```
/forge status
```
Shows your current cycle with phase progress and checkboxes.

### Learning from Experience
```
/forge learn
```
Display accumulated project learnings.

```
/forge learn retrospective
```
Create a retrospective template for the current cycle.

### Getting Help
```
/forge help
```
List all available commands.

```
/forge help new
```
Get detailed help for a specific command.

## Natural Language Alternative

All slash commands also work with natural language:
- `/forge new authentication` = "forge new authentication"
- `/forge status` = "show forge status"
- `/forge complete` = "complete the current forge cycle"

## Tips

1. **Multi-word features**: Use quotes
   ```
   /forge new "payment processing system"
   ```

2. **Team mode**: Complete specific cycles
   ```
   /forge complete payment-system.md
   ```

3. **Command discovery**: Just type `/forge` to see all commands

## Benefits of Slash Commands

- **Explicit**: No ambiguity about intent
- **Fast**: Direct execution without interpretation
- **Discoverable**: Easy to see available options
- **Consistent**: Same behavior every time

## Implementation Details

Slash commands are defined in `.claude/commands/forge/` in your project. Each command has:
- Pattern matching rules
- Parameter definitions
- Execution instructions
- Examples and validation

This allows Claude to recognize and execute commands reliably.