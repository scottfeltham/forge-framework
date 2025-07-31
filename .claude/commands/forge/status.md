# /forge status

## Pattern
```
/forge status
```

## Description
Show the current status of active FORGE development cycles.

## Parameters
None required.

## Action
When this command is recognized:
1. Check for active cycles in .forge/current.md or .forge/current/
2. Display cycle information including:
   - Feature name
   - Current phase
   - Progress checkboxes
   - Recent updates
3. If no active cycles, suggest starting one

## Implementation
Execute: `./forge status` or `forge status`

## Examples
```
User: /forge status
Claude: Checking FORGE status...

# Feature: authentication-system

**Started**: 2025-07-31
**Status**: Focus Phase
**Owner**: Developer

## 📋 Progress

### Phase 1: Focus 🎯 [Active]
- [x] Gather requirements
- [x] Define test scenarios (MANDATORY)
- [ ] Create/Update PRD in specs/
...
```

```
User: /forge status
Claude: Checking FORGE status...

No active cycle. Run: forge new <feature>
```

## Validation
- Output matches current cycle file content
- Shows appropriate message when no cycles active

## Error Handling
- Handle both solo and team modes gracefully
- Clear message if .forge directory missing

## Related Commands
- `/forge new` - Start a new cycle
- `/forge complete` - Complete current cycle