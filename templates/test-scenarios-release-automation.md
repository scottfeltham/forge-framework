# Test Scenarios: GitHub Release Automation

## Feature: Automated Package Release on Tag

### Scenario 1: Stable Release Creation
**Given** a new semantic version tag is pushed (e.g., v1.0.0)
**When** the release workflow triggers
**Then** it should:
- Run all tests successfully
- Build the npm package
- Publish to npm registry
- Create GitHub release with assets
- Generate release notes from commits

**Example:**
- Input: `git tag v1.0.0 && git push origin v1.0.0`
- Output: Package published to npm, GitHub release created with changelog

### Scenario 2: Beta Release Creation
**Given** a beta version tag is pushed (e.g., v1.0.0-beta.1)
**When** the release workflow triggers
**Then** it should:
- Run all tests
- Build the package with beta tag
- Publish to npm with beta tag
- Create GitHub pre-release
- Mark as pre-release in GitHub

**Example:**
- Input: `git tag v1.0.0-beta.1 && git push origin v1.0.0-beta.1`
- Output: Beta package on npm, pre-release on GitHub

### Scenario 3: Invalid Tag Format
**Given** a non-semver tag is pushed
**When** the workflow checks the tag
**Then** it should:
- Skip the release process
- Not trigger any builds
- Log appropriate message

**Example:**
- Input: `git tag milestone-1 && git push origin milestone-1`
- Output: Workflow skipped, no release created

### Scenario 4: Test Failure Prevention
**Given** a valid version tag is pushed
**When** tests fail during the workflow
**Then** it should:
- Stop the release process
- Not publish to npm
- Not create GitHub release
- Report failure status

**Example:**
- Input: Tag v1.0.1 with failing tests
- Output: Workflow fails, no artifacts published

### Scenario 5: Changelog Generation
**Given** multiple commits since last release
**When** creating a new release
**Then** the changelog should:
- Group commits by type (feat, fix, docs, etc.)
- Include breaking changes prominently
- Link to relevant PRs and issues
- Format in markdown

**Example:**
- Input: 10 commits with conventional commit format
- Output: Organized changelog in release notes

### Scenario 6: Security Scanning
**Given** a release is being prepared
**When** security checks run
**Then** they should:
- Scan dependencies for vulnerabilities
- Check for exposed secrets
- Verify package integrity
- Block release if critical issues found

**Example:**
- Input: Package with vulnerable dependency
- Output: Release blocked with security report

### Scenario 7: Multi-Platform Verification
**Given** a release workflow is running
**When** building the package
**Then** it should:
- Test on Node.js LTS versions
- Verify on Windows, macOS, Linux
- Ensure CLI works cross-platform
- Report compatibility matrix

**Example:**
- Input: Release workflow triggered
- Output: Compatibility verified across platforms

### Scenario 8: NPM Publishing
**Given** all checks pass
**When** publishing to npm
**Then** it should:
- Use npm automation token
- Set correct package visibility
- Update latest tag appropriately
- Verify publication success

**Example:**
- Input: Successful build and tests
- Output: Package available on npm registry

### Edge Cases

1. **Duplicate Tag**
   - Input: Tag that already exists
   - Output: Workflow fails with clear error

2. **Network Failure**
   - Input: npm registry unreachable
   - Output: Retry mechanism activates

3. **Concurrent Releases**
   - Input: Two tags pushed simultaneously
   - Output: Releases processed sequentially

4. **Large Release Assets**
   - Input: Package with many files
   - Output: Successful upload with progress tracking

5. **Token Expiration**
   - Input: Expired npm token
   - Output: Clear error message, no partial release