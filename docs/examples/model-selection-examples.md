# Model Selection Examples

Real-world examples of effective model selection in FORGE development cycles.

## Example 1: E-Commerce Platform

### Scenario
Building a complete e-commerce platform with product catalog, shopping cart, payment processing, and order management.

### Model Selection Strategy

```yaml
# forge.yaml configuration
ai:
  model_strategy: adaptive
  models:
    default: sonnet
    complex: opus
```

### Phase-by-Phase Model Usage

#### Focus Phase
```markdown
Architect: "This e-commerce platform has several complexity levels:
- Product catalog: Standard CRUD (Sonnet fine)
- Shopping cart: State management (Sonnet fine)
- Payment processing: High security needs (Opus recommended)
- Order fulfillment: Complex workflows (Opus for design)

I recommend using Opus for payment and order system architecture. Continue with Sonnet for catalog and cart?"

User: "Yes, use Opus only where needed"
```

#### Refine Phase
```markdown
Developer: "Breaking down implementation:

1. Product APIs (Sonnet): $0.02
   - Simple CRUD endpoints
   - Basic validation

2. Payment Integration (Opus): $0.05
   - Stripe webhook handling
   - Idempotency implementation
   - Security considerations

3. Order State Machine (Opus): $0.03
   - Complex state transitions
   - Distributed transactions

Total: $0.10 (vs $0.30 all-Opus)"
```

### Results
- **Time**: 6 hours (vs 8 hours estimated)
- **Cost**: $0.12 total API usage
- **Quality**: Zero security issues found
- **Savings**: 60% cost reduction with targeted Opus usage

## Example 2: Real-Time Chat Application

### Scenario
Building a Slack-like chat app with channels, direct messages, file sharing, and notifications.

### Parallel Model Strategy

```python
# Architect using parallel analysis with different models
Task(description="UI/UX architecture",
     prompt="Design React component architecture for chat UI [SONNET]",
     subagent_type="general-purpose")

Task(description="Real-time architecture",
     prompt="Design WebSocket scaling for 100k concurrent users [OPUS]",
     subagent_type="general-purpose")

Task(description="Database design",
     prompt="Design message storage with search capabilities [SONNET]",
     subagent_type="general-purpose")

Task(description="Security architecture",
     prompt="Design E2E encryption for messages [OPUS]",
     subagent_type="general-purpose")
```

### Cost Analysis
```
Parallel Tasks (30 minutes):
- UI Architecture (Sonnet): $0.01
- Real-time System (Opus): $0.05  
- Database Design (Sonnet): $0.01
- Security Design (Opus): $0.04
Total: $0.11

Sequential All-Opus: $0.20 (2 hours)
Savings: 45% cost, 75% time
```

## Example 3: Debugging Production Issue

### Scenario
Users report intermittent failures in order processing. Some orders are processed twice, others are lost.

### Escalating Model Usage

#### Initial Investigation (Sonnet)
```markdown
Developer: "Checking logs and basic flow..."
[After 30 minutes]
"This appears to be a race condition in our distributed queue system. Multiple workers are claiming the same job under high load.

This requires deep concurrency analysis. Recommend switching to Opus."
```

#### Deep Analysis (Opus)
```markdown
Developer (Opus): "Now analyzing with Opus...

Found it! There's a 50ms window between job claim and lock acquisition where:
1. Worker A reads job status (unlocked)
2. Worker B reads job status (still unlocked)  
3. Worker A acquires lock
4. Worker B also acquires lock (stale read)

Solution: Implement compare-and-swap with version numbers..."
```

### Results
- **Sonnet Time**: 30 minutes (found complexity)
- **Opus Time**: 15 minutes (found root cause)
- **Fix Time**: 1 hour
- **Prevented**: Potential days of debugging

## Example 4: API Modernization

### Scenario
Refactoring legacy REST API to GraphQL with backward compatibility.

### Smart Model Distribution

