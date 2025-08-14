# Phase Validation Examples

This document demonstrates the phase validation system in action with real-world scenarios.

## Example 1: Standard Feature Development

### Starting a New Feature

```bash
$ forge new "user authentication"
✨ Started: user authentication
📋 Phase: Focus
🤖 Claude will guide you
```

### Checking Initial Status

```bash
$ forge status

📋 Current Cycle: user authentication
──────────────────────────────────────────────────────────────
⏳ 🎯 Focus        [░░░░░░░░░░] 0%
⏳ 📝 Orchestrate  [░░░░░░░░░░] 0%
⏳ 🔨 Refine       [░░░░░░░░░░] 0%
⏳ 🚀 Generate     [░░░░░░░░░░] 0%
⏳ 📊 Evaluate     [░░░░░░░░░░] 0%

📍 Current Phase: Focus

💡 Use "forge status --detailed" for full cycle view
```

### After Completing Some Tasks

```bash
$ forge status

📋 Current Cycle: user authentication
──────────────────────────────────────────────────
🔄 🎯 Focus        [██████░░░░] 60%
⏳ 📝 Orchestrate  [░░░░░░░░░░] 0%
⏳ 🔨 Refine       [░░░░░░░░░░] 0%
⏳ 🚀 Generate     [░░░░░░░░░░] 0%
⏳ 📊 Evaluate     [░░░░░░░░░░] 0%

📍 Current Phase: Focus
   Next tasks:
   • Define test scenarios (MANDATORY)
   • Identify risks
```

### Attempting to Move to Next Phase

```bash
$ forge phase next

⚠️  Cannot move to next phase. Current phase "Focus" has incomplete mandatory items:
   • Define test scenarios (MANDATORY)

💡 Complete these items or use "forge phase next --force" to skip validation
```

### After Completing Mandatory Items

```bash
$ forge phase next

✅ Moved from Focus to Orchestrate
```

## Example 2: Validation Failures and Recovery

### Attempting Premature Completion

```bash
$ forge complete

⚠️  Cycle has incomplete phases!

Incomplete phases: Orchestrate, Refine, Generate, Evaluate

Mandatory tasks not completed:
  📝 Orchestrate: Break down tasks
  🔨 Refine: Write tests

💡 Options:
  1. Complete the remaining tasks
  2. Use "forge complete --force" to archive anyway
  3. Use "forge status" to see detailed progress
```

### Checking Detailed Phase Status

```bash
$ forge phase status

📊 Phase Progress Overview
──────────────────────────────────────────────────
✅ 🎯 Focus        [██████████] 100%
🔄 📝 Orchestrate  [████░░░░░░] 40%
     ⚠️  Break down tasks
     ⚠️  Plan dependencies
⏳ 🔨 Refine       [░░░░░░░░░░] 0%
     ⚠️  Write tests
⏳ 🚀 Generate     [░░░░░░░░░░] 0%
⏳ 📊 Evaluate     [░░░░░░░░░░] 0%
```

## Example 3: Using Force Flags

### Emergency Hotfix Scenario

```bash
# Need to archive incomplete cycle for emergency
$ forge complete --force

⚠️  Cycle archived (forced completion)
📁 Archived to: .forge/history/cycle-2024-01-15T10-30-45-123Z.md
```

### Skipping Phase Validation

```bash
# Moving ahead despite incomplete items
$ forge phase next --force

⚠️  Forced transition to next phase (validation skipped)
✅ Moved from Orchestrate to Refine
```

## Example 4: Team Mode with Multiple Cycles

### Multiple Active Cycles

```bash
$ forge status

📊 Active cycles (team mode):
  • payment-processing
  • user-profile
  • search-feature

Use "forge status <cycle-name>.md" for details
```

### Checking Specific Cycle

```bash
$ forge status payment-processing.md

📋 Current Cycle: payment-processing
──────────────────────────────────────────────────
✅ 🎯 Focus        [██████████] 100%
✅ 📝 Orchestrate  [██████████] 100%
🔄 🔨 Refine       [████████░░] 80%
⏳ 🚀 Generate     [░░░░░░░░░░] 0%
⏳ 📊 Evaluate     [░░░░░░░░░░] 0%

📍 Current Phase: Refine
   Next tasks:
   • Code review
```

