---
layout: forge
title: Your First FORGE Cycle
parent: Getting Started
nav_order: 2
---

# Your First FORGE Cycle
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

A complete walkthrough of building your first feature with FORGE, from initialization to completion.

## Prerequisites

Before starting, ensure you have:
- Node.js 14+ installed
- FORGE installed globally: `npm install -g forge-framework`
- Claude Code or another AI assistant ready
- A project directory (we'll create a simple Todo app)

## Step 1: Project Setup

Let's create a simple Node.js project for our Todo application:

```bash
# Create and enter project directory
mkdir todo-app
cd todo-app

# Initialize npm project
npm init -y

# Initialize FORGE
forge init
```

Expected output:
```
✨ FORGE initialized in /path/to/todo-app
📋 Created forge.yaml
🤖 6 Claude Code subagents configured
```

## Step 2: Start Your First Cycle

Now let's start building a user authentication feature:

```bash
forge new "user authentication"
```

Expected output:
```
✨ Started: user authentication
📋 Phase: Focus
🤖 Claude will guide you
```

## Step 3: Focus Phase - Requirements & Design

Now engage with your AI assistant. Here's what a typical conversation looks like:

### You:
```
Let's design the user authentication feature. We need:
- User registration with email/password
- Login functionality
- JWT token management
- Basic password hashing
```

### Claude (using forge-architect):
```
I'll use the forge-architect subagent to design this authentication system.

[forge-architect activated]

As your architecture specialist, I'll design the authentication system following TDD principles.

First, let me create test scenarios (mandatory in Focus phase):

1. **User Registration Tests**:
   - Should register new user with valid email/password
   - Should reject duplicate emails
   - Should validate password strength
   - Should hash passwords before storage

2. **Login Tests**:
   - Should authenticate valid credentials
   - Should reject invalid credentials
   - Should generate JWT token on success
   - Should handle rate limiting

3. **Token Management Tests**:
   - Should verify valid tokens
   - Should reject expired tokens
   - Should refresh tokens when needed

Now, let me design the architecture:

### Components:
- `auth.controller.js` - Handle HTTP requests
- `auth.service.js` - Business logic
- `auth.model.js` - User data model
- `auth.middleware.js` - Token verification
- `auth.test.js` - Test suite

### Dependencies:
- bcrypt for password hashing
- jsonwebtoken for JWT
- express for routing
- jest for testing

Shall I create the PRD and test scenarios now?
```

### You:
```
Yes, create the PRD and test scenarios
```

The AI will then create detailed documentation in the `specs/` directory.

## Step 4: Check Progress

At any point, check your cycle status:

```bash
forge status
```

Expected output:
```
📋 Current Cycle: user authentication
──────────────────────────────────────────────────
✅ 🎯 Focus        [████████░░] 80%
⏳ 📝 Orchestrate  [░░░░░░░░░░] 0%
⏳ 🔨 Refine       [░░░░░░░░░░] 0%
⏳ 🚀 Generate     [░░░░░░░░░░] 0%
⏳ 📊 Evaluate     [░░░░░░░░░░] 0%

📍 Current Phase: Focus
   Remaining tasks:
   • Design architecture
```

## Step 5: Move to Next Phase

Once Focus tasks are complete, move forward:

```bash
forge phase next
```

If requirements aren't met, you'll see:
```
❌ Cannot advance: Focus phase incomplete
   Missing: Test scenarios not defined
   
Use 'forge status --detailed' to see requirements
```

If ready, you'll see:
```
✅ Moved from Focus to Orchestrate
```

## Step 6: Orchestrate Phase - Planning

### You:
```
Let's break down the implementation tasks
```

### Claude (using forge-developer):
```
[forge-developer activated]

I'll break down the implementation into prioritized tasks:

**Priority 1 - Core Authentication**:
1. Set up project structure and dependencies
2. Create user model with schema validation
3. Implement password hashing service
4. Build registration endpoint
5. Build login endpoint

**Priority 2 - Token Management**:
6. Implement JWT generation
7. Create token verification middleware
8. Add token refresh endpoint

**Priority 3 - Testing & Security**:
9. Write comprehensive test suite
10. Add input validation
11. Implement rate limiting

Dependencies:
- Tasks 1-3 must complete before 4-5
- Tasks 6-7 required before 8
- Task 9 can run parallel to implementation

Let me update the cycle documentation...
```

## Step 7: Refine Phase - Specifications

**CRITICAL: No code is written in this phase - specifications only.**

Move to Refine phase:

```bash
forge phase next
```

### You:
```
Let's define the acceptance criteria and edge cases for user authentication
```

### Claude (using forge-tester):
```
[forge-tester activated]

Defining specifications for user authentication:

**Acceptance Criteria (Given-When-Then):**

1. User Registration:
   Given a new user with valid email and password
   When they submit the registration form
   Then a new account is created and confirmation email sent

2. Login:
   Given an existing user with valid credentials
   When they submit the login form
   Then they receive a JWT token and are authenticated

**Interface Specifications:**
- POST /api/auth/register - accepts {email, password}, returns {userId, token}
- POST /api/auth/login - accepts {email, password}, returns {token, refreshToken}
- Error contract: {error: string, code: number}

**Edge Cases by Category:**
| Category | Cases |
|----------|-------|
| Empty/null | Empty email, empty password, null values |
| Boundary | Password min/max length, email format |
| Invalid | Malformed email, weak password, SQL injection |
| Timing | Expired tokens, rate limiting |
| Failure | Database down, email service unavailable |

Ready to move to Generate phase for implementation?
```

## Step 8: Generate Phase - TDD Implementation

```bash
forge phase next
```

### You:
```
Let's implement user authentication with TDD
```

### Claude (using forge-developer):
```
[forge-developer activated]

Following TDD: RED → GREEN → REFACTOR

**RED Phase - Writing failing tests first:**

[Creates auth.test.js with tests based on acceptance criteria]

npm test
❌ 12 tests failing (as expected)

**GREEN Phase - Minimal implementation to pass:**

[Creates auth.controller.js, auth.service.js, auth.model.js]

npm test
✅ 12 tests passing!

**REFACTOR Phase - Improve while green:**

[Extracts password validation, adds input sanitization]

npm test
✅ 12 tests passing, code coverage: 94%

[forge-reviewer activated]

Code review completed:
- Clean separation of concerns ✅
- Input validation present ✅
- Password hashing secure ✅
- Ready for evaluation
```

## Step 9: Evaluate Phase - Verification

```bash
forge phase next
```

### You:
```
Let's verify the implementation against our acceptance criteria
```

### Claude (using forge-tester + forge-security):
```
[forge-tester activated]

**Verification against Acceptance Criteria:**

1. User Registration ✅
   ✓ Given/When/Then criteria verified
   ✓ Confirmation email sent
   ✓ Account created in database

2. Login ✅
   ✓ Valid credentials return JWT
   ✓ Invalid credentials rejected
   ✓ Refresh token generated

**Edge Cases Tested:**
- Empty/null inputs: ✅ Proper error messages
- Boundary conditions: ✅ Min/max password length enforced
- Invalid inputs: ✅ SQL injection blocked, weak passwords rejected
- Timing: ✅ Token expiration working, rate limiting active
- Failure modes: ✅ Graceful degradation tested

[forge-security activated]

**Security Review:**
- Password hashing: bcrypt with 10 rounds ✅
- JWT implementation: Secure signing ✅
- Input validation: Sanitization present ✅
- No injection vulnerabilities detected ✅

**Disposition Decision:**
✅ ACCEPT - All acceptance criteria met, edge cases handled, security verified.

### Learnings Captured:
- JWT refresh pattern effective for session management
- Bcrypt rounds (10) balance security/performance well
- Rate limiting essential for brute force prevention

Ready to complete the cycle?
```

## Step 10: Complete the Cycle

Once all phases show 100%:

```bash
forge complete
```

Expected output:
```
✅ Cycle completed: user authentication
📁 Archived to .forge/completed/2024-01-15-user-authentication.md
📝 Learnings saved to .forge/learnings/auth.md
🎉 Great work!

Ready for next cycle? Use 'forge new <feature>'
```

## Common Patterns & Tips

### Using Multiple Subagents

Claude Code subagents can work in parallel:

```
You: Analyze the codebase for security issues while also checking test coverage

Claude: I'll use multiple subagents in parallel:

[forge-reviewer activated]
Analyzing security patterns...

[forge-tester activated]
Checking test coverage...

[Both agents work simultaneously and report findings]
```

### Handling Validation Errors

If you try to skip ahead:

```bash
forge complete
```

You'll see:
```
❌ Cannot complete: Phases incomplete
   
   Focus:      ✅ 100%
   Orchestrate: ✅ 100%
   Refine:      ⚠️ 60%  <- Incomplete
   Generate:    ⏳ 0%
   Evaluate:    ⏳ 0%
   
Use 'forge status --detailed' for requirements
```

### Force Completion (Emergency Only)

If absolutely necessary:

```bash
forge complete --force
```

Warning: This bypasses validation and should only be used when needed.

## Troubleshooting

### Issue: "Command not found: forge"

**Solution**: Ensure global installation:
```bash
npm install -g forge-framework
npm list -g forge-framework  # Verify installation
```

### Issue: "Cannot advance phase"

**Solution**: Check requirements:
```bash
forge status --detailed
```

Common missing items:
- Problem statement/success criteria not defined (Focus phase)
- Tasks not broken down into sessions (Orchestrate phase)
- Acceptance criteria/edge cases not specified (Refine phase)
- Tests not passing or coverage below 80% (Generate phase)

### Issue: "Subagents not responding"

**Solution**: Verify Claude Code configuration:
1. Check that subagent definitions exist
2. Restart Claude Code
3. Try explicit subagent activation:
```
You: Please use forge-architect to design this feature
```

## Next Steps

Congratulations! You've completed your first FORGE cycle. Here's what to explore next:

1. **Team Collaboration**: Learn to work with multiple developers
2. **Custom Agents**: Create specialized agents for your domain
3. **Advanced Patterns**: Parallel development, complex workflows
4. **Integration**: Connect FORGE with CI/CD pipelines

Start your next cycle:
```bash
forge new "your next feature"
```

## Get Help

- **Documentation**: [Full FORGE Docs](/)
- **Issues**: [GitHub Issues](https://github.com/scottfeltham/forge-framework/issues)
- **Community**: [GitHub Discussions](https://github.com/scottfeltham/forge-framework/discussions)

Happy forging! 🔨