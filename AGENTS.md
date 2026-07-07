# AGENTS.md

This is a personal linktree-style static website built with plain HTML and Tailwind CSS v4.

## Commands

```bash
# Install dependencies
npm install

# Development - watch mode for CSS changes
npm run dev

# Build for production (outputs to dist/)
npm run build

# Serve the built site locally (requires Python 3)
npm run serve
```

## Project Structure

```
src/
├── index.html      # Main HTML file with all links
├── input.css       # Tailwind CSS source with custom theme
├── carlos.webp     # Profile avatar image
├── og-image.png    # Open Graph image for social sharing
├── favicon.ico     # Site favicon
└── *.png/*.ico     # Social platform icons
dist/               # Build output (gitignored)
```

## How It Works

1. **Source files** live in `src/`
2. **Build process** copies all files from `src/` to `dist/`, removes `input.css`, and compiles Tailwind CSS to `dist/output.css`
3. **Production output** is the `dist/` directory

## Design

The page is styled as a terminal session: an `ssh caarlos0.dev` boot sequence
types itself out, prints an ASCII banner, a whoami block, and a `ls ~/links`
listing, ending at a blinking prompt. A tmux-style status bar sits at the
bottom. Links are keyboard-navigable (j/k or arrows to move, Enter to open,
1–9 to jump) in addition to normal click/tap.

## Adding a New Link

1. Add the platform icon to `src/` (PNG or ICO format)
2. Add a new `<li>` entry in `src/index.html` following the existing pattern:

```html
<li>
  <a class="row" href="https://example.com/profile" target="_blank" rel="me">
    <span class="row-idx">N</span>
    <img src="platform-icon.png" class="row-icon" alt="" loading="lazy" />
    <span class="row-name">platform</span>
    <span class="row-url">example.com/profile</span>
    <span class="row-key">↵</span>
  </a>
</li>
```

3. Keep `row-idx` numbers sequential — they double as the 1–9 keyboard
   shortcuts (the `total N` count is set by JavaScript automatically)

## CSS Conventions

- **Tailwind CSS v4** with `@apply` directives for component classes
- **Custom theme** (terminal palette + mono font stack) defined in the `@theme` block in `input.css`
- **Icons**: grayscale/dim by default, full color on hover/selection. Add `row-icon-dark` for dark icons that need `invert()` on the dark background
- **Selection**: the `sel` class (managed by JS) mirrors `:hover`/`:focus-visible` styling for keyboard navigation
- **Reduced motion**: the boot animation and cursor blink are disabled via `prefers-reduced-motion`; any key press or click also skips the boot sequence

## HTML Patterns

- All links include `target="_blank"` and `rel="me"` (for IndieWeb verification)
- External favicons can be referenced directly (e.g., `https://carlosbecker.com/favicon.ico`)
- Local icons use relative paths (e.g., `github.png` or `/github.png`)
- Comments use HTML comment syntax to temporarily disable links
- Link names are lowercase (terminal aesthetic); the visible `row-url` text is a display string and may differ from the actual `href`

## Gotchas

- **No hot reload for HTML**: The `dev` script only watches CSS changes. Refresh browser manually for HTML changes.
- **dist/ is gitignored**: Build output is not committed; run `npm run build` before deploying
- **Python 3 required** for the local server (`npm run serve`)
