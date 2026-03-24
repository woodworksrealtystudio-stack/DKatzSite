# Composio MCP Integration

## Overview
Composio MCP provides unified access to multiple integrations through a single remote MCP server. This allows Claude to automate workflows across Gmail, Google Docs, Google Drive, GitHub, and other services without storing local credentials.

**Current Status:** Composio MCP configured ✅ | Ready to use

## Setup Details

### Configuration
- **Method:** Composio MCP (Remote server with OAuth)
- **Config Location:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **MCP Server Name:** `mcp-config-c1qqv3`
- **Backend:** Composio's remote MCP gateway
- **Setup Command:** `npx @composio/mcp@latest setup "https://backend.composio.dev/v3/mcp/c593147f-71ea-45e6-947c-0fd989c821c2/mcp?user_id=pg-test-065a5b38-ff11-4747-8e45-bf010e2eedfe" "mcp-config-c1qqv3" --client claude`

### Authentication
- **Auth Method:** OAuth 2.0 via Composio (no local credentials stored)
- **API Key:** `ak_hZ6...` (stored in x-api-key header)
- **User ID:** `pg-test-065a5b38-ff11-4747-8e45-bf010e2eedfe`
- **First Access:** OAuth consent screens will appear in browser for each service (Gmail, Google Docs, etc.)

## Available Integrations

Composio MCP supports these services relevant to Woodworks Realty Studio:

✅ **Gmail** - List, read, search, send, draft, label, archive emails
✅ **Google Docs** - Create, read, update documents
✅ **Google Drive** - List, upload, download, organize files
✅ **GitHub** - Create issues, manage PRs, commit operations
✅ **Slack** - Send messages, read channels (if configured)
✅ **And 300+ other integrations** via Composio

## Next Steps

1. **Verify Setup:** Restart Claude Code to load the MCP tools
2. **Test Each Integration:**
   - Gmail: Check email for flight info
   - Google Docs: Create and edit documents
   - GitHub: List repos, manage issues
3. **Build Automation Workflows:** Create skills for recurring tasks

## Testing Checklist (After Restart)

- [ ] Check Gmail for emails (flight info, messages from Sam/Brian)
- [ ] Read and summarize a specific email
- [ ] Draft an email response
- [ ] List Google Drive files
- [ ] Access a Google Doc and read/update content
- [ ] List GitHub repos and issues
- [ ] Test label/archive operations in Gmail

## Common Use Cases

**For Woodworks Realty Studio:**
- Monitor emails from Sam Notte and Brian Pate
- Search Gmail for flight confirmations, meeting details, project info
- Create documents for proposals, contracts, content planning
- Organize Google Drive with client folders
- Track GitHub issues and PRs for development projects
- Draft Gmail responses and content for social media

## Related Files
- `CLAUDE.md` - Main project instructions
- `docs/gmail-mcp-setup.md` - Gmail-specific details
- `claude_desktop_config.json` - Desktop MCP configuration
- `.claude/settings.json` - Claude Code settings

## References
- Composio MCP: https://composio.dev/
- Composio Documentation: https://docs.composio.dev/
- MCP Specification: https://modelcontextprotocol.io/
- Gmail API: https://developers.google.com/gmail/api
- Google Docs API: https://developers.google.com/docs/api
- Google Drive API: https://developers.google.com/drive/api
- GitHub API: https://docs.github.com/en/rest
