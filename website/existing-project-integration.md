---
layout: default
title: Existing Project Integration
parent: Advanced Topics
nav_order: 3
---

# Existing Project Integration
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

FORGE seamlessly integrates into any existing project. The `forge init` command automatically detects your setup and configures itself appropriately.

## Quick Integration

```bash
# In your existing project root
npm install -g forge-framework

# Initialize FORGE - it auto-detects everything
forge init
```

That's it! FORGE will:
- ✓ Detect existing Claude Code setup
- ✓ Find and use existing CLAUDE.md
- ✓ Identify your frameworks
- ✓ Preserve all existing files
- ✓ Configure itself appropriately

## Integration Scenarios

### 1. Project with Claude Code Already Set Up

Your project structure:
```
my-project/
├── .claude/
│   ├── claude_config.json
│   └── ...
├── src/
├── package.json
└── README.md
```

After FORGE integration:
```
my-project/
├── .claude/          # Existing Claude setup (preserved)
├── .forge/           # New FORGE directories
│   ├── current.md
│   └── history/
├── forge.yaml        # FORGE configuration
├── agents/           # Optional: Custom agents
├── src/
├── package.json
└── README.md
```

### 2. Project with CLAUDE.md Already

If you already have a CLAUDE.md file:
```bash
forge integrate --preserve-claude-md
```

FORGE will:
- Detect existing CLAUDE.md
- Configure learning system to use it
- Not overwrite your existing context

### 3. Project with Existing Workflow

For projects with established workflows:
```bash
forge integrate --minimal
```

This creates:
- Minimal forge.yaml
- Basic .forge/ structure
- No agent templates (use on-demand)

## What Happens During Init

### Step 1: Minimal Setup

When you run `forge init`:

```bash
🔨 FORGE initialized!

📋 Created:
   - forge.yaml (minimal configuration)
   - .forge/ (working directory)

🤖 Next steps with Claude:
   1. "Analyze my project and update forge.yaml"
   2. "Create CLAUDE.md for this project"
   3. "Start a new feature with FORGE"

💡 Claude will detect your setup and configure FORGE appropriately
```

### Step 2: AI-Driven Analysis

Ask Claude to analyze your project:

```
User: Analyze my project and update forge.yaml

Claude: I'll analyze your project structure...
[Uses LS, Read, Glob tools to explore]

📊 Project Analysis Complete

Type: Existing TypeScript React Project
Frameworks: React, TypeScript, Jest
Testing: Jest with React Testing Library
CI/CD: GitHub Actions
Claude: Yes - .claude/ directory found

✅ Updated forge.yaml with:
- Detected frameworks
- Claude integration settings
- Team collaboration mode
- Learning configuration

💡 Your project is ready to use FORGE!
```

### Step 3: Start Using FORGE

Edit the generated `forge.yaml`:

```yaml
# FORGE Framework Configuration
project: your-existing-project
description: Integration with existing Claude Code project

# Respect existing Claude setup
claude_integration:
  existing_setup: true
  claude_config_path: .claude/
  
# AI-driven mode
mode: conversational

# Your existing tools/frameworks detected
detected:
  - framework: react
  - language: typescript
  - testing: jest
  - ci: github-actions

# Learning configuration
learning:
  memory_integration: true
  claude_md: true  # Use existing CLAUDE.md
  
# Optional: Specify which agents to use
agents:
  dynamic: true
  # Only create agents as needed
  on_demand: true
```

### Step 4: Migrate Existing Context

If you have existing documentation or context:

```bash
# Import existing docs into FORGE learning system
forge integrate --import-docs ./docs

# This will:
# - Scan documentation for patterns
# - Create initial LEARNINGS.md
# - Set up pattern templates
```

## Integration Strategies

### 1. Gradual Adoption

Start with one feature:
```bash
# Use FORGE for next feature only
forge new "user authentication"

# Continue normal workflow for other work
```

### 2. Retrospective Integration

