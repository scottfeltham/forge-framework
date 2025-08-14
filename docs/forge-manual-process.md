# FORGE Manual Process Framework

A structured methodology for systematic software development without AI assistance.

## Overview

The FORGE process is a five-phase development framework that can be applied manually by development teams. While FORGE was originally designed for AI-driven development, its core principles and structured approach provide value for traditional software development workflows.

## Core Philosophy

- **Conversation over Configuration**: Prioritize team communication and collaboration
- **Transparency through Simplicity**: Keep processes visible and understandable
- **Progress over Perfection**: Focus on iterative improvement
- **Structured Documentation**: Maintain clear records of decisions and learnings

## The Five Phases

### Phase 1: Focus 🎯

**Purpose**: Understand requirements and establish clear objectives

**Key Activities**:
- Gather and document requirements
- Define test scenarios (MANDATORY before any code)
- Create Product Requirements Document (PRD)
- Conduct parallel analysis for complex features:
  - Technical feasibility assessment
  - Security implications review
  - Performance impact analysis
- Design system architecture
- Identify and document risks

**Deliverables**:
- Requirements document
- Test scenarios document
- PRD in specs/ directory
- Architecture design
- Risk assessment

**Success Criteria**:
- All stakeholders agree on requirements
- Test scenarios are comprehensive and testable
- Architecture is reviewed and approved
- Risks are identified and mitigation plans exist

### Phase 2: Orchestrate 📝

**Purpose**: Break down work into manageable tasks and plan execution

**Key Activities**:
- Break down features into specific tasks
- Assign task priorities (P0, P1, P2)
- Map task dependencies
- Estimate effort and timelines
- Identify opportunities for parallel execution
- Plan resource allocation

**Deliverables**:
- Task breakdown structure
- Dependency map
- Timeline and milestones
- Resource allocation plan

**Success Criteria**:
- Tasks are clearly defined and sized
- Dependencies are mapped and understood
- Team capacity aligns with planned work
- Parallel execution opportunities identified

### Phase 3: Refine 🔨

**Purpose**: Implement features with quality and testing focus

**Key Activities**:
- Implement features using test-driven development (TDD)
- Execute parallel implementation for independent components
- Write comprehensive tests (unit, integration, e2e)
- Conduct code reviews
- Ensure adherence to coding standards
- Maintain documentation

**Deliverables**:
- Working software features
- Comprehensive test suite
- Code review records
- Updated documentation

**Success Criteria**:
- All tests pass
- Code review standards met
- Features meet acceptance criteria
- Documentation is current

### Phase 4: Generate 🚀

**Purpose**: Prepare for deployment and delivery

**Key Activities**:
- Build deployment artifacts
- Prepare deployment procedures
- Update user documentation
- Create release notes
- Validate deployment in staging
- Plan rollout strategy

**Deliverables**:
- Deployment artifacts
- Deployment procedures
- User documentation
- Release notes
- Staging validation results

**Success Criteria**:
- Deployment procedures tested
- Documentation complete
- Staging environment validated
- Rollout plan approved

### Phase 5: Evaluate 📊

**Purpose**: Measure success and capture learnings

**Key Activities**:
- Measure success metrics against targets
- Gather stakeholder feedback
- Conduct team retrospective
- Document key learnings
- Update knowledge base
- Plan improvements for next cycle

**Deliverables**:
- Success metrics report
- Stakeholder feedback summary
- Retrospective notes
- Learnings document
- Improvement recommendations

**Success Criteria**:
- Success metrics achieved or deviation understood
- Feedback collected and analyzed
- Learnings documented for future reference
- Improvement actions identified

## Document Templates and Structure

### Project Structure
```
project-root/
├── .forge/
│   ├── cycles/
│   │   └── YYYY-MM-DD-feature-name.md
│   ├── LEARNINGS.md
│   └── current.md (symlink to active cycle)
├── specs/
│   ├── prd-feature-name.md
│   └── test-scenarios-feature-name.md
├── CLAUDE.md (project context)
└── forge.yaml (configuration)
```

### Cycle Document Template

Each feature development cycle follows this structure:

```markdown
# Feature: [Feature Name]

**Started**: [Date]
**Status**: [Current Phase]
**Owner**: [Team Lead]
**Team**: [Team Members]

## 📋 Progress

### Phase 1: Focus 🎯 [Status]
- [ ] Gather requirements
- [ ] Define test scenarios (MANDATORY)
- [ ] Create/Update PRD in specs/
- [ ] Parallel Analysis (if complex):
  - [ ] Technical feasibility
  - [ ] Security implications
  - [ ] Performance impact
- [ ] Design architecture
- [ ] Identify risks

### Phase 2: Orchestrate 📝 [Status]
- [ ] Break down tasks
- [ ] Assign priorities
- [ ] Plan dependencies

### Phase 3: Refine 🔨 [Status]
- [ ] Implement features
- [ ] Write tests
- [ ] Code review

### Phase 4: Generate 🚀 [Status]
- [ ] Build artifacts
- [ ] Prepare deployment
- [ ] Update documentation

### Phase 5: Evaluate 📊 [Status]
- [ ] Measure success metrics
- [ ] Gather stakeholder feedback
- [ ] Conduct retrospective
- [ ] Document learnings

## 📝 Notes
[Requirements, architecture decisions, risks, etc.]

## 📊 Evaluation Results
[Success metrics, learnings, recommendations]
```

