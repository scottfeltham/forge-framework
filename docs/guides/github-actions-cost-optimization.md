# GitHub Actions Cost Optimization Guide

This guide explains the cost optimizations implemented in FORGE's CI/CD workflows.

## Cost Considerations

GitHub Actions pricing varies by runner type:
- **Linux (ubuntu-latest)**: 1x cost multiplier (cheapest)
- **Windows (windows-latest)**: 2x cost multiplier
- **macOS (macos-latest)**: 10x cost multiplier

## Optimizations Implemented

### 1. Release Workflow

**Before**: All releases tested on Ubuntu, Windows, and macOS with Node.js 18.x and 20.x (6 jobs)

**After**: 
- All releases: Test only on Ubuntu with Node.js 20.x (1 job)

**Cost Savings**: 
- ~91% reduction (1 job vs 11x cost units)

**Rationale**: FORGE is pure JavaScript with no platform-specific code or native dependencies. Node.js handles cross-platform compatibility.

### 2. Documentation Workflow

Already optimized - uses only `ubuntu-latest` runners.

## Implementation Details

```yaml
# All tests run on Ubuntu only
test:
  name: Test
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: 20.x
    - run: npm install
    - run: npm test
```

## Best Practices

1. **Use Ubuntu for most CI tasks** - It's the cheapest and fastest
2. **Limit macOS usage** - 10x more expensive than Linux
3. **Run cross-platform tests only when necessary** - For stable releases
4. **Cache dependencies** - Reduces runtime and costs
5. **Use fail-fast strategy** - Stop other jobs if one fails

## When to Use Expensive Runners

Use Windows/macOS runners only when:
- Testing platform-specific code
- Building native binaries
- Preparing stable releases
- Debugging platform-specific issues

## Monitoring Costs

Check your GitHub Actions usage:
1. Go to Settings → Billing → Actions
2. Monitor minutes used per OS
3. Set spending limits if needed

## Future Optimizations

Consider:
- Self-hosted runners for frequent builds
- Conditional workflows based on changed files
- Parallel job optimization
- Build caching strategies