### Completing Specific Cycle

```bash
$ forge complete payment-processing.md

⚠️  Cycle has incomplete phases!

Incomplete phases: Refine, Generate, Evaluate

💡 Options:
  1. Complete the remaining tasks
  2. Use "forge complete payment-processing.md --force" to archive anyway
```

## Example 5: Bulk Phase Completion

### Marking All Items Complete

```bash
$ forge phase complete

✅ Marked Refine phase as complete

$ forge status

📋 Current Cycle: feature-xyz
──────────────────────────────────────────────────
✅ 🎯 Focus        [██████████] 100%
✅ 📝 Orchestrate  [██████████] 100%
✅ 🔨 Refine       [██████████] 100%
⏳ 🚀 Generate     [░░░░░░░░░░] 0%
⏳ 📊 Evaluate     [░░░░░░░░░░] 0%

📍 Current Phase: Generate
```

## Example 6: Complete Workflow

### Full Cycle from Start to Finish

```bash
# 1. Start new feature
$ forge new "api refactoring"

# 2. Work through Focus phase
# ... complete requirements, test scenarios, PRD ...

# 3. Check progress
$ forge status
🔄 🎯 Focus        [████████░░] 80%

# 4. Complete Focus phase
$ forge phase complete
✅ Marked Focus phase as complete

# 5. Move to Orchestrate
$ forge phase next
✅ Moved from Focus to Orchestrate

# 6. Continue through all phases
# ... work through Orchestrate, Refine, Generate ...

# 7. Final phase
$ forge phase next
✅ Moved from Generate to Evaluate

# 8. Complete evaluation
# ... metrics, feedback, retrospective ...

# 9. Check final status
$ forge status
✨ All phases complete! Ready to archive with "forge complete"

# 10. Archive the cycle
$ forge complete
✅ Cycle completed successfully!
📁 Archived to: .forge/history/cycle-2024-01-15T14-22-10-456Z.md
```

## Example 7: AI Assistant Integration

### Claude Using Phase Validation

```
User: Let's finish this feature and move on

Claude: Let me check the current status first:

$ forge status

I see we're in the Refine phase with 60% completion. Before we can 
complete this cycle, we need to:

1. Finish the remaining tests (currently at 60%)
2. Complete the code review
3. Move through Generate phase (deployment prep)
4. Complete Evaluate phase (metrics and retrospective)

Would you like me to help complete these remaining tasks, or should 
we force-complete the cycle for now?

User: Let's complete the remaining tasks

Claude: Great! Let's start with finishing the tests...
[Proceeds to help complete each phase properly]
```

## Common Patterns

### Pattern 1: Daily Progress Check

```bash
# Morning standup routine
$ forge status          # Quick overview
$ forge phase status    # Detailed view if needed
```

### Pattern 2: Phase Transition Workflow

```bash
# Complete current phase work
$ forge phase complete  # Mark all done

# Move forward
$ forge phase next      # Transition

# Start new phase
$ forge status          # See new tasks
```

### Pattern 3: End-of-Sprint Completion

```bash
# Check all cycles
$ forge status

# Complete finished ones
$ forge complete feature-a.md
$ forge complete feature-b.md

# Force-complete experimental work
$ forge complete experiment.md --force
```

## Tips from Real Usage

1. **Use status frequently** - It's fast and informative
2. **Complete phases fully** - Avoid technical debt
3. **Document force usage** - Add note why you skipped
4. **Review archived cycles** - Learn from shortcuts
5. **Customize templates** - Mark your critical items as mandatory

## Troubleshooting Validation Issues

### Issue: Can't find what's blocking

```bash
$ forge phase status   # Shows all mandatory items with ⚠️
```

### Issue: Too many mandatory items

Edit `.forge/templates/cycle.md` to reduce mandatory markers

### Issue: Need to bypass temporarily

```bash
$ forge complete --force  # Document why in commit message
```

### Issue: Lost track of progress

```bash
$ forge status --detailed  # Shows full cycle content
```