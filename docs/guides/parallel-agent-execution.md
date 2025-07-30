# Parallel Agent Execution in FORGE

FORGE supports parallel agent execution through Claude Code's Task tool, enabling multiple specialized agents to work simultaneously on different aspects of a complex task.

## When to Use Parallel Agents

### Good Candidates for Parallelization:
- **Independent analyses** that don't depend on each other
- **Multi-aspect research** (technical, business, security)
- **Component-based development** (frontend, backend, database)
- **Different test types** (unit, integration, performance)
- **Documentation tasks** (generation, auditing, formatting)

### Keep Sequential When:
- Tasks have dependencies
- One task's output feeds another
- Simple, single-purpose work
- Debugging specific issues

## Using the Task Tool

### Basic Pattern
```python
# Launch multiple subagents in parallel
Task(
    description="Research authentication options",
    prompt="Research modern authentication methods for our web app including OAuth, JWT, and passwordless options",
    subagent_type="general-purpose"
)

Task(
    description="Analyze security requirements", 
    prompt="Analyze security requirements for financial data handling including compliance needs",
    subagent_type="general-purpose"
)

Task(
    description="Review existing auth code",
    prompt="Review our current authentication implementation and identify improvement areas",
    subagent_type="general-purpose"
)
```

### Key Points:
- Each Task runs independently
- Results return when all complete
- Use descriptive task names
- Keep prompts focused and specific

## Parallel Patterns by Phase

### Focus Phase: Parallel Research
When gathering requirements, launch parallel agents to research different aspects:

```python
# Architect Agent coordinating parallel research
"I'll analyze this feature from multiple angles using parallel subagents:

1. Technical Feasibility Agent - Research implementation options
2. Security Analysis Agent - Identify security considerations  
3. Performance Impact Agent - Analyze scalability needs
4. Integration Research Agent - Check third-party options"

# Then launch with Task tool
Task(description="Technical feasibility", prompt="Research technical implementation options for real-time notifications...")
Task(description="Security analysis", prompt="Analyze security implications of real-time notifications...")
# ... more parallel tasks
```

### Orchestrate Phase: Parallel Planning
Break down complex features into parallel planning tasks:

```python
# Parallel task breakdown
Task(description="Frontend tasks", prompt="Break down frontend tasks for user dashboard feature...")
Task(description="Backend tasks", prompt="Break down API tasks for user dashboard feature...")
Task(description="Database tasks", prompt="Break down data model changes for user dashboard...")
```

### Refine Phase: Parallel Implementation
For independent components:

```python
# Developer Agent using parallel implementation
"These components are independent, I'll implement them in parallel:

1. API Endpoints Agent - Implement REST endpoints
2. Frontend Components Agent - Build React components
3. Database Migration Agent - Create schema updates
4. Test Suite Agent - Write comprehensive tests"
```

### Generate Phase: Parallel Preparation
Prepare multiple artifacts simultaneously:

```python
# Parallel deployment preparation
Task(description="Build verification", prompt="Verify build process and dependencies...")
Task(description="Documentation update", prompt="Update API documentation for new endpoints...")
Task(description="Migration scripts", prompt="Prepare database migration scripts...")
```

### Evaluate Phase: Parallel Analysis
Gather feedback from multiple perspectives:

```python
# Parallel evaluation
Task(description="Performance metrics", prompt="Analyze performance metrics from the implementation...")
Task(description="User feedback", prompt="Analyze user feedback and identify patterns...")
Task(description="Technical debt", prompt="Identify technical debt introduced and mitigation strategies...")
```

## Real-World Examples

### Example 1: Authentication System
```python
# Architect Agent in Focus phase
"This authentication system requires analysis from multiple angles. I'll coordinate parallel research:

Task(description="OAuth providers research", 
     prompt="Research OAuth2 providers (Google, GitHub, Microsoft) integration complexity and costs",
     subagent_type="general-purpose")

Task(description="JWT implementation analysis",
     prompt="Analyze JWT token implementation including refresh tokens and security best practices", 
     subagent_type="general-purpose")

Task(description="Session storage options",
     prompt="Compare Redis vs database sessions for our expected 100k user scale",
     subagent_type="general-purpose")

Task(description="Compliance requirements",
     prompt="Research GDPR and SOC2 compliance requirements for authentication systems",
     subagent_type="general-purpose")
```

