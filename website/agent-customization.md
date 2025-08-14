---
layout: default
title: Agent Customization
parent: Core Concepts
nav_order: 1
---

# Agent Customization
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

FORGE automatically configures 6 Claude Code subagents during installation, and provides documentation templates that can be specialized for your project's specific needs. This guide explains both systems.

## Claude Code Subagents (Automatic)

FORGE installs these functional subagents in `.claude/agents/`:

1. **forge-architect** - System design and planning
2. **forge-developer** - Code implementation  
3. **forge-tester** - Quality assurance
4. **forge-devops** - Infrastructure and deployment
5. **forge-reviewer** - Code review and quality assessment
6. **forge-analyzer** - Codebase analysis and insights

These operate in isolated contexts and are automatically available after installation.

## Documentation Agents (Templates)

FORGE also provides documentation agents in `.forge/agents/` as reference templates:
5. **Reviewer Agent** - Code and design review

These are intentionally generic to serve as starting points for specialization.

## Creating Specialized Agents

### Method 1: Copy and Customize

1. Copy a base agent template:
   ```bash
   cp agents/developer.md agents/frontend-developer.md
   ```

2. Edit to add specialized knowledge:
   - Specific technologies
   - Domain expertise
   - Specialized workflows
   - Industry standards

3. Use in conversation:
   ```
   "As a Frontend Developer agent, help me build this component..."
   ```

### Method 2: Extend in Configuration

Add to your `forge.yaml`:
```yaml
agents:
  specializations:
    - name: "React Developer"
      base: "developer"
      expertise: "React, Redux, React Router, Testing Library"
      focus: "Component design, state management, performance"
    
    - name: "AWS Architect"
      base: "architect"
      expertise: "AWS services, serverless, cost optimization"
      focus: "Scalable cloud architecture, security best practices"
```

### Method 3: Reference Examples

Use pre-built examples from `agents/examples/`:
- `frontend-developer.md`
- `api-developer.md`
- `mobile-developer.md`
- `security-architect.md`
- `data-engineer.md`

## Specialization Examples by Base Agent

### Architect Specializations

| Specialization | Focus Areas |
|----------------|-------------|
| Solution Architect | Cloud platforms, service integration, cost optimization |
| Security Architect | Threat modeling, compliance, zero-trust design |
| Data Architect | Warehouses, lakes, ETL pipelines, analytics |
| Enterprise Architect | System integration, governance, standards |
| Application Architect | Microservices, modularity, API design |

### Developer Specializations

| Specialization | Focus Areas |
|----------------|-------------|
| Frontend Developer | UI frameworks, responsive design, accessibility |
| Backend Developer | APIs, databases, server architecture |
| Mobile Developer | iOS/Android, React Native, device APIs |
| Data Engineer | Pipelines, warehousing, big data tools |
| Game Developer | Game engines, physics, graphics |
| DevOps Developer | CI/CD, IaC, automation scripts |

### Tester Specializations

| Specialization | Focus Areas |
|----------------|-------------|
| QA Automation Engineer | Test frameworks, CI integration |
| Performance Tester | Load testing, profiling, optimization |
| Security Tester | Penetration testing, vulnerability scanning |
| Mobile Tester | Device testing, platform specifics |
| Accessibility Tester | WCAG compliance, screen readers |

### DevOps Specializations

| Specialization | Focus Areas |
|----------------|-------------|
| Cloud Engineer | AWS/Azure/GCP, cloud-native services |
| SRE | Reliability, SLOs, incident response |
| Platform Engineer | Kubernetes, service mesh, observability |
| Security Operations | Scanning, compliance, incident response |
| Database Administrator | Performance, backups, replication |

### Reviewer Specializations

| Specialization | Focus Areas |
|----------------|-------------|
| Security Reviewer | OWASP, secure coding, vulnerability detection |
| Performance Reviewer | Optimization, caching, scalability |
| Architecture Reviewer | Patterns, SOLID principles, coupling |
| Accessibility Reviewer | WCAG, keyboard navigation, ARIA |

## Best Practices for Specialization

### 1. Keep Base Principles
Always include core responsibilities from the base agent before adding specializations.

### 2. Be Specific
Include:
- Exact technologies and versions
- Industry standards to follow
- Common patterns to use
- Anti-patterns to avoid

### 3. Add Context
Provide:
- When to use certain approaches
- Trade-offs to consider
- Performance implications
- Security considerations

### 4. Include Examples
Add concrete examples of:
- Code patterns
- Architecture decisions
- Testing strategies
- Common problems/solutions

## Using Specialized Agents

### In Conversation
```
User: I need help building a React component
Claude: As a Frontend Developer agent specialized in React, I'll help you create a well-structured component. Let me first understand your requirements...
```

### Agent Collaboration
Specialized agents can work together:
```
Frontend Developer → designs UI components
API Developer → creates backend endpoints
Mobile Developer → implements mobile app
Security Reviewer → reviews all code
```

### Project Evolution
Start with base agents and specialize as your project grows:
1. Early stage: Use base agents
2. Technology chosen: Add tech-specific agents
3. Production: Add operational specialists

## Sharing Agents

### Within Teams
- Store in `project/agents/` directory
- Version control with Git
- Document agent purposes

### With Community
- Share successful specializations
- Create agent packages
- Build industry-specific sets

## Examples in Action

### E-commerce Project
```
agents/
├── shopify-developer.md      # Shopify API specialist
├── payment-developer.md      # Payment gateway expert
├── seo-architect.md         # SEO-focused architect
└── conversion-tester.md     # A/B testing specialist
```

### SaaS Project
```
agents/
├── react-developer.md       # Frontend specialist
├── api-developer.md         # REST/GraphQL expert  
├── postgres-dba.md          # Database specialist
└── stripe-developer.md      # Billing integration
```

### Mobile Game
```
agents/
├── unity-developer.md       # Game engine expert
├── gameplay-designer.md     # Mechanics specialist
├── mobile-optimizer.md      # Performance expert
└── monetization-expert.md   # IAP/Ads specialist
```

## Conclusion

Agent specialization allows FORGE to adapt to any project type while maintaining consistent quality standards. Start with base agents and evolve them as your project needs become clearer.