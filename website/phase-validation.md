---
layout: forge
title: Phase Validation
parent: Core Concepts
nav_order: 3
---

# Phase Validation System
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

FORGE's phase validation system ensures proper workflow progression through the 5-phase development cycle, preventing premature completion and maintaining development discipline.

## The Problem It Solves

Before phase validation, developers could:
- Skip critical steps in the development process
- Archive cycles without completing mandatory tasks
- Lose track of progress across phases
- Miss important quality checkpoints

The validation system addresses these issues while maintaining flexibility.

## How It Works

### Automatic Progress Tracking

FORGE analyzes your cycle markdown to:
- Parse checkbox completion status
- Identify mandatory vs optional tasks
- Calculate phase progress percentages
- Determine current active phase

### Validation Rules

1. **Mandatory Task Enforcement**
   - Tasks marked as `(MANDATORY)` must be completed
   - Phase transitions blocked until mandatory items done
   - Clear identification of blocking items

2. **Phase Dependencies**
   - Phases must be completed in order
   - Can't skip ahead without finishing current phase
   - Visual indicators show phase status

3. **Cycle Completion**
   - All phases must be substantially complete
   - Mandatory items across all phases checked
   - Validation prevents accidental archival

## Visual Progress System

### Progress Indicators

FORGE provides rich visual feedback:

```
📋 Current Cycle: user authentication
──────────────────────────────────────────────────
✅ 🎯 Focus        [██████████] 100%
🔄 📝 Orchestrate  [████░░░░░░] 40%
⏳ 🔨 Refine       [░░░░░░░░░░] 0%
⏳ 🚀 Generate     [░░░░░░░░░░] 0%
⏳ 📊 Evaluate     [░░░░░░░░░░] 0%
```

### Status Symbols

| Symbol | Meaning | Description |
|--------|---------|-------------|
| ⏳ | Pending | Phase not started |
| 🔄 | Active | Phase in progress |
| ✅ | Complete | Phase finished |
| ⚠️ | Blocked | Has incomplete mandatory items |

### Progress Bars

Visual representation of completion:
- `[██████████]` - 100% complete
- `[████░░░░░░]` - 40% complete  
- `[░░░░░░░░░░]` - 0% not started

## Mandatory Tasks

### What Makes a Task Mandatory?

Tasks containing `(MANDATORY)` in their text are required:
- Test scenario definition in Focus phase
- Critical architectural decisions
- Security validations
- Production readiness checks

### Example Mandatory Task

```markdown
### Phase 1: Focus 🎯 [Active]
- [ ] Gather requirements
- [ ] Define test scenarios (MANDATORY)
- [ ] Create/Update PRD in specs/
```

The test scenarios task blocks phase progression until completed.

## Validation Commands

### Check Status
```bash
forge status              # Quick progress view
forge phase status        # Detailed with mandatory items
```

### Attempt Completion
```bash
forge complete           # Validates before archiving
```

Output when validation fails:
```
⚠️  Cycle has incomplete phases!

Incomplete phases: Focus, Orchestrate
Mandatory tasks not completed:
  🎯 Focus: Define test scenarios (MANDATORY)

💡 Options:
  1. Complete the remaining tasks
  2. Use "forge complete --force" to archive anyway
```

### Phase Transitions
```bash
forge phase next         # Move to next phase
```

Blocks with helpful feedback:
```
⚠️  Cannot move to next phase. Current phase "Focus" has incomplete mandatory items:
   • Define test scenarios (MANDATORY)

💡 Complete these items or use "forge phase next --force" to skip validation
```

## Override Options

### When to Use --force

The `--force` flag bypasses validation for:
- Experimental or prototype work
- Urgent hotfixes
- Special circumstances
- Learning and exploration

```bash
forge complete --force      # Archive incomplete cycle
forge phase next --force   # Skip phase validation
```

### Best Practices

1. **Use validation by default** - Let FORGE guide you
2. **Complete mandatory items** - They exist for good reasons
3. **Document exceptions** - Note why you used --force
4. **Review incomplete cycles** - Learn from shortcuts taken

## Benefits

### For Individual Developers
- Never forget critical steps
- Visual progress tracking
- Confidence in completeness
- Better work habits

### For Teams
- Consistent quality standards
- Clear progress visibility
- Reduced review burden
- Shared understanding

### For AI Assistants
- Clear completion criteria
- Structured workflow guidance
- Validation checkpoints
- Progress awareness

## Configuration

### Customizing Mandatory Items

Edit your cycle templates to mark critical items:

```markdown
- [ ] Security review (MANDATORY)
- [ ] Performance testing (MANDATORY)
- [ ] Documentation update
```

### Project-Specific Rules

In your `CLAUDE.md`:
```markdown
## Validation Rules
- All features require test scenarios
- Security review mandatory for auth changes
- Performance benchmarks for API endpoints
```

## Examples

### Successful Completion Flow

```bash
# Start feature
forge new "payment processing"

# Work through Focus phase
# ... complete all mandatory items ...

# Move to next phase
forge phase next
✅ Moved from Focus to Orchestrate

# Continue through all phases
# ... complete work ...

# Final completion
forge complete
✅ Cycle completed successfully!
```

### Handling Validation Failures

```bash
# Attempt completion
forge complete
⚠️  Cycle has incomplete phases!

# Check what's missing
forge phase status

# Complete missing items
# ... update cycle file ...

# Retry completion
forge complete
✅ Cycle completed successfully!
```

## Tips for Success

1. **Start with test scenarios** - Define success before building
2. **Check progress regularly** - Use `forge status` often
3. **Complete phases fully** - Don't rush ahead
4. **Use phase complete** - Mark bulk items done
5. **Document learnings** - Capture insights for next time

## Integration with AI Workflow

AI assistants understand the validation system:

```
User: Let's complete this cycle
Claude: Let me check the validation status first...

[Runs forge complete]

I see there are incomplete mandatory items in the Focus phase. 
We need to define test scenarios before we can archive this cycle.
Would you like me to help create those now?
```

## Troubleshooting

### Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Can't complete cycle | Incomplete phases | Check `forge phase status` |
| Can't move phases | Mandatory items | Complete required tasks |
| Progress shows 0% | No checkboxes marked | Update cycle markdown |
| Validation too strict | Wrong items mandatory | Edit cycle template |

### Getting Help

- Run `forge phase status` for detailed view
- Check mandatory items with ⚠️ symbol
- Use `--force` temporarily if blocked
- Update templates for future cycles

## Future Enhancements

Planned improvements:
- Configurable validation rules
- Custom mandatory patterns
- Phase dependencies
- Automated checkbox updates
- Integration with CI/CD

## Conclusion

The phase validation system brings discipline to the development process while maintaining the flexibility developers need. It ensures quality without sacrificing agility, making FORGE a more robust framework for AI-driven development.