### Example 2: API Refactoring
```python
# Developer Agent in Refine phase
"I'll refactor these independent API modules in parallel:

Task(description="User API refactoring",
     prompt="Refactor /api/users endpoints to follow REST conventions with proper error handling",
     subagent_type="general-purpose")

Task(description="Product API refactoring", 
     prompt="Refactor /api/products endpoints to follow REST conventions with pagination",
     subagent_type="general-purpose")

Task(description="Order API refactoring",
     prompt="Refactor /api/orders endpoints with proper transaction handling",
     subagent_type="general-purpose")
```

### Example 3: Documentation Audit
```python
# Documentor Agent
"I'll audit your documentation in parallel for faster results:

Task(description="Structure compliance check",
     prompt="Check all PRDs are in specs/ and docs are in docs/ folder",
     subagent_type="general-purpose")

Task(description="Link validation", 
     prompt="Validate all internal links and identify broken references",
     subagent_type="general-purpose")

Task(description="Freshness analysis",
     prompt="Identify documentation older than 90 days that needs updates",
     subagent_type="general-purpose")

Task(description="Coverage gaps",
     prompt="Identify features without documentation",
     subagent_type="general-purpose")
```

## Best Practices

### 1. Task Granularity
- Keep tasks focused on single responsibilities
- 5-15 minute tasks work best
- Too large = loses parallelization benefit
- Too small = overhead outweighs benefit

### 2. Clear Task Boundaries
```python
# Good - Clear boundaries
Task(description="Frontend validation", prompt="Implement client-side form validation")
Task(description="Backend validation", prompt="Implement API request validation")

# Bad - Overlapping responsibilities  
Task(description="Validation", prompt="Implement validation somewhere")
Task(description="Error handling", prompt="Handle validation errors")
```

### 3. Result Coordination
After parallel execution, coordinate results:
```python
"All parallel tasks complete. Here's the consolidated analysis:

1. Technical Feasibility: ✅ All approaches viable
2. Security: ⚠️ Need additional encryption for PII
3. Performance: ✅ Can handle expected load
4. Integration: ✅ Good library support available

Recommendation: Proceed with OAuth2 + JWT approach"
```

### 4. Error Handling
Plan for partial failures:
```python
"Parallel analysis results:
- Technical Research: ✅ Complete
- Security Analysis: ✅ Complete  
- Performance Testing: ❌ Failed - insufficient test data
- Integration Check: ✅ Complete

I'll proceed with available results and note performance testing as a follow-up task."
```

## Integration with FORGE Workflow

### Update Your Cycles
Add parallel task indicators:
```markdown
### Phase 1: Focus 🎯 [Active]
- [x] Gather requirements
- [x] Define test scenarios
- [ ] Parallel Analysis:
  - [ ] Technical feasibility (subagent)
  - [ ] Security review (subagent)
  - [ ] Performance impact (subagent)
- [ ] Consolidate findings
- [ ] Create PRD
```

### Track with TodoWrite
```python
TodoWrite(todos=[
    {"content": "Launch parallel security analysis", "status": "in_progress", "priority": "high", "id": "p-1"},
    {"content": "Launch parallel performance analysis", "status": "in_progress", "priority": "high", "id": "p-2"},
    {"content": "Launch parallel integration research", "status": "in_progress", "priority": "high", "id": "p-3"},
    {"content": "Consolidate parallel findings", "status": "pending", "priority": "high", "id": "p-4"}
])
```

## Performance Considerations

### Parallel Execution Benefits:
- **3-5x faster** for research tasks
- **2-3x faster** for independent implementation
- **4-6x faster** for documentation audits
- **Better coverage** through specialized focus

### When Parallel is Slower:
- Small, quick tasks (< 2 minutes)
- Highly dependent tasks
- Tasks requiring shared context
- Single-file modifications

## Common Pitfalls

### 1. Over-Parallelization
Don't parallelize everything. Simple tasks are often faster sequential.

### 2. Context Confusion
Each subagent has limited context. Be explicit in prompts.

### 3. Result Conflicts
Plan for conflicting recommendations from parallel agents.

### 4. Dependency Deadlocks
Ensure parallel tasks are truly independent.

## Conclusion

Parallel agent execution transforms FORGE from a sequential framework into a powerful parallel processing system. By leveraging the Task tool strategically, you can dramatically reduce development time while maintaining quality and thoroughness.

Remember: **Parallel when possible, sequential when necessary.**