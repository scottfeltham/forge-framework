---
layout: default
title: Troubleshooting
parent: Reference
nav_order: 3
---

# Troubleshooting Guide
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

Common issues and solutions for FORGE Framework v0.6.0.

## Installation Issues

### Command not found: forge

**Problem**: After installation, `forge` command is not recognized.

**Solutions**:

1. **Verify global installation**:
```bash
npm list -g forge-framework
```

2. **Reinstall globally**:
```bash
npm uninstall -g forge-framework
npm install -g forge-framework
```

3. **Check npm global bin path**:
```bash
npm config get prefix
# Add /bin to your PATH if needed
export PATH=$PATH:$(npm config get prefix)/bin
```

4. **Use npx as fallback**:
```bash
npx forge-framework <command>
```

### Permission errors during installation

**Problem**: `EACCES` or permission denied errors.

**Solutions**:

1. **Use npm's recommended approach**:
```bash
npm config set prefix ~/.npm-global
export PATH=~/.npm-global/bin:$PATH
npm install -g forge-framework
```

2. **Or fix npm permissions**:
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### Subagents not configured

**Problem**: Claude Code subagents aren't available after installation.

**Solutions**:

1. **Check installation output** for confirmation:
```
✓ 6 Claude Code subagents configured
```

2. **Verify subagent files**:
```bash
ls ~/.claude/agents/forge-*
```

3. **Reinstall if missing**:
```bash
npm uninstall -g forge-framework
npm install -g forge-framework
```

## Phase Validation Issues

### Cannot advance to next phase

**Problem**: `forge phase next` shows validation errors.

**Solutions**:

1. **Check mandatory items**:
```bash
forge phase status
```

2. **Complete required tasks**:
   - Look for items marked `(MANDATORY)`
   - Update cycle markdown to check completed items
   - Ensure test scenarios are defined (Focus phase)

3. **Force advance if necessary**:
```bash
forge phase next --force
# Use sparingly - only for prototypes or emergencies
```

### Cannot complete cycle

**Problem**: `forge complete` shows incomplete phases.

**Solutions**:

1. **Review phase status**:
```bash
forge status
forge status --detailed
```

2. **Complete remaining phases**:
   - Work through each incomplete phase
   - Check all mandatory items
   - Use visual progress bars as guide

3. **Force completion if needed**:
```bash
forge complete --force
# Documents will note forced completion
```

### Progress shows 0% despite work done

**Problem**: Visual progress bars show no completion.

**Solution**: Update cycle markdown with checkboxes:
```markdown
- [x] Completed task
- [ ] Incomplete task
```

## Claude Code Integration Issues

### Subagents not responding

**Problem**: Claude doesn't use FORGE subagents when requested.

**Solutions**:

1. **Use explicit activation**:
```
You: Use forge-architect to design this feature
```

2. **Verify subagent definitions exist**:
```bash
cat ~/.claude/agents/forge-architect/agent.md
```

3. **Restart Claude Code**:
   - Close and reopen Claude Code
   - Start fresh conversation

### Wrong subagent activated

**Problem**: Claude uses wrong specialist for task.

**Solution**: Be explicit about which agent:
```
You: I need forge-tester to write comprehensive tests
You: Use forge-devops for deployment setup
```

### Subagent context confusion

**Problem**: Subagents seem to lose context or mix information.

**Solutions**:

1. **Each subagent has isolated context** - this is by design
2. **Pass context explicitly** when switching agents
3. **Use main Claude to coordinate** between subagents

## Cycle Management Issues

### Multiple active cycles (team mode)

**Problem**: Confusion about which cycle is active.

**Solutions**:

1. **List all active cycles**:
```bash
ls .forge/current/
```

2. **Check specific cycle**:
```bash
cat .forge/current/feature-name.md
```

3. **Work on specific cycle**:
```
You: Let's work on the authentication cycle
```

### Lost cycle progress

**Problem**: Can't find previous work or cycle.

**Solutions**:

1. **Check completed cycles**:
```bash
ls .forge/completed/
```

2. **Review learnings**:
```bash
ls .forge/learnings/
```

3. **Search by date**:
```bash
ls -la .forge/completed/ | grep "2024-01"
```

### Accidental cycle overwrite

**Problem**: `forge new` overwrote existing cycle.

**Solutions**:

1. **Check for backups**:
```bash
ls .forge/backups/
```

2. **Use team mode** for parallel work:
```bash
# In forge.yaml:
mode: team
```

