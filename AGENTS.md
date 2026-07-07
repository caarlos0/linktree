# AGENTS.md

This is a personal linktree-style static website built with plain HTML and Tailwind CSS v4.

## Commands

```bash
# Install dependencies
pnpm install

# Development - build, watch CSS, and serve on http://localhost:8000
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

The page is a modern take on a 2004 MySpace profile ("caarlos0space"): a fake
site nav bar, a scrolling marquee, an animated rainbow WordArt title, ridge-
bordered panels over a twinkling star background, a profile card with
mood/online status and a hit counter, a fake "profile song" player with an
animated equalizer, an "about me" blurb, and the links as a "Top 9" grid of
tilted neon sticker cards. A sparkle trail follows the cursor (desktop only).
Everything is CSS/vanilla JS — no extra images, fonts, or audio.

## Adding a New Link

1. Add the platform icon to `src/` (PNG or ICO format)
2. Add a new `<li>` entry to the `.top9` list in `src/index.html`:

```html
<li style="--tilt: -2deg">
  <a class="card" href="https://example.com/profile" target="_blank" rel="me">
    <span class="card-rank">#N</span>
    <img src="platform-icon.png" class="card-icon" alt="" loading="lazy" />
    <span class="card-name">platform</span>
  </a>
</li>
```

3. Pick a `--tilt` between -2.5deg and 2.5deg (vary it from the neighbors so
   the grid looks hand-placed) and keep `card-rank` numbers sequential

## CSS Conventions

- **Tailwind CSS v4** with `@apply` directives for component classes
- **Custom theme** (Y2K neon palette: pink/cyan/purple/lime + Verdana body,
  Comic Sans accents) defined in the `@theme` block in `input.css`
- **Icons**: add the `inv` class to dark icons that need `invert()` to be
  visible on the dark card background (e.g. github, x, steam)
- **Panels**: `.panel` + `.panel-title` + `.panel-body` is the building block
  for any new box
- **Reduced motion**: all animations (marquee, rainbow title, equalizer,
  blinking, background, sparkle trail) are disabled via `prefers-reduced-motion`

## HTML Patterns

- All links include `target="_blank"` and `rel="me"` (for IndieWeb verification)
- External favicons can be referenced directly (e.g., `https://carlosbecker.com/favicon.ico`)
- Local icons use relative paths (e.g., `github.png` or `/github.png`)
- Comments use HTML comment syntax to temporarily disable links
- Link names are lowercase; the deliberate typos/leetspeak in marquee and
  status text are part of the aesthetic — don't "fix" them
- The hit counter is a joke: a fixed base number plus a real per-browser visit
  count from localStorage

## Gotchas

- **No hot reload for HTML**: `dev` only watches CSS. HTML/icon edits need a `dev` restart (or `pnpm build`) to re-copy them into `dist/`; refresh the browser manually.
- **dist/ is gitignored**: Build output is not committed; run `pnpm build` before deploying
- **Local server uses `serve`**: `pnpm dev` (build + CSS watch + serve) and `pnpm serve` (serve only) both serve `dist/` on http://localhost:8000 via the Node `serve` package — no Python needed
