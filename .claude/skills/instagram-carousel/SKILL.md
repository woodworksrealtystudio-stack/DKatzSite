---
name: instagram-carousel
description: Create Instagram carousels in the Clean White Carousel style (inspired by @nateherk). Use this skill whenever Eli asks to create a carousel, make slides, generate a post, or create content in the clean white style. Also use it when he provides a topic, idea, or angle and wants it turned into a carousel. Even if he just says "make a carousel about X" or "turn this into slides" -- invoke this skill.
---

# Instagram Carousel Generator

Creates carousels in the **Clean White Carousel** style -- minimal, text-forward, no color blocks or backgrounds.

Reference screenshots: `references/styles/clean-white-carousel-example/`
Full style spec: `references/styles/clean-white-carousel.md`
Generator script template: `projects/own-content/carousels/generate-clean-white.py`

---

## Style at a Glance

Read `references/styles/clean-white-carousel.md` for full specs. Summary:

- Pure white background. Black text only.
- Headline font: Arial Black (very large, dominates the slide)
- Body font: Arial Regular (small, secondary)
- Blue accent underline on slide 1 only
- 3 slide types: title, content, CTA

**Slide 1 (title):** Big bold headline top-left, short blue underline below, profile bar below that, watermark bottom-left, "Swipe →" bottom-right, counter top-right.

**Content slides:** Small profile bar top-left, counter top-right, giant bold headline, 1-3 sentences body below, watermark bottom-left. Nothing else.

**Last slide (CTA):** Large circular photo centered, name + handle, bold "Follow for more [niche]" headline, 1-sentence bio, black pill button "Follow @handle".

---

## Eli's Brand

- Name: Eli Bock
- Handle: @woodworksrealtystudio
- Headshot: `brand-assets/headshot.png`
- Niche: AI for real estate
- Bio line: "I help realtors build AI systems that save time and win more clients."
- Headline style: State the AI/real estate point plainly as a fact -- "Realtors Are Using AI CRMs Wrong" not "5 Tips For..."

---

## Copy Rules

Write carousel copy before generating. Follow these rules:

**Headlines (every slide):** State the full point as a fact or benefit. The reader should understand the slide from the headline alone. Make it confident and direct. No teasers, no questions, no "here's why...".

**Body (content slides):** 1-3 sentences max. Adds context, a quick example, or a concrete detail. If the headline says it all, the body barely needs to exist.

**Title slide subline:** 1-2 sentences that set up what the carousel will teach. Creates just enough tension to make someone swipe.

**Tone:** Sounds like a person, not a brand. Direct. No fluff. No corporate speak. No em dashes.

**Slide count:** 5-8 slides total (including title + CTA).

---

## Process

### Step 1: Draft the content

If the user gave you a topic, turn it into carousel content. If they gave you a rough outline, clean it up.

Draft all slides in this format before touching any code:

```
TITLE: [headline]
SUBLINE: [1-2 sentence setup]

SLIDE 2: [headline]
[body]

SLIDE 3: [headline]
[body]

...

CTA: Follow for more [specific niche phrase]
BIO: I help realtors build AI systems that save time and win more clients.
```

Show this draft to Eli and get approval before generating. Or if he's given you everything and just says "go", skip straight to generating.

### Step 2: Find the next carousel number

Check what carousel directories exist:
```bash
ls projects/own-content/carousels/
```

The naming pattern is `carousel-NNN`. Pick the next number (e.g., if carousel-003 exists, use carousel-004).

### Step 3: Generate the carousel

Write a Python script to `projects/own-content/carousels/generate-clean-white.py`.

Base it exactly on the existing script -- same canvas size, same font sizes, same color constants, same layout logic. Only change:
1. The `OUTPUT_DIR` to point to the new numbered directory
2. The `slides` list with the new content

Run it:
```bash
cd /Users/elibock/Desktop/ExecAss && python projects/own-content/carousels/generate-clean-white.py
```

### Step 4: Show the slides

Read each generated slide image and display them inline so Eli can review the output:
```
projects/own-content/carousels/carousel-NNN/slide-1.jpg
projects/own-content/carousels/carousel-NNN/slide-2.jpg
...
```

Ask if anything needs adjusting.

---

## Working with New Reference Styles

If Eli points you to reference images from a different creator or style:

1. Read all the reference images
2. Extract and document: background, fonts (weight, size, position), text hierarchy, accent colors, profile placement, slide counter position, CTA layout, spacing feel
3. Check if a style doc already exists in `references/styles/`
4. If not, create one at `references/styles/[style-name].md` following the format of `clean-white-carousel.md`
5. Write a new generator script based on the extracted specs
6. Ask Eli to confirm the style doc before generating

---

## Common Pitfalls

- Don't start generating before the copy is approved -- slides look wrong when the copy doesn't fit the headline size constraints
- Keep headlines short enough to not wrap more than 2 lines. If a headline wraps to 3+ lines at large size, the auto-scale kicks in but it's better to rewrite the headline shorter
- The body text should feel like breathing room, not cramped. If it's more than 3 sentences, cut it
- CTA slide: the "Follow for more" headline should name the specific niche, not just "follow for more content"
