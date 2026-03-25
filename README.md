# D.F. Katz Law Firm Website

A sophisticated, modern law firm website for The D.F. Katz Law Firm, LLC — providing legal counsel for technology, privacy, and criminal defense in Atlanta, Georgia.

## Overview

This is a professional attorney website built with clean, semantic HTML5, modern CSS3, and vanilla JavaScript. The site showcases a dual practice in both corporate privacy law and criminal defense, featuring an elegant editorial design with a deep charcoal and warm stone color palette.

**Live Site:** https://woodworksrealtystudio-stack.github.io/DKatzSite/

## Features

### Design & User Experience
- **Modern Editorial Aesthetic**: Deep charcoal (#141517) and warm stone (#8C7A63) color palette
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Smooth Animations**: Intersection Observer-based scroll animations with reduced motion support
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation, and screen reader support
- **Performance**: Optimized images, minimal dependencies, fast load times

### Technical Features
- **Static Site**: Pure HTML/CSS/JavaScript — no build process required
- **Component-Based**: Shared navigation and footer injected via JavaScript
- **SEO Optimized**: Structured data (JSON-LD), meta descriptions, semantic markup
- **Icon System**: Lucide icons loaded via CDN
- **Form Integration**: Contact form ready for Formspree integration
- **Social Media**: Twitter/X embed integration

### Pages
1. **Home** (`index.html`) - Hero section, dual practice cards, credentials, testimonials
2. **About** (`about.html`) - Attorney biography, education, credentials
3. **Practice Areas** (`practice-areas.html`) - Comprehensive service overview
4. **Criminal Defense** (`criminal-defense.html`) - Specialized criminal defense practice
5. **Business & Privacy** (`business-privacy.html`) - Corporate counsel and privacy law
6. **Contact** (`contact.html`) - Contact form and contact information

## Project Structure

```
DKatzSite/
├── assets/                    # Images and media files
│   ├── headshot.jpg          # Attorney headshot (about page)
│   ├── headshot-hero.jpg     # Hero section headshot
│   ├── logo-transparent.png  # Site logo
│   └── website-background.png # Hero background image
├── css/
│   └── styles.css            # Main stylesheet (1658 lines)
├── js/
│   └── main.js               # Main JavaScript file
├── index.html                # Homepage
├── about.html                # About page
├── practice-areas.html       # Practice areas overview
├── criminal-defense.html     # Criminal defense page
├── business-privacy.html     # Business & privacy page
├── contact.html              # Contact page
├── .gitignore                # Git ignore rules
└── CLAUDE.md                 # AI assistant context file
```

## Technology Stack

### Core Technologies
- **HTML5**: Semantic markup with structured data
- **CSS3**: Custom properties (CSS variables), Grid, Flexbox, animations
- **JavaScript (ES6+)**: Vanilla JS, no frameworks

### External Dependencies
- **Fonts**: Google Fonts (Cormorant Garamond, Inter)
- **Icons**: Lucide Icons (loaded via CDN)
- **Social Embeds**: Twitter/X widget script
- **Form Backend**: Formspree (requires configuration)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement for older browsers
- Graceful degradation for JavaScript-disabled environments

## Design System

### Color Palette
```css
--primary: #141517          /* Deep Charcoal */
--primary-mid: #1c1e22      /* Mid Charcoal */
--primary-light: #26292e    /* Light Charcoal */
--accent: #8C7A63           /* Warm Stone */
--accent-light: #A69279     /* Light Stone */
--accent-dark: #73624E      /* Dark Stone */
--white: #ffffff            /* Pure White */
--off-white: #F7F6F3        /* Off White */
--warm-bg: #EFEDE8          /* Warm Background */
```

### Typography
- **Serif Font**: Cormorant Garamond (headings, elegant display)
- **Sans-Serif Font**: Inter (body text, navigation, UI elements)
- **Font Sizes**: Responsive with `clamp()` for fluid typography

### Spacing & Layout
- **Max Width**: 1200px container
- **Section Padding**: 5.5rem vertical
- **Grid System**: CSS Grid for layouts
- **Border Radius**: 4px (sm), 8px (md), 12px (lg)

## Key Components

### Navigation Bar
- Fixed position with auto-hide on scroll down
- Transparent background with backdrop blur on scroll
- Dropdown menu for practice areas
- Mobile hamburger menu
- Active page highlighting

### Hero Section
- Full-viewport height
- Background image with overlay
- Grid layout (content + image)
- Staggered animation on load
- Call-to-action button

### Practice Cards
- Dual-column layout
- Hover effects with elevation
- Icon integration
- Border accent on top

### Credentials Band
- Dark background with subtle gradients
- 4-column grid layout
- Icon + text format
- Hover animations

### Footer
- 3-column grid layout
- Quick links navigation
- Social media links
- Legal disclaimer
- Pattern background overlay

### Back to Top Button
- Fixed position, bottom-right
- Appears after scrolling 400px
- Smooth scroll to top
- Circular design with icon

## Setup & Installation

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/woodworksrealtystudio-stack/DKatzSite.git
   cd DKatzSite
   ```

2. **Open in browser:**
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (http-server)
     npx http-server
     ```

3. **Access the site:**
   - Navigate to `http://localhost:8000`

### GitHub Pages Deployment

The site is automatically deployed to GitHub Pages from the `main` branch.

**Current URL:** https://woodworksrealtystudio-stack.github.io/DKatzSite/

To update:
1. Push changes to the `main` branch
2. GitHub Pages will automatically rebuild and deploy

## Configuration

### Contact Form Setup

The contact form requires Formspree configuration:

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID
4. Update `contact.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Analytics Integration

To add Google Analytics:

1. Add tracking code before closing `</head>` tag in all HTML files:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Custom Domain Setup

To connect a custom domain (e.g., dfkatzlawfirm.com):

1. Add a `CNAME` file to the repository root:
   ```
   dfkatzlawfirm.com
   ```

2. Configure DNS records at your domain registrar:
   - **A Records** (for apex domain):
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **CNAME Record** (for www subdomain):
     ```
     woodworksrealtystudio-stack.github.io
     ```

3. Enable HTTPS in GitHub Pages settings

## Customization Guide

### Updating Content

#### Attorney Information
- Edit `about.html` for biography and credentials
- Update structured data in `index.html` (JSON-LD schema)

#### Practice Areas
- Modify `practice-areas.html` for service descriptions
- Update individual practice pages (`criminal-defense.html`, `business-privacy.html`)

#### Contact Information
- Update email, phone, and location in `contact.html`
- Update footer contact details in `js/main.js`

### Styling Changes

#### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
  --primary: #141517;
  --accent: #8C7A63;
  /* ... other variables */
}
```

#### Typography
Change fonts in `css/styles.css`:
```css
:root {
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Inter', sans-serif;
}
```

#### Layout
Adjust container width and spacing:
```css
:root {
  --max-width: 1200px;
  --section-padding: 5.5rem 0;
}
```

### Adding New Pages

1. Create new HTML file (e.g., `new-page.html`)
2. Copy structure from existing page
3. Update navigation in `js/main.js`:
   ```javascript
   const navbarHTML = `
     <li><a href="new-page.html">New Page</a></li>
   `;
   ```
4. Add footer link in `js/main.js`

## Performance Optimization

### Current Optimizations
- Minimal external dependencies
- Lazy loading for images (via `loading="lazy"`)
- Efficient CSS (no unused styles)
- Compressed images
- CDN-hosted fonts and icons

### Recommended Improvements
1. **Image Optimization**: Convert images to WebP format
2. **Critical CSS**: Inline critical CSS for above-the-fold content
3. **Font Subsetting**: Use only required font weights and characters
4. **Service Worker**: Add offline support with PWA capabilities
5. **Minification**: Minify CSS and JavaScript for production

## SEO Features

### Implemented
- Semantic HTML5 markup
- Meta descriptions on all pages
- Structured data (JSON-LD) for attorney information
- Open Graph tags for social sharing
- Descriptive alt text for images
- Clean URL structure
- Mobile-friendly design
- Fast load times

### Recommendations
- Add XML sitemap
- Implement robots.txt
- Add canonical URLs
- Create blog for content marketing
- Build backlinks from legal directories
- Local SEO optimization (Google Business Profile)

## Accessibility

### WCAG 2.1 Compliance Features
- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast ratios meet AA standards
- Reduced motion support (`prefers-reduced-motion`)
- Screen reader-friendly navigation
- Form labels and error messages

### Testing Recommendations
- Use WAVE browser extension
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Keyboard-only navigation testing
- Color contrast analyzer

## Browser Compatibility

### Tested Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Known Issues
- Backdrop filter may not work in older browsers (graceful degradation)
- CSS Grid not supported in IE11 (consider fallback or drop support)

## Maintenance

### Regular Tasks
- Update attorney biography and credentials
- Add new case results or testimonials
- Update practice area descriptions
- Monitor and respond to contact form submissions
- Check for broken links
- Update copyright year in footer

### Security
- Keep dependencies updated (Lucide icons, Google Fonts)
- Monitor Formspree for spam submissions
- Use HTTPS for all resources
- Implement CSP headers if hosting on custom server

## Contributing

This is a private client website. For authorized contributors:

1. Create a feature branch
2. Make changes
3. Test thoroughly across devices
4. Submit pull request with description
5. Request review before merging

## License

© 2026 The D.F. Katz Law Firm, LLC. All rights reserved.

This website and its content are proprietary. Unauthorized copying, distribution, or use is prohibited.

## Contact & Support

**Website Owner:**
- David F. Katz
- Email: dkatz@dfkatzlawfirm.com
- Phone: 404-918-5707
- Location: Atlanta, Georgia

**Developer:**
- Woodworks Realty Studio
- GitHub: [@woodworksrealtystudio-stack](https://github.com/woodworksrealtystudio-stack)

## Changelog

### Version 1.0.0 (January 2026)
- Initial website launch
- 6 core pages implemented
- Responsive design across all devices
- SEO optimization
- Contact form integration
- Social media integration

---

**Built with care in Atlanta, Georgia** 🍑
