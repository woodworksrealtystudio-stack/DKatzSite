# Woodworks Realty Studio -- Website & Online Presence

Premium website showcasing AI automation consulting services for independent real estate brokers.

**Status:** Live

## Overview
- Next.js site with luxury aesthetic (light theme, editorial typography)
- Positions Woodworks as consulting/systems builder for independent brokers
- Asymmetric layouts, fluid animations, refined color palette
- Production-ready with responsive design

## Design System
- **Brand Colors:** Cream, Ivory, Clay (warm accent), Sage, Taupe
- **Typography:** Playfair Display (headlines), Geist (body)
- **Motion:** Framer Motion with smooth easing
- **Layout:** Asymmetric grids per taste-skill principles

## Tech Stack
- Next.js 14+
- React 18+
- Tailwind CSS 3.4+
- Framer Motion 11+
- TypeScript

## How This Was Built

This site was created using the **`frontend-design:frontend-design` skill** with taste-skill principles applied:
- Design Variance: 8/10 (asymmetric layouts)
- Motion Intensity: 6/10 (fluid CSS animations)
- Visual Density: 4/10 (gallery-style spacing)

To create similar sites in the future, use:
```
@skill frontend-design:frontend-design
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm build
npm start
```

Visit `http://localhost:3001` to see the site (or next available port).

## Project Structure
```
/app                 - Next.js app directory
  /layout.tsx       - Root layout
  /page.tsx         - Home page
  /globals.css      - Global styles

/components         - React components
  /hooks           - Custom hooks
  Header.tsx       - Navigation header
  Hero.tsx         - Hero section with headshot
  Services.tsx     - Service offerings
  Work.tsx         - Case studies
  CTA.tsx          - Call-to-action section
  Footer.tsx       - Footer

/public/assets      - Brand assets
  /logo.png        - Company logo
  /headshot.png    - Eli's photo
```

## Key Features
- Sticky navigation header with scroll detection
- Animated sections with scroll-triggered reveals
- Services grid with hover effects
- Case studies with asymmetric layout
- Call-to-action with email/calendar links
- Mobile responsive design
- Fine-grained control over typography, spacing, and motion
