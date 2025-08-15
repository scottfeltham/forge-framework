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

## Step 7: Refine Phase - Implementation

Move to implementation:

```bash
forge phase next
```

### You:
```
Let's implement the user registration feature with TDD
```

### Claude:
```
[forge-tester activated]

Starting with tests first (TDD approach). Creating the test file:

[Creates auth.test.js with comprehensive tests]

[forge-developer activated]

Now implementing to make tests pass:

[Creates implementation files with actual code]

Running tests to verify:
npm test

✅ All tests passing!
```

## Step 8: Generate Phase - Deployment Prep

```bash
forge phase next
```

### You:
```
Prepare for deployment
```

### Claude (using forge-devops):
```
[forge-devops activated]

Preparing deployment artifacts:

1. Creating Dockerfile
2. Setting up environment variables
3. Adding production configs
4. Creating deployment scripts
5. Updating documentation

[Creates all necessary deployment files]
```

## Step 9: Evaluate Phase - Review & Learn

```bash
forge phase next
```

### You:
```
Let's evaluate what we built
```

### Claude (using forge-reviewer):
```
[forge-reviewer activated]

Conducting comprehensive review:

### What Worked Well:
- Clean separation of concerns
- Comprehensive test coverage (95%)
- Secure password handling
- Well-structured JWT implementation

### Areas for Improvement:
- Could add email verification
- Consider OAuth integration
- Add password reset functionality

### Metrics:
- Code coverage: 95%
- Security score: A
- Performance: <100ms response time
- Documentation: Complete

### Learnings Captured:
- JWT refresh pattern effective
- Bcrypt rounds (10) balance security/performance
- Rate limiting prevents brute force

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
- Test scenarios not created (Focus phase)
- Tasks not broken down (Orchestrate phase)
- Tests not written (Refine phase)

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