Document existing code:
```bash
# Create retrospective for existing features
forge learn retrospective

# Document patterns already in use
forge learn pattern
```

### 3. Team Transition

For team projects:
```bash
# Create team-friendly setup
forge integrate --team

# This enables:
# - Multiple active cycles
# - Shared learning system  
# - Collaborative workflows
```

## Handling Conflicts

### Configuration Conflicts

If you have existing configuration that conflicts:

```yaml
# forge.yaml
compatibility:
  # Prefer existing tools
  prefer_existing: true
  
  # Map existing commands
  command_mapping:
    test: "npm test"        # Use your existing test command
    lint: "npm run lint"    # Use your existing lint setup
    build: "npm run build"  # Keep your build process
```

### Workflow Conflicts

If FORGE patterns conflict with existing workflow:

```yaml
# forge.yaml
mode: adaptive  # FORGE adapts to your workflow

# Disable phases you don't need
phases:
  focus: true
  orchestrate: true
  refine: true
  generate: false    # Skip if you have CI/CD
  evaluate: true
```

## Best Practices for Integration

### 1. Preserve Existing Value

- Don't disrupt working processes
- Keep team conventions
- Maintain CI/CD pipelines
- Respect existing documentation

### 2. Enhance, Don't Replace

FORGE should enhance your workflow:
```yaml
# Good: Enhance existing process
forge new "feature" --template=minimal

# Avoid: Forcing full FORGE process immediately
forge new "feature" --strict-phases
```

### 3. Document the Transition

Create `INTEGRATION.md`:
```markdown
# FORGE Integration Notes

## Why We Added FORGE
- Better AI collaboration
- Structured learning system
- Improved documentation

## What Changes
- New `forge` commands available
- `.forge/` directory for cycles
- Learning system in `.forge/LEARNINGS.md`

## What Stays the Same
- All existing commands work
- CI/CD pipeline unchanged
- Current workflow supported
```

## Common Integration Patterns

### 1. AI-First Development

For teams adopting AI tools:
```bash
forge integrate --ai-first

# Optimizes for:
# - Claude Code usage
# - AI-friendly documentation  
# - Memory system integration
```

### 2. Legacy Modernization

For older projects:
```bash
forge integrate --modernize

# Helps with:
# - Documenting existing patterns
# - Creating missing documentation
# - Establishing best practices
```

### 3. Microservices

For service-oriented architecture:
```bash
forge integrate --microservice

# Creates:
# - Service-specific agents
# - Distributed learning system
# - Cross-service patterns
```

## Verification

After integration, verify:

```bash
# Check FORGE is working
forge status

# Test with simple cycle
forge new "test-integration"

# Verify Claude integration
cat forge.yaml | grep claude

# Check learning system
forge learn
```

## Rollback

If needed, FORGE can be removed:

```bash
# Remove FORGE (preserves your code)
forge uninstall

# This removes:
# - .forge/ directory
# - forge.yaml
# - Created agent files
#
# Preserves:
# - All your code
# - .claude/ directory
# - Existing documentation
```

## FAQ

### Q: Will FORGE interfere with my existing setup?

No. FORGE is designed to be additive. It creates its own directories and doesn't modify existing files unless explicitly requested.

### Q: Can I use FORGE for just documentation?

Yes! Use minimal mode and only the learning features:
```bash
forge integrate --docs-only
```

### Q: How does FORGE work with existing CI/CD?

FORGE respects existing pipelines. The Generate phase can be skipped or configured to trigger your existing deployment process.

### Q: What if my team doesn't want to change workflow?

Use FORGE in "shadow mode" - let AI use it for structure while team continues normal workflow. Benefits accumulate without disruption.

## Next Steps

1. Run `forge integrate` in your project
2. Try one small feature with `forge new`
3. Review generated files and adjust
4. Gradually adopt more FORGE features
5. Share learnings with your team

Remember: FORGE is a tool to enhance your development, not a rigid framework. Use what helps, ignore what doesn't.