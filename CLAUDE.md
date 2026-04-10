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

<!-- rtk-instructions v2 -->
# RTK (Rust Token Killer) - Token-Optimized Commands

## Golden Rule

**Always prefix commands with `rtk`**. If RTK has a dedicated filter, it uses it. If not, it passes through unchanged. This means RTK is always safe to use.

**Important**: Even in command chains with `&&`, use `rtk`:
```bash
# ❌ Wrong
git add . && git commit -m "msg" && git push

# ✅ Correct
rtk git add . && rtk git commit -m "msg" && rtk git push
```

## RTK Commands by Workflow

### Build & Compile (80-90% savings)
```bash
rtk cargo build         # Cargo build output
rtk cargo check         # Cargo check output
rtk cargo clippy        # Clippy warnings grouped by file (80%)
rtk tsc                 # TypeScript errors grouped by file/code (83%)
rtk lint                # ESLint/Biome violations grouped (84%)
rtk prettier --check    # Files needing format only (70%)
rtk next build          # Next.js build with route metrics (87%)
```

### Test (90-99% savings)
```bash
rtk cargo test          # Cargo test failures only (90%)
rtk vitest run          # Vitest failures only (99.5%)
rtk playwright test     # Playwright failures only (94%)
rtk test <cmd>          # Generic test wrapper - failures only
```

### Git (59-80% savings)
```bash
rtk git status          # Compact status
rtk git log             # Compact log (works with all git flags)
rtk git diff            # Compact diff (80%)
rtk git show            # Compact show (80%)
rtk git add             # Ultra-compact confirmations (59%)
rtk git commit          # Ultra-compact confirmations (59%)
rtk git push            # Ultra-compact confirmations
rtk git pull            # Ultra-compact confirmations
rtk git branch          # Compact branch list
rtk git fetch           # Compact fetch
rtk git stash           # Compact stash
rtk git worktree        # Compact worktree
```

Note: Git passthrough works for ALL subcommands, even those not explicitly listed.

### GitHub (26-87% savings)
```bash
rtk gh pr view <num>    # Compact PR view (87%)
rtk gh pr checks        # Compact PR checks (79%)
rtk gh run list         # Compact workflow runs (82%)
rtk gh issue list       # Compact issue list (80%)
rtk gh api              # Compact API responses (26%)
```

### JavaScript/TypeScript Tooling (70-90% savings)
```bash
rtk pnpm list           # Compact dependency tree (70%)
rtk pnpm outdated       # Compact outdated packages (80%)
rtk pnpm install        # Compact install output (90%)
rtk npm run <script>    # Compact npm script output
rtk npx <cmd>           # Compact npx command output
rtk prisma              # Prisma without ASCII art (88%)
```

### Files & Search (60-75% savings)
```bash
rtk ls <path>           # Tree format, compact (65%)
rtk read <file>         # Code reading with filtering (60%)
rtk grep <pattern>      # Search grouped by file (75%)
rtk find <pattern>      # Find grouped by directory (70%)
```

### Analysis & Debug (70-90% savings)
```bash
rtk err <cmd>           # Filter errors only from any command
rtk log <file>          # Deduplicated logs with counts
rtk json <file>         # JSON structure without values
rtk deps                # Dependency overview
rtk env                 # Environment variables compact
rtk summary <cmd>       # Smart summary of command output
rtk diff                # Ultra-compact diffs
```

### Infrastructure (85% savings)
```bash
rtk docker ps           # Compact container list
rtk docker images       # Compact image list
rtk docker logs <c>     # Deduplicated logs
rtk kubectl get         # Compact resource list
rtk kubectl logs        # Deduplicated pod logs
```

### Network (65-70% savings)
```bash
rtk curl <url>          # Compact HTTP responses (70%)
rtk wget <url>          # Compact download output (65%)
```

### Meta Commands
```bash
rtk gain                # View token savings statistics
rtk gain --history      # View command history with savings
rtk discover            # Analyze Claude Code sessions for missed RTK usage
rtk proxy <cmd>         # Run command without filtering (for debugging)
rtk init                # Add RTK instructions to CLAUDE.md
rtk init --global       # Add RTK to ~/.claude/CLAUDE.md
```

## Token Savings Overview

| Category | Commands | Typical Savings |
|----------|----------|-----------------|
| Tests | vitest, playwright, cargo test | 90-99% |
| Build | next, tsc, lint, prettier | 70-87% |
| Git | status, log, diff, add, commit | 59-80% |
| GitHub | gh pr, gh run, gh issue | 26-87% |
| Package Managers | pnpm, npm, npx | 70-90% |
| Files | ls, read, grep, find | 60-75% |
| Infrastructure | docker, kubectl | 85% |
| Network | curl, wget | 65-70% |

Overall average: **60-90% token reduction** on common development operations.
<!-- /rtk-instructions -->