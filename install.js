#!/usr/bin/env node

/**
 * FORGE Framework Installer
 * Installs FORGE into your project's .forge directory
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
  red: '\x1b[31m'
};

const log = {
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset}  ${msg}`),
  success: (msg) => console.log(`${colors.green}✓${colors.reset}  ${msg}`),
  warn: (msg) => console.log(`${colors.yellow}⚠${colors.reset}  ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset}  ${msg}`),
  header: (msg) => console.log(`\n${colors.bright}${msg}${colors.reset}\n`)
};

class ForgeInstaller {
  constructor() {
    this.sourceDir = __dirname;
    this.targetDir = process.cwd();
    this.forgeDir = path.join(this.targetDir, '.forge');
  }

  async run() {
    log.header('🔨 FORGE Framework Installer');
    
    try {
      // Check if running in CI or non-interactive environment
      const isNonInteractive = process.env.CI || process.env.npm_config_yes || !process.stdin.isTTY;
      
      // Check if this is a global installation
      const isGlobalInstall = this.isGlobalInstallation();
      
      if (isGlobalInstall) {
        return this.runGlobalSetup();
      }
      
      // Check if .forge exists
      const isUpdate = fs.existsSync(this.forgeDir);
      
      if (isUpdate) {
        if (isNonInteractive) {
          log.info('Non-interactive mode: updating existing .forge directory');
        } else {
          log.warn('Existing .forge directory detected');
          const response = await this.prompt('Update FORGE installation? (y/n): ');
          if (response.toLowerCase() !== 'y') {
            log.info('Installation cancelled');
            return;
          }
        }
      }

      // Create directory structure
      this.createDirectories();
      
      // Copy files
      this.copyTemplates();
      this.copyAgents();
      this.copyClaudeCommands();
      
      // Create local forge script
      this.createForgeScript();
      
      // Copy MCP registry
      this.copyMCPRegistry();
      
      // Setup Claude settings
      this.setupClaudeSettings();
      
      // Initialize if new installation
      if (!isUpdate && !fs.existsSync('forge.yaml')) {
        this.initializeForge();
      }
      
      log.header('✨ FORGE installation complete!');
      log.info('Run "./forge" to start using FORGE in this project');
      log.info('Run "./forge init" to initialize a new FORGE project');
      
      // Suggest MCP setup
      log.header('🔌 Enhanced Capabilities with MCP');
      log.info('FORGE supports MCP (Model Context Protocol) for enhanced AI capabilities');
      log.info('Run "./forge mcp suggest" to see recommended MCP servers for your project');
      log.info('Run "./forge mcp list" to see all available MCP servers');
      
    } catch (error) {
      log.error(`Installation failed: ${error.message}`);
      process.exit(1);
    }
  }

  isGlobalInstallation() {
    // Check if we're running from a global npm installation
    // This happens when someone runs `npm install -g forge-framework`
    const isGlobal = this.sourceDir.includes('node_modules') && 
                    (this.sourceDir.includes('lib/node_modules') || 
                     this.sourceDir.includes('global/lib/node_modules'));
    return isGlobal;
  }

  async runGlobalSetup() {
    log.info('Detected global installation of FORGE Framework');
    
    // Check if global setup should be performed
    const shouldSetupGlobal = process.env.FORGE_SETUP_GLOBAL_CLAUDE === '1' || 
                             process.env.FORGE_SETUP_GLOBAL_CLAUDE === 'true';
    const isNonInteractive = process.env.CI || process.env.npm_config_yes || !process.stdin.isTTY;
    
    if (!shouldSetupGlobal && !isNonInteractive) {
      log.info('Global Claude Code setup requires explicit opt-in');
      log.info('Set FORGE_SETUP_GLOBAL_CLAUDE=1 to enable global Claude Code configuration');
      log.info('Or run "forge install" manually in projects for local setup');
    }
    
    if (shouldSetupGlobal) {
      log.info('Setting up global Claude Code configuration...');
      
      // Setup global Claude Code settings when installed globally
      const hasGlobalClaude = this.checkGlobalClaude();
      
      if (hasGlobalClaude) {
        this.setupGlobalClaudeCodeSettings();
        this.setupGlobalClaudeAgents();
        this.setupGlobalClaudeCommands();
        log.success('✨ Global FORGE setup complete!');
        log.info('FORGE is now available globally as "forge"');
        log.info('Claude subagents are now available globally');
        log.info('Global Claude Code slash commands configured');
        log.info('Global Claude Code settings updated for FORGE commands');
        log.info('Run "forge install" in any project to install locally');
      } else {
        log.warn('Claude Code CLI not found globally');
        log.info('Install Claude Code CLI to enable global configuration setup');
        log.success('✨ Global FORGE installation complete!');
        log.info('FORGE is now available globally as "forge"');
      }
    } else {
      log.success('✨ Global FORGE installation complete!');
      log.info('FORGE is now available globally as "forge"');
      if (!isNonInteractive) {
        log.info('Run "forge install" in projects to set up local FORGE environments');
      }
    }
    
    return;
  }

  setupGlobalClaudeAgents() {
    try {
      const os = require('os');
      const globalClaudeAgentsDir = path.join(os.homedir(), '.claude', 'agents');
      const claudeAgentsSource = path.join(this.sourceDir, 'claude-agents');
      
      // Create global .claude/agents directory if it doesn't exist
      if (!fs.existsSync(globalClaudeAgentsDir)) {
        fs.mkdirSync(globalClaudeAgentsDir, { recursive: true });
      }
      
      // Copy Claude-compatible agents globally
      if (fs.existsSync(claudeAgentsSource)) {
        this.copyDirectory(claudeAgentsSource, globalClaudeAgentsDir);
        log.success('Global Claude subagents configured');
      }
      
    } catch (error) {
      log.warn(`Could not setup global Claude agents: ${error.message}`);
    }
  }

  setupGlobalClaudeCommands() {
    try {
      const os = require('os');
      const globalClaudeCommandsDir = path.join(os.homedir(), '.claude', 'commands');
      const claudeCommandsSource = path.join(this.sourceDir, '.claude', 'commands');
      
      // Create global .claude/commands directory if it doesn't exist
      if (!fs.existsSync(globalClaudeCommandsDir)) {
        fs.mkdirSync(globalClaudeCommandsDir, { recursive: true });
      }
      
      // Copy Claude slash commands globally
      if (fs.existsSync(claudeCommandsSource)) {
        this.copyDirectory(claudeCommandsSource, globalClaudeCommandsDir);
        log.success('Global Claude Code slash commands configured');
      } else {
        log.warn('Claude commands source directory not found');
      }
      
    } catch (error) {
      log.warn(`Could not setup global Claude commands: ${error.message}`);
    }
  }

  createDirectories() {
    log.info('Creating directory structure...');
    
    const dirs = [
      '.forge',
      '.forge/templates',
      '.forge/templates/docs',
      '.forge/templates/specs',
      '.forge/agents',
      '.forge/agents/examples',
      '.forge/agents/templates',
      '.forge/history',
      '.claude',
      '.claude/commands',
      '.claude/commands/forge',
      '.claude/agents'
    ];
    
    dirs.forEach(dir => {
      const fullPath = path.join(this.targetDir, dir);
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
      }
    });
    
    log.success('Directory structure created');
  }

  copyTemplates() {
    log.info('Installing templates...');
    
    const templatesSource = path.join(this.sourceDir, 'templates');
    const templatesTarget = path.join(this.forgeDir, 'templates');
    
    this.copyDirectory(templatesSource, templatesTarget);
    log.success('Templates installed');
  }

  copyAgents() {
    log.info('Installing agents...');
    
    // Copy FORGE documentation agents to .forge/agents
    const agentsSource = path.join(this.sourceDir, 'agents');
    const agentsTarget = path.join(this.forgeDir, 'agents');
    
    this.copyDirectory(agentsSource, agentsTarget);
    
    // Copy Claude-compatible agents to .claude/agents
    const claudeAgentsSource = path.join(this.sourceDir, 'claude-agents');
    const claudeAgentsTarget = path.join(this.targetDir, '.claude', 'agents');
    
    if (fs.existsSync(claudeAgentsSource)) {
      if (!fs.existsSync(claudeAgentsTarget)) {
        fs.mkdirSync(claudeAgentsTarget, { recursive: true });
      }
      this.copyDirectory(claudeAgentsSource, claudeAgentsTarget);
      log.success('Claude subagents configured');
    }
    
    log.success('Agents installed');
  }

  copyClaudeCommands() {
    log.info('Installing Claude commands...');
    
    const claudeSource = path.join(this.sourceDir, '.claude');
    const claudeTarget = path.join(this.targetDir, '.claude');
    
    this.copyDirectory(claudeSource, claudeTarget);
    log.success('Claude commands installed');
  }

  copyDirectory(source, target) {
    if (!fs.existsSync(source)) return;
    
    const files = fs.readdirSync(source);
    
    files.forEach(file => {
      const sourcePath = path.join(source, file);
      const targetPath = path.join(target, file);
      
      const stat = fs.statSync(sourcePath);
      
      if (stat.isDirectory()) {
        if (!fs.existsSync(targetPath)) {
          fs.mkdirSync(targetPath, { recursive: true });
        }
        this.copyDirectory(sourcePath, targetPath);
      } else {
        // Skip if file exists and is customized (check modification time)
        if (fs.existsSync(targetPath)) {
          const sourceTime = stat.mtime;
          const targetTime = fs.statSync(targetPath).mtime;
          
          if (targetTime > sourceTime) {
            log.warn(`Skipping ${file} (local modifications detected)`);
            return;
          }
        }
        
        fs.copyFileSync(sourcePath, targetPath);
      }
    });
  }

  createForgeScript() {
    log.info('Creating local forge script...');
    
    const forgeSource = path.join(this.sourceDir, 'forge');
    const forgeTarget = path.join(this.targetDir, 'forge');
    
    // Copy the forge script
    fs.copyFileSync(forgeSource, forgeTarget);
    
    // Make it executable
    fs.chmodSync(forgeTarget, '755');
    
    // Update paths to use local .forge directory
    let content = fs.readFileSync(forgeTarget, 'utf8');
    
    // Replace template paths to use local .forge
    content = content.replace(
      /path\.join\(__dirname, 'templates'/g,
      'path.join(process.cwd(), \'.forge/templates\''
    );
    
    fs.writeFileSync(forgeTarget, content);
    
    log.success('Local forge script created');
  }

  initializeForge() {
    log.info('Initializing FORGE...');
    
    // Create default forge.yaml
    const config = `# FORGE Framework Configuration
project: ${path.basename(this.targetDir)}
mode: conversational
ai:
  primary: claude
  model: sonnet

# Local installation
installation: local
version: ${this.getVersion()}
`;
    
    fs.writeFileSync(path.join(this.targetDir, 'forge.yaml'), config);
    
    // Create .gitignore if it doesn't exist
    const gitignorePath = path.join(this.targetDir, '.gitignore');
    if (!fs.existsSync(gitignorePath)) {
      fs.writeFileSync(gitignorePath, '');
    }
    
    // Add .forge/history to .gitignore
    let gitignore = fs.readFileSync(gitignorePath, 'utf8');
    if (!gitignore.includes('.forge/history')) {
      gitignore += '\n# FORGE history\n.forge/history/\n';
      fs.writeFileSync(gitignorePath, gitignore);
    }
  }

  copyMCPRegistry() {
    log.info('Installing MCP registry...');
    
    const mcpSource = path.join(this.sourceDir, 'recommended-mcp-servers.json');
    const mcpTarget = path.join(this.targetDir, 'recommended-mcp-servers.json');
    
    if (fs.existsSync(mcpSource)) {
      fs.copyFileSync(mcpSource, mcpTarget);
      log.success('MCP registry installed');
    }
  }

  setupClaudeSettings() {
    log.info('Setting up Claude Code permissions...');
    
    // Only setup local Claude Code settings for local installations
    this.setupLocalClaudeCodeSettings();
    
    log.success('Local Claude Code permissions configured');
  }

  checkGlobalClaude() {
    try {
      execSync('which claude', { stdio: 'pipe' });
      return true;
    } catch (error) {
      return false;
    }
  }

  setupLocalClaudeCodeSettings() {
    const settingsPath = path.join(this.targetDir, '.claude', 'settings.local.json');
    
    let settings = {
      permissions: {
        allow: [],
        deny: []
      }
    };
    
    // Read existing settings if they exist
    if (fs.existsSync(settingsPath)) {
      try {
        const existingSettings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));
        settings = existingSettings;
      } catch (error) {
        log.warn('Could not parse existing settings.local.json, creating new one');
      }
    }
    
    // Ensure permissions structure exists
    if (!settings.permissions) {
      settings.permissions = { allow: [], deny: [] };
    }
    if (!settings.permissions.allow) {
      settings.permissions.allow = [];
    }
    
    // Add FORGE permissions if not already present
    const forgePermissions = [
      'Bash(./forge *)', 
      'Bash(forge *)', 
      'Bash(./forge)', 
      'Bash(./forge phase)', 
      'Bash(./forge new "test validation docs")', 
      'Bash(./forge status)', 
      'Bash(./forge phase status)', 
      'Bash(./forge phase next)', 
      'Bash(./forge complete)', 
      'Bash(./forge complete --force)', 
      'Bash(./forge new "test accurate output")'
    ];
    let added = false;
    
    forgePermissions.forEach(permission => {
      if (!settings.permissions.allow.includes(permission)) {
        settings.permissions.allow.push(permission);
        added = true;
      }
    });
    
    // Write settings back
    fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
    
    if (added) {
      log.success('Added FORGE permissions to local Claude Code settings');
    } else {
      log.success('Local FORGE permissions already configured');
    }
  }

  setupGlobalClaudeCodeSettings() {
    try {
      const os = require('os');
      const globalClaudeDir = path.join(os.homedir(), '.claude');
      const globalSettingsPath = path.join(globalClaudeDir, 'settings.json');
      
      // Create .claude directory if it doesn't exist
      if (!fs.existsSync(globalClaudeDir)) {
        fs.mkdirSync(globalClaudeDir, { recursive: true });
      }
      
      let globalSettings = {
        permissions: {
          allow: [],
          deny: []
        }
      };
      
      // Read existing global settings if they exist
      if (fs.existsSync(globalSettingsPath)) {
        try {
          const existingSettings = JSON.parse(fs.readFileSync(globalSettingsPath, 'utf8'));
          globalSettings = existingSettings;
        } catch (error) {
          log.warn('Could not parse existing global settings.json, creating new one');
        }
      }
      
      // Ensure permissions structure exists
      if (!globalSettings.permissions) {
        globalSettings.permissions = { allow: [], deny: [] };
      }
      if (!globalSettings.permissions.allow) {
        globalSettings.permissions.allow = [];
      }
      
      // Add global FORGE permissions if not already present
      const globalForgePermissions = [
        'Bash(forge *)', 
        'Bash(./forge *)',
        'Bash(forge)',
        'Bash(forge init)',
        'Bash(forge new *)',
        'Bash(forge status)',
        'Bash(forge phase *)',
        'Bash(forge complete)',
        'Bash(forge complete --force)',
        'Bash(forge learn)',
        'Bash(forge document)',
        'Bash(forge mcp *)'
      ];
      let globalAdded = false;
      
      globalForgePermissions.forEach(permission => {
        if (!globalSettings.permissions.allow.includes(permission)) {
          globalSettings.permissions.allow.push(permission);
          globalAdded = true;
        }
      });
      
      // Write global settings back
      fs.writeFileSync(globalSettingsPath, JSON.stringify(globalSettings, null, 2));
      
      if (globalAdded) {
        log.success('Added FORGE permissions to global Claude Code settings');
      } else {
        log.success('Global FORGE permissions already configured');
      }
      
    } catch (error) {
      log.warn(`Could not setup global Claude Code settings: ${error.message}`);
    }
  }

  getVersion() {
    try {
      const packageJson = JSON.parse(
        fs.readFileSync(path.join(this.sourceDir, 'package.json'), 'utf8')
      );
      return packageJson.version;
    } catch {
      return 'unknown';
    }
  }

  prompt(question) {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    return new Promise(resolve => {
      readline.question(question, answer => {
        readline.close();
        resolve(answer);
      });
    });
  }
}

// Run installer
if (require.main === module) {
  const installer = new ForgeInstaller();
  installer.run();
}

module.exports = ForgeInstaller;