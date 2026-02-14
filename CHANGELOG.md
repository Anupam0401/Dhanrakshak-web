# Changelog

All notable changes to the DhanRakshak website project.

## [Unreleased]

### Added - CI/CD Enhancements
- ✅ **CI Workflow** (`.github/workflows/ci.yml`)
  - Automated PR checks for type-checking, build verification, bundle size
  - Link validation and security audits
  - Automatic PR summary comments
  - Runs on all PRs to main/master/develop branches

- ✅ **Enhanced Deployment Workflow** (`.github/workflows/deploy.yml`)
  - Pre-deployment verification (type check, security audit)
  - Build output validation
  - Deployment statistics logging
  - Better error messages and debugging

- ✅ **Branch Protection Documentation** (`docs/BRANCH_PROTECTION.md`)
  - Recommended branch protection rules
  - PR workflow guidelines
  - Commit message conventions
  - Emergency hotfix procedures

### Added - Configuration Management
- ✅ **Centralized Site Config** (`src/config/site.config.ts`)
  - All site-wide settings in one file
  - Type-safe configuration
  - Easy to update email, URLs, app info, etc.
  - Full TypeScript support with autocomplete

- ✅ **Configuration Guide** (`docs/CONFIGURATION.md`)
  - How to use and update site config
  - Common update scenarios
  - Migration guide from hardcoded values
  - Troubleshooting tips

### Changed
- ✅ **Updated Components to Use Config**
  - `Header.astro` - Uses `siteConfig.name`, `siteConfig.githubUrl`
  - `Footer.astro` - Uses config for name, tagline, version, copyright
  - `Hero.astro` - Uses config for name, tagline, description
  - `Contact.astro` - Uses config for email and GitHub URLs
  - All hardcoded values replaced with config references

- ✅ **Enhanced README**
  - Added CI/CD section
  - Added configuration section
  - Updated documentation links
  - Added performance targets with bundle size

### Removed
- ✅ **Deleted `res/` Folder**
  - Removed Android XML vector drawables (no longer needed)
  - All icons already converted to web SVGs in `src/assets/icons/`
  - Cleaned up unused assets

## [1.0.0] - 2026-02-14

### Initial Release
- ✅ Complete static website built with Astro + Tailwind CSS
- ✅ 5 pages: Home, Features, Privacy, Terms, Contact
- ✅ Dark/light mode with theme toggle
- ✅ SEO optimized with meta tags and sitemap
- ✅ Mobile-first responsive design
- ✅ GitHub Pages deployment workflow
- ✅ Comprehensive documentation

---

## Migration Notes

### For Developers

**No breaking changes.** All updates are enhancements:

1. **CI/CD**: PRs will now run automated checks
2. **Config**: Update `src/config/site.config.ts` instead of editing multiple files
3. **Folder**: `res/` folder removed (icons already converted)

### Update Your Local Environment

```bash
# Pull latest changes
git pull origin main

# Install any new dependencies (if added)
npm install

# Rebuild
npm run build
```

### Recommended GitHub Settings

Enable branch protection for `main`:
1. Go to Settings → Branches → Add rule
2. Branch name pattern: `main`
3. Require PR before merging
4. Require status checks: Type Check, Build Verification
5. See `docs/BRANCH_PROTECTION.md` for full setup

---

## Future Enhancements

### Planned
- [ ] Add Prettier for code formatting
- [ ] Add ESLint for code linting
- [ ] Add automated Lighthouse CI checks
- [ ] Add visual regression testing
- [ ] Add search functionality (Pagefind)
- [ ] Add blog section for updates
- [ ] Multi-language support (i18n)

### Under Consideration
- [ ] Add analytics (privacy-friendly)
- [ ] Add RSS feed for blog
- [ ] Add FAQ section
- [ ] Add changelog page on website
- [ ] Add contributor graph

---

## Notes

- All CI checks must pass before merging to main
- Update `siteConfig.lastPrivacyUpdate` when privacy policy changes
- Update `siteConfig.lastTermsUpdate` when terms change
- Bump `siteConfig.version` for releases
