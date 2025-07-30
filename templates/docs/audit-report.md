# Documentation Audit Report

**Generated**: {{DATE}}  
**Project**: {{PROJECT_NAME}}  
**Auditor**: Documentor Agent

## Executive Summary

{{SUMMARY}}

## Structure Compliance

### ✅ Correctly Placed Documents

#### specs/ folder
- {{SPECS_COUNT}} PRDs and specifications found
- All following naming conventions
- No misplaced documents

#### docs/ folder  
- {{DOCS_COUNT}} documentation files found
- Properly organized in subdirectories
- Following folder structure standards

### ❌ Misplaced Documents

{{MISPLACED_LIST}}

## Coverage Analysis

### Feature Documentation
| Feature | PRD | Tech Spec | User Guide | API Docs | Status |
|---------|-----|-----------|------------|----------|--------|
| {{FEATURE_NAME}} | {{✓/✗}} | {{✓/✗}} | {{✓/✗}} | {{✓/✗}} | {{COMPLETE/PARTIAL/MISSING}} |

### Missing Documentation
{{MISSING_DOCS_LIST}}

## Freshness Check

### Recently Updated (< 30 days)
{{FRESH_DOCS_LIST}}

### Needs Update (> 90 days)
{{STALE_DOCS_LIST}}

### Critical Updates Required
{{CRITICAL_UPDATES_LIST}}

## Link Health

### Internal Links
- Total links checked: {{TOTAL_LINKS}}
- Working links: {{WORKING_LINKS}}
- Broken links: {{BROKEN_LINKS}}

### Broken Link Details
{{BROKEN_LINKS_LIST}}

## Consistency Analysis

### Format Compliance
- Documents following template: {{TEMPLATE_COMPLIANCE}}%
- Consistent headers: {{HEADER_CONSISTENCY}}%
- Proper metadata: {{METADATA_PRESENCE}}%

### Terminology Consistency
{{TERMINOLOGY_ISSUES}}

## Quality Metrics

### Completeness Score
- Average section completion: {{SECTION_COMPLETION}}%
- Example code presence: {{EXAMPLE_PRESENCE}}%
- Cross-references: {{XREF_QUALITY}}%

### Readability
- Average document length: {{AVG_LENGTH}}
- Clear structure: {{STRUCTURE_SCORE}}%
- Helpful examples: {{EXAMPLE_QUALITY}}%

## Recommendations

### Immediate Actions
1. {{ACTION_1}}
2. {{ACTION_2}}
3. {{ACTION_3}}

### Short-term Improvements
{{SHORT_TERM_LIST}}

### Long-term Strategy
{{LONG_TERM_RECOMMENDATIONS}}

## Action Plan

### Fix Misplaced Files
```bash
# Commands to move files to correct locations
{{MOVE_COMMANDS}}
```

### Generate Missing Docs
```bash
# Suggested forge document commands
{{GENERATE_COMMANDS}}
```

### Update Stale Content
{{UPDATE_PRIORITY_LIST}}

## Appendix

### Documentation Standards Reference
- PRDs must be in `specs/` with naming `prd-*.md`
- All other docs in `docs/` with appropriate subdirectories
- README.md only in root directories
- All documents must have metadata headers

### Audit Methodology
- Automated file scanning
- Content analysis for type detection  
- Link validation
- Freshness calculation from git history
- Template compliance checking

---

*This audit was generated automatically by the FORGE Documentor Agent*