---
layout: default
title: PRD Guide
parent: Reference
nav_order: 1
---

# PRD Guide
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

Product Requirements Documents (PRDs) are created during the Focus phase of FORGE cycles. They capture the detailed requirements, design decisions, and success criteria for features.

## When to Create PRDs

### New PRD
Create a new PRD when:
- Starting a new feature cycle
- No existing PRD covers the feature
- Requirements significantly differ from existing PRDs

### Reference Existing PRD
Reference an existing PRD when:
- Iterating on a previously documented feature
- Making minor enhancements
- Fixing bugs in existing functionality

## PRD Location and Naming

### Directory Structure
```
project/
├── prds/                      # All PRDs stored here
│   ├── prd-user-auth.md      # Feature PRDs
│   ├── prd-payment-system.md
│   └── prd-api-redesign.md
├── .forge/
│   └── current.md            # Active cycle references PRD
```

### Naming Convention
- Pattern: `prd-{feature-name}.md`
- Use kebab-case for feature names
- Keep names descriptive but concise

## Focus Phase Integration

### Architect Agent's Role

During Focus phase, the Architect Agent:

1. **Checks for existing PRDs**
   ```
   Claude: Let me check if we have an existing PRD for this feature...
   [Uses Glob tool to search prds/*.md]
   ```

2. **Creates new PRD if needed**
   ```
   Claude: No existing PRD found. Creating prds/prd-shopping-cart.md...
   [Uses Write tool to create PRD from template]
   ```

3. **Updates cycle with PRD reference**
   ```
   Claude: Updating cycle document with PRD reference...
   [Updates .forge/current.md with link to PRD]
   ```

## PRD Creation Process

### Step 1: Requirements Gathering
The Architect Agent interviews the user:
```
Architect: To create a comprehensive PRD, I need to understand:
1. What problem are we solving?
2. Who are the users?
3. What are the key features?
4. What are the success metrics?
```

### Step 2: PRD Generation
Using the template, the agent creates:
- Problem statement
- Solution overview
- User stories
- Acceptance criteria
- Technical requirements

### Step 3: Cycle Integration
The PRD is linked in the cycle document:
```markdown
### PRD Reference
Link to PRD: [User Authentication PRD](../prds/prd-user-auth.md)
Created: 2024-01-15
Status: Under Review
```

## Example Flow

```
User: Let's build a shopping cart feature

Claude (Architect Agent): I'll help you design the shopping cart feature. 
                         First, let me check for existing PRDs...

[Searches prds/ directory]

No existing shopping cart PRD found. I'll create one during our Focus phase.

Let's start by understanding your requirements:
1. What types of items will the cart support?
2. Do we need guest checkout?
3. What payment methods?

[After gathering requirements]

I've created prds/prd-shopping-cart.md with all the requirements we discussed.
The PRD is now linked in your current cycle for reference.
```

## PRD Evolution

### During Cycle
- **Focus**: Create/update PRD
- **Orchestrate**: Reference PRD for task breakdown
- **Refine**: Update PRD if requirements change
- **Generate**: Ensure PRD reflects final implementation
- **Evaluate**: Compare results against PRD success metrics

### Post-Cycle
- PRDs remain as historical documentation
- Future cycles can reference and build upon them
- PRDs can be versioned (e.g., prd-shopping-cart-v2.md)

## Best Practices

### 1. Keep PRDs Living Documents
Update during the cycle as understanding evolves

### 2. Link Bidirectionally
- Cycle references PRD
- PRD references cycle

### 3. Version Major Changes
Create new PRD versions for significant pivots

### 4. Include Decisions
Document not just what, but why

### 5. Make Measurable
Include specific success metrics

## Templates

### Quick PRD (for simple features)
Use when feature is straightforward:
- Basic problem/solution
- 3-5 user stories
- Clear acceptance criteria

### Full PRD (for complex features)
Use when feature is complex:
- Detailed analysis
- Multiple user personas
- Technical architecture
- Risk assessment

## Integration with Agents

### Architect Agent
- Creates and maintains PRDs
- Ensures technical feasibility
- Links architecture decisions

### Developer Agent
- References PRD during implementation
- Flags gaps or ambiguities
- Suggests technical updates

### Tester Agent
- Derives test cases from acceptance criteria
- Validates against success metrics
- Reports coverage gaps

### Reviewer Agent
- Checks implementation against PRD
- Identifies deviations
- Suggests PRD updates if needed

## Common Patterns

### API Development
```
prds/
├── prd-api-v2-design.md        # Overall API design
├── prd-api-authentication.md   # Auth specific
└── prd-api-rate-limiting.md    # Rate limiting
```

### Feature Enhancement
```
prds/
├── prd-search-basic.md         # Original feature
├── prd-search-advanced.md      # Enhancement
└── prd-search-ai-powered.md    # Next iteration
```

### Platform Features
```
prds/
├── prd-mobile-app.md           # Mobile specific
├── prd-web-platform.md         # Web specific
└── prd-shared-components.md    # Cross-platform
```

## Conclusion

PRDs in FORGE provide structure without bureaucracy. They're created naturally during the Focus phase, referenced throughout the cycle, and serve as living documentation of features. The Architect Agent handles PRD management, ensuring every significant feature is properly documented without slowing development.