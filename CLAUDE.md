# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

All commands run from the `shadow-curator/` directory.

```bash
yarn dev      # Start dev server (Turbopack, Next.js 16)
yarn build    # Production build
yarn start    # Serve production build
```

## Architecture

Single-page Next.js 16 App Router gallery. No routing beyond `/` — everything is one scrollable page.

```
src/
  app/
    layout.tsx      # Root layout: fonts (Noto Serif + Inter), Material Symbols CDN link
    page.tsx        # Page root: state for lightbox index + buy modal, renders all artworks
    globals.css     # Tailwind v4 @theme tokens + utility classes
  components/
    ArtBlock.tsx    # One artwork row — framer-motion scroll reveal via useInView
    Lightbox.tsx    # Full-screen image overlay, keyboard nav (←/→/Esc)
    BuyModal.tsx    # Contact form modal
    Navbar.tsx      # Fixed top bar
    Footer.tsx      # Static footer
  data/
    artworks.ts     # Static array of Artwork objects — the only data source
  types/
    artwork.ts      # Artwork + ArtworkThumbnail interfaces
```

**Data flow**: `artworks.ts` → `page.tsx` → `ArtBlock` (display) + `Lightbox` (modal, receives index). State lives entirely in `page.tsx`.

## Design System

**Tailwind v4** — configured via `@theme` block in `globals.css`, not `tailwind.config`. CSS custom properties defined there are used directly as Tailwind utilities (e.g. `bg-surface-container`, `text-on-primary`). The palette is a Material You dark theme.

**Typography utilities:**
- `font-headline` → Noto Serif (italic titles)
- `font-body` / `font-label` → Inter

**Icons:** Material Symbols Outlined loaded via Google Fonts CDN. Used as icon ligatures:
```tsx
<span style={{ fontFamily: 'Material Symbols Outlined' }}>close</span>
```

**Custom utilities** (defined in `globals.css`):
- `.img-zoom` — scale-on-hover via CSS sibling selector on `<img>`
- `.img-transition` — smooth cubic-bezier transform transition
- `.no-scrollbar` — hide scrollbars cross-browser

## Images

**Always use `next/image` (`<Image>`)**, not `<img>`. The source images in `public/images/` are large PNGs (3–9 MB each) — loading them as raw `<img>` tags will freeze the browser.

- Local images (`/images/*.png`): use `fill` + parent `relative` + explicit height
- External thumbnails (`lh3.googleusercontent.com`): already in `remotePatterns` in `next.config.ts`
- Use `priority` only for the first visible image; let the rest lazy-load

## Next.js Version Note

This project runs **Next.js 16**. APIs and conventions may differ from your training data. Before writing any Next.js-specific code, consult:

```
node_modules/next/dist/docs/
```
