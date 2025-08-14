# Parallel Tasks for {{FEATURE_NAME}}

**Feature**: {{FEATURE_NAME}}  
**Phase**: {{CURRENT_PHASE}}  
**Date**: {{DATE}}  
**Coordinator**: {{AGENT_NAME}}

## Parallel Execution Plan

### Overview
This document tracks parallel agent tasks that can be executed simultaneously using the Task tool.

### Parallel Task Groups

#### Group 1: {{GROUP_NAME}} [{{STATUS}}]
**Purpose**: {{GROUP_PURPOSE}}  
**Dependencies**: {{DEPENDENCIES_OR_NONE}}

##### Tasks:
- [ ] **Task 1.1**: {{TASK_DESCRIPTION}}
  - Agent Type: {{SUBAGENT_TYPE}}
  - Duration: ~{{ESTIMATED_TIME}}
  - Output: {{EXPECTED_OUTPUT}}

- [ ] **Task 1.2**: {{TASK_DESCRIPTION}}
  - Agent Type: {{SUBAGENT_TYPE}}
  - Duration: ~{{ESTIMATED_TIME}}
  - Output: {{EXPECTED_OUTPUT}}

- [ ] **Task 1.3**: {{TASK_DESCRIPTION}}
  - Agent Type: {{SUBAGENT_TYPE}}
  - Duration: ~{{ESTIMATED_TIME}}
  - Output: {{EXPECTED_OUTPUT}}

#### Group 2: {{GROUP_NAME}} [{{STATUS}}]
**Purpose**: {{GROUP_PURPOSE}}  
**Dependencies**: {{DEPENDENCIES_OR_NONE}}

##### Tasks:
- [ ] **Task 2.1**: {{TASK_DESCRIPTION}}
  - Agent Type: {{SUBAGENT_TYPE}}
  - Duration: ~{{ESTIMATED_TIME}}
  - Output: {{EXPECTED_OUTPUT}}

- [ ] **Task 2.2**: {{TASK_DESCRIPTION}}
  - Agent Type: {{SUBAGENT_TYPE}}
  - Duration: ~{{ESTIMATED_TIME}}
  - Output: {{EXPECTED_OUTPUT}}

## Task Implementation

### Launch Commands
```python
# Group 1 - Launch all tasks in parallel
Task(description="{{TASK_1_1_NAME}}", 
     prompt="{{TASK_1_1_DETAILED_PROMPT}}",
     subagent_type="general-purpose")

Task(description="{{TASK_1_2_NAME}}", 
     prompt="{{TASK_1_2_DETAILED_PROMPT}}",
     subagent_type="general-purpose")

Task(description="{{TASK_1_3_NAME}}", 
     prompt="{{TASK_1_3_DETAILED_PROMPT}}",
     subagent_type="general-purpose")
```

### Coordination Points
1. **Pre-Launch Checkpoint**: {{WHAT_TO_VERIFY_BEFORE_LAUNCHING}}
2. **Mid-Execution Monitoring**: {{HOW_TO_TRACK_PROGRESS}}
3. **Result Consolidation**: {{HOW_TO_COMBINE_RESULTS}}
4. **Post-Execution Actions**: {{NEXT_STEPS_AFTER_COMPLETION}}

## Results Tracking

### Group 1 Results
| Task | Status | Key Findings | Issues |
|------|--------|--------------|--------|
| Task 1.1 | {{STATUS}} | {{FINDINGS}} | {{ISSUES}} |
| Task 1.2 | {{STATUS}} | {{FINDINGS}} | {{ISSUES}} |
| Task 1.3 | {{STATUS}} | {{FINDINGS}} | {{ISSUES}} |

### Group 2 Results
| Task | Status | Key Findings | Issues |
|------|--------|--------------|--------|
| Task 2.1 | {{STATUS}} | {{FINDINGS}} | {{ISSUES}} |
| Task 2.2 | {{STATUS}} | {{FINDINGS}} | {{ISSUES}} |

## Consolidated Findings

### Summary
{{OVERALL_SUMMARY_OF_PARALLEL_RESULTS}}

### Key Decisions
1. {{DECISION_1_FROM_RESULTS}}
2. {{DECISION_2_FROM_RESULTS}}
3. {{DECISION_3_FROM_RESULTS}}

### Action Items
- [ ] {{ACTION_BASED_ON_RESULTS}}
- [ ] {{ACTION_BASED_ON_RESULTS}}
- [ ] {{ACTION_BASED_ON_RESULTS}}

## Performance Metrics

### Execution Time
- **Sequential estimate**: {{SEQUENTIAL_TIME}}
- **Parallel actual**: {{PARALLEL_TIME}}
- **Time saved**: {{TIME_SAVED}}
- **Efficiency gain**: {{PERCENTAGE}}%

### Resource Usage
- **Subagents launched**: {{COUNT}}
- **Parallel groups**: {{COUNT}}
- **Failed tasks**: {{COUNT}}
- **Retry needed**: {{YES_NO}}

## Lessons Learned

### What Worked Well
- {{SUCCESS_1}}
- {{SUCCESS_2}}

### What Could Improve
- {{IMPROVEMENT_1}}
- {{IMPROVEMENT_2}}

### For Next Time
- {{LEARNING_1}}
- {{LEARNING_2}}

---

## Common Parallel Patterns

### Pattern 1: Multi-Aspect Research
```python
# Analyze from multiple perspectives simultaneously
Task(description="Technical analysis", prompt="Analyze technical feasibility...")
Task(description="Business analysis", prompt="Analyze business impact...")
Task(description="Security analysis", prompt="Analyze security implications...")
```

### Pattern 2: Component-Based Development
```python
# Develop independent components in parallel
Task(description="Frontend component", prompt="Implement React component...")
Task(description="API endpoint", prompt="Implement REST endpoint...")
Task(description="Database schema", prompt="Design database tables...")
```

### Pattern 3: Multi-Type Testing
```python
# Run different test types in parallel
Task(description="Unit tests", prompt="Write unit tests for...")
Task(description="Integration tests", prompt="Write integration tests for...")
Task(description="Performance tests", prompt="Write performance tests for...")
```

### Pattern 4: Documentation Suite
```python
# Generate multiple doc types in parallel
Task(description="API docs", prompt="Generate API documentation...")
Task(description="User guide", prompt="Create user guide...")
Task(description="Dev guide", prompt="Create developer guide...")
```

---

*This template helps coordinate parallel agent execution for maximum efficiency while maintaining clear tracking and results consolidation.*