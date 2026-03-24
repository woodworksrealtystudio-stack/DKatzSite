# Style: Clean White Carousel

**Named:** Clean White Carousel
**Inspired by:** @nateherk (Nate Herk on Instagram/Twitter)
**Eli's brand assets:** `brand-assets/headshot.png`, handle `@woodworksrealtystudio`
**Use for:** Own content, Brian Pate content
**Example screenshots:** `references/styles/clean-white-carousel-example/`

---

## What This Style Is

Minimal, text-forward carousel. No backgrounds, no gradients, no color blocks.
The headline does all the work. Everything else gets out of the way.

Works well for: educational content, AI breakdowns, feature explainers, listicles.

---

## Layout Rules

### Slide 1 -- Title slide
- Big bold topic title, left-aligned
- Short blue underline accent below the title (decorative only)
- Profile photo + name + handle below the line
- No body text
- "Swipe →" bottom right

### Slides 2 through N-1 -- Content slides
- Profile photo + name + handle top left (small)
- Slide counter top right (e.g. "2 / 7")
- Big bold headline -- one clear point per slide
- 1-3 sentence body below the headline explaining or expanding on it
- Username watermark bottom left (faint)
- Nothing else

### Last slide -- Follow CTA
- Profile photo centered (large, circular)
- Name + handle centered below photo
- Bold headline: "Follow for more [niche]"
- 1-sentence bio describing who you help and how
- Black pill button: "Follow @handle"

---

## Design Specs (Current Implementation)

| Element | Spec |
|---|---|
| Background | Pure white |
| Headline font | Inter ExtraBold (start 80px, auto-scales down to min 52px) |
| Profile name | Inter Bold 28px |
| Profile handle | Inter Regular 22px |
| Body text | Inter Regular 36px, line-height 1.55x |
| Headline color | Black (15, 15, 15) |
| Body color | Gray (65, 65, 65) |
| Profile color | Black name + gray handle |
| Accent color | Blue underline on slide 1 only (70, 120, 220) |
| Profile photo | 60px diameter, circular |
| Other colors | None -- black/gray text on white only |
| Format | Square (1080×1080 px) |
| Slides | 6 slides (title + 4 content + CTA) typical |

---

## Copy Rules

- Headline = the full point, stated as a fact or benefit -- not a teaser
- Body = 1-3 sentences max, adds context or a quick example
- No bullet points inside a slide -- each slide IS one bullet
- Last slide CTA is always "Follow for more [specific niche]" + who you help

---

## Tone

- Direct and confident
- Sounds like a person, not a brand
- No fluff -- if the headline says it all, the body barely needs to exist

---

## Eli's Version (own content)

- Niche: AI for real estate
- Name: Eli Bock
- Handle: @woodworksrealtystudio
- Headshot: `brand-assets/headshot.png`
- Verified badge: yes (blue, Instagram style)
- Bio line: "I help realtors build AI systems that save time and win more clients."
- Headline style: State the AI thing plainly -- "Realtors Are Using AI CRMs Wrong" not "5 Tips For..."
- Generator script: `projects/own-content/carousels/generate-clean-white.py`

## Brian Pate Version

- Niche: Real estate education / seminar
- Handle: @brianpate or @paterealty (confirm)
- Bio line: Match his positioning -- veteran agent, educator, founder
- Headline style: Can lean more toward insight/experience framing -- "What 20 Years in Real Estate Taught Me About Leads"
