# Claude Slash Commands

This directory contains slash command definitions that enhance Claude's ability to work with various frameworks and tools in your project.

## How Slash Commands Work

When you type a command like `/forge new feature-name`, Claude will:
1. Recognize the slash command pattern
2. Look for the command definition in `.claude/commands/`
3. Execute the appropriate action
4. Provide clear feedback

## Available Command Namespaces

### /forge - FORGE Framework Commands
The FORGE framework provides commands for AI-driven development cycles.

- `/forge init` - Initialize FORGE in your project
- `/forge new <feature>` - Start a new development cycle
- `/forge status` - Show current cycle status
- `/forge complete [file]` - Complete and archive a cycle
- `/forge learn [action]` - Access the learning system
- `/forge document` - Start a documentation session
- `/forge help` - Show FORGE command help

See `.claude/commands/forge/` for detailed command definitions.

## Command Structure

Each command is defined in a markdown file with:
- **Pattern**: The command syntax
- **Parameters**: Required and optional parameters
- **Action**: What the command does
- **Examples**: Usage examples
- **Validation**: How to verify success

## Adding Custom Commands

To add your own commands:
1. Create a new directory under `.claude/commands/`
2. Add markdown files for each command
3. Follow the existing pattern structure
4. Update this file with your namespace

## Natural Language Fallback

All slash commands also work with natural language. For example:
- `/forge new authentication` 
- "forge new authentication"
- "start a new forge cycle for authentication"

All three accomplish the same task.

## Tips for Claude Users

- Commands are case-insensitive
- Use quotes for multi-word parameters: `/forge new "user authentication"`
- Type just the namespace (e.g., `/forge`) to see available commands
- Add `--help` to any command for detailed information

## Common Workflows

### Starting a New Feature
```
User: /forge new authentication-system
Claude: [Creates cycle and begins requirements gathering]
```

### Daily Status Check
```
User: /forge status
Claude: [Shows current cycle progress and phase]
```

### Completing Work
```
User: /forge complete
Claude: [Archives cycle and suggests next steps]
```

### Learning and Improving
```
User: /forge learn
Claude: [Displays accumulated learnings]

User: /forge learn retrospective
Claude: [Creates retrospective template]
```