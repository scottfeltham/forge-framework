# Feature: {{FEATURE}}

**Started**: {{DATE}}
**Status**: Focus Phase
**Owner**: {{OWNER}}
**Team**: {{TEAM_MEMBERS}}
**Priority**: {{PRIORITY}}

## 📋 Progress

<!-- FORGE_PHASE:Focus:Active -->
### Phase 1: Focus 🎯 [Active]
**Lead Agents**: Architect, Security, Documentation
- [ ] Gather requirements
- [ ] Define test scenarios (MANDATORY)
- [ ] Create/Update PRD in specs/
- [ ] **Commit PRD and test scenarios**
- [ ] Parallel Analysis (if complex):
  - [ ] Technical feasibility (Architect Agent)
  - [ ] Security implications (Security Agent)
  - [ ] Performance impact (Architect Agent)
- [ ] Design architecture (Architect Agent)
- [ ] Identify risks (Security Agent)
- [ ] **Commit architecture decisions and risk assessment**
- [ ] **Push all Focus phase artifacts**

<!-- FORGE_PHASE:Orchestrate:Pending -->
### Phase 2: Orchestrate 📝 [Pending]
**Lead Agents**: Architect, DevOps, Tester
- [ ] Break down tasks (Architect Agent)
- [ ] Assign priorities
- [ ] Plan dependencies
- [ ] Design test strategy (Tester Agent)
- [ ] Plan CI/CD pipeline (DevOps Agent)
- [ ] **Commit task breakdown and planning documents**
- [ ] **Push Orchestrate phase artifacts**

<!-- FORGE_PHASE:Refine:Pending -->
### Phase 3: Refine 🔨 [Pending]
**Lead Agents**: Developer, Tester, Code Reviewer
- [ ] Implement features (Developer Agent)
  - [ ] Consider parallel implementation for independent components
  - [ ] **Commit after each completed feature/task**
- [ ] Write tests (Tester Agent)
  - [ ] Consider parallel test types (unit, integration, e2e)
  - [ ] **Commit tests with corresponding implementation**
- [ ] Code review (Code Reviewer Agent)
- [ ] Security validation (Security Agent)
- [ ] **Push commits regularly (at least daily)**
- [ ] **Push after completing major milestones**

<!-- FORGE_PHASE:Generate:Pending -->
### Phase 4: Generate 🚀 [Pending]
**Lead Agents**: DevOps, Documentation, Tester
- [ ] Build artifacts (DevOps Agent)
- [ ] Prepare deployment (DevOps Agent)
- [ ] Update documentation (Documentation Agent)
- [ ] Final testing (Tester Agent)
- [ ] **Commit build configurations and deployment scripts**
- [ ] **Commit updated documentation**
- [ ] **Push all Generate phase artifacts**

<!-- FORGE_PHASE:Evaluate:Pending -->
### Phase 5: Evaluate 📊 [Pending]
**All Agents Contribute**
- [ ] Measure success metrics
- [ ] Gather stakeholder feedback
- [ ] Conduct retrospective (All Agents)
- [ ] Document learnings (Documentation Agent)
- [ ] Update knowledge base
- [ ] Plan improvements
- [ ] **Commit retrospective and learnings**
- [ ] **Push final cycle artifacts**
- [ ] **Tag release if applicable**

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

## 🤖 Agent Assignments

### Active Agents This Phase
*Automatically determined based on current phase and task type*

### Agent Recommendations
*AI assistant will suggest appropriate agents based on:*
- Current development phase
- Feature complexity and type
- Identified risks and requirements
- Project configuration

## 🤖 Next Action
Ask AI assistant to analyze requirements for {{FEATURE}} with appropriate specialist agents