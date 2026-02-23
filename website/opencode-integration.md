---
layout: forge
title: OpenCode Integration
parent: Advanced Topics
nav_order: 5
---

# OpenCode Integration
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

FORGE works on [OpenCode](https://opencode.ai/) with minimal configuration. OpenCode reads `CLAUDE.md` and `.claude/skills/` natively, so most of FORGE's integration works out of the box.

This guide covers setup, what works immediately, and how to translate Claude Code-specific features like hooks and agent invocation into OpenCode equivalents.

## Quick Start

### 1. Install the FORGE Skill

OpenCode reads `.claude/skills/` natively. If you already have FORGE set up for Claude Code, the skill is discovered automatically:

```bash
# Existing Claude Code skill path - OpenCode reads this
ls .claude/skills/forge/SKILL.md

# OpenCode also searches these paths:
# .opencode/skills/forge/SKILL.md
# .agents/skills/forge/SKILL.md
```

### 2. Configure the MCP Server (Optional)

If using `forge-mcp`, add it to `opencode.json` in your project root:

```json
{
  "mcp": {
    "forge": {
      "type": "local",
      "command": ["node", "/path/to/forge-mcp/server.js"],
      "timeout": 10000
    }
  }
}
```

{: .note }
OpenCode MCP tool names use a single underscore separator (`forge_forge_new_cycle`) vs Claude Code's double underscore (`mcp__forge__forge_new_cycle`).

### 3. Project Instructions

OpenCode reads `CLAUDE.md` as a fallback. No changes needed if you already have one:

```bash
# Option A: Keep using CLAUDE.md (works as-is)
# Option B: Copy to AGENTS.md for OpenCode-native naming
cp CLAUDE.md AGENTS.md
```

You can also reference multiple instruction files in `opencode.json`:

```json
{
  "instructions": [
    "CLAUDE.md",
    "rules/rules.md"
  ]
}
```

## Compatibility Matrix

| Feature | Claude Code | OpenCode | Status |
|---------|------------|----------|--------|
| Project instructions | `CLAUDE.md` | Reads `CLAUDE.md` as fallback | Works |
| Skills | `.claude/skills/forge/` | Reads `.claude/skills/` natively | Works |
| MCP server | `.claude/settings.json` | `opencode.json` | Config change only |
| Cycle management | All `forge_*` tools | Same via MCP or skill commands | Works |
| Phase advancement | Same | Same | Works |
| Command safety | `command-safety.js` in MCP | Same via MCP | Works |
| Lifecycle hooks | `PreToolUse`/`PostToolUse` | Not available | See workarounds |

## FORGE Agents as OpenCode Agents

OpenCode has a built-in multi-agent system. Instead of invoking FORGE agents through the MCP tool (`forge_invoke_agent`), you can define them as native OpenCode agents with per-agent model selection and tool restrictions.

Add to `opencode.json`:

```json
{
  "agent": {
    "forge-architect": {
      "description": "C4 architecture, interfaces, dependency mapping",
      "mode": "subagent",
      "model": "anthropic/claude-sonnet-4-5",
      "prompt": "You are the Architect Agent for FORGE. Design system architecture using C4 diagrams, map dependencies, define interfaces. No implementation code.",
      "tools": { "write": true, "edit": true, "bash": false }
    },
    "forge-developer": {
      "description": "TDD implementation (RED-GREEN-REFACTOR)",
      "mode": "subagent",
      "model": "anthropic/claude-sonnet-4-5",
      "prompt": "You are the Developer Agent. Follow strict TDD: RED-GREEN-REFACTOR. One task per session. 80% minimum coverage.",
      "tools": { "write": true, "edit": true, "bash": true }
    },
    "forge-tester": {
      "description": "Acceptance criteria, edge cases, test execution",
      "mode": "subagent",
      "model": "anthropic/claude-sonnet-4-5",
      "prompt": "You are the Tester Agent. Write Given-When-Then criteria, enumerate edge cases, verify against acceptance criteria.",
      "tools": { "write": true, "edit": true, "bash": true }
    },
    "forge-security": {
      "description": "Threat modeling, security constraints, adversarial review",
      "mode": "subagent",
      "model": "anthropic/claude-sonnet-4-5",
      "prompt": "You are the Security Agent. Threat modeling, OWASP checks, adversarial review. Check for injection, auth bypasses, data exposure.",
      "tools": { "edit": false, "write": true, "bash": true }
    },
    "forge-reviewer": {
      "description": "Code quality, criteria compliance",
      "mode": "subagent",
      "model": "anthropic/claude-sonnet-4-5",
      "prompt": "You are the Code Reviewer Agent. Review for quality, acceptance criteria adherence, and best practices. Provide specific, actionable feedback.",
      "tools": { "write": false, "edit": false, "bash": true }
    }
  }
}
```

Invoke agents in OpenCode with `@forge-architect`, `@forge-developer`, etc.

### Phase-Agent Mapping

| Phase | Recommended Agents | Rationale |
|-------|-------------------|-----------|
| **Focus** | `@forge-architect`, `@forge-security` | Scope definition, threat landscape |
| **Orchestrate** | `@forge-architect` | System decomposition, dependency analysis |
| **Refine** | `@forge-architect`, `@forge-tester` | Interface specs, acceptance criteria |
| **Generate** | `@forge-developer`, `@forge-reviewer` | TDD implementation, code review |
| **Evaluate** | `@forge-tester`, `@forge-security` | Verification, adversarial review |

## Phase Guard: Replacing Hooks

Claude Code uses a `PreToolUse` hook (`forge-phase-guard.sh`) to block code writes during Focus, Orchestrate, and Refine phases. OpenCode does not have lifecycle hooks. There are three alternatives.

### Option A: Permission-Based Guards

Use OpenCode's permission system to gate code edits with an approval prompt:

```json
{
  "permission": {
    "edit": {
      "docs/**": "allow",
      ".forge/**": "allow",
      "*test*": "allow",
      "*spec*": "allow",
      "*.md": "allow",
      "src/**": "ask",
      "lib/**": "ask"
    },
    "bash": {
      "git *": "allow",
      "npm test *": "allow",
      "uv run *": "allow",
      "rm -rf *": "deny",
      "git push --force *": "deny"
    }
  }
}
```

With `"ask"`, OpenCode prompts before each code edit - serving as a manual gate during planning phases.

### Option B: Phase-Specific Primary Agents

Define separate primary agents for planning and building:

```json
{
  "agent": {
    "forge-plan": {
      "description": "FORGE planning mode (Focus/Orchestrate/Refine)",
      "mode": "primary",
      "tools": { "edit": false, "write": false, "bash": false },
      "prompt": "You are in FORGE planning mode. Write documentation and specifications to docs/ only. Do NOT write implementation code."
    },
    "forge-build": {
      "description": "FORGE build mode (Generate/Evaluate)",
      "mode": "primary",
      "tools": { "edit": true, "write": true, "bash": true },
      "prompt": "You are in FORGE build mode. Follow TDD: write failing tests first, then implement, then refactor."
    }
  }
}
```

Switch between agents with Tab in OpenCode's TUI when advancing phases.

### Option C: Methodology Discipline

The simplest approach: trust the FORGE methodology and instructions in `CLAUDE.md`/`AGENTS.md`. The phase rules are documented, and the AI follows them. This is how the skill-based approach works in Claude Code without hooks - clear instructions rather than enforcement.

## Command Safety

OpenCode's permission system provides built-in command safety that supplements FORGE's `command-safety.js`:

```json
{
  "permission": {
    "bash": {
      "rm -rf *": "deny",
      "git push --force *": "deny",
      "git reset --hard *": "deny",
      "chmod 777 *": "deny",
      "git clean *": "deny"
    }
  }
}
```

This stacks with the MCP server's command safety checks if you're using `forge-mcp`.

## Skill-Only Setup (No MCP)

The simplest integration - just the FORGE skill with Python tools:

1. Copy `forge-skill/.claude/skills/forge/` into your project
2. OpenCode discovers and loads the skill automatically
3. All `uv run` commands work identically

```
your-project/
  .claude/skills/forge/     # OpenCode reads this
    SKILL.md
    tools/
      forge_init.py
      forge_cycle.py
      forge_phase.py
      forge_status.py
      forge_learn.py
  CLAUDE.md                  # OpenCode reads this as fallback
```

No `opencode.json` needed for this approach.

## Full Configuration Example

A complete `opencode.json` using FORGE with MCP and native agents:

```json
{
  "instructions": ["CLAUDE.md"],
  "mcp": {
    "forge": {
      "type": "local",
      "command": ["node", "./forge-mcp/server.js"],
      "timeout": 10000
    }
  },
  "agent": {
    "forge-architect": {
      "description": "Architecture, C4 diagrams, interfaces",
      "mode": "subagent",
      "model": "anthropic/claude-sonnet-4-5",
      "prompt": "You are the FORGE Architect Agent. Design system architecture using C4 diagrams, map dependencies, define interfaces. No implementation code.",
      "tools": { "edit": true, "write": true, "bash": false }
    },
    "forge-developer": {
      "description": "TDD implementation",
      "mode": "subagent",
      "prompt": "You are the FORGE Developer Agent. Follow strict TDD: RED-GREEN-REFACTOR. One task per session.",
      "tools": { "edit": true, "write": true, "bash": true }
    },
    "forge-tester": {
      "description": "Testing and verification",
      "mode": "subagent",
      "prompt": "You are the FORGE Tester Agent. Write Given-When-Then criteria, enumerate edge cases, verify against acceptance criteria.",
      "tools": { "edit": true, "write": true, "bash": true }
    },
    "forge-security": {
      "description": "Security review and threat modeling",
      "mode": "subagent",
      "prompt": "You are the FORGE Security Agent. Threat modeling, OWASP checks, adversarial review.",
      "tools": { "edit": false, "write": true, "bash": true }
    }
  },
  "permission": {
    "bash": {
      "git status *": "allow",
      "git diff *": "allow",
      "git add *": "allow",
      "git commit *": "allow",
      "npm test *": "allow",
      "uv run *": "allow",
      "rm -rf *": "deny",
      "git push --force *": "deny",
      "git reset --hard *": "deny",
      "chmod 777 *": "deny"
    }
  }
}
```

## Key Differences from Claude Code

| Aspect | Claude Code | OpenCode |
|--------|------------|----------|
| Hooks | `PreToolUse`/`PostToolUse` shell scripts | Not available - use permissions or agent restrictions |
| Agent invocation | `forge_invoke_agent` MCP tool | Native `@agent-name` in prompt |
| Config file | `.claude/settings.json` | `opencode.json` |
| MCP tool prefix | `mcp__server__tool` | `server_tool` |
| Multi-session | One session at a time | Multiple parallel sessions on same project |
| Model selection | Per-agent via Task tool | Per-agent in config or at runtime |
| Skill paths | `.claude/skills/` only | `.opencode/skills/`, `.claude/skills/`, `.agents/skills/` |
| Permissions | Allow/block via hooks | Three-tier `allow`/`ask`/`deny` with glob patterns |

## Disabling Claude Code Compatibility

If you've fully migrated to OpenCode-native paths and want to stop reading Claude Code files:

```bash
OPENCODE_DISABLE_CLAUDE_CODE=1 opencode
```

This stops OpenCode from reading `CLAUDE.md` and `.claude/skills/`. Only use this after migrating to `AGENTS.md` and `.opencode/skills/`.

## OpenCode Advantages for FORGE

OpenCode brings features that enhance FORGE workflows:

- **Multi-session**: Run architect and developer agents in parallel sessions on the same project
- **Granular permissions**: `allow`/`ask`/`deny` with glob patterns provides finer control than Claude Code's hooks
- **Native agent system**: FORGE agents become first-class citizens instead of MCP tool invocations
- **Model flexibility**: 75+ LLM providers, including local models via Ollama
- **Session sharing**: Share FORGE cycle progress with team members via links
