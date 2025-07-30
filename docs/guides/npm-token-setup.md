# NPM Token Setup Guide

This guide explains how to set up an NPM automation token for the FORGE release workflow.

## Step 1: Generate NPM Token

1. **Login to npm**:
   ```bash
   npm login
   ```

2. **Go to npm.com**:
   - Visit https://www.npmjs.com/
   - Click on your profile avatar → "Access Tokens"

3. **Generate New Token**:
   - Click "Generate New Token"
   - Select "Classic Token"
   - Choose type: **"Automation"** (important!)
   - Give it a name like "forge-framework-release"
   - Click "Generate Token"

4. **Copy the Token**:
   - Copy the token immediately (you won't see it again)
   - It should look like: `npm_xxxxxxxxxxxxxxxxxxxxx`

## Step 2: Add to GitHub Secrets

### Option A: Via GitHub Web Interface (Recommended)

1. Go to https://github.com/scottfeltham/forge-framework/settings/secrets/actions
2. Click "New repository secret"
3. Name: `NPM_TOKEN`
4. Value: Paste your npm token
5. Click "Add secret"

### Option B: Via GitHub CLI

```bash
# First, export your token
export NPM_TOKEN="npm_xxxxxxxxxxxxxxxxxxxxx"

# Then add it to GitHub
gh secret set NPM_TOKEN --repo scottfeltham/forge-framework
```

## Step 3: Verify Setup

Run the test script to verify everything is configured:

```bash
./test-release.sh
```

## Security Best Practices

1. **Use Automation Tokens**: Never use your personal npm token
2. **Limit Scope**: Use repository secrets, not organization secrets
3. **Rotate Regularly**: Replace tokens every 90 days
4. **Revoke if Compromised**: If exposed, revoke immediately

## Troubleshooting

### Token Not Working
- Ensure it's an "Automation" type token
- Check if you have publish permissions for the package
- Verify the secret name is exactly `NPM_TOKEN`

### Permission Denied
- Ensure you're logged in to npm: `npm whoami`
- Check package ownership: `npm owner ls forge-framework`

### 2FA Issues
If you have 2FA enabled on npm:
1. Automation tokens bypass 2FA for publishing
2. Make sure to use an automation token, not auth token

## Next Steps

Once the NPM_TOKEN is configured:
1. Create a version tag: `git tag v1.0.0`
2. Push the tag: `git push origin v1.0.0`
3. Watch the release workflow run in the Actions tab

The workflow will automatically:
- Run tests on all platforms
- Perform security scans
- Build and publish to npm
- Create a GitHub release
- Generate changelog from commits