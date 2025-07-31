# Test Scenarios: MCP Integration

**Feature**: MCP (Model Context Protocol) Integration  
**Date**: 2025-07-31  
**Status**: Ready for Testing

## Test Categories

### 1. MCP Command Tests

#### Test 1.1: List Available MCP Servers
**Given**: User runs `forge mcp list`  
**When**: Command executes  
**Then**: 
- Display all available MCP servers from registry
- Show recommended servers with star indicator
- Display usage hint for adding servers

#### Test 1.2: Suggest MCP Servers by Project Type
**Given**: Project has forge.yaml with projectType set  
**When**: User runs `forge mcp suggest`  
**Then**:
- Display relevant MCP servers for project type
- Show descriptions for each suggestion
- Provide command to add all suggested servers

#### Test 1.3: Add MCP Server to Configuration
**Given**: User runs `forge mcp add context7`  
**When**: Command executes  
**Then**:
- Add context7 configuration to forge.yaml
- Preserve existing configuration
- Display success message
- Show environment variable warnings if applicable

### 2. Configuration Tests

#### Test 2.1: MCP Section in forge.yaml
**Given**: forge.yaml with MCP configuration  
**When**: AI reads configuration  
**Then**:
- AI recognizes available MCP servers
- AI mentions enhanced capabilities
- Configuration is valid YAML

#### Test 2.2: Missing MCP Registry
**Given**: recommended-mcp-servers.json is missing  
**When**: User runs any MCP command  
**Then**:
- Display appropriate error message
- Commands fail gracefully
- No crashes or exceptions

### 3. Agent Awareness Tests

#### Test 3.1: Developer Agent MCP Usage
**Given**: MCP filesystem server configured  
**When**: Developer agent performs file operations  
**Then**:
- Agent mentions using MCP filesystem
- Agent explains enhanced capabilities
- Falls back gracefully if unavailable

#### Test 3.2: Architect Agent Context7 Usage
**Given**: context7 MCP server configured  
**When**: Architect analyzes codebase  
**Then**:
- Agent mentions using context7
- Better understanding of codebase structure
- Appropriate fallback without context7

### 4. Installation Tests

#### Test 4.1: Fresh Installation
**Given**: Running install.js in new project  
**When**: Installation completes  
**Then**:
- recommended-mcp-servers.json copied
- MCP suggestions displayed
- forge mcp commands available

#### Test 4.2: Update Installation
**Given**: Existing FORGE installation  
**When**: Running install.js update  
**Then**:
- MCP registry updated
- Existing configuration preserved
- New MCP commands available

### 5. Integration Tests

#### Test 5.1: MCP with GitHub
**Given**: GitHub MCP server configured  
**When**: Agent needs to check issues  
**Then**:
- Uses mcp_github_api tool
- Handles authentication properly
- Falls back to manual instructions if unavailable

#### Test 5.2: MCP with Playwright
**Given**: Playwright MCP server configured  
**When**: Running E2E tests  
**Then**:
- Agent uses playwright MCP
- Tests execute through MCP
- Appropriate error handling

### 6. Edge Cases

#### Test 6.1: Invalid Server Name
**Given**: User runs `forge mcp add invalid-server`  
**When**: Command executes  
**Then**:
- Display error message
- Show available servers hint
- No configuration changes

#### Test 6.2: Duplicate Server Addition
**Given**: Server already in forge.yaml  
**When**: User tries to add same server  
**Then**:
- Avoid duplicate entries
- Inform user server already configured
- Preserve existing configuration

#### Test 6.3: Environment Variables
**Given**: Adding server requiring env vars  
**When**: Server added to configuration  
**Then**:
- Display required environment variables
- Show example export commands
- Configuration uses ${VAR} syntax

## Validation Checklist

- [ ] All MCP commands work as expected
- [ ] Configuration properly formatted in YAML
- [ ] Agents show MCP awareness
- [ ] Graceful degradation without MCP
- [ ] Installation includes MCP setup
- [ ] Documentation mentions MCP capabilities
- [ ] No hardcoded dependencies on MCP
- [ ] Environment variables handled securely

## Success Criteria

1. **Functionality**: All MCP commands execute correctly
2. **Integration**: Agents utilize MCP when available
3. **Fallback**: System works without MCP
4. **Security**: No credentials in configuration
5. **Usability**: Clear instructions and feedback