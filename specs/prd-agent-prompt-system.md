# PRD: Agent Prompt System

**Feature**: AI Agent Prompt Templates  
**Version**: 1.0  
**Date**: 2025-07-29  
**Status**: Draft

## Executive Summary

Create a flexible system of markdown-based prompts that guide AI agents to fulfill specific development roles, replacing rigid code implementations with natural language instructions.

## Problem Statement

Traditional agent systems require:
- Complex class hierarchies
- Rigid method implementations
- Type-safe interfaces
- Compiled code changes for updates

This prevents rapid iteration and makes it difficult for non-programmers to customize agent behavior.

## Solution Overview

Replace coded agents with markdown prompt templates that can be easily read, modified, and extended by anyone. AI interprets these prompts to assume the appropriate role and behavior.

## User Stories

### As a Developer
- I want to customize how agents behave for my project
- I want to add new agent types without coding
- I want to see exactly what instructions guide the AI
- I want to experiment with different prompts quickly

### As a Team Lead
- I want to standardize agent behaviors across projects
- I want to share successful prompts with other teams
- I want to audit what instructions AI receives
- I want to ensure consistent quality practices

### As an AI Agent
- I need clear role definition and boundaries
- I need specific instructions for each development phase
- I need context about the project and standards
- I need flexibility to adapt to situations

## Functional Requirements

### 1. Agent Structure

#### Base Template (agents/[role].md)
```markdown
# [Role] Agent Prompt

You are the [Role] Agent for the FORGE framework. Your role is to:

1. **Primary Responsibility**
   - Specific task 1
   - Specific task 2
   - Specific task 3

2. **Key Principles**
   - Principle 1
   - Principle 2

3. **Phase-Specific Behavior**
   - Focus: What to do in this phase
   - Orchestrate: What to do in this phase
   - Refine: What to do in this phase
   - Generate: What to do in this phase
   - Evaluate: What to do in this phase

When responding:
- Instruction 1
- Instruction 2
- Instruction 3
```

### 2. Core Agents

#### Architect Agent
- Analyzes requirements
- Designs system architecture
- Identifies risks and constraints
- Recommends technologies

#### Developer Agent
- Writes clean, maintainable code
- Follows project patterns
- Implements features
- Handles errors gracefully

#### Tester Agent
- Creates comprehensive test plans
- Writes test cases
- Identifies edge cases
- Ensures quality

#### DevOps Agent
- Manages deployments
- Configures infrastructure
- Monitors systems
- Automates processes

#### Reviewer Agent
- Reviews code quality
- Checks security
- Suggests improvements
- Ensures standards

### 3. Prompt Features

#### Role Definition
- Clear statement of agent purpose
- Specific responsibilities
- Boundaries of authority
- Expected outcomes

#### Behavioral Guidelines
- How to approach tasks
- Communication style
- Decision-making criteria
- Escalation triggers

#### Context Integration
- Project-specific instructions
- Technology stack awareness
- Team conventions
- Business constraints

#### Output Formatting
- Response structure
- Code formatting rules
- Documentation standards
- Review comment style

## Non-Functional Requirements

### Flexibility
- Easy to modify without code changes
- Support for custom agents
- Per-project overrides
- Version control friendly

### Clarity
- Human-readable instructions
- No technical jargon
- Clear examples
- Testable behaviors

### Extensibility
- Inheritance through includes
- Composition of behaviors
- Plugin architecture
- Community sharing

### Performance
- Fast prompt loading
- Minimal parsing overhead
- Caching support
- Lazy evaluation

## Success Metrics

1. **Customization Rate**: 60% of teams customize at least one agent
2. **Agent Accuracy**: 85% of agent responses align with prompt intent
3. **Iteration Speed**: New agent behavior live in <1 minute
4. **Community Prompts**: 50+ shared prompt templates in 6 months

## Technical Constraints

- Pure markdown format
- No executable code in prompts
- Maximum 2KB per prompt file
- UTF-8 encoding only

## Out of Scope

- Dynamic prompt generation
- Programmatic prompt modification
- Agent chaining logic
- Stateful agent memory

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Prompt injection attacks | High | Sanitization and validation |
| Inconsistent behavior | Medium | Prompt testing framework |
| Override conflicts | Low | Clear precedence rules |
| Prompt drift | Medium | Version control and reviews |

## Implementation Details

### Prompt Loading

```javascript
// Simple prompt loader
function loadAgentPrompt(agentName) {
  const customPath = `./agents/${agentName}.md`;
  const defaultPath = `${__dirname}/agents/${agentName}.md`;
  
  // Check for custom override first
  if (fs.existsSync(customPath)) {
    return fs.readFileSync(customPath, 'utf8');
  }
  
  // Fall back to default
  return fs.readFileSync(defaultPath, 'utf8');
}
```

### Prompt Activation

```
User: Help me design the authentication system

System: [Loads architect.md prompt]

Claude: I'll act as the Architect Agent. Based on the FORGE framework guidelines,
        let me analyze your authentication requirements...
        
        [Follows instructions from architect.md]
```

### Custom Agent Example

```markdown
# Security Specialist Agent Prompt

You are the Security Specialist Agent. Your role is to:

1. **Security Analysis**
   - Identify vulnerabilities
   - Suggest mitigations
   - Review authentication flows
   - Audit data handling

2. **Compliance Checking**
   - GDPR requirements
   - HIPAA if healthcare
   - PCI if payments
   - SOC2 considerations

3. **Best Practices**
   - OWASP Top 10
   - Secure coding standards
   - Encryption requirements
   - Access control patterns

When responding:
- Always prioritize security over convenience
- Provide specific code examples
- Reference security frameworks
- Suggest testing approaches
```

## Appendix

### Prompt Best Practices

1. **Be Specific**: Vague instructions lead to inconsistent behavior
2. **Use Examples**: Show don't just tell
3. **Set Boundaries**: Clear do's and don'ts
4. **Maintain Voice**: Consistent personality across agents
5. **Test Prompts**: Verify behavior before deployment

### Prompt Variables

Prompts can include variables for dynamic behavior:

```markdown
Project Type: {{PROJECT_TYPE}}
Language: {{PRIMARY_LANGUAGE}}
Phase: {{CURRENT_PHASE}}
Context: {{CYCLE_CONTEXT}}
```

### Community Prompt Repository

Structure for sharing prompts:

```
community-prompts/
├── agents/
│   ├── mobile-developer.md
│   ├── data-scientist.md
│   ├── ux-researcher.md
│   └── security-auditor.md
├── templates/
│   ├── startup-focused.md
│   ├── enterprise-scale.md
│   └── open-source.md
└── README.md
```