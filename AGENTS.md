# AGENTS.md

This is a personal linktree-style static website built with plain HTML and Tailwind CSS v4.

## Commands

```bash
# Install dependencies
pnpm install

# Development - rebuild on any src/ change and serve on http://localhost:8000
pnpm dev

# Build for production (outputs to dist/)
pnpm build

# Serve the built site locally on http://localhost:8000
pnpm serve
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

Super-dark, monochrome, minimal: near-black background with a faint radial
highlight, centered profile (avatar, name, handle), and the links as a 3-column
grid of dark cards. Icons are grayscale/dim by default and gain full color on
hover/focus; cards lift slightly with a subtle glow. Cards fade in with a short
staggered entrance. Pure HTML/CSS — no JavaScript, no web fonts, no images
beyond the existing icons.

## Adding a New Link

1. Add the platform icon to `src/` (PNG or ICO format)
2. Add a new `<li>` entry to the `.grid` list in `src/index.html`:

```html
<li>
  <a class="card" href="https://example.com/profile" target="_blank" rel="me">
    <img src="platform-icon.png" class="card-icon" alt="" loading="lazy" />
    <span class="card-name">platform</span>
  </a>
</li>
```

3. If the entrance stagger should cover it, extend the
   `.grid li:nth-child(N)` animation-delay list in `input.css`

## CSS Conventions

- **Tailwind CSS v4** with `@apply` directives for component classes
- **Custom theme** (grayscale palette: page/card/edge/fg/dim) defined in the
  `@theme` block in `input.css`
- **Icons**: grayscale/dim by default, full color on hover/focus. Add the
  `inv` class to dark icons that need `invert()` to be visible on the dark
  background (e.g. github, x, steam)
- **Reduced motion**: entrance animation and transitions are disabled via
  `prefers-reduced-motion`

## HTML Patterns

- All links include `target="_blank"` and `rel="me"` (for IndieWeb verification)
- External favicons can be referenced directly (e.g., `https://carlosbecker.com/favicon.ico`)
- Local icons use relative paths (e.g., `github.png` or `/github.png`)
- Comments use HTML comment syntax to temporarily disable links
- Link names are lowercase

## Gotchas

- **No live reload**: `dev` watches all of `src/` and rebuilds `dist/` on any change (HTML, CSS, icons), but the browser does **not** auto-refresh — reload the page manually to see changes.
- **dist/ is gitignored**: Build output is not committed; run `pnpm build` before deploying
- **Local server uses `serve`**: `pnpm dev` (watch `src/` + rebuild + serve) and `pnpm serve` (serve only) both serve `dist/` on http://localhost:8000 via the Node `serve` package — no Python needed
