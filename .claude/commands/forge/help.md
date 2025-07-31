# /forge help

## Pattern
```
/forge help [command]
/forge
```

## Description
Show help information for FORGE commands.

## Parameters
- `command` (optional): Specific command to get help for
  - If omitted, shows all available commands

## Action
When this command is recognized:
1. If no command specified, list all FORGE commands
2. If command specified, show detailed help for that command
3. Provide examples and links to documentation

## Implementation
Execute: `./forge help [command]` or just explain the commands

## Examples
```
User: /forge help
Claude: 🔨 FORGE Framework Commands

Available commands:
  /forge init          Initialize FORGE in your project
  /forge new <name>    Start new feature cycle
  /forge status        Show current cycle status
  /forge complete      Archive completed cycle
  /forge learn         View/manage learnings
  /forge document      Start documentation session
  /forge help          Show this help

Type /forge help <command> for detailed information.
```

```
User: /forge help new
Claude: 📖 /forge new - Start a new development cycle

Usage: /forge new <feature-name>

Starts a new FORGE development cycle with 5 phases:
1. Focus - Gather requirements and plan
2. Orchestrate - Break down tasks
3. Refine - Implement and test
4. Generate - Build and deploy
5. Evaluate - Review and learn

Examples:
  /forge new authentication
  /forge new "user profile page"

The feature name becomes the cycle title and helps track your work.
```

## Validation
- Help text is accurate and complete
- Command-specific help matches actual behavior

## Error Handling
- Unknown command: "Unknown command. Use /forge help to see available commands"

## Related Commands
- All other FORGE commands can be discovered through help