### Product Requirements Document (PRD) Template

```markdown
# PRD: [Feature Name]

**Product**: [Project Name]
**Feature**: [Feature Name]
**Version**: 1.0
**Date**: [Date]
**Status**: Draft

## Executive Summary
[Brief description of the feature and its value]

## Problem Statement
### Current Situation
[Description of current state]

### Pain Points
- [Pain point 1]
- [Pain point 2]

### Opportunity
[Description of the opportunity]

## Solution Overview
[High-level solution description]

### Key Features
1. **[Feature 1]**: [Description]
2. **[Feature 2]**: [Description]

## User Stories
**As a** [user type]
**I want to** [action]
**So that** [benefit]

## Acceptance Criteria
### Must Have (P0)
- [ ] [Criteria 1]
- [ ] [Criteria 2]

### Should Have (P1)
- [ ] [Criteria 3]

## Technical Requirements
### Architecture
[Architecture overview]

### Dependencies
- [Dependency 1]
- [Dependency 2]

## Success Metrics
1. **[KPI 1]**: [Target]
2. **[KPI 2]**: [Target]

## Test Scenarios [MANDATORY]
1. **[Scenario Name]**
   - Given: [Initial state]
   - When: [Action]
   - Then: [Expected result]

## Risks and Mitigations
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| [Risk 1] | [Low/Med/High] | [Low/Med/High] | [Mitigation strategy] |
```

## Implementation Guidelines

### Team Roles

**Product Owner**
- Defines requirements and priorities
- Reviews and approves PRDs
- Makes business decisions
- Provides stakeholder feedback

**Technical Lead**
- Designs system architecture
- Reviews technical decisions
- Oversees code quality
- Manages technical risks

**Developer**
- Implements features
- Writes tests
- Conducts code reviews
- Updates documentation

**Quality Assurance**
- Defines test scenarios
- Validates implementations
- Conducts testing
- Reports issues

### Best Practices

1. **Test-Driven Development (TDD)**
   - Write tests before implementation
   - Ensure comprehensive test coverage
   - Maintain green test suite

2. **Continuous Documentation**
   - Update documents as work progresses
   - Keep architecture decisions recorded
   - Maintain project context files

3. **Regular Reviews**
   - Conduct phase gate reviews
   - Review and approve deliverables
   - Validate against acceptance criteria

4. **Parallel Execution**
   - Identify independent work streams
   - Execute parallel tasks when possible
   - Coordinate integration points

5. **Learning Capture**
   - Document lessons learned
   - Update knowledge base
   - Share insights across teams

## Quality Gates

### Phase Completion Criteria

Each phase must meet specific criteria before proceeding:

**Focus → Orchestrate**
- Requirements approved by stakeholders
- Test scenarios defined and reviewed
- Architecture design approved
- Risks identified and mitigation planned

**Orchestrate → Refine**
- Tasks clearly defined and estimated
- Dependencies mapped and understood
- Team capacity validated
- Implementation plan approved

**Refine → Generate**
- All features implemented and tested
- Code reviews completed
- Test suite passing
- Documentation updated

**Generate → Evaluate**
- Deployment successful
- User documentation complete
- Release notes published
- Monitoring in place

**Evaluate → Next Cycle**
- Success metrics collected
- Retrospective completed
- Learnings documented
- Next priorities identified

## Measuring Success

### Key Performance Indicators (KPIs)

**Development Velocity**
- Features delivered per cycle
- Time from start to deployment
- Estimation accuracy

**Quality Metrics**
- Defect rate post-deployment
- Test coverage percentage
- Code review effectiveness

**Team Effectiveness**
- Team satisfaction scores
- Knowledge retention
- Process adherence

**Business Impact**
- Feature adoption rates
- User satisfaction
- Business metric improvements

## Adaptation Guidelines

The FORGE process should be adapted to fit your team and project needs:

**Small Teams (2-5 people)**
- Combine roles as needed
- Simplify documentation
- Focus on essential deliverables

**Large Teams (10+ people)**
- Assign dedicated roles
- Enhance coordination mechanisms
- Implement formal review processes

**Legacy Projects**
- Start with current state documentation
- Introduce process gradually
- Focus on new feature development

**Greenfield Projects**
- Establish patterns early
- Invest in architecture design
- Build comprehensive documentation

## Conclusion

The FORGE manual process provides a structured approach to software development that emphasizes clarity, quality, and continuous improvement. By following these five phases and maintaining good documentation practices, teams can deliver high-quality software while building organizational knowledge and capabilities.

The framework's strength lies in its simplicity and adaptability - it provides structure without being prescriptive, allowing teams to customize the approach to their specific needs while maintaining the core benefits of systematic, well-documented development practices.