/**
 * Site Configuration
 * 
 * Centralized configuration for the DhanRakshak website.
 * Update these values to customize the site without touching multiple files.
 */

export const siteConfig = {
  // Basic Info
  name: 'DhanRakshak',
  tagline: 'Personal finance, made simple and private',
  description: 'A privacy-first, local-first personal finance tracking app for Android. Track expenses, manage budgets, analyze spending patterns, and plan savings goals — all while keeping your data in your control.',
  
  // URLs
  url: 'https://anupam0401.github.io',
  baseUrl: '/Dhanrakshak-web',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.anupam.dhanrakshak', // TODO: Update with actual Play Store URL
  githubUrl: 'https://github.com/Anupam0401/Dhanrakshak-web',
  githubIssuesUrl: 'https://github.com/Anupam0401/Dhanrakshak-web/issues',
  
  // Contact
  supportEmail: 'dharakshak.app@gmail.com',
  
  // Social/OpenGraph
  ogImage: '/og-image.png',
  twitterHandle: '@dhanrakshak', // Optional: Add if you have a Twitter account
  
  // App Info
  version: 'v1.0.4',
  releaseDate: '2026',
  platform: 'Android',
  
  // Features (for easy updates)
  features: {
    expenseTracking: {
      title: 'Smart Expense Tracking',
      description: 'Record and categorize expenses effortlessly. Add custom categories, attach receipts, and track where every rupee goes.',
    },
    groups: {
      title: 'Groups & Splitwise Sync',
      description: 'View shared expenses with friends, roommates, or family. Seamlessly sync with your existing Splitwise groups.',
    },
    recurring: {
      title: 'Recurring Expense Management',
      description: 'Never miss a subscription or bill payment again. Set up recurring expenses and get timely reminders.',
    },
    analytics: {
      title: 'Smart Analytics & Insights',
      description: 'Understand your spending patterns with beautiful visualizations and category breakdowns.',
    },
    savings: {
      title: 'Savings Goals & Planning',
      description: 'Set financial goals and track your progress with visual progress indicators.',
    },
    cloudSync: {
      title: 'Optional Cloud Sync & Backup',
      description: 'Your data lives on your device by default. Enable secure cloud backup when ready.',
    },
    budgets: {
      title: 'Budget Alerts & Controls',
      description: 'Set monthly budgets and get notified when approaching limits.',
    },
    import: {
      title: 'Secure Bank Statement Import',
      description: 'Import transactions from bank statements (PDF, CSV, Excel) to backfill your expense history.',
    },
  },
  
  // Legal
  lastPrivacyUpdate: 'February 14, 2026',
  lastTermsUpdate: 'February 14, 2026',
  copyrightYear: new Date().getFullYear(),
  companyName: 'DhanRakshak',
  country: 'India',
  
  // Third-party links
  externalLinks: {
    splitwisePrivacy: 'https://www.splitwise.com/privacy',
    splitwiseTerms: 'https://www.splitwise.com/terms',
    googlePrivacy: 'https://policies.google.com/privacy',
    googleTerms: 'https://policies.google.com/terms',
  },
} as const;

// Type-safe config
export type SiteConfig = typeof siteConfig;
