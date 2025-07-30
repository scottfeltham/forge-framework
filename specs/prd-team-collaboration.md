# PRD: Team Collaboration Features

**Feature**: Multi-Developer Parallel Development  
**Version**: 1.0  
**Date**: 2025-07-30  
**Status**: Implemented

## Executive Summary

Enable multiple team members to work on different features simultaneously within the same FORGE project, supporting parallel development cycles while maintaining FORGE's simplicity and markdown-based approach.

## Problem Statement

Solo-focused development frameworks create bottlenecks for teams:
- Only one active cycle at a time
- No visibility into parallel work
- Difficult to coordinate efforts
- No role-based workflows
- Limited collaboration features

Teams need to work in parallel without sacrificing FORGE's simplicity or requiring complex project management tools.

## Solution Overview

Extend FORGE's single-cycle model to support multiple active cycles in team mode, with simple directory-based organization and role-aware workflows that maintain the conversational, markdown-driven approach.

## User Stories

### As a Developer
- I want to work on my feature without blocking others
- I want to see what my teammates are working on
- I want to share learnings across the team
- I want simple collaboration without complex tools

### As a Product Owner
- I want to track multiple features in progress
- I want to participate in Focus phases
- I want visibility without learning new tools
- I want to guide requirements naturally

### As a QA Engineer
- I want to engage with testing phases across features
- I want to track quality across parallel work
- I want to contribute without blocking development
- I want clear handoffs for testing

### As a Team Lead
- I want overview of all active work
- I want to coordinate without micromanaging
- I want shared learning across features
- I want simple team workflows

## Functional Requirements

### 1. Team Mode Configuration

#### forge.yaml Settings
```yaml
# Team collaboration mode
collaborative: true

# Optional team settings
team:
  size: 5
  roles:
    - product_owner
    - developers
    - qa_engineer
    - devops
  
  # Workflow preferences
  workflow:
    parallel_cycles: true
    shared_learning: true
    role_based_phases: true
```

#### forge-team.yaml Template
Pre-configured for team use with:
- Collaborative mode enabled
- Common team patterns
- Shared learning paths
- Role suggestions

### 2. Multiple Active Cycles

#### Directory Structure
```
.forge/
├── current/               # Team mode - multiple cycles
│   ├── payment-api.md
│   ├── user-dashboard.md
│   └── mobile-app.md
├── history/              # Completed cycles
└── LEARNINGS.md         # Shared team knowledge
```

#### Parallel Development
```bash
# Developer 1
forge new "payment api"
# Creates: .forge/current/payment-api.md

# Developer 2
forge new "user dashboard"
# Creates: .forge/current/user-dashboard.md

# Both work simultaneously
```

### 3. Enhanced Status Command

#### Team Status View
```bash
forge status

📊 Active Cycles (3):

📁 payment-api.md
   Feature: Payment API Integration
   Status: Refine Phase 🔨
   Owner: Alice

📁 user-dashboard.md
   Feature: User Dashboard Redesign
   Status: Focus Phase 🎯
   Owner: Bob

📁 mobile-app.md
   Feature: Mobile App MVP
   Status: Orchestrate Phase 📝
   Owner: Carol
```

### 4. Role-Based Participation

#### Phase Participation
Different roles engage with different phases:

```markdown
## Phase 1: Focus 🎯 [Active]
Participants: Product Owner, Architect
- [x] Gather requirements (PO)
- [x] Analyze impact (Architect)
- [ ] Design architecture (Architect)

## Phase 3: Refine 🔨 [Active]
Participants: Developers
- [x] Implement features (Dev)
- [ ] Write tests (Dev/QA)
- [ ] Code review (Dev)

## Phase 5: Evaluate 📊 [Pending]
Participants: All Team Members
- [ ] Measure success (PO)
- [ ] Technical retrospective (Dev)
- [ ] Process improvements (Team)
```

### 5. Shared Learning System

#### Team-Wide LEARNINGS.md
All cycles contribute to shared knowledge:
- Patterns discovered by one benefit all
- Failures prevented across features
- Team conventions emerge naturally
- Cross-pollination of ideas

#### Learning Attribution
```markdown
## Performance: Caching Strategy
**Date**: 2024-01-20
**Discovered by**: Alice (Payment API)
**Applied by**: Bob (Dashboard), Carol (Mobile)
**Result**: 80% response time improvement
```

