# Websites

Collection of Next.js websites built with the `frontend-design` skill.

## Creating New Websites

Use the **frontend-design** skill to build new sites:

```
@skill frontend-design:frontend-design
```

**When invoking the skill, provide:**
- Site purpose and audience
- Design aesthetic/tone
- Content structure (pages, sections)
- Target folder: `/Users/elibock/Desktop/ExecAss/projects/websites/[site-name]`
- Any brand assets (logos, headshots, etc.)
- Technical constraints or requirements

**Example:**
```
Create a Next.js website for [Company Name] at /Users/elibock/Desktop/ExecAss/projects/websites/company-name.
[Describe purpose, aesthetic, pages, content].
Use Next.js, Tailwind CSS, Framer Motion. Include [assets] from [paths].
```

## Projects

- **woodworks** - AI automation consulting for real estate brokers

## Tech Stack (Standard)

All sites use:
- Next.js 14+
- React 18+
- Tailwind CSS 3.4+
- Framer Motion 11+
- TypeScript

## Running a Site Locally

```bash
cd websites/[site-name]
npm install
npm run dev
```

Then visit `http://localhost:3000` (or next available port).

## Deployment

All sites are ready for Vercel:
```bash
vercel deploy
```

Or use any Next.js-compatible hosting (Netlify, AWS Amplify, etc.).
