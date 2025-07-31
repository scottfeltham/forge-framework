# /forge init

## Pattern
```
/forge init
```

## Description
Initialize FORGE framework in the current project directory.

## Parameters
None required.

## Action
When this command is recognized:
1. Check if FORGE is already initialized (forge.yaml exists)
2. If not initialized:
   - Create forge.yaml with default configuration
   - Create .forge directory structure
   - Generate INIT_ANALYSIS.md for AI project analysis
3. Provide confirmation message

## Implementation
Execute: `./forge init` or `forge init` (depending on installation type)

## Examples
```
User: /forge init
Claude: Initializing FORGE framework...

🔨 FORGE initialized!

🤖 Claude will analyze your project...
```

## Validation
- Check for forge.yaml existence
- Verify .forge directory created
- Confirm INIT_ANALYSIS.md exists

## Error Handling
- If already initialized: "⚠️ FORGE already initialized"
- If permission denied: Suggest checking file permissions

## Related Commands
- `/forge new` - Start first cycle after initialization
- `/forge help` - Get more information about FORGE