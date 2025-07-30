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

### Experiment Results
| Experiment | Hypothesis | Result | Decision |
|------------|------------|--------|----------|
| *Name* | *What we thought* | *What happened* | *Keep/Discard* |

---
*Last Updated: 2025-07-30*
*Total Cycles Completed: 2 (microsite, CI/CD)*
*Contributing Team Members: Scott Feltham + Claude*