3. **Complete cycles before starting new ones** in solo mode

## Configuration Issues

### forge.yaml not loading

**Problem**: Configuration seems ignored.

**Solutions**:

1. **Verify YAML syntax**:
```bash
# Install yaml-lint if needed
npm install -g yaml-lint
yamllint forge.yaml
```

2. **Check file location**:
   - Must be in project root
   - Named exactly `forge.yaml`

3. **Validate structure**:
```yaml
project: project-name
mode: solo  # or team
phases:
  focus:
    - Requirement gathering
```

### Custom templates not working

**Problem**: FORGE uses default templates instead of custom ones.

**Solutions**:

1. **Check template location**:
```bash
ls templates/
```

2. **Verify template references** in forge.yaml:
```yaml
templates:
  cycle: templates/custom-cycle.md
```

3. **Ensure correct markdown structure** in templates

## Performance Issues

### Slow command execution

**Problem**: FORGE commands take too long.

**Solutions**:

1. **Check file sizes**:
   - Large cycle files can slow parsing
   - Archive completed cycles regularly

2. **Clean up .forge directory**:
```bash
# Archive old completed cycles
mkdir .forge/archive
mv .forge/completed/2023-* .forge/archive/
```

3. **Verify Node.js version**:
```bash
node --version  # Should be 14+
```

## AI Assistant Issues

### AI doesn't understand FORGE commands

**Problem**: AI assistant doesn't recognize FORGE workflow.

**Solutions**:

1. **Provide context**:
```
You: We're using FORGE framework for development
You: Please follow the 5-phase cycle approach
```

2. **Reference CLAUDE.md**:
```
You: Check CLAUDE.md for project context
```

3. **Use slash commands** with Claude Code:
```
You: /forge status
You: /forge new "feature name"
```

### AI skips phases or validation

**Problem**: AI tries to jump ahead without validation.

**Solution**: Remind about validation:
```
You: Please check forge status before proceeding
You: We need to complete Focus phase first
```

## Common Error Messages

### "No active cycle found"

**Cause**: No current.md file exists.

**Solution**:
```bash
forge new "feature name"
```

### "Invalid cycle format"

**Cause**: Cycle markdown is malformed.

**Solution**: Check for:
- Proper checkbox syntax: `- [ ]` or `- [x]`
- Correct phase headers
- No corrupted content

### "Phase validation failed"

**Cause**: Mandatory items incomplete.

**Solution**:
```bash
forge phase status  # See what's missing
# Complete mandatory items
forge phase next    # Try again
```

## Getting Help

### Resources

1. **Documentation**: [forgeframework.dev](https://forgeframework.dev)
2. **GitHub Issues**: [Report bugs](https://github.com/scottfeltham/forge-framework/issues)
3. **Discussions**: [Community help](https://github.com/scottfeltham/forge-framework/discussions)

### Debug Mode

Enable verbose output for troubleshooting:
```bash
DEBUG=* forge status
```

### Support Checklist

When reporting issues, include:
- [ ] FORGE version: `forge --version`
- [ ] Node.js version: `node --version`
- [ ] Operating system
- [ ] Error messages (full output)
- [ ] Steps to reproduce
- [ ] forge.yaml contents (if relevant)

## Prevention Tips

### Best Practices

1. **Regular commits**: Save work frequently
2. **Complete cycles**: Don't leave cycles hanging
3. **Use validation**: Don't skip with --force unless necessary
4. **Document issues**: Add to learnings for team
5. **Update regularly**: Keep FORGE up to date

### Maintenance

```bash
# Check for updates
npm outdated -g forge-framework

# Update to latest
npm update -g forge-framework

# Verify version
forge --version
```

## FAQ

### Q: Can I use FORGE without AI?
**A**: FORGE is designed for AI-driven development. While you can manually edit cycle files, you'll miss the core benefits.

### Q: How do I migrate from older versions?
**A**: v0.6.0 is backward compatible. Just update and enjoy new features like phase validation.

### Q: Can multiple people work on same cycle?
**A**: Use team mode in forge.yaml for parallel cycles. For same cycle, coordinate through your version control system.

### Q: What if I need to hotfix production?
**A**: Use `forge complete --force` to bypass validation for emergency fixes. Document why in the cycle notes.

### Q: How do I customize validation rules?
**A**: Edit cycle templates to add/remove `(MANDATORY)` markers on tasks that must be completed.

---

*Still having issues? Please [open a GitHub issue](https://github.com/scottfeltham/forge-framework/issues) with details.*