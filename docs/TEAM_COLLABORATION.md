# Team Collaboration Guide

## Overview

FORGE supports parallel development with multiple team members working on different phases or features simultaneously. The framework's markdown-based approach makes collaboration natural through standard version control.

## Collaboration Patterns

### 1. Multi-Feature Development
Multiple developers working on different features in parallel:

```
.forge/
├── current/                    # Active cycles directory
│   ├── user-auth.md           # Developer A
│   ├── payment-system.md      # Developer B
│   └── search-feature.md      # Developer C
└── history/                   # Completed cycles
```

### 2. Phase-Based Collaboration
Different roles working on different phases of the same feature:

```markdown
# Feature: Shopping Cart

## Phase 1: Focus 🎯 [Complete]
Owner: Product Manager
- [x] Gather requirements
- [x] Create PRD
- [x] Analyze impact

## Phase 2: Orchestrate 📝 [Active]
Owner: Tech Lead
- [x] Break down tasks
- [ ] Assign priorities

## Phase 3: Refine 🔨 [Active]
Owner: Developer Team
- [ ] Implement features
- [ ] Write tests
```

### 3. Role-Based Parallel Work
Different team members focusing on their expertise:

| Team Member | Phase Focus | Typical Activities |
|-------------|------------|-------------------|
| Product Owner | Focus, Evaluate | Requirements, PRDs, Success metrics |
| Architect | Focus, Orchestrate | Design, Task breakdown |
| Developers | Refine | Implementation, Testing |
| QA Engineer | Refine, Generate | Test planning, Quality gates |
| DevOps | Generate | Deployment, Infrastructure |

## Setting Up Team Collaboration

### Version Control Considerations

When using FORGE with a team, consider what to track in git:

**Recommended to Track:**
- `.forge/history/` - Completed cycles (always)
- `prds/` - Product requirement documents
- `agents/` - Custom team agents
- `forge.yaml` - Team configuration

**Optional to Track:**
- `.forge/current/` - Active cycles (improves transparency)
- `.forge/team/assignments.md` - Current assignments

**Never Track:**
- `.forge/team/temp/` - Temporary files
- `agents/local/` - Personal customizations
- `*.local.md` - Local overrides

See `.gitignore.team-example` for a comprehensive example.

### 1. Directory Structure for Teams

```bash
project/
├── .forge/
│   ├── current/              # Multiple active cycles
│   │   ├── feature-a.md      # Assigned: @alice
│   │   ├── feature-b.md      # Assigned: @bob
│   │   └── bugfix-c.md       # Assigned: @charlie
│   ├── history/
│   └── team/                 # Team-specific files
│       ├── assignments.md    # Who's working on what
│       └── roadmap.md        # Feature pipeline
├── prds/
│   ├── prd-feature-a.md      # Created by Product Owner
│   └── prd-feature-b.md      
└── agents/
    ├── product-owner.md      # Specialized for PO tasks
    └── qa-engineer.md        # Specialized for QA
```

### 2. Configuration for Teams

```yaml
# forge.yaml
project: team-project
description: Multi-developer project

mode: collaborative  # Enables team features

team:
  members:
    - name: Alice
      role: product-owner
      focus: [focus, evaluate]
    
    - name: Bob
      role: developer
      focus: [refine]
    
    - name: Charlie
      role: qa-engineer
      focus: [refine, generate]
  
  workflow:
    parallel_features: true    # Allow multiple active cycles
    phase_handoffs: true      # Enable phase ownership
    merge_strategy: manual    # How to handle conflicts
```

### 3. Cycle Ownership

Each cycle document includes ownership information:

```markdown
# Feature: User Authentication

**Owner**: @alice (Product Owner)
**Developer**: @bob
**QA**: @charlie
**Started**: 2024-01-15
**Status**: Refine Phase

## Team Notes
- PO completed requirements - ready for dev
- Dev blocked on API design decision
- QA preparing test scenarios
```

## Workflow Examples

### Example 1: Product Owner + Developer

```
Morning:
- Product Owner works on new feature PRD in Focus phase
- Developer implements features from yesterday's PRD in Refine phase

Afternoon:
- Product Owner reviews implementation progress
- Developer starts on newly completed PRD

Both working in parallel, different phases
```

### Example 2: Multiple Developers

```bash
# Developer A starts feature
forge new "user profile" --assign alice

# Developer B starts different feature  
forge new "notifications" --assign bob

# Both work independently
# Merge completed cycles when done
```

