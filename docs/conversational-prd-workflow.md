# Conversational PRD Building Workflow

FORGE Framework uses an interactive, conversational approach to ensure comprehensive requirements are captured before starting development cycles.

## Philosophy

**"Invest time in the Focus phase to save time in all other phases"**

By engaging in a conversation to build a complete PRD, FORGE helps you:
- ✅ Avoid scope creep and requirements gaps
- ✅ Identify risks and dependencies early
- ✅ Create clear acceptance criteria upfront
- ✅ Set measurable success metrics
- ✅ Build consensus with stakeholders

## Workflow Example

### Scenario 1: Minimal Information Provided

**User Request:**
```bash
forge new "user-authentication"
```

**AI Assistant Response:**
```markdown
📋 Let's Build a Comprehensive PRD Together

**Feature**: user-authentication

**Let me help you build complete requirements. Please provide:**

**1. Feature Overview & Goals**
   • What problem does this solve?
   • Who are the users/stakeholders?
   • What are the key objectives?

**2. Detailed Requirements**
   • What are the core functionalities?
   • What are the user workflows?
   • What are the acceptance criteria?

**3. Technical Considerations**
   • Are there specific technologies or frameworks to use?
   • What are the integration points with existing systems?
   • What are the performance/scalability requirements?

**4. Security & Compliance**
   • Are there security requirements?
   • Any compliance standards to follow?
   • What are the data sensitivity levels?

**5. Success Criteria**
   • How will we measure success?
   • What are the key metrics?
   • What defines "done"?

💡 TIP: You can also provide:
• User stories in "As a [user], I want [goal], so that [benefit]" format
• Edge cases and error scenarios to handle
• Dependencies on other features or systems

🎯 Next Step: Please provide detailed answers to these questions.
```

**User Provides Details:**
```markdown
User authentication needs:
- Support email/password authentication
- Implement JWT-based session management
- Support password reset via email
- Enforce strong password policies (min 12 chars, complexity)
- Rate limiting on login attempts (5 attempts/15 minutes)

Technical:
- Use bcrypt for password hashing
- Store tokens in httpOnly cookies
- Integrate with existing Express.js API
- Use PostgreSQL for user data storage

Security:
- Must comply with OWASP authentication guidelines
- Implement MFA as future enhancement (not in this cycle)
- Audit logging for all authentication events

Success Criteria:
- Users can register and login successfully
- Failed login attempts are rate-limited
- Password reset flow completes in < 5 minutes
- Zero authentication bypass vulnerabilities
```

**FORGE Creates Cycle:**
```markdown
🚀 New FORGE Development Cycle Created

**Feature**: user-authentication
**Started**: 2025-01-15
**Status**: Focus Phase
**Priority**: high

📄 DOCUMENTATION CREATED:
• Cycle: .forge/current/user-authentication.md
• PRD: specs/prd-user-authentication.md

📋 IMMEDIATE NEXT ACTIONS (Focus Phase):
1. 🏗️ Define architecture design
2. 🔒 Identify security requirements
3. 📚 Create test scenarios (MANDATORY)

⚠️ MANDATORY BEFORE ADVANCING:
• Complete test scenarios (MANDATORY)
• Finalize architecture design
• Identify security risks
• Document detailed requirements

🎯 Focus Phase Goal: Establish clear requirements and prevent scope creep
```

### Scenario 2: Partial Description Provided

**User Request:**
```bash
forge new "payment-processing"
```
*Then provides: "Add payment processing to the application"*

**AI Assistant Response:**
```markdown
⚠️ PRD Validation Check

**Feature**: payment-processing

**Current Description**:
Add payment processing to the application

**❌ Missing Elements**:
• Description is too brief - needs detailed explanation
• Missing user/stakeholder context - who is this for?
• Missing acceptance criteria - what defines success?
• Missing technical details - needs implementation guidance

📋 Recommendations:

A comprehensive PRD should include:

1. **User Context**
   • Who needs this feature and why?
   • What problem are we solving?

2. **Acceptance Criteria**
   • What are the specific requirements?
   • How do we verify it works correctly?

3. **Technical Details**
   • What systems/components are involved?
   • Are there integration points or dependencies?

4. **Success Metrics**
   • How will we measure success?
   • What business value does this deliver?

🔄 Options:

1. **RECOMMENDED**: Provide more details by answering:
   • What is the user workflow for this feature?
   • What are the must-have vs nice-to-have requirements?
   • What are potential edge cases or error scenarios?
   • Are there security or performance requirements?

2. **Proceed anyway**: Continue with minimal requirements
   ⚠️ Warning: Incomplete requirements lead to scope creep and rework!

💡 FORGE Philosophy: "Invest time in Focus phase to save time in all other phases"
```

## Best Practices

### ✅ DO

- **Provide user context**: Who benefits and why?
- **Define acceptance criteria**: What makes this feature "done"?
- **Consider edge cases**: What could go wrong?
- **Identify dependencies**: What do we need first?
- **Set success metrics**: How do we measure success?
- **Think about security**: What are the risks?

### ❌ DON'T

- **Skip the conversation**: Rushing leads to rework
- **Use vague descriptions**: "Make it better" isn't actionable
- **Ignore non-functional requirements**: Performance, security, scalability matter
- **Forget stakeholders**: Who needs to approve this?

## PRD Template

Here's a template for comprehensive feature descriptions:

```markdown
**Feature Name**: [Clear, concise name]

**User Story**:
As a [user type], I want [goal], so that [benefit].

**Requirements**:
- [Must-have requirement 1]
- [Must-have requirement 2]
- [Should-have requirement 3]

**Technical Approach**:
- [Technology/framework choice]
- [Integration points]
- [Data storage strategy]

**Acceptance Criteria**:
- [Testable criterion 1]
- [Testable criterion 2]
- [Testable criterion 3]

**Security Considerations**:
- [Security requirement 1]
- [Compliance standard]

**Success Metrics**:
- [Measurable metric 1]
- [Measurable metric 2]

**Dependencies**:
- [Required feature/system 1]
- [Required feature/system 2]

**Edge Cases**:
- [Edge case scenario 1]
- [Edge case scenario 2]
```

## Why This Matters

### Real Cost of Incomplete Requirements

**Without conversational PRD building:**
- 🔴 Requirements discovered during implementation → Rework in Refine phase
- 🔴 Security risks identified late → Expensive fixes in Generate phase
- 🔴 Missing acceptance criteria → Confusion during testing
- 🔴 Unclear scope → Feature creep and missed deadlines

**With conversational PRD building:**
- ✅ Clear requirements upfront → Smooth implementation
- ✅ Early risk identification → Proactive mitigation
- ✅ Defined success criteria → Clear testing targets
- ✅ Bounded scope → Predictable delivery

### Time Investment Comparison

| Activity | Without PRD Conversation | With PRD Conversation |
|----------|-------------------------|----------------------|
| Focus Phase | 10 minutes | 30 minutes |
| Orchestrate Phase | 20 minutes | 15 minutes |
| Refine Phase | 4 hours + rework | 2 hours |
| Generate Phase | 1 hour + fixes | 30 minutes |
| **Total** | **~5.5 hours** | **~3 hours** |
| **Rework** | **High** | **Minimal** |

**ROI: 45% time savings + higher quality outcomes**

## Summary

FORGE's conversational PRD building ensures:
1. **Complete requirements** before any code is written
2. **Early risk identification** in the Focus phase
3. **Clear success criteria** for testing and validation
4. **Stakeholder alignment** through comprehensive documentation
5. **Reduced rework** by catching issues early

Remember: **Time spent in conversation saves multiples of time in implementation!**
