# Gmail MCP Integration Upgrade Checklist

When Claude Code improves its MCP tool injection support, use this checklist to activate full Gmail functionality.

## Prerequisites
- [ ] Claude Code has released MCP tool injection improvements (check release notes)
- [ ] `docs/gmail-mcp-setup.md` has been reviewed for current status

## Verification Steps
1. **Test Tool Availability**
   - [ ] Restart Claude Code completely
   - [ ] Ask Claude: "List my recent Gmail emails"
   - [ ] Verify `list_messages` tool is available in Claude's toolkit
   - [ ] Check that other Gmail tools appear: `read_message`, `send_message`, `create_draft`, etc.

2. **Test Email Reading**
   - [ ] Can list inbox emails (10 recent messages)
   - [ ] Can read specific email by ID
   - [ ] Can extract sender, subject, date, body
   - [ ] Works with emails from Sam Notte and Brian Pate

3. **Test Email Management**
   - [ ] Can draft responses to emails
   - [ ] Can archive/label emails
   - [ ] Can move emails to folders
   - [ ] Can mark as read/unread

4. **Test Integration with Assistant**
   - [ ] Ask Claude to analyze recent emails
   - [ ] Ask Claude to suggest responses
   - [ ] Ask Claude to flag important messages
   - [ ] Test monitoring for specific senders (Sam, Brian)

## Updates to Make When Verified
Once all tests pass:

1. **Update `docs/gmail-mcp-setup.md`**
   - Change status from "pending" to "✅ Fully operational"
   - Remove "Limitations" section
   - Mark all testing checklist items as complete
   - Update "What Needs to Happen" section

2. **Update `CLAUDE.md`**
   - Change "awaiting full Claude Code MCP tool support" to "fully operational"
   - Add Gmail to active capabilities section

3. **Create Gmail Monitoring Workflow**
   - Build automation to monitor emails from key contacts (Sam, Brian)
   - Set up email response suggestion system
   - Create rules for categorizing emails

4. **Log Decision**
   - Add entry to `decisions/log.md`:
   ```
   [DATE] DECISION: Gmail MCP fully integrated | REASONING: Claude Code now supports full MCP tool injection | CONTEXT: Can now read, analyze, and respond to emails automatically
   ```

## Quick Test Script
Once tools are available, run this test:

```bash
# In Claude Code, ask:
# "List my last 5 emails and show me who they're from and their subjects"
#
# Expected output: List of 5 emails with From, Subject, Date
# If successful, all tools are properly injected
```

## Files to Reference
- `.mcp.json` - MCP configuration
- `.claude/settings.json` - MCP enablement
- `.claude/settings.local.json` - Gmail credentials (private)
- `docs/gmail-mcp-setup.md` - Full setup documentation
- `CLAUDE.md` - Main project instructions

## Notes
- Credentials are securely stored in `.claude/settings.local.json` (gitignored)
- No additional setup needed once Claude Code improves
- This is a Claude Code limitation, not a Gmail setup issue
- The infrastructure is already in place and working

---
**Last Updated:** 2026-03-17
**Status:** Awaiting Claude Code MCP improvements
**Next Check:** Monitor Claude Code release notes for MCP enhancements
