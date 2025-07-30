# Test-Driven Development with FORGE

While FORGE's minimal code approach doesn't fit traditional TDD, we can adapt TDD principles for AI-driven development.

## The Challenge

Traditional TDD assumes:
- Significant code logic to test
- Deterministic behavior
- Unit-testable functions

FORGE reality:
- Minimal code (~88 lines)
- AI-driven behavior
- Conversational interface

## Adapted TDD for FORGE

### 1. Behavior-Driven Scenarios

Before implementing, define scenarios:

```gherkin
Feature: Documentation Management

  Scenario: Enforce folder standards
    Given a PRD file in the docs/ folder
    When the Documentor audits the project
    Then it should identify the misplaced file
    And offer to move it to specs/

  Scenario: Generate from code comments
    Given a function with "FORGE: Document this" comment
    When user requests documentation generation
    Then AI should create appropriate API documentation
```

### 2. Conversation Tests

Define expected AI interactions:

```markdown
## Test: Document Audit

**Setup**: Place test-prd.md in docs/

**Expected Conversation**:
User: forge document
AI: Starting documentation session...

User: audit our docs
AI: Found issues:
    ❌ Misplaced: test-prd.md in docs/ (should be in specs/)
    
**Verify**: AI correctly identified misplaced file
```

### 3. Example-Driven Development

Create examples before implementation:

```markdown
## Example: Auto-generation from Code

**Input Code**:
```javascript
/**
 * FORGE: Document this
 * Creates user account
 */
function createUser(data) { }
```

**Expected Output**:
```markdown
## createUser

Creates user account

### Parameters
- data: User data object
```
```

### 4. Cycle-Based Testing

Use FORGE cycles as test framework:

```markdown
# Feature: documentor

## Focus Phase Tests
- [ ] Define all documentation rules
- [ ] List enforcement scenarios
- [ ] Create example inputs/outputs

## Refine Phase Tests  
- [ ] Implement against examples
- [ ] Verify each scenario works
- [ ] Test edge cases

## Evaluate Phase Tests
- [ ] Real-world usage test
- [ ] Gather feedback
- [ ] Document what failed
```

## Practical TDD Workflow

1. **Write Scenario First**
   ```bash
   # Create test scenario
   echo "Scenario: PRD enforcement" > test-scenario.md
   ```

2. **Implement to Scenario**
   ```bash
   # Add just enough to handle scenario
   forge new "implement PRD enforcement"
   ```

3. **Verify Behavior**
   ```bash
   # Test with real interaction
   forge document
   # Try to create PRD in wrong place
   ```

4. **Refactor Prompts**
   - Improve agent instructions
   - Clarify enforcement rules
   - Add edge case handling

## Testing AI Agents

Since agent behavior is prompt-based:

### Prompt Testing
```markdown
## Test: Documentor Agent Prompt

**Scenario**: User tries to create PRD in docs/

**Test Prompt**:
"User wants to create prd-feature.md in docs/ folder"

**Expected Response**:
"PRDs must go in specs/ folder. I'll create it in the correct location."

**Verify**: Agent enforces rules consistently
```

### Integration Testing
```bash
# Test full workflow
./forge document
# Create session and interact
# Verify outputs match expectations
```

## Benefits of FORGE-Style TDD

1. **Focus on Behavior**: Test what users experience, not implementation
2. **Natural Language**: Tests readable by all stakeholders
3. **AI Verification**: AI can self-test against scenarios
4. **Living Documentation**: Tests become examples

## Anti-Patterns to Avoid

❌ **Over-testing File Operations**
```javascript
// Not useful for FORGE
test('creates file', () => {
  expect(fs.existsSync(file)).toBe(true);
});
```

❌ **Testing AI Responses Exactly**
```javascript
// Too brittle
expect(aiResponse).toBe('Exact string match');
```

❌ **Complex Test Infrastructure**
- Keep tests as simple as the framework
- Use markdown for test definitions
- Let AI interpret test intent

## Recommended Approach

1. **Scenario Library**: Build collection of test scenarios
2. **Example Bank**: Real input/output examples
3. **Conversation Logs**: Track actual AI interactions
4. **Feedback Loop**: Use Evaluate phase for real testing

## Conclusion

TDD with FORGE requires rethinking "testing" from code verification to behavior validation. The framework's conversational nature means tests should focus on AI behavior and user outcomes rather than code coverage.

The best test? Real developers using it successfully.