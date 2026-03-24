# Own Content Strategy

One-line: Build and maintain a personal content presence on Instagram using the Clean White Carousel style.

**Status:** Active — carousel generation skill built and tested

## Background
- Content creation is a priority -- both for brand building and learning what works before building it for clients
- Instagram is the primary platform
- Using the Clean White Carousel style (inspired by @nateherk) for consistency and speed

## Carousel Workflow
- Use the `instagram-carousel` skill to create carousels
- Skill handles: content drafting, style validation, slide generation
- Generator script: `projects/own-content/carousels/generate-clean-white.py`
- Style reference: `references/styles/clean-white-carousel.md`
- Output: numbered directories `carousel-NNN/` with 1080×1080 JPG slides

## Current Carousel Specs (as of 2026-03-17)
- **Font:** Inter ExtraBold (headlines), Inter Bold (profile), Inter Regular (body text)
- **Profile bar:** 60px circular photo, 28px name + badge, 22px handle
- **Layout:**
  - Slide 1: Headline + blue underline + profile bar (flowing), "Swipe →" bottom right
  - Content slides: Profile bar top, vertically centered headline + body
  - CTA slide: Centered photo, name, follow headline, bio, black pill button
- **Alignment:** Watermark (@woodworksrealtystudio) and "Swipe →" share baseline on slide 1 for visual consistency

## Carousel History
- Carousel-001, 002, 003: Early iterations
- Carousel-004: First complete carousel using instagram-carousel skill (2026-03-17)
  - All layout, font, and sizing finalized
  - Future carousels will maintain this standard

## Key Dates
- No hard deadline -- create as schedule permits
- Target: Consistent weekly or bi-weekly carousel output

