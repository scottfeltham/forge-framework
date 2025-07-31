# /forge document

## Pattern
```
/forge document
```

## Description
Start an AI-powered documentation session for creating, updating, or organizing project documentation.

## Parameters
None required.

## Action
When this command is recognized:
1. Create .forge/DOCUMENT_SESSION.md with documentation guidance
2. Provide context for documentation tasks
3. Offer to help with various documentation needs

## Implementation
Execute: `./forge document` or `forge document`

## Examples
```
User: /forge document
Claude: Starting documentation session...

📚 Documentation session started

I can help you:
• Create new documentation
• Update existing docs  
• Fix misplaced files (PRDs → specs/, docs → docs/)
• Generate from code or cycles

Created: .forge/DOCUMENT_SESSION.md

What documentation would you like to work on?
```

## Validation
- Verify .forge/DOCUMENT_SESSION.md created
- Check session file contains proper template

## Error Handling
- Permission issues: Suggest checking .forge directory permissions

## Related Commands
- `/forge learn` - Document learnings and patterns
- `/forge status` - Check cycles that may need documentation