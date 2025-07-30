# Dynamic Model Selection in FORGE

FORGE supports intelligent model selection to optimize for both quality and cost. This guide explains how to leverage different Claude models effectively within your development workflow.

## Model Overview

### Claude 3.5 Sonnet (Default)
- **Strengths**: Fast, cost-effective, excellent for routine tasks
- **Best for**: Implementation, documentation, simple analysis
- **Response time**: Fastest
- **Cost**: Most economical

### Claude 3 Opus
- **Strengths**: Superior reasoning, handles complex problems
- **Best for**: Architecture design, debugging, security analysis
- **Response time**: Slower but more thorough
- **Cost**: Premium (use strategically)

## When to Use Each Model

### Use Sonnet (Default) For:
- ✅ CRUD operations
- ✅ Simple refactoring
- ✅ Documentation generation
- ✅ Routine testing
- ✅ Basic debugging
- ✅ Code formatting
- ✅ Simple API implementations
- ✅ Component scaffolding

### Switch to Opus For:
- 🧠 Complex architecture design
- 🧠 Distributed systems design
- 🧠 Security vulnerability analysis  
- 🧠 Performance optimization
- 🧠 Debugging subtle bugs
- 🧠 Algorithm design
- 🧠 Multi-system integration
- 🧠 Critical decision making

## Practical Model Selection

### 1. Configuration-Based Hints

```yaml
# forge.yaml
ai:
  primary: claude
  model_strategy: adaptive    # Enable intelligent selection
  
  models:
    default: sonnet          # Your default model
    complex: opus            # For complex tasks
    
  # Optional hints (not rules)
  task_complexity:
    high:
      - distributed_systems
      - security_critical
      - performance_optimization
      - architecture_design
    medium:
      - api_design
      - refactoring
      - integration
    low:
      - documentation
      - crud_operations
      - formatting
```

### 2. Conversational Model Switching

```markdown
User: "Design a microservices architecture for our payment system"

Claude (Sonnet): "This requires complex distributed systems design with security considerations. I recommend switching to Opus for deeper architectural reasoning. Would you like me to use Opus for this task?"

User: "Yes, switch to Opus"

Claude (Opus): "Excellent. Now using Opus for comprehensive architectural analysis..."
[Provides detailed architecture with event sourcing, CQRS, security layers, etc.]
```

### 3. Automatic Recommendations

Agents will suggest model switches when detecting complexity:

```markdown
Developer Agent: "I notice this bug involves a race condition across three services. This type of concurrency issue benefits from Opus's deeper reasoning. Shall I switch models to debug this more effectively?"
```

### 4. Cost-Aware Development

```markdown
Claude: "For this feature, I can see:
- 80% routine CRUD work (Sonnet: $0.03)
- 20% complex algorithm (Opus: $0.15)

Recommendation: Start with Sonnet, switch to Opus only for the algorithm portion. Estimated total cost: $0.05 vs $0.20 for all-Opus."
```

## Model Selection Patterns

### Pattern 1: Phased Approach
```
Focus Phase → Opus (complex analysis)
Orchestrate → Sonnet (task breakdown)  
Refine → Sonnet (implementation)
Generate → Sonnet (deployment prep)
Evaluate → Opus (deep insights)
```

### Pattern 2: Component-Based
```
Complex Core Logic → Opus
UI Components → Sonnet
API Endpoints → Sonnet
Security Layer → Opus
Documentation → Sonnet
```

### Pattern 3: Problem Severity
```
Critical Bug → Opus
Minor Bug → Sonnet
Feature Request → Sonnet
Architecture Change → Opus
Performance Issue → Opus
```

## Parallel Model Usage

Leverage different models for parallel subagents:

```python
# Architect Agent coordinating parallel analysis
Task(description="Security architecture",
     prompt="Design security layers for payment system [USE OPUS]",
     subagent_type="general-purpose")

Task(description="API documentation", 
     prompt="Generate API docs for payment endpoints [USE SONNET]",
     subagent_type="general-purpose")

Task(description="Frontend components",
     prompt="Create React components for payment UI [USE SONNET]",
     subagent_type="general-purpose")
```

## Fallback Strategies

When Opus is unavailable:

### Strategy 1: Enhanced Sonnet Approach
```markdown
"Opus is unavailable. I'll use Sonnet with these enhancements:
1. More structured analysis phases
2. Additional validation steps
3. Parallel subagents for different aspects
4. Explicit reasoning chains"
```

### Strategy 2: Staged Analysis
```markdown
"Breaking this complex task into Sonnet-manageable pieces:
1. First: Analyze security requirements
2. Then: Design data flow
3. Next: Plan service boundaries
4. Finally: Combine insights"
```

## Cost Optimization Tips

### 1. **Batch Simple Tasks**
Group routine tasks for Sonnet to handle efficiently.

### 2. **Isolate Complexity**
Use Opus only for the complex 20% that provides 80% value.

### 3. **Learn from Patterns**
Track which tasks truly benefited from Opus:

```markdown
# .forge/LEARNINGS.md

## Model Selection Successes
- Opus caught race condition in payment processing (saved 2 days debugging)
- Sonnet handled 50 CRUD endpoints perfectly (saved $5 in API costs)
- Opus designed caching strategy that improved performance 10x
```

### 4. **Time-box Opus Usage**
```markdown
"I'll use Opus for 30 minutes of architecture design, then switch to Sonnet for implementation."
```

## Agent Model Preferences

### By Agent Type:
- **Architect**: Often benefits from Opus
- **Developer**: Mostly Sonnet, Opus for algorithms
- **Tester**: Sonnet for most tests, Opus for security
- **Reviewer**: Opus for security reviews, Sonnet for style
- **Documentor**: Almost always Sonnet

### By Task Complexity:
| Complexity | Model | Example |
|------------|-------|---------|
| Low | Sonnet | Adding a button |
| Medium | Sonnet | Building a form |
| High | Opus | Designing auth system |
| Critical | Opus | Security architecture |

## Best Practices

### 1. **Start Simple**
Default to Sonnet, upgrade to Opus when needed.

### 2. **Be Explicit**
Tell Claude your model preferences upfront.

### 3. **Trust Recommendations**
When Claude suggests a model switch, there's usually good reason.

### 4. **Track ROI**
Document when Opus provided exceptional value.

### 5. **Combine Strategies**
Use Opus for design, Sonnet for implementation.

## Example Workflows

### Workflow 1: New Feature
```
1. Requirements gathering → Sonnet
2. Architecture design → Opus  
3. Implementation → Sonnet
4. Complex algorithm → Opus
5. Testing → Sonnet
6. Documentation → Sonnet
```

### Workflow 2: Bug Fix
```
1. Bug reproduction → Sonnet
2. Root cause analysis → Opus (if complex)
3. Fix implementation → Sonnet
4. Test creation → Sonnet
```

### Workflow 3: Performance Optimization
```
1. Profiling → Sonnet
2. Bottleneck analysis → Opus
3. Solution design → Opus
4. Implementation → Sonnet
5. Verification → Sonnet
```

## Conclusion

Dynamic model selection in FORGE follows the framework's philosophy: let AI handle the complexity of choosing the right tool for the job. Through natural conversation and intelligent defaults, you get the best of both worlds - Opus's power when you need it, Sonnet's efficiency when you don't.

Remember: **The best model is the one that helps you ship quality software efficiently.**