# Nativo Gardens – website

Single-page marketing site for **Nativo Gardens**, landscaping across the Yarra Valley
and Melbourne's east. Built from the Claude Design handoff in `design/handoff/`
(desktop and mobile boards share one responsive page).

**Stack:** static HTML · Tailwind CSS 3 · Vite 7 · ~3 KB of vanilla JS. No framework,
no runtime dependencies.

## Getting started

Requires Node 18+.

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # serve the production build
```

`dist/` is a fully static site: deploy it to any static host (Netlify, Vercel,
Cloudflare Pages, Railway static, S3, etc.).

## Project structure

```
index.html                  Page markup (transcribed 1:1 from the design)
src/styles.css              Tailwind entry + small component rules (FAQ, image frames)
src/main.js                 Mobile menu, sticky-header shadow, quote form, footer year
tailwind.config.js          Design tokens: colours (gum, wattle, sand, bark) and fonts
public/images/              Photos and logos (placeholders for now – see ASSETS.md)
public/favicon.svg
scripts/make-placeholders.py  Regenerates placeholder images
design/handoff/             Original Claude Design export, kept for reference
```

## Design tokens

| Token | Use |
| --- | --- |
| `gum-*` | Eucalyptus greens – brand, headings, dark sections |
| `wattle-*` | Golden wattle – primary CTAs and accents |
| `sand-*` | Warm off-whites – page and section backgrounds |
| `bark-*` | Browns – body text |
| `font-display` | Fraunces (headings) |
| `font-sans` | Inter (body) |

The handoff's compiled stylesheet (with the exact hex values) was not part of the
export, so palette values in `tailwind.config.js` are reconstructed. Update them
there if the brand hex codes change; everything else follows.

## Quote form

The form validates name, phone, email, suburb and service on the client.
To receive submissions, set an endpoint that accepts a JSON `POST`
(Formspree, Basin, a serverless function…):

```bash
cp .env.example .env
# then set VITE_FORM_ENDPOINT=https://…
```

Without an endpoint the form runs in demo mode: it validates and shows the
confirmation, but sends nothing.

## Before launch

- [ ] Replace the placeholder images in `public/images/` (see [ASSETS.md](ASSETS.md))
- [ ] Set `VITE_FORM_ENDPOINT` in the hosting environment
- [ ] Add absolute URLs to `og:image` / canonical once the domain is known
- [ ] Point the blog "Read article" links at real posts (currently sample articles)
