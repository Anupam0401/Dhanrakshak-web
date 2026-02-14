# DhanRakshak Website - Architecture Documentation

## Overview

The DhanRakshak website is a static site built with Astro, Tailwind CSS, and deployed to GitHub Pages. It serves as the official landing page, documentation hub, and privacy policy host for the DhanRakshak Android app.

## Tech Stack

### Core Technologies

- **Astro v5** - Static site generator with zero JS by default
- **Tailwind CSS v4** - Utility-first CSS framework via Vite plugin
- **TypeScript** - Type-safe development
- **Markdown** - Content authoring for Privacy and Terms pages

### Build & Deployment

- **Vite** - Build tool and dev server (via Astro)
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Static hosting

## Project Structure

```
Dhanrakshak-web/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions deployment workflow
├── docs/
│   └── website/
│       ├── ARCHITECTURE.md      # This file
│       ├── DESIGN_GUIDELINES.md
│       ├── DEPLOYMENT.md
│       └── CONTENT_STRATEGY.md
├── public/
│   ├── favicon.svg              # Site favicon
│   ├── robots.txt               # SEO configuration
│   └── og-image.png             # OpenGraph preview image
├── src/
│   ├── assets/
│   │   ├── icons/               # SVG icons converted from Android drawables
│   │   └── screenshots/         # App screenshots
│   ├── components/
│   │   ├── Header.astro         # Site navigation
│   │   ├── Footer.astro         # Site footer
│   │   ├── ThemeToggle.astro    # Dark/light mode toggle
│   │   ├── Hero.astro           # Homepage hero section
│   │   ├── ScreenshotShowcase.astro
│   │   ├── ValueProp.astro      # Value propositions grid
│   │   ├── CTABanner.astro      # Download call-to-action
│   │   └── FeatureCard.astro    # Feature detail card
│   ├── layouts/
│   │   ├── BaseLayout.astro     # HTML shell, SEO meta
│   │   └── ContentLayout.astro  # Markdown pages wrapper
│   ├── pages/
│   │   ├── index.astro          # Home page
│   │   ├── features.astro       # Features page
│   │   ├── privacy.md           # Privacy Policy (Markdown)
│   │   ├── terms.md             # Terms of Use (Markdown)
│   │   └── contact.astro        # Contact page
│   └── styles/
│       └── global.css           # Global styles + Tailwind directives
├── astro.config.mjs             # Astro configuration
├── tailwind.config.mjs          # Tailwind theme configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

## Architecture Decisions

### 1. Astro as Static Site Generator

**Rationale:**
- Zero JavaScript by default (only theme toggle ~20 lines)
- Built-in multi-page routing
- Component-based development
- Excellent SEO and performance
- Native GitHub Pages support

**Alternatives Considered:**
- Plain HTML/CSS - Harder to maintain shared components
- Next.js - Overkill for a static site, larger bundle

### 2. Tailwind CSS via Vite Plugin

**Rationale:**
- Utility-first approach matches the app's design philosophy
- Built-in dark mode support via `class` strategy
- Minimal CSS footprint
- Excellent customization for brand colors

### 3. Local-First Theme Management

**Implementation:**
- Theme preference stored in `localStorage`
- Inline script in `<head>` to prevent flash of unstyled content
- Respects `prefers-color-scheme` as default
- CSS transitions for smooth theme switching

### 4. Component Architecture

**Strategy:**
- Layouts for HTML structure (Base, Content)
- Reusable components for UI patterns (FeatureCard, Hero, etc.)
- Page-level components for routes
- Astro-only components (no React/Vue) to minimize JS

### 5. Asset Management

**Approach:**
- SVG icons converted from Android XML drawables
- Screenshots stored in `src/assets/` for build-time optimization
- Favicon as SVG for scalability
- Lazy loading for images via Astro's `<Image>` component

## Data Flow

```
User Request
    ↓
GitHub Pages (Static Server)
    ↓
index.html (Pre-rendered)
    ↓
Browser Loads HTML + CSS
    ↓
Theme Toggle Script (if interaction)
    ↓
localStorage.setItem('theme')
```

## Build Process

### Development

```bash
npm run dev
# Starts Vite dev server on http://localhost:4321
# Hot module replacement (HMR) enabled
# Live reload on file changes
```

### Production Build

```bash
npm run build
# 1. Astro checks TypeScript types
# 2. Astro builds static HTML/CSS/JS
# 3. Tailwind purges unused CSS
# 4. Assets optimized and hashed
# 5. Output to dist/ directory
```

### Build Output

```
dist/
├── index.html
├── features/index.html
├── privacy/index.html
├── terms/index.html
├── contact/index.html
├── _astro/
│   ├── [hashed-css-files].css
│   └── [hashed-image-files]
├── favicon.svg
└── robots.txt
```

## Performance Optimizations

### Implemented

1. **Zero JavaScript by default** - Only theme toggle (~20 lines)
2. **Lazy loading** - Images load only when in viewport
3. **CSS purging** - Tailwind removes unused styles
4. **Asset hashing** - Cache-busting for assets
5. **Preconnect** - Fonts preconnected for faster loading
6. **Sitemap** - Auto-generated via `@astrojs/sitemap`

### Metrics Target

- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3.0s
- **Lighthouse Score:** > 95

## SEO Strategy

### On-Page SEO

1. **Title tags** - Unique per page, includes brand name
2. **Meta descriptions** - Descriptive, under 160 characters
3. **Canonical URLs** - Prevents duplicate content issues
4. **OpenGraph tags** - Social media preview optimization
5. **Structured data** - JSON-LD for SoftwareApplication
6. **Semantic HTML** - Proper heading hierarchy, landmarks

### Technical SEO

1. **Sitemap** - Auto-generated at `/sitemap-index.xml`
2. **Robots.txt** - Allows all crawlers
3. **Mobile-responsive** - Mobile-first design
4. **Fast loading** - Performance optimizations above
5. **HTTPS** - Enforced by GitHub Pages

## Security

### Implemented Measures

1. **CSP-friendly** - No inline styles (except theme script)
2. **HTTPS only** - GitHub Pages enforces HTTPS
3. **No external scripts** - Fonts only, no analytics
4. **Privacy-first** - No tracking, cookies, or user data collection

## Accessibility

### WCAG 2.1 AA Compliance

1. **Color contrast** - 4.5:1 ratio minimum
2. **Keyboard navigation** - All interactive elements accessible
3. **ARIA labels** - Screen reader support
4. **Semantic HTML** - Proper landmarks and headings
5. **Alt text** - All images have descriptive alt attributes
6. **Focus indicators** - Visible focus states

## Scalability Considerations

### Current Limitations

- Static site (no dynamic content)
- No search functionality
- No user accounts or authentication

### Future Enhancements

- Add search via client-side search (e.g., Pagefind)
- Blog section for app updates
- Changelog page
- FAQ section
- Multi-language support (i18n)

## Maintenance

### Regular Tasks

- Update dependencies monthly
- Monitor broken links
- Refresh screenshots when app UI changes
- Update Privacy Policy/Terms as features evolve
- Monitor Lighthouse scores

### Monitoring

- GitHub Actions build status
- Lighthouse CI (can be added)
- Manual testing on different devices/browsers

## References

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/pages)
