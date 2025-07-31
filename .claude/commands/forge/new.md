# /forge new

## Pattern
```
/forge new <feature-name>
```

## Description
Start a new FORGE development cycle for the specified feature.

## Parameters
- `feature-name` (required): Name of the feature to develop
  - Use quotes for multi-word names: `/forge new "user authentication"`
  - Use kebab-case for single words: `/forge new user-auth`

## Action
When this command is recognized:
1. Create a new cycle file based on team/solo mode
2. Use the cycle.md template with feature name
3. Set status to "Focus Phase"
4. Provide confirmation with next steps

## Implementation
Execute: `./forge new "<feature-name>"` or `forge new "<feature-name>"`

## Examples
```
User: /forge new authentication-system
Claude: Starting new FORGE cycle...

✨ Started: authentication-system
📋 Phase: Focus
🤖 Claude will guide you

Next: Let me help you gather requirements for authentication-system...
```

```
User: /forge new "payment processing"
Claude: Starting new FORGE cycle...

✨ Started: payment processing
📋 Phase: Focus
🤖 Claude will guide you
```

## Validation
- Check .forge/current.md created (solo mode)
- Check .forge/current/<feature>.md created (team mode)
- Verify cycle content includes feature name

## Error Handling
- Missing feature name: "Usage: /forge new <feature-name>"
- Active cycle exists: Suggest completing or working in team mode

## Related Commands
- `/forge status` - Check cycle progress
- `/forge complete` - Complete this cycle when done