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

```bash
# Install globally
npm install -g @neoforge/forge-framework

# Initialize in your project
cd your-project
forge init

# Start your first IDD cycle
forge new "user authentication"

# Check progress
forge status
```
{: .fs-5 }

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

```bash
# Start an IDD cycle
forge new "payment processing"

# FORGE guides you through:
# 1. Focus   - Define the problem and success criteria
# 2. Orchestrate - Design architecture and break into tasks
# 3. Refine  - Write acceptance criteria (no code yet!)
# 4. Generate - AI implements via TDD
# 5. Evaluate - Verify implementation matches intent
```

The conversation might look like:

```
You: Let's implement payment processing
Claude: I'll start with the Focus phase. What payment providers
        do you need to support? What are your success criteria?
You: Stripe only. Success = can charge a card and handle failures.
Claude: Got it. Let me define the acceptance criteria...
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