# Test Scenarios for {{FEATURE_NAME}}

**Feature**: {{FEATURE_NAME}}  
**Created**: {{DATE}}  
**Status**: {{STATUS}}

## Overview

This document defines all test scenarios that MUST be implemented before any code is written. These scenarios drive the development process through TDD/BDD.

## Behavior Scenarios

### Scenario 1: {{SCENARIO_NAME}}

**Given**: {{INITIAL_CONTEXT}}  
**When**: {{ACTION_TAKEN}}  
**Then**: {{EXPECTED_RESULT}}

**Example**:
```
Input: {{CONCRETE_INPUT}}
Output: {{EXPECTED_OUTPUT}}
```

**Edge Cases**:
- {{EDGE_CASE_1}}
- {{EDGE_CASE_2}}

### Scenario 2: {{SCENARIO_NAME}}

**Given**: {{INITIAL_CONTEXT}}  
**When**: {{ACTION_TAKEN}}  
**Then**: {{EXPECTED_RESULT}}

**Example**:
```
Input: {{CONCRETE_INPUT}}
Output: {{EXPECTED_OUTPUT}}
```

## Error Scenarios

### Error 1: {{ERROR_NAME}}

**Given**: {{ERROR_CONTEXT}}  
**When**: {{ERROR_ACTION}}  
**Then**: {{ERROR_HANDLING}}

**Example**:
```
Input: {{ERROR_INPUT}}
Error: {{EXPECTED_ERROR}}
```

## Performance Scenarios

### Performance 1: {{PERFORMANCE_SCENARIO}}

**Requirement**: {{PERFORMANCE_REQUIREMENT}}  
**Threshold**: {{PERFORMANCE_THRESHOLD}}  
**Test Data**: {{TEST_DATA_SIZE}}

## Security Scenarios

### Security 1: {{SECURITY_SCENARIO}}

**Threat**: {{THREAT_DESCRIPTION}}  
**Defense**: {{EXPECTED_DEFENSE}}  
**Validation**: {{HOW_TO_VERIFY}}

## Test Implementation Checklist

### Before Coding (RED Phase)
- [ ] All scenarios have failing tests
- [ ] Edge cases have tests
- [ ] Error cases have tests
- [ ] Performance benchmarks defined
- [ ] Security tests created

### During Coding (GREEN Phase)
- [ ] Write minimal code to pass each test
- [ ] One test at a time
- [ ] No extra functionality
- [ ] All tests passing

### After Coding (REFACTOR Phase)
- [ ] Code cleaned up
- [ ] Tests still passing
- [ ] Performance targets met
- [ ] Security validated

## Acceptance Criteria

This feature is complete when:
1. All test scenarios pass
2. Edge cases handled correctly
3. Error scenarios fail gracefully
4. Performance meets requirements
5. Security tests pass

## Test File Locations

- Unit Tests: `test/unit/{{feature}}.test.{{ext}}`
- Integration Tests: `test/integration/{{feature}}.test.{{ext}}`
- Performance Tests: `test/performance/{{feature}}.test.{{ext}}`
- Security Tests: `test/security/{{feature}}.test.{{ext}}`

---

**Remember**: NO CODE WITHOUT TESTS! This document must be completed and reviewed during the Focus phase before any implementation begins.