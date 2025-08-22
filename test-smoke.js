#!/usr/bin/env node
/**
 * Smoke tests for FORGE Framework
 * Tests basic functionality in a temporary directory
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const os = require('os');

// Create a temporary test directory
const testDir = fs.mkdtempSync(path.join(os.tmpdir(), 'forge-test-'));
const originalCwd = process.cwd();

console.log('🧪 Running FORGE Framework smoke tests...');
console.log(`📁 Test directory: ${testDir}`);

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`✅ ${name}`);
    passed++;
  } catch (error) {
    console.log(`❌ ${name}: ${error.message}`);
    failed++;
  }
}

function runCommand(cmd) {
  return execSync(cmd, { cwd: testDir, stdio: 'pipe', encoding: 'utf8' });
}

function cleanup() {
  process.chdir(originalCwd);
  fs.rmSync(testDir, { recursive: true, force: true });
}

try {
  // Change to test directory
  process.chdir(testDir);
  
  // Copy forge script and dependencies to test directory
  const forgeScript = path.join(originalCwd, 'forge');
  const templateDir = path.join(originalCwd, 'templates');
  const nodeModulesDir = path.join(originalCwd, 'node_modules');
  const packageJson = path.join(originalCwd, 'package.json');
  
  if (fs.existsSync(forgeScript)) {
    fs.copyFileSync(forgeScript, path.join(testDir, 'forge'));
    fs.chmodSync(path.join(testDir, 'forge'), '755');
    
    // Copy package.json for version command
    if (fs.existsSync(packageJson)) {
      fs.copyFileSync(packageJson, path.join(testDir, 'package.json'));
    }
    
    // Copy templates directory (both locations for compatibility)
    if (fs.existsSync(templateDir)) {
      fs.cpSync(templateDir, path.join(testDir, 'templates'), { recursive: true });
      
      // Also create .forge/templates for local development
      fs.mkdirSync(path.join(testDir, '.forge'), { recursive: true });
      fs.cpSync(templateDir, path.join(testDir, '.forge', 'templates'), { recursive: true });
    }
    
    // Copy node_modules for dependencies
    if (fs.existsSync(nodeModulesDir)) {
      fs.cpSync(nodeModulesDir, path.join(testDir, 'node_modules'), { recursive: true });
    }
  }
  
  // Test 1: forge init
  test('forge init creates configuration', () => {
    runCommand('./forge init');
    if (!fs.existsSync('forge.yaml')) throw new Error('forge.yaml not created');
    if (!fs.existsSync('.forge/INIT_ANALYSIS.md')) throw new Error('.forge/INIT_ANALYSIS.md not created');
  });
  
  // Test 2: forge new with valid name
  test('forge new creates cycle file', () => {
    runCommand('./forge new "test feature"');
    if (!fs.existsSync('.forge/current.md')) throw new Error('.forge/current.md not created');
    
    const content = fs.readFileSync('.forge/current.md', 'utf8');
    if (!content.includes('test feature')) throw new Error('Feature name not found in cycle');
    if (!content.includes('Phase 1: Focus')) throw new Error('Phase structure not found');
  });
  
  // Test 3: forge status shows current cycle
  test('forge status shows cycle information', () => {
    const output = runCommand('./forge status');
    if (!output.includes('test feature')) throw new Error('Current cycle not shown');
  });
  
  // Test 4: forge new with dangerous characters (should be sanitized)
  test('forge new sanitizes dangerous input', () => {
    runCommand('./forge new "../../../etc/passwd"');
    // Should not create files outside test directory
    const files = fs.readdirSync('.forge');
    const hasValidFile = files.some(f => f.includes('current'));
    if (!hasValidFile) throw new Error('No cycle file created for sanitized input');
  });
  
  // Test 5: forge complete (with force flag)
  test('forge complete archives cycle', () => {
    runCommand('./forge complete --force');
    if (fs.existsSync('.forge/current.md')) throw new Error('Current cycle not archived');
    
    const historyFiles = fs.readdirSync('.forge/history');
    const hasCycleFile = historyFiles.some(f => f.startsWith('cycle-'));
    if (!hasCycleFile) throw new Error('Cycle not archived to history');
  });
  
  // Test 6: version flag
  test('forge --version shows version', () => {
    const output = runCommand('./forge --version');
    if (!output.includes('forge v')) throw new Error('Version not shown correctly');
  });
  
  // Test 7: help shows usage
  test('forge help shows commands', () => {
    const output = runCommand('./forge help');
    if (!output.includes('Commands:')) throw new Error('Help not shown');
    if (!output.includes('init')) throw new Error('Commands list incomplete');
  });
  
  console.log(`\n📊 Test Results: ${passed} passed, ${failed} failed`);
  
  if (failed > 0) {
    console.log('❌ Some tests failed');
    process.exit(1);
  } else {
    console.log('✅ All smoke tests passed!');
    process.exit(0);
  }
  
} catch (error) {
  console.error(`💥 Test setup failed: ${error.message}`);
  process.exit(1);
} finally {
  cleanup();
}