# /forge learn

## Pattern
```
/forge learn [action]
```

## Description
Access and manage the FORGE learning system to capture and apply project knowledge.

## Parameters
- `action` (optional):
  - `retrospective` - Create a retrospective template
  - `pattern` - Show pattern documentation template
  - `claude` - Create CLAUDE.md for AI memory
  - If omitted, shows current learnings

## Action
When this command is recognized:
1. If no action specified, display .forge/LEARNINGS.md
2. If action specified, execute the corresponding template action
3. Provide guidance on using the learning system

## Implementation
Execute: `./forge learn [action]` or `forge learn [action]`

## Examples
```
User: /forge learn
Claude: Displaying current learnings...

# FORGE Project Learnings

## 🎯 Patterns That Work
- Natural Language Commands: FORGE commands blend naturally into conversation...
[displays full learnings]
```

```
User: /forge learn retrospective
Claude: Creating retrospective template...

[Shows retrospective template for filling out]
```

```
User: /forge learn claude
Claude: Creating CLAUDE.md for AI memory...

📝 Created CLAUDE.md for AI memory context
✏️ Fill out the template with your project specifics
🧠 Claude will use this for persistent context across sessions
```

## Validation
- Check appropriate file created/displayed
- Verify templates match expected format

## Error Handling
- Unknown action: "Options: retrospective|pattern|claude"
- Missing learnings file: Creates new one automatically

## Related Commands
- `/forge complete` - Complete cycles to add to learnings
- `/forge status` - Check current work before retrospective