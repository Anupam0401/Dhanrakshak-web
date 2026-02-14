# DhanRakshak Website - Design Guidelines

## Design Philosophy

The DhanRakshak website follows the same design philosophy as the app:

- **Privacy-first** - No tracking, no cookies, no analytics
- **Clean and minimal** - Focus on content, not clutter
- **Professional** - Finance-grade trust and credibility
- **Accessible** - WCAG 2.1 AA compliant
- **Performant** - Fast loading, minimal JavaScript

## Color Palette

### Dark Mode (Default)

#### Background Colors
```css
--bg-dark: #0F1115          /* Main background */
--surface-dark: #1A1E24     /* Cards, panels */
```

#### Text Colors
```css
--text-dark-primary: #E6EAF0     /* Headings, primary text */
--text-dark-secondary: #9AA3B2   /* Supporting text, captions */
```

#### Brand Colors
```css
--primary: #2F4FA3          /* Primary blue (buttons, links) */
--accent: #6E95FF           /* Accent blue (highlights, focus) */
```

#### Semantic Colors
```css
--success: #4EC28A          /* Success states */
--warning: #E6B85C          /* Warning states */
--error: #D26A6A            /* Error states */
```

#### Gradients
```css
--hero-gradient: linear-gradient(135deg, #2F4FA3, #6E95FF)
--logo-gradient: linear-gradient(135deg, #1E3A8A, #2563EB)
```

### Light Mode

#### Background Colors
```css
--bg-light: #F5F7FA         /* Main background */
--surface-light: #FFFFFF    /* Cards, panels */
```

#### Text Colors
```css
--text-light-primary: #1A1E24     /* Headings, primary text */
--text-light-secondary: #5A6577   /* Supporting text, captions */
```

#### Brand Colors (Same as Dark)
```css
--primary: #2F4FA3
--accent-light: #3B6CD4     /* Slightly darker for better contrast */
```

### Usage Guidelines

- **Primary color** - CTAs, links, important actions
- **Accent color** - Hover states, focus indicators, highlights
- **Success color** - Positive feedback, completion states
- **Warning color** - Caution, important notices
- **Error color** - Error messages, destructive actions

## Typography

### Font Family

**Primary:** Inter (Google Fonts)
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Fallback:** system-ui, -apple-system, sans-serif

### Type Scale

```
Heading 1 (h1):  4xl-5xl (2.25rem-3rem)    - Hero titles
Heading 2 (h2):  3xl-4xl (1.875rem-2.25rem) - Section titles
Heading 3 (h3):  2xl-3xl (1.5rem-1.875rem)  - Card titles
Heading 4 (h4):  xl-2xl (1.25rem-1.5rem)    - Subsection titles
Body Large:      lg-xl (1.125rem-1.25rem)   - Lead paragraphs
Body:            base (1rem)                 - Default text
Body Small:      sm (0.875rem)               - Captions, labels
```

### Font Weights

- **Headings:** 700 (Bold) or 600 (Semibold)
- **Body text:** 400 (Regular)
- **Emphasis:** 500 (Medium)
- **Strong emphasis:** 600 (Semibold)

### Line Height

- **Headings:** 1.2-1.3
- **Body text:** 1.5-1.75
- **Captions:** 1.5

## Spacing System

Tailwind's default spacing scale (4px base unit):

```
0.5  → 2px    (tight spacing)
1    → 4px
2    → 8px    (small spacing)
3    → 12px
4    → 16px   (medium spacing)
6    → 24px   (large spacing)
8    → 32px
12   → 48px   (section spacing)
16   → 64px
20   → 80px   (page section spacing)
```

### Usage

- **Component padding:** 4-6 (16-24px)
- **Card padding:** 6-8 (24-32px)
- **Section padding:** 12-20 (48-80px)
- **Element gaps:** 2-4 (8-16px)

## Layout

### Container Widths

```css
max-w-4xl:  56rem (896px)    - Content pages (Privacy, Terms)
max-w-6xl:  72rem (1152px)   - Feature sections
max-w-7xl:  80rem (1280px)   - Homepage sections, header/footer
```

### Breakpoints (Tailwind defaults)

```css
sm:  640px   - Small tablets
md:  768px   - Tablets
lg:  1024px  - Laptops
xl:  1280px  - Desktops
2xl: 1536px  - Large desktops
```

### Grid Systems

**2-column grid (Features):**
```css
grid-cols-1 md:grid-cols-2
gap-8
```

**3-column grid (Value Props):**
```css
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
gap-8
```

## Components

### Buttons

#### Primary Button (CTA)
```css
px-8 py-4
bg-hero-gradient
text-white
font-semibold
rounded-lg
shadow-lg hover:shadow-xl
transform hover:scale-105
transition-all duration-200
```

