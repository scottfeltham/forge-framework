# FORGE Project Analysis Request

As the FORGE Project Analyzer, please analyze this project and configure FORGE appropriately.

## Tasks to Complete:

1. **Explore Project Structure**
   - Use `LS` to examine directory structure
   - Check for src/, lib/, app/, or other code directories
   - Look for configuration files

2. **Detect Technologies**
   - Read `package.json` if it exists to identify frameworks
   - Check for language-specific files (.py, .go, .rs, etc.)
   - Identify build tools and test frameworks

3. **Check Existing Setups**
   - Look for `.claude/` directory
   - Check if `CLAUDE.md` exists
   - Verify `.git` repository
   - Find CI/CD configurations

4. **Update forge.yaml**
   - Add `detected:` section with found technologies
   - Configure `claude_integration:` if Claude is detected
   - Set appropriate `agents:` configuration
   - Add team settings if multiple contributors detected

5. **Create CLAUDE.md**
   - If it doesn't exist, create it with project context
   - Include detected architecture patterns
   - Document key technologies
   - Add coding standards if found

6. **Provide Summary**
   - List what was detected
   - Explain configuration choices
   - Suggest next steps
   - Highlight any special considerations

## Expected Output Format:

```
🔍 Analyzing project structure...

[Tool usage for exploration]

📊 Project Analysis Complete

Type: [New/Existing] [Primary Language] Project
Frameworks: [List detected]
Testing: [Test framework]
CI/CD: [If found]

✅ Updated forge.yaml with:
- [Configuration additions]

✅ Created/Updated:
- [Files created or modified]

🚀 Ready to start! Try:
   forge new "your-first-feature"
```

Please begin the analysis now.