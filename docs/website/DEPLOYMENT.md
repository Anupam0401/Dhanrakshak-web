# DhanRakshak Website - Deployment Guide

## Overview

The DhanRakshak website is deployed to GitHub Pages using GitHub Actions for continuous deployment. Every push to the `main` branch triggers an automatic build and deployment.

## Prerequisites

- GitHub account with repository access
- Node.js 20+ installed locally (for development)
- Git installed locally

## GitHub Pages Setup

### 1. Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under "Build and deployment":
   - **Source:** GitHub Actions
3. Save changes

That's it! GitHub Actions will handle the build and deployment automatically.

### 2. Configure Repository Settings

The `astro.config.mjs` file is already configured with:

```javascript
export default defineConfig({
  site: 'https://anupam0401.github.io',
  base: '/Dhanrakshak-web',
  // ...
});
```

**Important:** If you fork or rename the repository, update these values:
- `site`: Your GitHub Pages domain
- `base`: Your repository name (must start with `/`)

## Deployment Workflow

### Automatic Deployment (Recommended)

Every push to `main` triggers deployment:

```bash
# Make changes to the site
git add .
git commit -m "Update homepage copy"
git push origin main

# GitHub Actions automatically:
# 1. Checks out code
# 2. Installs dependencies
# 3. Builds the site
# 4. Deploys to GitHub Pages
```

### Manual Deployment

You can also trigger deployment manually:

1. Go to **Actions** tab in GitHub
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow" → "Run workflow"

### Build Status

Check deployment status at:
```
https://github.com/Anupam0401/Dhanrakshak-web/actions
```

## Local Development

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/Anupam0401/Dhanrakshak-web.git
cd Dhanrakshak-web

# Install dependencies
npm install
```

### Development Server

```bash
# Start dev server (http://localhost:4321)
npm run dev

# The site will hot-reload as you make changes
```

### Preview Production Build

```bash
# Build for production
npm run build

# Preview the build
npm run preview

# Open http://localhost:4321 to see production build
```

### Type Checking

```bash
# Run Astro type checking
npx astro check
```

## Build Configuration

### Environment Variables

Currently, no environment variables are needed. The site is fully static.

If you need to add environment variables in the future:

1. Create `.env` file locally (never commit this)
2. Add secrets to GitHub: **Settings** → **Secrets and variables** → **Actions**
3. Reference in `.github/workflows/deploy.yml`:

```yaml
env:
  MY_SECRET: ${{ secrets.MY_SECRET }}
```

### Build Commands

```json
{
  "scripts": {
    "dev": "astro dev",           // Development server
    "build": "astro check && astro build",  // Production build
    "preview": "astro preview",   // Preview production build
    "astro": "astro"              // Run Astro CLI
  }
}
```

## Deployment Process Details

### GitHub Actions Workflow

Located at `.github/workflows/deploy.yml`:

```yaml
1. Trigger: Push to main OR manual dispatch
2. Build Job:
   - Checkout code
   - Setup Node.js 20
   - Install dependencies (npm ci)
   - Build site (npm run build)
   - Upload artifact (dist/ directory)
3. Deploy Job:
   - Deploy artifact to GitHub Pages
   - Update live site
