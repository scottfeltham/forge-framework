# TDD Enforcement in FORGE

FORGE now strictly enforces Test-Driven Development (TDD) practices through its AI agents, similar to how it enforces documentation standards.

## Enforcement Rules

### 1. Focus Phase Requirements
- **Test scenarios MUST be defined** before any architecture or design
- **PRDs MUST include test scenarios** section
- **No progression without tests** - Architect Agent will refuse to proceed

### 2. Development Phase Requirements  
- **Tests written BEFORE code** - Developer Agent enforces Red-Green-Refactor
- **All scenarios must have tests** - No untested functionality allowed
- **Test files created first** - Implementation files come after

### 3. Review Phase Requirements
- **TDD compliance is checked FIRST** - Before any other review
- **Code without tests is REJECTED** - No exceptions
- **Test-first evidence required** - Must show TDD process was followed

## Agent Enforcement

### Architect Agent
```
"I cannot proceed with architecture until we define test scenarios. 
What should happen when...?"
```

### Developer Agent  
```
"I cannot start coding. Please provide test scenarios from the Focus phase."
"Let me write the tests first, following TDD practices."
```

### Reviewer Agent
```
"❌ REJECTED: No evidence of test-first development. 
Please show tests written before implementation."
```

## TDD Process in FORGE

### 1. Focus Phase
- Define behavior scenarios
- Create concrete examples
- Document edge cases
- Write acceptance criteria

### 2. Orchestrate Phase
- Plan test implementation
- Break down test tasks
- Assign test priorities

### 3. Refine Phase
- **RED**: Write failing tests
- **GREEN**: Write minimal code to pass
- **REFACTOR**: Improve code with passing tests

### 4. Generate Phase
- Run all tests
- Generate test reports
- Update test documentation

### 5. Evaluate Phase
- Review test effectiveness
- Document testing learnings
- Update test patterns

## Templates and Tools

### Test Scenarios Template
Located at `templates/test-scenarios.md`, provides structure for:
- Behavior scenarios (Given/When/Then)
- Edge cases
- Error scenarios
- Performance requirements
- Security scenarios

### Updated Templates
- **Cycle Template**: Now includes mandatory test scenarios section
- **PRD Template**: Requires test scenarios before risks section
- **Agent Prompts**: All updated with TDD enforcement

## Benefits

1. **Quality First**: Bugs caught before they're written
2. **Clear Requirements**: Tests define exact behavior
3. **Confident Refactoring**: Tests ensure nothing breaks
4. **Living Documentation**: Tests document how code works
5. **Faster Development**: Less debugging, more building

## Migration Guide

For existing FORGE projects:

1. **Update agent files** from latest templates
2. **Add test scenarios** to active cycles
3. **Create test templates** for your project
4. **Train team** on TDD with FORGE

## Common Objections and Responses

**"TDD slows us down"**
- Initial slowdown, long-term speedup
- Less debugging time
- Fewer production bugs

**"Our project doesn't suit TDD"**
- FORGE adapts TDD to your context
- Even UI can have behavior tests
- Start with what you can test

**"We'll add tests later"**
- Agents will enforce test-first
- "Later" never comes
- Tests written after aren't as good

## Conclusion

TDD is now as fundamental to FORGE as putting PRDs in `specs/`. The framework enforces quality through process, ensuring every feature is well-tested from the start.

Remember: **NO CODE WITHOUT TESTS!**