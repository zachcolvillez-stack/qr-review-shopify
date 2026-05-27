# QR Review Co. — Shopify Theme

A minimal, premium, conversion-focused Shopify theme for a Google Review QR code business. Built from scratch with native Shopify sections and zero third-party app dependencies.

Inspired by Apple / Stripe / Linear / Notion — white-dominant, generous spacing, modern typography, subtle animations only.

---

## What's inside

```
qr-review-shopify/
├── assets/
│   ├── base.css            # Single stylesheet, system-driven
│   └── global.js           # Fade-ins, mobile menu, sticky CTA, variant selector
├── config/
│   ├── settings_schema.json
│   └── settings_data.json
├── layout/
│   └── theme.liquid        # Document shell + font preload
├── locales/
│   └── en.default.json
├── sections/
│   ├── announcement-bar.liquid
│   ├── header.liquid              + header-group.json
│   ├── footer.liquid              + footer-group.json
│   ├── hero.liquid                # Headline, CTAs, trust line, sticky mobile CTA
│   ├── logo-bar.liquid            # "Trusted by..."
│   ├── how-it-works.liquid        # 3-step explainer
│   ├── benefits.liquid            # 4-up icon grid
│   ├── featured-products.liquid   # Two product cards
│   ├── product-showcase.liquid    # Alternating image-with-text
│   ├── testimonials.liquid        # 3 review cards
│   ├── faq.liquid                 # Native <details> accordion
│   ├── final-cta.liquid           # Dark closer
│   ├── main-product.liquid        # PDP with variants + trust block
│   ├── main-collection.liquid
│   ├── main-cart.liquid
│   ├── main-page.liquid
│   └── main-404.liquid
├── snippets/
│   └── meta-tags.liquid
└── templates/
    ├── index.json
    ├── product.json
    ├── collection.json
    ├── cart.json
    ├── page.json
    └── 404.json
```

## Design system

| Token | Value |
|---|---|
| Background | `#FFFFFF` |
| Surface | `#FAFAF7` |
| Ink | `#0A0A0A` |
| Muted | `#6B7280` |
| Border | `#ECECEC` |
| Font | Inter (400/500/600/700) |
| Container | 1200px / 920px narrow |
| Section padding | 80px mobile, 120px desktop |
| Buttons | Pill, 150ms hover, no scale |
| Animations | 400ms fade-in on scroll, `prefers-reduced-motion` respected |

All colors are themeable via **Shopify Admin → Customize → Theme settings → Colors**.

## Homepage section order

The default `templates/index.json` renders, top-to-bottom:

1. **Hero** — headline, two CTAs, trust line, hero image
2. **Logo bar** — "Trusted by local businesses across Australia"
3. **How it works** — 3 steps
4. **Featured products** — QR Cards + QR Stickers
5. **Benefits** — 4-up grid (More reviews · Set and forget · Looks the part · Made in Australia)
6. **Showcase (cards)** — image-left + bullet list
7. **Showcase (stickers)** — image-right + bullet list
8. **Testimonials** — 3 review cards
9. **FAQ** — 5 questions, native accordion
10. **Final CTA** — dark, single button

Every section is reorderable, editable, and removable from the Shopify theme editor.

## Setup

### 1. Install Shopify CLI

```powershell
npm install -g @shopify/cli @shopify/theme
```

### 2. Connect to your store

```powershell
cd qr-review-shopify
shopify theme dev --store=your-store.myshopify.com
```

This opens a live preview at `http://127.0.0.1:9292` with hot-reload.

### 3. Push to the store as an unpublished theme

```powershell
shopify theme push --unpublished
```

Then in Shopify Admin → Online Store → Themes → "Customize" the new theme to preview before publishing.

### 4. Required navigation menus

Create these in **Shopify Admin → Online Store → Navigation**:

- `Main menu` (handle: `main-menu`) — used in header
- `Footer menu` (handle: `footer`) — used in footer columns

### 5. Required products

Create two products:

- **QR Review Cards** — variants for pack sizes (10, 25, 50, 100)
- **QR Review Stickers** — variants for sizes / pack quantities

Then in the theme editor, attach each product to the corresponding Featured Products card.

### 6. Capture the Google review link at checkout

The simplest, app-free approach:

- Shopify Admin → Settings → Checkout → Customer information → "Add a note to your order" — enabled.
- In the order confirmation email template, add a request: *"Reply to this email with your Google review link and (optional) logo."*

For a smoother flow later, swap to a Shopify Checkout UI Extension or a single Klaviyo flow that asks for the link 30 seconds after purchase.

## Performance

- **Single CSS file**, no `theme.scss.liquid` bloat
- **One JS file**, `defer` loaded, ~2KB minified
- **Inter from Google Fonts**, preloaded, `font-display: swap`
- **All product images** use `image_url` with responsive `widths` and `sizes`
- **Hero image** uses `loading: eager` + `fetchpriority: high`; all others lazy-load
- **No third-party apps** required

Target Lighthouse mobile: 90+ performance, 100 accessibility.

## Conversion features built in

- One primary CTA per section, never two equal-weight buttons
- Trust line under hero CTA (free shipping · 48hr dispatch · made in Australia)
- Sticky mobile "Shop now" button below hero
- Native `<details>` FAQ (zero JS, fully accessible)
- Product page: variant pills, single big black "Add to cart" with price, trust block

## What's intentionally NOT here

- No popups, exit intent, or spin-the-wheel widgets
- No chatbot
- No carousel/slideshow on the homepage
- No mega menu
- No gradient/glassmorphism/parallax
- No third-party apps required

These are conscious omissions — they hurt conversion for premium local-business brands.

## Next steps

1. Push the theme: `shopify theme push --unpublished`
2. Open the theme editor, upload your hero image and product photos
3. Create the two products with their variants
4. Wire up the navigation menus
5. Run a Lighthouse audit and screenshot the homepage for review
6. When you're happy: publish.
