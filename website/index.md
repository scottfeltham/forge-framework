---
layout: forge
title: FORGE Framework
nav_order: 1
description: Intent-Driven Development - Express intent clearly, let AI implement correctly
permalink: /
---

# Intent-Driven Development
{: .fs-9 }

Express your intent clearly. Let AI implement it correctly.
{: .fs-6 .fw-300 }

[Get started now](#getting-started){: .forge-btn .forge-btn--large }
[View on GitHub](https://github.com/scottfeltham/forge-framework){: .forge-btn .forge-btn--secondary .forge-btn--large }

---

## What is Intent-Driven Development?

**Intent-Driven Development (IDD)** is a methodology where you focus on expressing *what* you want and *why*, while AI handles the *how*. Instead of writing code line by line, you define clear intent through structured phases, and AI implements it correctly.

The key insight: **AI can write code. Humans should define intent.**

---

## The FORGE Cycle

FORGE guides you through 5 validated phases:

| Phase | Purpose | Output |
|-------|---------|--------|
| **Focus** 🎯 | Define what & why | Problem statement, success criteria |
| **Orchestrate** 📋 | Plan the architecture | C4 diagrams, task breakdown |
| **Refine** ✏️ | Specify "done" before code | Acceptance criteria, interfaces |
| **Generate** ⚡ | AI writes code via TDD | Tested, working implementation |
| **Evaluate** ✅ | Verify intent was met | Accepted or revision needed |

Each phase has validation gates. You can't skip ahead without completing the requirements.

---

## Getting Started

Choose your preferred integration:

### Option 1: Claude Code Skill (Recommended)
{: .fs-5 }

The simplest way to use FORGE. No server required - just install the skill.

```bash
# Clone the skill
git clone https://github.com/neoforge-dev/forge-skill.git ~/.claude/skills/forge

# That's it! Use /forge in Claude Code
```

Then in Claude Code:
```
/forge new "user authentication"
/forge status
/forge phase next
```

### Option 2: MCP Server
{: .fs-5 }

For IDE integrations and multi-tool workflows.

```bash
# Install the MCP server
npm install -g @neoforge/forge-mcp

# Add to your Claude Desktop config
# See MCP Integration docs for setup
```

### Option 3: CLI (Legacy)
{: .fs-5 }

Standalone CLI for non-Claude workflows.

```bash
npm install -g @neoforge/forge-framework
forge init && forge new "feature"
```

---

## Why Intent-Driven Development?

### 🎯 Clarity Before Code
Define success criteria *before* implementation. Know exactly what "done" looks like.

### 🧠 AI as Implementer
You provide intent and constraints. AI handles implementation details via TDD.

### ✅ Validated Phases
Can't skip steps. Each phase must pass validation before advancing.

### 🔄 Structured Iteration
When output doesn't match intent, refine and regenerate with clear feedback.

### 📝 Everything in Markdown
All state, specs, and learnings in human-readable files. Full transparency.

### 🤖 Specialized Agents
Architect, Developer, Tester, DevOps, Reviewer - each with domain expertise.

---

## Quick Example

Using the Claude Code skill:

```
You: /forge new "payment processing"

Claude: Starting Focus phase. Let me ask some questions:
        - What payment providers do you need?
        - What are your success criteria?
        - Any security requirements?

You: Stripe only. Success = charge cards and handle failures gracefully.

Claude: Got it. Moving to Orchestrate phase...
        [Creates architecture diagram]
        [Breaks into session-sized tasks]

Claude: Ready for Refine phase. Writing acceptance criteria...
        Given a valid card, when charged, then return success
        Given an invalid card, when charged, then return error with code

Claude: Acceptance criteria approved. Starting Generate phase...
        [Writes failing test first - RED]
        [Implements minimal code - GREEN]
        [Refactors - REFACTOR]

Claude: All tests passing. Ready for Evaluate phase.
        Does this match your intent?
```

---

## The IDD Philosophy

> "The bottleneck in AI-assisted development isn't code generation.
> It's expressing intent clearly enough for AI to implement correctly."

FORGE exists to solve this. It provides just enough structure to capture intent precisely, then gets out of the way while AI does the implementation.

**Less code. More clarity. Better software.**

---

## About

FORGE Framework was created by [Scott Feltham](https://github.com/scottfeltham) to enable Intent-Driven Development with AI assistants.

### License

Distributed under the [MIT license](https://github.com/scottfeltham/forge-framework/blob/main/LICENSE).

### Contributing

Discuss changes via issue or email before submitting PRs.