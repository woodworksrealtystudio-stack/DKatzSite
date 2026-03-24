# Deployment Guide — D.F. Katz Law Firm Website

## Overview
This is a Next.js website built with Tailwind CSS and Framer Motion, ready to deploy to Vercel.

## Pre-Deployment Checklist
- [x] Site builds successfully: `npm run build`
- [x] All pages created and working
- [x] Assets imported (logos, headshot)
- [x] Colors and fonts configured
- [x] Responsive design tested

## Deployment to Vercel

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com) and sign up
2. Connect your Git provider (GitHub, GitLab, etc.) or use email

### Step 2: Deploy the Project
#### Option A: Via Git (Recommended)
```bash
# Push this project to a Git repository
git init
git add .
git commit -m "Initial commit: D.F. Katz Law Firm website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/david-katz-website.git
git push -u origin main
```

Then on Vercel:
1. Click "New Project"
2. Select your Git repository
3. Vercel will auto-detect Next.js settings
4. Click "Deploy"

#### Option B: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Step 3: Configure Domain
1. In Vercel Dashboard, go to Project Settings → Domains
2. Add your custom domain (e.g., davidkatzlaw.com)
3. Update your domain's DNS records to point to Vercel:
   - CNAME: `cname.vercel.com`
   - Or follow Vercel's specific DNS instructions

### Step 4: Point Wix Domain to New Site
If migrating from Wix:
1. Remove the site from Wix hosting (or keep it as backup)
2. Update DNS at your registrar to point to Vercel
3. Allow 24-48 hours for DNS propagation

## Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
```

## Environment Variables
Currently none required. If you add email/form handling later:
```bash
# .env.local
CONTACT_EMAIL=david@example.com
```

## Making Updates
1. Edit files locally
2. Test with `npm run dev`
3. Commit: `git commit -m "Update: description"`
4. Push: `git push`
5. Vercel auto-deploys on every push to `main`

## Performance Notes
- All images are optimized with Next.js Image component
- Pages are pre-rendered for fast loading
- Tailwind CSS is automatically minified
- Vercel provides global CDN caching

## Contact Form Integration
The contact form currently logs to console. To enable emails:

Option 1: Use Formspree (Free)
- Update form action to: `https://formspree.io/f/YOUR_FORM_ID`

Option 2: Use SendGrid/Resend (Recommended)
- Install: `npm install resend`
- Add API route handler
- Connect to `/api/contact`

## Support
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Questions? Check the project README.md
