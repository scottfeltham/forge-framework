# Changelog

All notable changes to FORGE Framework will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0-beta] - 2025-07-31

### Added
- **Claude Slash Commands** - Explicit commands like `/forge new` for clear intent
- **Command Namespace Structure** - Organized under `.claude/commands/forge/`
- **Dual Mode Support** - Both slash commands and natural language work seamlessly
- **Local Installer** - Installs FORGE to project directory instead of node_modules
- **Slash Command Documentation** - Comprehensive guides and command definitions

### Fixed
- **Archive Naming Convention** - All completed cycles now use `cycle-` prefix
- **Natural Language Recognition** - Better detection of FORGE commands in conversation

### Changed
- **Installer Enhancement** - Now copies `.claude` directory with slash commands
- **Documentation Updates** - Added slash command sections to all relevant docs

## [0.3.1-beta] - 2025-07-30

### Fixed
- **NPM Package Size** - Reduced from multiple MB to 34.6KB
- **Package Contents** - Removed unnecessary files from npm distribution
- **Release Notes** - Fixed contributor name format in GitHub releases

### Added
- **.npmignore** - Properly excludes development files, website, docs, and specs

## [0.3.0-beta] - 2025-07-30

### Changed
- **Refactored CLI** - Optimized from 353 to 99 lines while maintaining readability
- **Enhanced Output** - Improved formatting with multi-line messages
- **Better Status Display** - Shows full cycle content for rich detail

### Fixed
- Line count now adheres to <100 line specification
- Maintained all functionality from verbose version

## [0.2.0-beta] - 2025-07-30

### Added
- **GitHub Actions CI/CD** - Automated npm releases on tag creation
- **Release Workflow** - Multi-platform testing and publishing
- **Documentation Site** - Jekyll-based microsite at github.io
- **Cost Optimization** - Ubuntu-only runners for 91% cost reduction

### Changed
- Simplified release process with single workflow
- Updated documentation structure
- Enhanced learnings system

## [0.1.0-beta] - 2025-07-30

### Initial Beta Release 🎉

This is the first public release of FORGE Framework, an AI-driven development framework that puts conversation at the center of software development.

### Core Features

#### 🏗️ Foundation
- **Minimal CLI** - Just 88 lines of code that creates files
- **5-Phase Development Cycle** - Focus, Orchestrate, Refine, Generate, Evaluate
- **Markdown State Management** - All state in human-readable markdown
- **Zero Configuration** - AI detects and adapts to your project

#### 🤖 AI Agents
- **5 Base Agents** - Architect, Developer, Tester, DevOps, Reviewer
- **Dynamic Agent Creation** - AI creates specialized agents as needed
- **Agent Specialization** - Base agents can adapt to specific roles
- **Project Analyzer** - Automatic project detection and configuration

#### 🧪 Quality Enforcement
- **TDD Enforcement** - All agents require test-first development
- **Test Scenarios** - Mandatory before implementation
- **Code Review** - Built into the workflow
- **Documentation Standards** - PRDs in specs/, docs in docs/

#### ⚡ Advanced Features
- **Parallel Agent Execution** - Use Task tool for concurrent work
- **Dynamic Model Selection** - Smart Sonnet/Opus usage
- **Team Collaboration** - Multiple developers, parallel cycles
- **Learning System** - Capture and apply knowledge
- **Memory Integration** - Cross-session context via CLAUDE.md
- **MCP Ready** - Model Context Protocol support

#### 📚 Documentation
- **Document Command** - AI-powered documentation management
- **Auto-generation** - From code comments and cycles
- **Folder Enforcement** - Automatic organization
- **Template System** - Consistent documentation

### Philosophy

FORGE embodies "radical simplicity" - the framework stays minimal while AI handles all complexity through natural conversation. No configuration files, no complex APIs, just markdown and dialogue.

### Getting Started

```bash
npm install -g forge-framework@beta
forge init
```

### Feedback

This is a beta release! We'd love your feedback:
- Issues: https://github.com/scottfeltham/forge-framework/issues
- Discussions: https://github.com/scottfeltham/forge-framework/discussions

### Author

FORGE Framework created by Scott Feltham.

### Contributors

Special thanks to Claude for being an excellent development partner.

---

For detailed documentation, visit our upcoming docs site (coming soon!).