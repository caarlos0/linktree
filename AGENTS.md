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
├── avatar.jpg      # Profile avatar image
├── og-image.png    # Open Graph image for social sharing
├── favicon.ico     # Site favicon
└── *.png/*.ico     # Social platform icons
dist/               # Build output (gitignored)
```

## How It Works

1. **Source files** live in `src/`
2. **Build process** copies all files from `src/` to `dist/`, removes `input.css`, and compiles Tailwind CSS to `dist/output.css`
3. **Production output** is the `dist/` directory

## Adding a New Link

1. Add the platform icon to `src/` (PNG or ICO format)
2. Add a new `<li>` entry in `src/index.html` following the existing pattern:

```html
<li>
  <a
    class="link-container"
    href="https://example.com/profile"
    target="_blank"
    rel="me"
  >
    <img
      src="platform-icon.png"
      class="link-logo hover-invert"
    />
    <span id="label">Platform Name</span>
  </a>
</li>
```

## CSS Conventions

- **Tailwind CSS v4** with `@apply` directives for component classes
- **Custom theme** defined in `@theme` block in `input.css`
- **Icon hover effects**: Use `hover-invert` for light icons on dark background, `hover-uninvert` for dark icons
- **Responsive breakpoints**: `w-11/12` mobile, `xl:w-1/2`, `2xl:w-1/3`
- **Animation**: Links fade in sequentially via JavaScript on page load

## HTML Patterns

- All links include `target="_blank"` and `rel="me"` (for IndieWeb verification)
- External favicons can be referenced directly (e.g., `https://carlosbecker.com/favicon.ico`)
- Local icons use relative paths (e.g., `github.png` or `/github.png`)
- Comments use HTML comment syntax to temporarily disable links

## Gotchas

- **No hot reload for HTML**: The `dev` script only watches CSS changes. Refresh browser manually for HTML changes.
- **dist/ is gitignored**: Build output is not committed; run `npm run build` before deploying
- **Python 3 required** for the local server (`npm run serve`)
