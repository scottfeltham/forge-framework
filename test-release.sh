#!/bin/bash

# Test script for release workflow validation
# This simulates the release process locally

echo "🧪 FORGE Release Workflow Test"
echo "=============================="

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test counters
PASSED=0
FAILED=0

# Function to test command
test_command() {
    local test_name=$1
    local command=$2
    
    echo -n "Testing: $test_name... "
    
    if eval "$command" > /dev/null 2>&1; then
        echo -e "${GREEN}✓ PASSED${NC}"
        ((PASSED++))
        return 0
    else
        echo -e "${RED}✗ FAILED${NC}"
        ((FAILED++))
        return 1
    fi
}

# Function to validate version format
validate_version() {
    local version=$1
    if [[ "$version" =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-[a-zA-Z0-9\.]+)?$ ]]; then
        return 0
    else
        return 1
    fi
}

echo "📋 Pre-flight Checks"
echo "-------------------"

# Check Node.js
test_command "Node.js installed" "node --version"

# Check npm
test_command "npm installed" "npm --version"

# Check git
test_command "Git installed" "git --version"

# Check GitHub CLI (optional but recommended)
test_command "GitHub CLI installed" "gh --version"

echo ""
echo "📋 Repository Checks"
echo "-------------------"

# Check if in git repository
test_command "In git repository" "git rev-parse --git-dir"

# Check for uncommitted changes
test_command "No uncommitted changes" "git diff-index --quiet HEAD --"

# Check package.json exists
test_command "package.json exists" "test -f package.json"

# Check workflow file exists
test_command "Release workflow exists" "test -f .github/workflows/release.yml"

echo ""
echo "📋 Version Validation"
echo "-----------------------"

# Test version formats
echo -n "Testing: Stable version format... "
if validate_version "v1.0.0"; then
    echo -e "${GREEN}✓ PASSED${NC}"
    ((PASSED++))
else
    echo -e "${RED}✗ FAILED${NC}"
    ((FAILED++))
fi

echo -n "Testing: Beta version format... "
if validate_version "v1.0.0-beta.1"; then
    echo -e "${GREEN}✓ PASSED${NC}"
    ((PASSED++))
else
    echo -e "${RED}✗ FAILED${NC}"
    ((FAILED++))
fi

echo -n "Testing: Invalid version format... "
if ! validate_version "1.0.0"; then
    echo -e "${GREEN}✓ PASSED${NC} (correctly rejected)"
    ((PASSED++))
else
    echo -e "${RED}✗ FAILED${NC} (should reject)"
    ((FAILED++))
fi

echo ""
echo "📋 Build Tests"
echo "--------------"

# Test npm pack
test_command "npm pack (dry run)" "npm pack --dry-run"

# Test npm install
test_command "Dependencies install" "npm ci || npm install"

# Run tests
test_command "Test suite" "npm test"

echo ""
echo "📋 Security Checks"
echo "-----------------"

# Run audit
echo -n "Testing: npm audit... "
if npm audit --production > /dev/null 2>&1; then
    echo -e "${GREEN}✓ PASSED${NC}"
    ((PASSED++))
else
    echo -e "${YELLOW}⚠ WARNING${NC} (vulnerabilities found)"
fi

echo ""
echo "📋 Workflow Simulation"
echo "---------------------"

# Simulate changelog generation
echo -n "Testing: Changelog generation... "
PREVIOUS_TAG=$(git describe --tags --abbrev=0 2>/dev/null || echo "")
if [ -n "$PREVIOUS_TAG" ]; then
    if git log ${PREVIOUS_TAG}..HEAD --oneline > /dev/null 2>&1; then
        echo -e "${GREEN}✓ PASSED${NC}"
        ((PASSED++))
    else
        echo -e "${RED}✗ FAILED${NC}"
        ((FAILED++))
    fi
else
    echo -e "${YELLOW}⚠ SKIPPED${NC} (no previous tags)"
fi

echo ""
echo "📋 Environment Variables"
echo "-----------------------"

# Check for NPM_TOKEN (don't expose it)
echo -n "Checking: NPM_TOKEN configured... "
if [ -n "$NPM_TOKEN" ]; then
    echo -e "${GREEN}✓ SET${NC}"
else
    echo -e "${YELLOW}⚠ NOT SET${NC} (required for publishing)"
fi

# Summary
echo ""
echo "=============================="
echo "📊 Test Summary"
echo "=============================="
echo -e "Passed: ${GREEN}$PASSED${NC}"
echo -e "Failed: ${RED}$FAILED${NC}"
echo -e "Total:  $((PASSED + FAILED))"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 All tests passed! Ready for release.${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Set NPM_TOKEN in GitHub Secrets"
    echo "2. Create and push a version tag:"
    echo "   git tag v1.0.0"
    echo "   git push origin v1.0.0"
    exit 0
else
    echo -e "${RED}❌ Some tests failed. Please fix issues before releasing.${NC}"
    exit 1
fi