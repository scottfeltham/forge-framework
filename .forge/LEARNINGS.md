# FORGE Project Learnings

This knowledge base captures learnings from all completed cycles. It grows with each project iteration and helps inform future decisions.

## 🎯 Patterns That Work

### Architecture Patterns
- **Separate Documentation Sites**: Moving Jekyll to `website/` avoided conflicts with framework expectations
- **Single Workflow for Releases**: One `release.yml` handles entire pipeline - easier to maintain
- **Matrix Strategy for CI**: Testing across multiple OS/Node versions catches platform-specific issues early

### Development Practices
- **Test Scenarios First**: Writing test scenarios before implementation ensures comprehensive coverage
- **FORGE 5-Phase Process**: Focus→Orchestrate→Refine→Generate→Evaluate provides clear structure
- **Code Review Catches Issues**: Found regex improvements, error handling gaps, and edge cases
- **Natural Language Commands**: FORGE commands like "forge a new X" blend so naturally into conversation that they're easy to miss - AI assistants should watch for these patterns

### Technology Choices
- **Jekyll + GitHub Pages**: Zero-friction deployment for documentation sites
- **Just the Docs Theme**: Provides 90% of documentation features out-of-box
- **GitHub Actions**: Powerful CI/CD with minimal configuration

### Team Collaboration
<!-- Add successful collaboration patterns -->
*Example: Daily standup at cycle boundaries improved handoffs*

## ⚠️ Pitfalls to Avoid

### Common Mistakes
- **Marking Tasks Complete Without Doing Them**: Always perform code review when marked
- **Using Deprecated Actions**: GitHub Actions v3 → v4 migration required
- **npm ci Without Lock File**: Use `npm install` when no package-lock.json exists
- **Hardcoded File Paths in CI**: Downloaded artifacts may be in subdirectories

### Anti-Patterns
- **Accidental Cycle Completion**: Running `forge complete` prematurely loses context
- **Not Checking Directory Structure**: Framework may expect specific folders (docs/guides/, etc.)
- **Bypassing FORGE Process**: When user says "forge a new X", jumping straight to implementation instead of creating a cycle
- **Missing Conversational Commands**: FORGE's natural language integration means commands can appear anywhere in conversation

### Technical Debt Sources
<!-- Identify what creates debt -->
*Example: Rushing deployment without proper monitoring*

## 🔧 Technology Decisions

### Approved Stack
| Category | Technology | Reasoning |
|----------|------------|-----------|
| *Example: Frontend* | *React* | *Team expertise, ecosystem* |

### Rejected Options
| Technology | Reason for Rejection | Alternative |
|------------|---------------------|-------------|
| *Example: MongoDB* | *Need ACID transactions* | *PostgreSQL* |

## 📈 Metrics & Benchmarks

### Performance Benchmarks
| Metric | Target | Best Achieved | Typical |
|--------|--------|---------------|---------|
| *API Response* | *<200ms* | *150ms* | *180ms* |

### Quality Metrics
| Metric | Target | Current Average |
|--------|--------|-----------------|
| *Test Coverage* | *80%* | *85%* |
| *Bug Rate* | *<5/sprint* | *3/sprint* |

## 🚀 Best Practices

### Code Review
- [ ] Always review PR within 24 hours
- [ ] Focus on architecture over syntax
- [ ] Provide actionable feedback

### Testing Strategy
- [ ] Write tests first for critical paths
- [ ] Integration tests for API boundaries
- [ ] E2E tests for user journeys

### Deployment Process
- [ ] Always have rollback plan
- [ ] Deploy during low-traffic hours
- [ ] Monitor for 30 minutes post-deploy

## 📚 Recommended Resources

### Documentation
- [Link to architecture decisions]
- [Link to coding standards]
- [Link to deployment guides]

### Tools & Libraries
- **Tool Name**: Purpose and why it's recommended
- **Library Name**: Use cases where it excels

## 🔄 Continuous Improvement

### Recent Improvements
| Date | Improvement | Impact |
|------|-------------|--------|
| 2025-07-30 | Added Jekyll documentation site | Live docs at https://scottfeltham.github.io/forge-framework/ |
| 2025-07-30 | Implemented CI/CD release automation | Reduced release time from manual to < 2 minutes |
| 2025-07-30 | Released v0.2.0-beta | Successfully published to npm with automated workflow |
| 2025-07-31 | Refactored forge CLI to 99 lines | Maintains <100 line spec with better readability |
| 2025-07-31 | Added local installation method | Projects can have visible, customizable agents/templates |
| 2025-07-31 | Recognized meta-pattern | FORGE commands blend naturally into conversation |
| 2025-07-31 | Implemented slash commands | Explicit commands for users who prefer clarity over natural language |

### Experiment Results
| Experiment | Hypothesis | Result | Decision |
|------------|------------|--------|----------|
| *Name* | *What we thought* | *What happened* | *Keep/Discard* |

## 🎮 Slash Commands Learning

### Implementation Success
The slash commands feature demonstrates several key principles:

1. **User-Driven Design**: Feature came from observing actual usage patterns where FORGE commands were missed in conversation
2. **Dual-Mode Support**: Maintaining both `/forge new` and natural language preserves flexibility
3. **Framework Compatibility**: Namespace approach (`.claude/commands/forge/`) allows multiple tools to coexist
4. **Documentation as Code**: Markdown command definitions work perfectly for Claude's pattern matching

### Key Insights
- **Explicit vs Natural**: Some users prefer explicit commands for clarity and predictability
- **Discovery Matters**: `/forge` alone could show available commands for better discoverability
- **Standards Opportunity**: Command definition format could become a standard for AI assistants

### Technical Approach
- Used markdown files for command definitions (pattern, parameters, action, examples)
- Integrated with existing CLAUDE.md for recognition
- Updated installer to include .claude directory
- Maintained backward compatibility with natural language

---
*Last Updated: 2025-07-31*
*Total Cycles Completed: 3 (microsite, CI/CD, slash commands) + informal cycles*
*Contributing Team Members: Scott Feltham + Claude*

## Meta-Learning: FORGE Commands in Natural Language

**Key Insight**: When the user said "forge a new installer", this was actually a FORGE command embedded in natural conversation. The framework is designed to be so conversational that even its commands feel like natural language, which can lead to:

1. **Missed Opportunities**: Not creating formal cycles when requested
2. **Process Bypass**: Jumping straight to implementation
3. **Lost Documentation**: Work done outside cycles isn't tracked

**Recommendation for AI Assistants**: 
- Watch for patterns like "forge a new X", "forge new Y"
- Even in casual conversation, these should trigger cycle creation
- The beauty and challenge of FORGE is that it blends seamlessly into natural dialogue

This meta-observation shows FORGE working as designed - so natural that even the AI assistant didn't notice the command!