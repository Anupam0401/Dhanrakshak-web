# Configuration Guide

## Overview

The DhanRakshak website uses a centralized configuration file to manage all site-wide settings. This makes it easy to update information without touching multiple files.

## Configuration File

**Location:** `src/config/site.config.ts`

This TypeScript file contains all configurable site settings with full type safety.

## Available Configuration Options

### Basic Information

```typescript
{
  name: 'DhanRakshak',              // App name
  tagline: 'Personal finance...',   // One-line tagline
  description: 'A privacy-first...', // Full description for SEO
}
```

**Used in:**
- Page titles
- Hero section
- Footer
- Meta descriptions

### URLs

```typescript
{
  url: 'https://anupam0401.github.io',        // Base domain
  baseUrl: '/Dhanrakshak-web',                // Repository path
  playStoreUrl: 'https://play.google.com...',  // Play Store link
  githubUrl: 'https://github.com/...',         // GitHub repo
  githubIssuesUrl: 'https://github.com/.../issues',
}
```

**Used in:**
- CTAs (Download buttons)
- Footer links
- Contact page
- Header navigation

### Contact Information

```typescript
{
  supportEmail: 'dharakshak.app@gmail.com',
}
```

**Used in:**
- Contact page
- Footer
- Privacy Policy
- Terms of Use

### Social/SEO

```typescript
{
  ogImage: '/og-image.png',           // OpenGraph preview image
  twitterHandle: '@dhanrakshak',      // Optional Twitter handle
}
```

**Used in:**
- Meta tags
- Social media sharing

### App Information

```typescript
{
  version: 'v1.0.0',
  releaseDate: '2026',
  platform: 'Android',
}
```

**Used in:**
- Footer version display
- About sections

### Features

```typescript
{
  features: {
    expenseTracking: {
      title: 'Smart Expense Tracking',
      description: 'Record and categorize...',
    },
    // ... more features
  }
}
```

**Used in:**
- Features page
- Home page value propositions

### Legal Information

```typescript
{
  lastPrivacyUpdate: 'February 14, 2026',
  lastTermsUpdate: 'February 14, 2026',
  copyrightYear: new Date().getFullYear(),
  companyName: 'DhanRakshak',
  country: 'India',
}
```

**Used in:**
- Privacy Policy
- Terms of Use
- Footer copyright

### Third-Party Links

```typescript
{
  externalLinks: {
    splitwisePrivacy: 'https://www.splitwise.com/privacy',
    splitwiseTerms: 'https://www.splitwise.com/terms',
    googlePrivacy: 'https://policies.google.com/privacy',
    googleTerms: 'https://policies.google.com/terms',
  }
}
```

**Used in:**
- Privacy Policy
- Terms of Use

## How to Update Configuration

### 1. Edit the Config File

Open `src/config/site.config.ts` and update the desired values:

```typescript
export const siteConfig = {
  // Update your support email
  supportEmail: 'hello@yourapp.com',
  
  // Update Play Store URL when available
  playStoreUrl: 'https://play.google.com/store/apps/details?id=...',
  
  // Update version
  version: 'v1.1.0',
} as const;
```

### 2. Build & Test

```bash
# Test locally
npm run dev

# Verify build
npm run build

# Check for type errors
npx astro check
```

### 3. Commit Changes

```bash
git add src/config/site.config.ts
git commit -m "chore: update site configuration"
git push
```

## Using Config in Components

### Import the Config

```typescript
---
import { siteConfig } from '../config/site.config';
---
```

### Access Properties

```astro
<h1>{siteConfig.name}</h1>
<p>{siteConfig.tagline}</p>
<a href={siteConfig.githubUrl}>GitHub</a>
<a href={`mailto:${siteConfig.supportEmail}`}>Contact</a>
```

### Type Safety

The config is fully typed, so you'll get autocomplete and type checking:

```typescript
// ✅ Valid - types are inferred
const name = siteConfig.name;  // string

// ❌ Invalid - TypeScript will error
const invalid = siteConfig.nonExistent;  // Error: Property doesn't exist
```

