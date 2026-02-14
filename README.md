# DhanRakshak Website

Official website for DhanRakshak - a privacy-first, local-first personal finance tracking app for Android.

🌐 **Live Site:** [https://anupam0401.github.io/Dhanrakshak-web](https://anupam0401.github.io/Dhanrakshak-web)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:4321
```

## 📦 What's Included

- **Home Page** - App introduction, features overview, download CTAs
- **Features Page** - Detailed feature explanations with screenshots
- **Privacy Policy** - Comprehensive privacy documentation
- **Terms of Use** - Legal terms and conditions
- **Contact Page** - Support and feedback channels

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **GitHub Pages** - Static hosting with automatic deployment

## 📁 Project Structure

```
Dhanrakshak-web/
├── src/
│   ├── assets/          # Icons and screenshots
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   └── styles/          # Global styles
├── public/              # Static assets (favicon, robots.txt)
├── docs/website/        # Documentation
└── .github/workflows/   # GitHub Actions deployment
```

## 🎨 Key Features

- ✅ **Zero JavaScript by default** - Only ~20 lines for theme toggle
- ✅ **Dark/Light mode** - Respects system preference, manual toggle
- ✅ **SEO optimized** - Meta tags, sitemap, structured data
- ✅ **Mobile-first** - Responsive design, touch-friendly
- ✅ **Fast loading** - Optimized assets, lazy loading
- ✅ **Accessible** - WCAG 2.1 AA compliant

## 🧪 Development

### Available Commands

```bash
npm run dev       # Start dev server (http://localhost:4321)
npm run build     # Build for production
npm run preview   # Preview production build
npx astro check   # Type check
```

### Making Changes

1. **Edit content** - Update pages in `src/pages/`
2. **Update styles** - Modify `tailwind.config.mjs` or `src/styles/global.css`
3. **Add components** - Create new components in `src/components/`
4. **Test locally** - Run `npm run dev` and verify changes
5. **Commit & push** - GitHub Actions will auto-deploy to `main` branch

## 📚 Documentation

Comprehensive documentation is available in `docs/`:

**Website Documentation** (`docs/website/`):
- **[ARCHITECTURE.md](docs/website/ARCHITECTURE.md)** - Technical architecture and design decisions
- **[DESIGN_GUIDELINES.md](docs/website/DESIGN_GUIDELINES.md)** - Color palette, typography, component patterns
- **[DEPLOYMENT.md](docs/website/DEPLOYMENT.md)** - Deployment process and troubleshooting
- **[CONTENT_STRATEGY.md](docs/website/CONTENT_STRATEGY.md)** - Writing guidelines and content standards

**Repository Documentation** (`docs/`):
- **[CONFIGURATION.md](docs/CONFIGURATION.md)** - Site configuration guide
- **[BRANCH_PROTECTION.md](docs/BRANCH_PROTECTION.md)** - Branch protection rules and PR workflow

## 🚢 Deployment & CI/CD

### Automated Deployment

The site auto-deploys to GitHub Pages on every push to `main`:

1. **Push to main** → GitHub Actions triggered
2. **Pre-deployment checks** → Type checking, security audit
3. **Build site** → Astro generates static HTML/CSS
4. **Verify build** → Ensure all pages generated correctly
5. **Deploy** → Site live at [anupam0401.github.io/Dhanrakshak-web](https://anupam0401.github.io/Dhanrakshak-web)

Total time: ~3-4 minutes

### Pull Request Checks

Every PR automatically runs:
- ✅ TypeScript type checking
- ✅ Build verification
- ✅ Bundle size check
- ✅ Link validation
- ✅ Security audit

See [DEPLOYMENT.md](docs/website/DEPLOYMENT.md) and [BRANCH_PROTECTION.md](docs/BRANCH_PROTECTION.md) for details.

## 🎯 Performance Targets

- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Lighthouse Score:** > 95 (all categories)
- **Bundle Size:** < 5MB

## ⚙️ Configuration

Site-wide settings are managed in `src/config/site.config.ts`:

```typescript
{
  name: 'DhanRakshak',
  supportEmail: 'dharakshak.app@gmail.com',
  playStoreUrl: 'https://play.google.com/store',
  // ... more settings
}
```

Update this file to change app name, contact info, URLs, etc. See [CONFIGURATION.md](docs/CONFIGURATION.md) for details.

## 🔒 Privacy

This website:
- ❌ No analytics or tracking
- ❌ No cookies
- ❌ No third-party scripts (except Google Fonts)
- ✅ Respects Do Not Track
- ✅ HTTPS enforced

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test locally (`npm run build && npm run preview`)
5. Run type check (`npx astro check`)
6. Commit your changes (`git commit -m 'feat: add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

**Note:** All PRs must pass CI checks before merging. See [BRANCH_PROTECTION.md](docs/BRANCH_PROTECTION.md) for details.

## 📄 License

This website is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email:** [dharakshak.app@gmail.com](mailto:dharakshak.app@gmail.com)
- **Issues:** [GitHub Issues](https://github.com/Anupam0401/Dhanrakshak-web/issues)

## 🙏 Acknowledgments

- **Astro** - Amazing static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **Inter** - Beautiful open-source font by Rasmus Andersson

---

Made with ❤️ in India