#### Secondary Button
```css
px-8 py-4
dark:bg-dark-surface light:bg-light-surface
dark:text-dark-text-primary light:text-light-text-primary
font-semibold
rounded-lg
border-2 dark:border-dark-surface light:border-light-text-secondary/30
dark:hover:border-accent light:hover:border-primary
transition-all duration-200
```

### Cards

```css
p-6 rounded-2xl
dark:bg-dark-surface light:bg-light-surface
border dark:border-dark-surface light:border-light-text-secondary/20
hover:shadow-xl
dark:hover:border-accent/50 light:hover:border-primary/50
transition-all duration-300
```

### Links

```css
text-accent dark:text-accent light:text-primary
hover:underline
transition-colors duration-200
```

### Input Fields (if needed)

```css
px-4 py-3
rounded-lg
dark:bg-dark-surface light:bg-light-surface
dark:text-dark-text-primary light:text-light-text-primary
border dark:border-dark-surface light:border-light-text-secondary/30
focus:outline-none
focus:ring-2 focus:ring-accent
transition-all duration-200
```

## Icons

### Icon Style

- **Type:** Line-based, 2px stroke
- **Size:** 24x24px standard, 16x16px small
- **Color:** Inherits from `currentColor`

### Icon Sources

- Custom SVGs converted from Android drawables
- Heroicons for additional UI icons (if needed)

### Usage

```html
<!-- Icon with proper sizing and color -->
<img src="/icons/shield-icon.svg" 
     alt="Privacy" 
     class="w-6 h-6 text-accent" />
```

## Imagery

### Screenshots

- **Aspect ratio:** 9:19.5 (phone mockup)
- **Device frame:** CSS-only, dark gradient background
- **Lazy loading:** Always enabled
- **Border radius:** 1.5-2rem for mockups

### Logo

- **Format:** SVG (scalable)
- **Background:** Logo gradient (#1E3A8A to #2563EB)
- **Usage:** Header (40px), Hero (96-128px), Favicon (any)

### OpenGraph Image

- **Dimensions:** 1200x630px
- **Format:** PNG or JPG
- **Content:** Logo + App name + Tagline + Gradient background
- **File size:** < 1MB

## Animation & Transitions

### Transition Durations

```css
--transition-speed: 200ms   (theme switching, hover states)
duration-200                (quick interactions)
duration-300                (cards, shadows)
```

### Hover Effects

- **Buttons:** `transform hover:scale-105`
- **Cards:** `hover:shadow-xl`, border color change
- **Links:** `hover:underline`

### Theme Switching

```css
.theme-transition * {
  transition: background-color 200ms ease,
              color 200ms ease,
              border-color 200ms ease;
}
```

## Accessibility

### Color Contrast

- **WCAG AA minimum:** 4.5:1 for normal text
- **WCAG AAA preferred:** 7:1 for normal text
- **Large text (18pt+):** 3:1 minimum

### Focus States

- **Outline:** 2px ring in accent color
- **Offset:** 2px from element

```css
focus:outline-none
focus:ring-2
focus:ring-accent
focus:ring-offset-2
```

### Interactive Elements

- **Minimum size:** 44x44px (touch targets)
- **Keyboard navigation:** Full support
- **Screen readers:** Proper ARIA labels

## Responsive Design

### Mobile-First Approach

- Design for mobile first (320px+)
- Progressive enhancement for larger screens
- Touch-friendly interactions (44px minimum)

### Breakpoint Strategy

```
Mobile:       < 640px   (single column, stacked)
Tablet:       640-1024px (2 columns, condensed nav)
Desktop:      > 1024px  (3 columns, full nav)
```

## Brand Voice (Visual)

- **Professional** - Finance-grade UI, not playful
- **Trustworthy** - Consistent, clear hierarchy
- **Minimal** - No visual clutter, focus on content
- **Modern** - Contemporary design patterns, subtle animations

## Don'ts

❌ **Don't:**
- Use gradients excessively (only hero/logo)
- Add unnecessary animations
- Use more than 3 font weights
- Create complex layouts
- Use stock photos or generic imagery
- Add social media pixel trackers
- Use non-brand colors
- Create deep nesting (> 3 levels)

## File Naming Conventions

### Components
- PascalCase: `FeatureCard.astro`, `ThemeToggle.astro`

### Pages
- lowercase: `index.astro`, `features.astro`, `privacy.md`

### Assets
- kebab-case: `logo.svg`, `analytics-icon.svg`, `hero-gradient.css`

## References

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Inter Font Specimen](https://rsms.me/inter/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
