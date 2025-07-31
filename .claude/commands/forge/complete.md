# /forge complete

## Pattern
```
/forge complete [cycle-file]
```

## Description
Complete and archive the current or specified development cycle.

## Parameters
- `cycle-file` (optional): Specific cycle file to complete (team mode only)
  - If omitted, completes .forge/current.md (solo mode)

## Action
When this command is recognized:
1. Locate the cycle file to complete
2. Move it to .forge/history/ with timestamp
3. Provide confirmation of archival
4. Suggest next steps

## Implementation
Execute: `./forge complete [cycle-file]` or `forge complete [cycle-file]`

## Examples
```
User: /forge complete
Claude: Completing current cycle...

✅ Cycle completed and archived
📁 Archived to: .forge/history/authentication-system-2025-07-31T10-30-45.md

Ready to start a new cycle with /forge new
```

```
User: /forge complete payment-processing.md
Claude: Completing payment-processing cycle...

✅ Cycle completed and archived
📁 Archived to: .forge/history/payment-processing-2025-07-31T10-30-45.md
```

## Validation
- Verify file moved to history directory
- Check timestamp added to filename
- Confirm original file no longer exists

## Error Handling
- No active cycle: "No active cycle to complete"
- File not found: "Cycle file not found: <filename>"
- Team mode hint: Show available cycles if file not specified

## Related Commands
- `/forge status` - Check before completing
- `/forge new` - Start a new cycle after completion