```

### Build Output

The build creates a `dist/` directory with:

```
dist/
├── index.html              # Home page
├── features/index.html     # Features page
├── privacy/index.html      # Privacy policy
├── terms/index.html        # Terms of use
├── contact/index.html      # Contact page
├── _astro/                 # Hashed CSS and assets
├── favicon.svg
├── robots.txt
└── sitemap-index.xml       # Auto-generated sitemap
```

### Deployment Time

- **Build time:** ~1-2 minutes
- **Deployment time:** ~30 seconds
- **Total:** ~2-3 minutes from push to live

## Custom Domain (Optional)

To use a custom domain (e.g., `dhanrakshak.app`):

### 1. Configure DNS

Add DNS records at your domain registrar:

```
Type: CNAME
Name: www
Value: anupam0401.github.io
```

or for apex domain:

```
Type: A
Name: @
Values:
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
```

### 2. Update Repository Settings

1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter: `dhanrakshak.app`
3. Check "Enforce HTTPS"
4. Save

### 3. Update Astro Config

Update `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://dhanrakshak.app',  // Your custom domain
  base: '/',                         // Root path
  // ...
});
```

### 4. Add CNAME File

Create `public/CNAME` with:

```
dhanrakshak.app
```

## Troubleshooting

### Build Fails

**Issue:** GitHub Actions build fails

**Solutions:**
1. Check Actions logs for error details
2. Run `npm run build` locally to reproduce
3. Verify all dependencies are in `package.json`
4. Check for TypeScript errors with `npx astro check`

### 404 Errors

**Issue:** Pages return 404 after deployment

**Solutions:**
1. Verify `base` config in `astro.config.mjs` matches repo name
2. Check file paths are correct (case-sensitive)
3. Ensure `index.html` exists in each route folder

### Styles Not Loading

**Issue:** CSS not loading, site looks unstyled

**Solutions:**
1. Clear browser cache
2. Verify Tailwind config is correct
3. Check `_astro/` folder exists in deployed site
4. Ensure `global.css` imports are correct

### Images Not Loading

**Issue:** Images show broken links

**Solutions:**
1. Check image paths are correct
2. Verify images are in `public/` or `src/assets/`
3. For `src/assets/`, use Astro's `<Image>` component
4. Ensure image files are committed to git

### Dark Mode Not Working

**Issue:** Theme toggle doesn't work

**Solutions:**
1. Verify theme script in `BaseLayout.astro` is inline
2. Check localStorage is enabled in browser
3. Clear localStorage and reload
4. Verify `dark` class toggle on `<html>` element

## Monitoring & Maintenance

### Check Deployment Status

```bash
# View recent deployments
gh run list --workflow=deploy.yml

# View specific run logs
gh run view [run-id]
```

### Update Dependencies

```bash
# Check for outdated packages
npm outdated

# Update all dependencies
npm update

# Update specific package
npm install astro@latest
```

### Performance Monitoring

Use Lighthouse to check performance:

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse https://anupam0401.github.io/Dhanrakshak-web \
  --view \
  --preset=desktop
```

Target scores:
- **Performance:** > 95
- **Accessibility:** > 95
- **Best Practices:** > 95
- **SEO:** > 95

## Rollback Procedure

If a deployment breaks the site:

### Option 1: Revert Last Commit

```bash
# Revert the problematic commit
git revert HEAD

# Push to trigger new deployment
git push origin main
```

### Option 2: Redeploy Previous Commit

```bash
# Reset to previous commit
git reset --hard HEAD~1

# Force push (use with caution)
git push origin main --force
```

### Option 3: Manual Rollback via GitHub

1. Go to **Actions** tab
2. Find successful previous deployment
3. Click "Re-run jobs"

## Security Considerations

### HTTPS

- GitHub Pages enforces HTTPS automatically
- Custom domains support HTTPS via Let's Encrypt

### Content Security Policy

No CSP is set currently. To add CSP headers, create a `_headers` file (if supported by GitHub Pages) or use a proxy/CDN.

### Dependencies

- Run `npm audit` regularly
- Update dependencies monthly
- Use `npm ci` in production (GitHub Actions already does this)

## Backup & Recovery

### Repository Backup

The entire site is version-controlled in Git. To backup:

```bash
# Clone to local machine
git clone https://github.com/Anupam0401/Dhanrakshak-web.git

# Create archive
tar -czf dhanrakshak-web-backup.tar.gz Dhanrakshak-web/
```

### Deployment History

GitHub Actions keeps logs of all deployments:
- View at: `https://github.com/Anupam0401/Dhanrakshak-web/actions`
- Logs retained for 90 days

## Resources

- [GitHub Pages Documentation](https://docs.github.com/pages)
- [GitHub Actions Documentation](https://docs.github.com/actions)
- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/github/)
- [Troubleshooting GitHub Pages](https://docs.github.com/pages/setting-up-a-github-pages-site-with-jekyll/troubleshooting-jekyll-build-errors-for-github-pages-sites)
