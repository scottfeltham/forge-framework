# FORGE Agent Usage Guide

This guide explains how FORGE specialized agents are used during development cycles.

## Overview

FORGE agents are AI-powered specialists that provide expertise during specific phases of development. When working with AI assistants like Claude Code, these agents are automatically engaged based on the current phase and task requirements.

## Agent Roles

### Core Development Agents
- **🏗️ Architect Agent** - System design, architecture patterns, technology selection
- **🔨 Developer Agent** - Code implementation, TDD practices, technical problem-solving
- **🧪 Tester Agent** - Test strategy, quality assurance, test automation
- **🚀 DevOps Agent** - Infrastructure, CI/CD pipelines, deployment automation

### Quality & Process Agents
- **📝 Code Reviewer Agent** - Code quality, best practices, technical debt management
- **🔐 Security Agent** - Vulnerability assessment, compliance, threat modeling
- **📚 Documentation Agent** - Technical writing, API docs, knowledge management

## Phase-Based Agent Selection

Agents are automatically engaged based on the current development phase:

### Focus Phase (Requirements & Planning)
**Lead Agents**: Architect, Security, Documentation
- **Architect Agent** - System design and architecture planning
- **Security Agent** - Threat modeling and security requirements
- **Documentation Agent** - Documentation planning and PRD structure

### Orchestrate Phase (Task Breakdown)
**Lead Agents**: Architect, DevOps, Tester
- **Architect Agent** - Detailed design and interface definition
- **DevOps Agent** - Infrastructure and pipeline planning
- **Tester Agent** - Test strategy and scenario planning

### Refine Phase (Implementation)
**Lead Agents**: Developer, Tester, Code Reviewer
- **Developer Agent** - PRIMARY - Code implementation guidance
- **Code Reviewer Agent** - Continuous code review during development
- **Tester Agent** - Test implementation and execution
- **Security Agent** - Security control implementation

### Generate Phase (Build & Deploy)
**Lead Agents**: DevOps, Documentation, Tester
- **DevOps Agent** - PRIMARY - Deployment and release management
- **Documentation Agent** - Release notes and documentation updates
- **Tester Agent** - Final validation and smoke testing

### Evaluate Phase (Retrospective)
**All Agents** contribute to retrospective analysis
- **Documentation Agent** - Captures learnings and updates knowledge base

## Task-Based Agent Mapping

| Task Category | Primary Agent | Secondary Agents | Triggered By |
|--------------|--------------|------------------|--------------|
| New Feature | Developer | Architect, Tester | "implement", "build", "create" |
| Bug Fix | Developer | Tester, Reviewer | "fix", "debug", "resolve" |
| Architecture | Architect | Security, DevOps | "design", "structure", "plan" |
| Testing | Tester | Developer, Security | "test", "validate", "verify" |
| Deployment | DevOps | Security, Tester | "deploy", "release", "ship" |
| Security | Security | Architect, DevOps | "security", "vulnerability", "compliance" |
| Documentation | Documentation | Developer, Architect | "document", "explain", "describe" |
| Code Review | Reviewer | Security, Tester | "review", "quality", "refactor" |

## Usage Examples

### Example 1: Starting a New Feature

```
User: forge new "user-authentication"

AI Assistant Actions:
1. Creates new development cycle for authentication feature
2. During Focus phase:
   - Architect Agent designs authentication architecture
   - Security Agent defines security requirements
   - Documentation Agent plans documentation needs
3. During Orchestrate:
   - Breaks down into tasks with appropriate agent assignments
4. During Refine:
   - Developer Agent guides implementation
   - Tester Agent creates test scenarios
   - Code Reviewer provides continuous feedback
```

### Example 2: Security Audit

```
User: "Can you perform a security review of my API?"

AI Assistant Actions:
1. Engages Security Agent as primary specialist
2. Security Agent coordinates with:
   - Code Reviewer Agent for code-level vulnerabilities
   - DevOps Agent for infrastructure security
   - Architect Agent for architectural security patterns
3. Generates comprehensive security report
```

### Example 3: Setting Up CI/CD

```
User: "Help me set up continuous deployment for my project"

AI Assistant Actions:
1. Engages DevOps Agent as primary specialist
2. DevOps Agent:
   - Analyzes current project structure
   - Designs CI/CD pipeline architecture
   - Creates deployment configurations
3. Supporting agents:
   - Tester Agent integrates test automation
   - Security Agent adds security scanning
   - Documentation Agent documents procedures
```

## Agent Collaboration Patterns

### Sequential Collaboration
Agents work in sequence, each building on the previous agent's output:

```
Architect → Developer → Tester → DevOps
```

### Parallel Collaboration
Multiple agents work simultaneously on different aspects:

```
         ┌─→ Developer (implementation)
Architect├─→ Tester (test planning)
         └─→ Documentation (API docs)
```

### Consultative Collaboration
Primary agent consults with specialists as needed:

```
Developer ←→ Security (for auth implementation)
         ←→ Architect (for pattern guidance)
         ←→ Reviewer (for quality checks)
```

## Best Practices

1. **Let Agents Guide the Process**
   - Trust agent recommendations for their specialty areas
   - Allow agents to identify issues early in the cycle

2. **Provide Context**
   - Share project constraints and requirements
   - Mention specific compliance or framework needs

3. **Iterative Refinement**
   - Agents learn from each cycle
   - Captured learnings improve future recommendations

4. **Cross-Agent Validation**
   - Security Agent validates Developer implementations
   - Reviewer Agent ensures Architect patterns are followed
   - Tester Agent verifies DevOps configurations

## Agent Resource Access

Each agent can access:
- Project configuration (`forge.yaml`)
- Previous learnings (`.forge/LEARNINGS.md`)
- Active cycles (`.forge/current/`)
- Historical cycles (`.forge/history/`)
- Agent templates (`.forge/agents/`)

## Customizing Agent Behavior

You can influence agent focus through:

1. **Project Type Configuration** (in `forge.yaml`):
   ```yaml
   project: api-server
   type: api
   # Emphasizes API design, security, performance
   ```

2. **Explicit Instructions**:
   ```
   "Focus on GDPR compliance during implementation"
   "Prioritize mobile performance optimization"
   ```

## Agent Output Formats

Each agent provides structured output:

- **Architect**: System diagrams, design decisions, trade-offs
- **Developer**: Code examples, implementation steps, best practices
- **Tester**: Test plans, scenarios, coverage reports
- **DevOps**: Pipeline configs, deployment scripts, monitoring setup
- **Security**: Threat models, vulnerability reports, compliance checklists
- **Reviewer**: Code quality metrics, improvement suggestions
- **Documentation**: User guides, API references, tutorials

## Retrospective Learning

After each cycle, agents contribute learnings to `.forge/LEARNINGS.md`:

```markdown
- Architect: Design patterns that worked
- Developer: Implementation challenges solved
- Tester: Test strategies that found issues
- DevOps: Deployment optimizations discovered
```

These learnings improve future agent recommendations.

## Conclusion

FORGE agents work together to provide comprehensive development guidance. By understanding when and how they're engaged, you can leverage their expertise effectively throughout your development cycles.