### Example 3: QA Parallel Testing

```markdown
While developers are in Refine phase:
- QA prepares test plans
- QA reviews PRDs for testability
- QA sets up test environments

When code is ready:
- QA executes test plans
- Developers continue on next features
- No blocking between roles
```

## Managing Parallel Work

### 1. Status Command for Teams

```bash
forge status --team

Current Cycles:
- user-auth.md     [@alice]  Refine Phase    (3 days active)
- payments.md      [@bob]    Focus Phase     (1 day active)  
- search.md        [@charlie] Generate Phase (5 days active)

Team Velocity: 3 features in progress
```

### 2. Assignment Tracking

Create `.forge/team/assignments.md`:

```markdown
# Current Assignments

## Active Features
| Feature | Owner | Phase | Started | Target |
|---------|-------|-------|---------|--------|
| User Auth | @alice | Refine | Jan 15 | Jan 22 |
| Payments | @bob | Focus | Jan 17 | Jan 30 |
| Search | @charlie | Generate | Jan 12 | Jan 18 |

## Upcoming
- Mobile App (@david - waiting on API completion)
- Analytics (@emma - starts next sprint)
```

### 3. Phase Handoffs

Document handoff points in cycles:

```markdown
## Phase Handoffs

### Focus → Orchestrate
- **From**: @productowner
- **To**: @techlead  
- **Date**: Jan 15
- **Handoff Notes**: All requirements gathered, see PRD for details

### Orchestrate → Refine
- **From**: @techlead
- **To**: @developer, @qa
- **Date**: Jan 16
- **Handoff Notes**: Tasks created in Jira, test scenarios defined
```

## Conflict Resolution

### 1. Feature Conflicts
When features overlap:
- Use PRDs to identify dependencies early
- Architect reviews both features together
- Create shared components in separate cycle

### 2. Resource Conflicts
When team members are needed on multiple features:
- Priority set in assignments.md
- Use forge.yaml to define focus areas
- Escalate to team lead if needed

### 3. Merge Conflicts
For cycle documents:
- Each feature in separate file (no conflicts)
- Shared resources (PRDs) use feature branches
- Regular sync meetings to coordinate

## Best Practices for Teams

### 1. Daily Sync
Quick check of all active cycles:
```bash
forge status --team --summary
```

### 2. Phase Ownership
- Assign clear owners for each phase
- Document handoff criteria
- No phase starts without previous phase approval

### 3. Parallel Development Rules
- One cycle file per feature
- Shared resources (PRDs) require coordination
- Regular commits to avoid conflicts
- Clear assignment tracking

### 4. Communication Patterns
```markdown
## In Cycle Documents
@alice - Need your input on auth method
@bob - Blocking issue with database schema
@team - Ready for review
```

### 5. Specialized Agents by Role
- Product owners use specialized PO agents
- QA engineers use testing-focused agents
- Developers use technology-specific agents

## Tool Integration

### With Git
```bash
# Feature branches per cycle
git checkout -b feature/user-auth-forge
# Work on .forge/current/user-auth.md

# Different branch for different feature
git checkout -b feature/payments-forge
# Work on .forge/current/payments.md
```

### With Claude Code
Multiple team members can use Claude simultaneously:
- Each with their own cycle document
- Agents aware of team context
- Coordination through shared PRDs

### With Project Management
Export cycle status for PM tools:
```bash
forge export --format=jira
forge export --format=linear
forge export --format=github-issues
```

## Example Team Scenarios

### Startup Team (3 people)
```
Product Founder: Focus + Evaluate phases
Full-Stack Dev: All phases, primarily Refine
DevOps/QA: Generate phase + testing in Refine
```

### Enterprise Team (10+ people)
```
Product Owners (2): Focus phase, PRDs
Architects (2): Focus + Orchestrate phases
Developers (5): Refine phase, parallel features
QA Team (3): Test planning + execution
DevOps (2): Generate phase, infrastructure
```

### Open Source Project
```
Maintainers: Focus, Orchestrate, Evaluate
Contributors: Refine phase (assigned issues)
Community: Testing, feedback in Evaluate
```

## Conclusion

FORGE's file-based approach naturally supports parallel development. Multiple team members can work on different features or different phases of the same feature without conflicts. The framework scales from solo developers to large teams while maintaining simplicity and clarity.