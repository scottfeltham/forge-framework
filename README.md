# 🔨 FORGE Framework

> **Beta Release**: v0.3.1-beta - We're gathering feedback! Please report issues and share your experience.

A conversational AI-driven development framework that puts AI at the center of software development. Just 88 lines of code that unlock unlimited potential through natural dialogue.

[![npm version](https://img.shields.io/npm/v/forge-framework.svg)](https://www.npmjs.com/package/forge-framework)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Documentation](https://img.shields.io/badge/docs-website-blue.svg)](https://scottfeltham.github.io/forge-framework/)

## Quick Start

```bash
# Install the beta
npm install -g forge-framework@beta

# Initialize in any project
cd your-project
forge init

# Start building with AI
forge new "user authentication"
```

After running `forge init`, ask Claude to:
- "Analyze my project and update forge.yaml"
- "Create CLAUDE.md for this project"
- "Detect frameworks and configure FORGE"

The AI handles all the complex detection and configuration!

### Team Mode
For collaborative development:
```bash
# Use team configuration
cp forge-team.yaml forge.yaml

# Multiple developers can work in parallel
forge new "payment system"    # Creates .forge/current/payment-system.md
forge new "user profile"      # Creates .forge/current/user-profile.md

# Check all active cycles
forge status                  # Shows all active features

# Complete specific cycle
forge complete payment-system.md
```

## How It Works

FORGE guides development through 5 phases:
1. **Focus** - Understand and architect
2. **Orchestrate** - Plan and organize  
3. **Refine** - Build and test
4. **Generate** - Deploy and deliver
5. **Evaluate** - Measure and improve

## AI-First Design

Unlike traditional frameworks, FORGE is designed to be interpreted by AI:
- Simple markdown files for state
- Natural language configuration
- Flexible prompt templates
- No complex type systems

## Usage with Claude

```
User: Let's add shopping cart functionality

Claude: I'll guide us through FORGE. Starting Focus phase...
[Reads .forge/current.md and agents/architect.md]

Based on the requirements, here's my architectural analysis...
```

## File Structure

```
your-project/
├── forge.yaml          # Simple configuration
├── .forge/            # Hidden state folder
│   ├── current.md     # Active cycle
│   └── history/       # Completed cycles
```

## Commands

- `forge init` - Initialize FORGE in current directory
- `forge new <feature>` - Start a new development cycle
- `forge status` - Show current cycle progress
- `forge complete` - Archive completed cycle
- `forge learn` - View and manage project learnings
- `forge document` - AI-powered documentation management

## Configuration

Edit `forge.yaml` to customize:

```yaml
project: your-app-name
description: Your project description

mode: conversational  # or structured

ai:
  primary: claude
  model: sonnet      # or opus for complex tasks
```

## Agent Roles

FORGE includes 5 base AI agents that serve as templates for specialization:

### Base Agents
- **Architect** - System design and planning → Can specialize as Solution/Security/Data Architect
- **Developer** - Code implementation → Can specialize as Frontend/Backend/Mobile/Data Engineer
- **Tester** - Quality assurance → Can specialize as QA/Performance/Security/Accessibility Tester
- **DevOps** - Infrastructure and deployment → Can specialize as Cloud/Platform/SRE Engineer
- **Reviewer** - Code and design review → Can specialize by focus area

### Customization
Create specialized agents for your project's specific needs by extending the base templates. Examples included for common specializations. See [Agent Customization Guide](docs/AGENT_CUSTOMIZATION.md) for details.

### Dynamic Agents
Claude Code can automatically detect when specialized agents are needed and create them on the fly. See [Dynamic Agents Guide](docs/DYNAMIC_AGENTS.md) for how this works.

## Learning System

FORGE includes a continuous learning system that captures and applies knowledge:

- **Automatic Learning** - Agents consult and update `.forge/LEARNINGS.md`
- **Retrospectives** - Structured reflection after each cycle
- **Pattern Library** - Document and reuse successful solutions
- **Team Knowledge** - Share insights across developers
- **Memory Integration** - Leverages AI memory for cross-session learning

See [Learning Process](docs/LEARNING_PROCESS.md) and [Memory Integration](docs/MEMORY_INTEGRATION.md) for details.

## Why This Approach?

- **Under 100 lines** - Minimal code footprint
- **No compilation** - Instant changes
- **AI-native** - Built for LLMs to understand
- **Language agnostic** - Works with any tech stack
- **Flexible** - Adapt to your workflow

## Philosophy

FORGE embodies the principle that development frameworks should amplify human creativity, not constrain it. Our core beliefs:

- **AI handles complexity, humans handle creativity** - Let AI manage the tedious parts while developers focus on solving problems
- **Structure enables freedom** - Just enough organization to be productive, not so much that it becomes a burden
- **Transparency builds trust** - Everything visible in plain text, no hidden state or magic
- **Conversation is the interface** - Natural language is the most powerful API
- **Progress over perfection** - Ship working software, iterate based on real feedback

The framework provides minimal scaffolding - just enough to maintain best practices while letting AI intelligence and human intuition drive the development process.

📖 **[Read the full FORGE Philosophy](docs/PHILOSOPHY.md)** - Understand the deeper principles behind our approach.

## Documentation

- **[Philosophy](docs/PHILOSOPHY.md)** - Core principles and beliefs
- **[AI-Driven Workflow](docs/AI_DRIVEN_WORKFLOW.md)** - How AI handles all complexity
- **[Agent Customization](docs/AGENT_CUSTOMIZATION.md)** - Creating specialized agents
- **[Dynamic Agents](docs/DYNAMIC_AGENTS.md)** - How agents are created on-the-fly
- **[Claude Code Integration](docs/CLAUDE_CODE_INTEGRATION.md)** - Using with Claude Code
- **[Existing Project Integration](docs/EXISTING_PROJECT_INTEGRATION.md)** - Add FORGE to existing projects
- **[PRD Guide](docs/PRD_GUIDE.md)** - Product Requirements Documents in Focus phase
- **[Team Collaboration](docs/TEAM_COLLABORATION.md)** - Multi-developer workflows
- **[Learning Process](docs/LEARNING_PROCESS.md)** - Continuous improvement system
- **[Memory Integration](docs/MEMORY_INTEGRATION.md)** - AI memory system support
- **[MCP Integration](docs/MCP_INTEGRATION.md)** - Model Context Protocol support
- **[Credits](docs/CREDITS.md)** - Acknowledgments and inspirations

## Example Workflow

1. **Start a feature**
   ```bash
   forge new "payment integration"
   ```

2. **Focus Phase** (with Claude)
   ```
   Claude: I'll act as the Architect Agent. Let me analyze the requirements...
   
   Based on the payment integration needs:
   - We'll need Stripe API integration
   - Secure webhook handling
   - Database schema for transactions
   ```

3. **Orchestrate Phase**
   ```
   Claude: Now I'll plan the tasks:
   1. Set up Stripe SDK
   2. Create payment endpoints
   3. Implement webhook handler
   4. Add transaction logging
   ```

4. **Continue through remaining phases...**


## Templates

FORGE includes several templates to help structure your work:

- **cycle.md** - Main development cycle template (used by `forge new`)
- **feature.md** - Detailed feature specification template
- **task.md** - Individual task breakdown template

You can use these templates manually or let AI agents reference them during conversation.

## Author

FORGE Framework was created by [Scott Feltham](https://github.com/scottfeltham).

## Contributing

FORGE is designed to be simple enough that anyone can contribute. Edit the markdown templates or add new agent prompts to extend functionality.

See [CONTRIBUTING.md](https://github.com/scottfeltham/forge-framework/blob/main/CONTRIBUTING.md) for guidelines.

## Credits

FORGE Framework was created by Scott Feltham, inspired by Modern Software Engineering principles, the BMAD Method, and Agent-OS architecture. See [Credits](docs/CREDITS.md) for detailed acknowledgments.

## Beta Feedback

🚧 **This is a beta release!** We're actively seeking feedback to improve FORGE.

- **Report Issues**: [GitHub Issues](https://github.com/scottfeltham/forge-framework/issues)
- **Join Discussions**: [GitHub Discussions](https://github.com/scottfeltham/forge-framework/discussions)
- **Share Examples**: Show us what you build!

## Roadmap

### v0.1.0-beta (Current)
- ✅ Core 5-phase cycle
- ✅ AI agent system
- ✅ TDD enforcement
- ✅ Documentation management
- ✅ Team collaboration
- ✅ Learning system

### v0.2.0 (Planned)
- Enhanced MCP integration
- Agent marketplace
- Performance metrics
- Extended templates

### v1.0.0 (Future)
- Stable API
- Plugin system
- Enterprise features
- Full documentation site

## License

[MIT License](LICENSE) - Use freely in your projects!
