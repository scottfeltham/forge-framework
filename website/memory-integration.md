---
layout: default
title: Memory Integration
parent: Core Concepts
nav_order: 4
---

# Memory Integration
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

FORGE integrates with AI memory systems to provide persistent learning across development sessions. This enables AI assistants to remember project context, patterns, and decisions over time.

## Supported Memory Systems

### 1. Claude Memory (Claude Code)

When using Claude Code with memory enabled:
- Architectural decisions persist across sessions
- Team conventions are remembered
- Performance insights carry forward
- Project-specific patterns are recalled automatically

### 2. CLAUDE.md Files

A standardized format for persistent project context:
- Lives in project root
- Human and AI readable
- Version controlled with your code
- Provides consistent context across all AI tools

### 3. Custom Memory Backends

FORGE's learning system can integrate with:
- Vector databases for semantic search
- Knowledge graphs for relationship mapping
- Team wikis for shared context
- Custom memory plugins via MCP

## Setting Up Memory Integration

### Step 1: Enable in Configuration

```yaml
# forge.yaml
learning:
  memory_integration: true
  claude_md: true
  
  memory_prompts:
    - "Remember architectural decisions for this project"
    - "Recall successful patterns and apply them"
    - "Maintain consistency with past conventions"
```

### Step 2: Create CLAUDE.md

```bash
# Generate template
forge learn claude

# Edit with project specifics
edit CLAUDE.md
```

### Step 3: Prime the Memory

When starting with Claude:
```
User: This is our e-commerce project. Please review CLAUDE.md for context.

Claude: I've reviewed the project context. I see you're using:
- Microservices architecture with Node.js
- PostgreSQL with Repository pattern
- JWT authentication
- React with TypeScript on the frontend

I'll remember these patterns as we work together.
```

## Memory-Aware Workflows

### Pattern Recognition

```
Claude: I recall from our previous session that database views 
        significantly improved query performance. Should I apply 
        the same optimization to this new listing endpoint?
```

### Convention Enforcement

```
Claude: Based on the project's memory, all API endpoints follow 
        REST conventions with versioning. I'll ensure the new 
        payment endpoint follows this pattern:
        POST /api/v1/payments
```

### Cross-Feature Learning

```
Claude: I remember the circuit breaker pattern worked well for 
        the user service. I'll implement the same pattern for 
        the inventory service to handle downstream failures.
```

## CLAUDE.md Best Practices

### 1. Keep It Focused

Good:
```markdown
## Architecture Patterns
- Repository pattern for data access
- Service layer for business logic
- Controllers handle HTTP only
```

Too Verbose:
```markdown
## Architecture Patterns
We use the repository pattern because in 2023 we decided...
[10 paragraphs of history]
```

### 2. Update Regularly

After major decisions:
```markdown
## Key Decisions

### 2024-01-15: Switched to GraphQL for Admin API
- **Reason**: Complex queries were creating N+1 problems
- **Impact**: 70% reduction in API calls
- **Pattern**: Use DataLoader for batching
```

### 3. Include Examples

```markdown
## Coding Standards

### Error Handling
```typescript
// Always use custom error classes
throw new ValidationError('Invalid email format', { field: 'email' });
```
```

## Memory Prompts

### Explicit Memory Requests

1. **Remember Decisions**
   ```
   User: We've decided to use event sourcing for the order system. 
         Please remember this for future work.
   
   Claude: I'll remember that the order system uses event sourcing. 
           This will affect how we design order updates and history.
   ```

2. **Recall Context**
   ```
   User: What authentication method are we using?
   
   Claude: Based on my memory and CLAUDE.md, this project uses 
           JWT tokens with refresh token rotation.
   ```

3. **Pattern Application**
   ```
   User: Implement the new user profile service.
   
   Claude: I'll apply the same patterns from memory:
           - Repository pattern for data access
           - Service layer for business logic
           - RESTful API with v1 versioning
           - Comprehensive error handling
   ```

## Integration with Learning System

### Memory + LEARNINGS.md

Memory systems complement the learning file:
- **Memory**: Cross-session, AI-specific context
- **LEARNINGS.md**: Detailed, shareable team knowledge
- **Together**: Complete project intelligence

### Workflow Example

1. **Discovery Phase**
   ```
   Claude: This caching strategy improved response time by 80%.
           I'll document this in LEARNINGS.md and remember it.
   ```

2. **Application Phase**
   ```
   Claude: I recall the Redis caching pattern from memory.
           Let me also check LEARNINGS.md for implementation details...
   ```

3. **Evolution Phase**
   ```
   Claude: The pattern has evolved based on new learnings.
           I'll update both my memory and the documentation.
   ```

## Advanced Features

### Semantic Search

With vector memory backends:
```
Claude: Searching memory for similar performance issues...
        Found: We solved a similar N+1 query problem in the 
        product service using eager loading.
```

### Relationship Mapping

```
Claude: Based on memory relationships:
        - Payment Service → depends on → User Service
        - User Service → publishes events to → Notification Service
        - This new feature will affect all three services
```

### Team Memory Sharing

```yaml
learning:
  memory_integration: true
  shared_memory: true
  memory_sync: 
    - url: "https://team-memory.example.com"
    - api_key: ${MEMORY_API_KEY}
```

## Troubleshooting

### Memory Not Persisting

1. Check if memory is enabled in your AI tool
2. Verify CLAUDE.md exists and is readable
3. Use explicit memory prompts
4. Test with simple recall: "What do you remember about this project?"

### Conflicting Memories

When memory conflicts with current code:
```
Claude: I notice a discrepancy - my memory indicates we use REST,
        but I see GraphQL endpoints in the code. Let me update
        my understanding and document this architectural change.
```

### Memory Overload

Keep memories focused:
- Don't memorize implementation details
- Focus on patterns and decisions
- Use LEARNINGS.md for detailed documentation
- Periodically prune outdated memories

## Security Considerations

### Sensitive Information

Never include in memory:
- API keys or secrets
- Customer data
- Internal URLs
- Security vulnerabilities

### Access Control

- CLAUDE.md is version controlled - be mindful of access
- Use environment variables for sensitive configuration
- Consider separate memory contexts for different environments

## Future Enhancements

### Planned Features

1. **Memory Templates**: Project-type specific memory structures
2. **Memory Metrics**: Track how memory improves development speed
3. **Memory Merge**: Combine memories from multiple developers
4. **Memory Versioning**: Track memory evolution over time

### Integration Possibilities

- IDE plugins that surface relevant memories
- Git hooks that update memory on significant commits
- CI/CD integration for memory validation
- Team dashboards showing collective memory

## Conclusion

Memory integration transforms FORGE from a process framework into an intelligent development partner that truly learns and improves over time. By combining structured processes with persistent memory, teams can achieve unprecedented development efficiency and consistency.

Remember: The best memory system is one that's actively used. Make memory interactions a natural part of your development workflow.