### 6. Coordination Features

#### Cycle Completion
```bash
# Complete specific cycle
forge complete payment-api.md

# Archives to history with attribution
# Updates shared learnings
# Notifies team (if configured)
```

#### Cross-Cycle Visibility
AI agents aware of parallel work:
```
Developer: Implementing user preferences

Claude: I see the payment-api cycle is also working with user 
        preferences. They're using a JSON schema approach 
        that might work well here too. Should I apply the 
        same pattern?
```

## Non-Functional Requirements

### Simplicity Maintained
- No additional complexity for solo users
- Team mode is just multiple files
- Same commands work
- No new concepts to learn

### Scalability
- Supports 2-20 developers
- Hundreds of cycles in history
- Performance unchanged
- Simple file operations

### Flexibility
- Optional team features
- Mix solo and team modes
- Role flexibility
- Workflow adaptation

## Success Metrics

1. **Parallel Efficiency**: 70% reduction in blocking
2. **Knowledge Sharing**: 80% of patterns reused across cycles
3. **Role Engagement**: All roles participate actively
4. **Coordination Overhead**: <10% time spent coordinating
5. **Team Satisfaction**: 85% prefer over previous tools

## Technical Implementation

### Mode Detection
```javascript
// Detect team mode from structure or config
const isTeamMode = fs.existsSync('.forge/current') || 
                   config.collaborative === true;

if (isTeamMode) {
  // Use .forge/current/ directory
} else {
  // Use .forge/current.md file
}
```

### Status Command Enhancement
```javascript
status: () => {
  if (isTeamMode) {
    const cycles = fs.readdirSync('.forge/current');
    cycles.forEach(file => {
      const content = fs.readFileSync(`.forge/current/${file}`);
      // Parse and display summary
    });
  } else {
    // Original single-cycle display
  }
}
```

### Complete Command Update
```javascript
complete: (cycleFile) => {
  if (cycleFile && isTeamMode) {
    // Complete specific cycle
    archiveSpecificCycle(cycleFile);
  } else {
    // Complete single cycle
    archiveSingleCycle();
  }
}
```

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Merge conflicts | Low | Separate files per cycle |
| Coordination overhead | Medium | Async by default |
| Learning fragmentation | Low | Shared LEARNINGS.md |
| Role confusion | Low | Clear templates |

## Implementation Status

### Completed
- ✅ Team mode directory structure
- ✅ Multiple cycle support
- ✅ Enhanced status command
- ✅ Shared learning system
- ✅ Team configuration template
- ✅ Documentation

### Future Enhancements
- Team notifications
- Cycle dependencies
- Resource allocation
- Team analytics
- Role-based templates

## Appendix

### Team Workflow Example

#### Monday Morning
```bash
# Product Owner
forge new "payment processing"
# Fills out requirements in Focus phase

# Developer 1
forge new "api refactoring"
# Starts technical design

# QA Engineer
forge status
# Reviews all active work
# Plans testing strategies
```

#### Throughout the Week
- Developers work on their cycles
- QA participates in test planning
- Product Owner reviews progress
- Shared learnings accumulate

#### Friday Retrospective
```bash
# Team Lead
forge learn retrospective
# Team reflects together
# Learnings documented
# Patterns identified
```

### Configuration Examples

#### Small Team (2-5 people)
```yaml
collaborative: true
# Minimal config, maximum flexibility
```

#### Large Team (10+ people)
```yaml
collaborative: true

team:
  size: 15
  
  workflow:
    require_owner: true
    auto_archive_days: 30
    
  roles:
    - product_owner: 2
    - developers: 8
    - qa_engineers: 3
    - devops: 2
```

#### Cross-Functional Team
```yaml
collaborative: true

team:
  roles:
    - frontend_developer
    - backend_developer
    - mobile_developer
    - ux_designer
    - data_scientist
```

### Best Practices

1. **Start Simple**
   - Begin with basic team mode
   - Add configuration as needed
   - Let workflows emerge

2. **Maintain Independence**
   - Cycles should be independent
   - Avoid blocking dependencies
   - Async collaboration

3. **Share Actively**
   - Regular learning updates
   - Pattern documentation
   - Team retrospectives

4. **Use Roles Wisely**
   - Roles are suggestions
   - Anyone can contribute
   - Flexibility over rigidity