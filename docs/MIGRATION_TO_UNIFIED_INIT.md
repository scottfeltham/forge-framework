# Migration: Unified Init Command

## What Changed?

As of version 2.0, FORGE has simplified its initialization process:

**Before:**
- `forge init` - For new projects
- `forge integrate` - For existing projects
- Multiple flags and options to remember

**Now:**
- `forge init` - Works for everything!

## Why This Change?

1. **Simplicity**: One command to remember
2. **Intelligence**: Auto-detects your project setup
3. **Safety**: Never overwrites existing files
4. **Consistency**: Same experience for all users

## For Users Looking for `forge integrate`

The `integrate` command is no longer needed. Just use:

```bash
forge init
```

It automatically:
- Detects if you have an existing project
- Finds Claude Code setups
- Preserves CLAUDE.md files
- Identifies your frameworks
- Configures appropriately

## What About Integration Options?

The old integration flags are no longer needed:

| Old Command | What Happens Now |
|------------|------------------|
| `forge integrate --analyze` | `forge init` shows analysis automatically |
| `forge integrate --minimal` | `forge init` uses minimal setup for existing projects |
| `forge integrate --preserve-claude-md` | `forge init` always preserves existing files |
| `forge integrate --team` | Edit forge.yaml after init to enable team mode |

## Examples

### Existing Node.js Project
```bash
cd my-node-project
forge init

# Output:
# 🔍 Analyzing project...
# ✓ Detected existing project
# ✓ Found package.json
# ✓ Detected: express, typescript, jest
# 🔨 FORGE initialized successfully!
```

### Project with Claude Code
```bash
cd claude-project
forge init

# Output:
# 🔍 Analyzing project...
# ✓ Detected existing project
# ✓ Found Claude Code setup
# ✓ Found CLAUDE.md
# 🔨 FORGE initialized successfully!
```

### Brand New Project
```bash
mkdir new-project
cd new-project
forge init

# Output:
# 🔍 Analyzing project...
# ✓ New project detected
# 🔨 FORGE initialized successfully!
```

## Advanced Configuration

After running `forge init`, you can always:
1. Edit `forge.yaml` to customize settings
2. Add team collaboration mode
3. Configure agent preferences
4. Set up MCP servers

## Questions?

The unified `forge init` makes getting started easier than ever. If you have specific needs that were handled by the old integrate command, they're likely handled automatically now or can be configured in forge.yaml after initialization.