```markdown
## Task Breakdown with Models

1. **Schema Design** (Opus - $0.03)
   - Complex type relationships
   - Performance implications
   - Breaking change analysis

2. **Resolver Implementation** (Sonnet - $0.04)
   - Standard CRUD resolvers
   - Basic data fetching
   - Error handling

3. **Performance Optimization** (Opus - $0.02)
   - N+1 query prevention
   - DataLoader implementation
   - Caching strategy

4. **Migration Guide** (Sonnet - $0.01)
   - Documentation
   - Examples
   - Deprecation notices

Total: $0.10 (vs $0.25 all-Opus)
```

## Example 5: Security Audit

### Scenario
Comprehensive security review before major release.

### Specialized Model Usage

```markdown
Reviewer: "Security audit requires different depths:

1. **Code Style Review** (Sonnet Parallel)
   - Linting compliance
   - Naming conventions
   
2. **Logic Review** (Sonnet Parallel)
   - Business logic correctness
   - Error handling

3. **Security Deep Dive** (Opus Sequential)
   - Authentication flaws
   - Injection vulnerabilities
   - Cryptographic issues
   - Session management
   
4. **Performance Review** (Sonnet Parallel)
   - Query optimization
   - Caching effectiveness"
```

### Execution Plan
```python
# Phase 1: Parallel Sonnet reviews (30 min)
Task("Style review", "[SONNET]")
Task("Logic review", "[SONNET]") 
Task("Performance review", "[SONNET]")

# Phase 2: Sequential Opus security (45 min)
# Needs full attention for security analysis
"Switching to Opus for comprehensive security review..."
```

## Example 6: Machine Learning Pipeline

### Scenario
Building an ML pipeline for fraud detection.

### Complexity-Based Selection

```markdown
Data Engineer: "ML pipeline components vary in complexity:

1. **Data Ingestion** (Sonnet)
   - S3 → Kafka → Processing
   - Standard ETL patterns

2. **Feature Engineering** (Opus)
   - Complex feature interactions
   - Temporal aggregations
   - Statistical transformations

3. **Model Training** (Sonnet)
   - Standard sklearn/TensorFlow
   - Hyperparameter tuning
   - Cross-validation

4. **Model Optimization** (Opus)
   - Architecture search
   - Pruning strategies
   - Quantization approach

Using Opus for algorithmically complex parts only."
```

## Key Patterns

### 1. **Complexity Escalation**
Start with Sonnet, escalate to Opus when complexity emerges.

### 2. **Parallel Optimization**
Use different models for parallel subtasks based on complexity.

### 3. **Phase-Based Selection**
Different phases may need different models (Focus→Opus, Refine→Sonnet).

### 4. **Risk-Based Allocation**
High-risk code gets Opus review, standard code uses Sonnet.

### 5. **Cost-Conscious Development**
Track ROI - document when Opus prevents issues or saves time.

## Lessons Learned

1. **Opus Shines For:**
   - Subtle bugs (race conditions, memory leaks)
   - Security vulnerabilities
   - Complex architectural decisions
   - Performance optimization
   - Algorithm design

2. **Sonnet Excels At:**
   - CRUD operations (99% of web dev)
   - UI implementation
   - Test writing
   - Documentation
   - Refactoring

3. **ROI Tracking:**
   - Opus preventing one production bug pays for months of usage
   - Document wins for team buy-in
   - Most projects need 80% Sonnet, 20% Opus

4. **Team Adoption:**
   - Start with recommendations, not mandates
   - Let developers experience the difference
   - Share success stories
   - Track metrics

## Conclusion

Effective model selection is about using the right tool for the right job. FORGE's conversational approach makes this natural - agents recommend model switches when they detect complexity that warrants deeper reasoning.

The key is trusting the agents' recommendations while maintaining cost awareness. When used strategically, Opus provides exceptional value for the critical 20% of work that determines project success.