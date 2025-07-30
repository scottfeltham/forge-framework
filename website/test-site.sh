#!/bin/bash

# Test script for FORGE microsite
# Tests against the scenarios defined in templates/test-scenarios-microsite.md

echo "🧪 FORGE Microsite Test Suite"
echo "=============================="

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test counters
PASSED=0
FAILED=0

# Base URL for tests
BASE_URL="http://127.0.0.1:4000/forge-framework"

# Function to test URL response
test_url() {
    local url=$1
    local expected_status=${2:-200}
    local test_name=$3
    
    echo -n "Testing: $test_name... "
    
    status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    
    if [ "$status" -eq "$expected_status" ]; then
        echo -e "${GREEN}✓ PASSED${NC}"
        ((PASSED++))
        return 0
    else
        echo -e "${RED}✗ FAILED${NC} (Expected: $expected_status, Got: $status)"
        ((FAILED++))
        return 1
    fi
}

# Function to test page load time
test_load_time() {
    local url=$1
    local max_time=$2
    local test_name=$3
    
    echo -n "Testing: $test_name... "
    
    load_time=$(curl -s -o /dev/null -w "%{time_total}" "$url")
    load_time_ms=$(echo "$load_time * 1000" | bc | cut -d. -f1)
    
    if [ "$load_time_ms" -lt "$max_time" ]; then
        echo -e "${GREEN}✓ PASSED${NC} (${load_time_ms}ms)"
        ((PASSED++))
        return 0
    else
        echo -e "${RED}✗ FAILED${NC} (${load_time_ms}ms > ${max_time}ms)"
        ((FAILED++))
        return 1
    fi
}

# Function to test content presence
test_content() {
    local url=$1
    local content=$2
    local test_name=$3
    
    echo -n "Testing: $test_name... "
    
    if curl -s "$url" | grep -q "$content"; then
        echo -e "${GREEN}✓ PASSED${NC}"
        ((PASSED++))
        return 0
    else
        echo -e "${RED}✗ FAILED${NC} (Content not found: $content)"
        ((FAILED++))
        return 1
    fi
}

# Check if Jekyll is running
echo "Checking if Jekyll server is running..."
if ! curl -s "$BASE_URL" > /dev/null; then
    echo -e "${RED}ERROR: Jekyll server is not running${NC}"
    echo "Please start the server with: cd website && bundle exec jekyll serve"
    exit 1
fi

echo -e "${GREEN}Jekyll server is running${NC}\n"

# Scenario 1: Homepage Load
echo "📋 Scenario 1: Homepage Load"
echo "----------------------------"
test_url "$BASE_URL" 200 "Homepage accessibility"
test_load_time "$BASE_URL" 2000 "Homepage load time < 2s"
test_content "$BASE_URL" "FORGE" "FORGE branding present"
test_content "$BASE_URL" "Getting Started" "Quick start section"
echo

# Scenario 2: Documentation Navigation
echo "📋 Scenario 2: Documentation Navigation"
echo "--------------------------------------"
test_url "$BASE_URL/getting-started/" 200 "Getting Started page"
test_url "$BASE_URL/core-concepts/" 200 "Core Concepts page"
test_url "$BASE_URL/advanced/" 200 "Advanced page"
test_url "$BASE_URL/reference/" 200 "Reference page"
echo

# Scenario 3: Mobile Responsiveness
echo "📋 Scenario 3: Mobile Responsiveness"
echo "-----------------------------------"
test_content "$BASE_URL" "viewport" "Mobile viewport meta tag"
test_content "$BASE_URL" "responsive" "Responsive classes present"
echo

# Scenario 4: Search Functionality
echo "📋 Scenario 4: Search Functionality"
echo "----------------------------------"
test_content "$BASE_URL" "search" "Search feature present"
test_url "$BASE_URL/assets/js/search.js" 200 "Search JS loaded"
echo

# Scenario 5: Code Example Copying
echo "📋 Scenario 5: Code Example Copying"
echo "----------------------------------"
test_content "$BASE_URL" "copy-code-button" "Copy code button feature"
echo

# Scenario 8: SEO and Social Sharing
echo "📋 Scenario 8: SEO and Social Sharing"
echo "------------------------------------"
test_content "$BASE_URL" "<title>" "Page title present"
test_content "$BASE_URL" "meta name=\"description\"" "Meta description"
test_content "$BASE_URL" "property=\"og:" "Open Graph tags"
echo

# Test 404 Handling
echo "📋 Edge Case: 404 Handling"
echo "-------------------------"
test_url "$BASE_URL/non-existent-page" 404 "404 page returns correct status"
echo

# Test Jekyll build
echo "📋 Jekyll Build Test"
echo "-------------------"
echo -n "Testing: Jekyll build without errors... "
cd website
if bundle exec jekyll build > /dev/null 2>&1; then
    echo -e "${GREEN}✓ PASSED${NC}"
    ((PASSED++))
else
    echo -e "${RED}✗ FAILED${NC}"
    ((FAILED++))
fi
cd ..
echo

# Summary
echo "=============================="
echo "📊 Test Summary"
echo "=============================="
echo -e "Passed: ${GREEN}$PASSED${NC}"
echo -e "Failed: ${RED}$FAILED${NC}"
echo -e "Total:  $((PASSED + FAILED))"
echo

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}🎉 All tests passed!${NC}"
    exit 0
else
    echo -e "${RED}❌ Some tests failed${NC}"
    exit 1
fi