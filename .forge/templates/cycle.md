# Feature: {{FEATURE}}

**Started**: {{DATE}}  
**Status**: Focus Phase  
**Owner**: {{OWNER}}  
**Team**: {{TEAM_MEMBERS}}

## 📋 Progress

<!-- FORGE_PHASE:Focus:Active -->
### Phase 1: Focus 🎯 [Active]
- [ ] Gather requirements
- [ ] Define test scenarios (MANDATORY)
- [ ] Create/Update PRD in specs/
- [ ] Parallel Analysis (if complex):
  - [ ] Technical feasibility (subagent)
  - [ ] Security implications (subagent)
  - [ ] Performance impact (subagent)
- [ ] Design architecture
- [ ] Identify risks

<!-- FORGE_PHASE:Orchestrate:Pending -->
### Phase 2: Orchestrate 📝 [Pending]
- [ ] Break down tasks
- [ ] Assign priorities
- [ ] Plan dependencies

<!-- FORGE_PHASE:Refine:Pending -->
### Phase 3: Refine 🔨 [Pending]
- [ ] Implement features
  - [ ] Consider parallel implementation for independent components
- [ ] Write tests
  - [ ] Consider parallel test types (unit, integration, e2e)
- [ ] Code review

<!-- FORGE_PHASE:Generate:Pending -->
### Phase 4: Generate 🚀 [Pending]
- [ ] Build artifacts
- [ ] Prepare deployment
- [ ] Update documentation

<!-- FORGE_PHASE:Evaluate:Pending -->
### Phase 5: Evaluate 📊 [Pending]
- [ ] Measure success metrics
- [ ] Gather stakeholder feedback
- [ ] Conduct retrospective
- [ ] Document learnings
- [ ] Update knowledge base
- [ ] Plan improvements

## 📝 Notes

### Requirements
*Claude will help fill this section*

### Test Scenarios [MANDATORY - Must be completed in Focus phase]
*Link to test scenarios: [Not yet created]*
<!-- Test scenarios MUST be defined before any code is written -->
<!-- Use templates/test-scenarios.md as a guide -->
<!-- NO IMPLEMENTATION WITHOUT TEST SCENARIOS -->

### PRD Reference
*Link to PRD: [Not yet created]*
<!-- PRDs are stored in specs/ directory -->
<!-- Naming convention: prd-{{feature-name}}.md -->

### Architecture Decisions
*To be determined during Focus phase*

### Parallel Task Opportunities
*Identify tasks that can be executed in parallel using subagents*
<!-- Use templates/parallel-tasks.md for complex features -->
<!-- Consider parallel execution for:
     - Multi-aspect analysis (technical, security, performance)
     - Independent component development
     - Different test types (unit, integration, e2e)
     - Documentation tasks (generation, auditing, formatting)
-->

### Tasks
*To be created during Orchestrate phase*

## 📊 Evaluation Results

### Success Metrics
| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| *Define during Focus* | - | - | - |

### What Worked Well
*To be filled during Evaluate phase*

### What Didn't Work
*To be filled during Evaluate phase*

### Key Learnings
*To be filled during Evaluate phase*

### Recommendations for Next Cycle
*To be filled during Evaluate phase*

## 🤖 Next Action
Ask Claude to analyze requirements for {{FEATURE}}