# FORGE Orchestrator Cooperation Protocol

This document defines how every hat agent cooperates with the `forge-orchestrator` (see `forge-team/agents/orchestrator.md`). All base hats and specialized variants must honor this protocol so the orchestrator can compose them into a full F-O-R-G-E cycle.

## 1. You are dispatchable

The orchestrator invokes you via Claude Code's `Task` tool. You may also be invoked directly by the user (outside a cycle), in which case these protocol rules still apply but there is no orchestrator to report to — return your disposition as part of the final response instead.

When dispatched, you will receive:
- The **phase** you are contributing to (focus / orchestrate / refine / generate / evaluate)
- The **specific sub-task** or deliverable you are asked to produce
- **Context from prior phases** (problem statement, architecture, acceptance criteria, etc., as relevant)
- The **gate criteria** you are working toward
- Any **escalation triggers** already surfaced in the cycle

You must honor your phase-specific role from your own prompt (Primary / Secondary / Advisory / Not Involved). If asked to work outside your phase role, flag it and return `disposition: escalate`.

## 2. Machine-led by default

FORGE runs in machine-led mode by default on the collaboration spectrum. This means:

- You do **not** stop at phase boundaries to wait for human approval. You return a disposition to the orchestrator and the orchestrator decides what happens next.
- You do **not** require the user to confirm routine work. You only escalate on specific triggers.
- You **do** escalate up the spectrum when any of the escalation triggers in `agent-team.yaml` fire — the orchestrator will then involve the human.

If your prompt still contains legacy phrasing about "require_approval" or "wait for human" at phase boundaries, treat that as superseded. Humans review at Evaluate-phase disposition and on escalation triggers, not at every phase boundary.

## 3. NO CODE in Refine

If the current phase is `refine`, you must not write implementation code, only specifications. `forge-team/hooks/pre_tool_use.py` will block Write/Edit/MultiEdit on non-spec paths during Refine — if you trip the block, you have drifted. Return `disposition: revise` and explain what you were trying to do.

Spec/doc paths that remain writable during Refine: `.forge/`, `specs/`, `docs/`, `ai_docs/`, `CLAUDE.md`.

## 4. Validation gates in Generate and Evaluate

When you finish work in Generate or Evaluate, `forge-team/hooks/subagent_stop.py` runs the configured validation commands (lint, typecheck, tests). If any fail, the hook blocks phase advancement and feeds the failure output back to you. Fix the failures or return `disposition: escalate` with the failing output in `notes:`.

## 5. Disposition reporting format

Every dispatch must return a disposition in this YAML shape (as the tail of your final response, in a fenced block):

```yaml
hat: <your hat name — e.g., architect, developer, tester>
phase: <focus|orchestrate|refine|generate|evaluate>
deliverables_produced:
  - <path or artifact>
  - <path or artifact>
confidence:
  clarity: 1-10       # are inputs unambiguous?
  completeness: 1-10  # are all required artifacts present?
  risk: 1-10          # 10 = very high risk if wrong
disposition: <complete|revise|escalate>
escalation_trigger: <populated only when disposition == escalate>
notes: <free-form, short>
```

The orchestrator parses this block. If your disposition is malformed or missing, the orchestrator will treat your run as `disposition: escalate` by default.

## 6. Escalation triggers (every hat shares these)

Escalate up the collaboration spectrum when any of these fire, in addition to your hat-specific triggers:

- **Ambiguous requirements** — any criterion contains "appropriate", "reasonable", "as needed", or similarly untestable language
- **Scope uncertainty** — implementation requires functionality not present in any acceptance criterion
- **Confidence below threshold** — `clarity < 7` OR `completeness < 7`
- **Risk above threshold** — `risk > 8`
- **Security sensitivity** — feature touches authentication, payment, or PII
- **Destructive operations** — work requires `rm -rf`, `git push --force`, database drops, production config changes, etc.
- **Inner-loop exhaustion** — 3+ iterations without convergence (typical in Generate)
- **Conflicting constraints** — performance conflicts with security, accessibility conflicts with latency, etc.
- **Budget exceeded** — the orchestrator tracks cycle spend against `max_cycle_budget_usd`; if you are told the budget is tight, finish your current work and escalate rather than fan out further

To escalate: set `disposition: escalate`, populate `escalation_trigger:` with the specific condition, and put the question for the human in `notes:`. The orchestrator will surface it.

## 7. Accountability — every step is traceable

FORGE's third pillar is Accountability. `forge-team/hooks/post_tool_use.py` records every tool invocation to `.forge/audit.sqlite`. You do not need to log anything yourself, but:

- Commit artifacts at phase boundaries (the orchestrator will prompt you)
- Do not amend the audit trail (append-only)
- When making non-obvious decisions (rejecting a design alternative, choosing one library over another, skipping an edge case), record the reasoning in the relevant deliverable file so it survives in git history

## 8. Learning contribution — every hat feeds the loop

FORGE is an **actively learning** methodology. The `forge-learner` agent runs automatically on Accept (and Reject) dispositions and harvests learnings to `.forge/LEARNINGS.md`, `.forge/patterns/`, and `mcp__memory`. Your contribution as a hat:

- **Write non-obvious observations into your `notes:` field** in the disposition YAML. The learner parses these later. Examples:
  - "The test scenarios from Refine omitted out-of-order callback handling; discovered during Generate and added as a regression test"
  - "This architecture required a third iteration because the first two assumed single-tenant. Multi-tenancy should be a Focus-phase question for this domain"
  - "Developer hat hit inner-loop exhaustion on the payment idempotency check — the Refine interface spec didn't explicitly state idempotency, only hinted at it"
- **Be specific and sourced.** "TDD is good" is not a learning. "When Refine specifies error contracts with explicit status codes and messages, RGR-Done converges 50% faster" is a learning.
- **Do not write learnings that are obvious from the code.** The learner can read the commit history. You write what the commit history *can't* tell a future reader.
- **If you apply a pattern from `mcp__memory` or `.forge/patterns/`**, note that in `notes:` so the learner can increment the pattern's confidence score and add this cycle to its `cycles_applied` list.

The orchestrator is responsible for dispatching the learner. You are responsible for making sure your disposition notes are harvestable.

## 9. Use the harness

FORGE's standing rule: **do not build tools that already exist. Use Claude Code's native capabilities and stock MCP servers.** Prefer `Task`, `Read`, `Write`, `Edit`, `Glob`, `Grep`, `Bash`, and whichever stock MCP servers are listed in `agent-team.yaml` under `mcp.allowed_servers`. Cross-cycle memory is `mcp__memory` (stock); audit queries are `mcp__sqlite` (stock); metrics come from the forge-observatory endpoints. If you find yourself wishing for a custom tool, first verify no stock equivalent exists, and if none does, escalate — don't paper over the gap with a one-off script.

## 10. Minimum viable hat

Any new hat (including specializations generated by the meta-agent) must:

1. Declare its base hat and phase-mapping
2. Use least-privilege tools
3. Honor NO CODE in Refine
4. Honor the validation gates in Generate/Evaluate
5. Return disposition in the format above
6. Escalate on shared triggers in addition to its own
7. Prefer stock tools
8. Contribute to the learning loop via `notes:` (non-obvious observations, applied patterns, discovered edge cases)

Without these, the orchestrator cannot compose you into a cycle.