## Common Update Scenarios

### Updating Play Store Link

**When:** App is published to Play Store

```typescript
// src/config/site.config.ts
playStoreUrl: 'https://play.google.com/store/apps/details?id=com.yourapp.dhanrakshak',
```

Files automatically updated:
- Hero CTA button
- Features page CTA
- Footer links

### Updating Support Email

**When:** Changing support contact

```typescript
// src/config/site.config.ts
supportEmail: 'your-new-email@example.com',
```

Files automatically updated:
- Contact page
- Privacy Policy
- Terms of Use
- Footer

### Updating Version

**When:** Releasing new version

```typescript
// src/config/site.config.ts
version: 'v1.2.0',
```

Files automatically updated:
- Footer version display

### Adding New Features

**When:** Adding new app features

```typescript
// src/config/site.config.ts
features: {
  // ... existing features
  newFeature: {
    title: 'AI Insights',
    description: 'Get personalized financial insights powered by AI',
  },
}
```

Then update `src/pages/features.astro` to display the new feature.

### Updating Legal Dates

**When:** Privacy Policy or Terms are updated

```typescript
// src/config/site.config.ts
lastPrivacyUpdate: 'March 15, 2026',
lastTermsUpdate: 'March 15, 2026',
```

Files automatically updated:
- Privacy Policy header
- Terms of Use header

## Configuration Best Practices

### DO:
- ✅ Update config file instead of hardcoding values
- ✅ Use descriptive property names
- ✅ Keep URLs without trailing slashes
- ✅ Update legal dates when policies change
- ✅ Test after config changes
- ✅ Commit config changes with descriptive messages

### DON'T:
- ❌ Hardcode values in components
- ❌ Add sensitive data (API keys, secrets)
- ❌ Break type safety by using `any`
- ❌ Forget to update legal dates
- ❌ Deploy without testing config changes

## Migration Guide

If you have hardcoded values in existing components:

### Before (Hardcoded):
```astro
<h1>DhanRakshak</h1>
<a href="mailto:dharakshak.app@gmail.com">Contact</a>
```

### After (Using Config):
```astro
---
import { siteConfig } from '../config/site.config';
---

<h1>{siteConfig.name}</h1>
<a href={`mailto:${siteConfig.supportEmail}`}>Contact</a>
```

## Environment Variables (Advanced)

For secrets or environment-specific values, use Astro's environment variables:

### 1. Create `.env` file (don't commit!)

```bash
# .env
PUBLIC_ANALYTICS_ID=G-XXXXXXXXXX
SECRET_API_KEY=secret123
```

### 2. Use in Astro

```typescript
// Access public env vars in any file
const analyticsId = import.meta.env.PUBLIC_ANALYTICS_ID;

// Access private env vars only in server-side code
const apiKey = import.meta.env.SECRET_API_KEY;
```

### 3. Add to `.gitignore`

```
.env
.env.local
.env.production
```

**Note:** Environment variables are NOT needed for the current setup. The config file handles everything.

## Troubleshooting

### Changes Not Appearing

**Problem:** Updated config but changes don't show

**Solution:**
```bash
# Clear cache and rebuild
rm -rf dist/ .astro/
npm run build
```

### Type Errors After Update

**Problem:** TypeScript errors after config changes

**Solution:**
```bash
# Check types
npx astro check

# Fix errors based on output
```

### Config Import Errors

**Problem:** Can't import config in component

**Solution:**
```typescript
// ✅ Correct import path (adjust based on file location)
import { siteConfig } from '../config/site.config';

// ❌ Wrong - missing extension in some setups
import { siteConfig } from '../config/site.config.ts';
```

## Resources

- [Astro Configuration](https://docs.astro.build/en/guides/configuring-astro/)
- [TypeScript in Astro](https://docs.astro.build/en/guides/typescript/)
- [Environment Variables](https://docs.astro.build/en/guides/environment-variables/)
