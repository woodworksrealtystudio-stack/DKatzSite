# Decision Log

Append-only. When a meaningful decision is made, log it here.

Format: [YYYY-MM-DD] DECISION: ... | REASONING: ... | CONTEXT: ...

---

[2026-03-17] DECISION: Built `instagram-carousel` skill for carousel generation | REASONING: Recurring workflow -- creating multiple carousels in consistent Clean White style. Skill streamlines drafting, generation, and layout. | CONTEXT: Carousel-004 created using the skill; future carousels will use it automatically.

[2026-03-17] DECISION: Switched carousel font from Gill Sans to Inter (ExtraBold/Bold/Regular) | REASONING: Inter is cleaner, more modern, and less harsh while maintaining visual weight. Better matches Eli's brand aesthetic. | CONTEXT: Downloaded Inter from GitHub, stored at `brand-assets/fonts/`. Updated generator script to use Inter exclusively.

[2026-03-17] DECISION: Increased profile bar size (photo 60px, name 28px, handle 22px) | REASONING: Profile elements were too small relative to slide area. Larger photo and text improve readability and visual polish. | CONTEXT: Applied consistently to all slide types (title, content, CTA).

[2026-03-17] DECISION: Aligned watermark and swipe indicator Y coordinate on slide 1 | REASONING: Visual consistency -- both bottom elements now sit on the same baseline, preventing unintended misalignment across generations. | CONTEXT: Uses shared BOTTOM_Y constant in generator script.

[2026-03-17] DECISION: Set up Gmail MCP integration via `gmail-app-password-mcp` | REASONING: Enable executive assistant to read, analyze, and suggest responses to emails. App password is simpler and more direct than full OAuth setup. | CONTEXT: Configured in `.mcp.json`, credentials in `.claude/settings.local.json`, documentation at `docs/gmail-mcp-setup.md`. Currently awaiting Claude Code's full MCP tool injection support for complete functionality. Infrastructure is in place and authenticated.
