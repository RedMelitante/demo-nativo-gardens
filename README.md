# Nativo Gardens – website

Single-page marketing site for **Nativo Gardens**, landscaping across the Yarra Valley
and Melbourne's east. Built from the design handoff in `design/handoff/v2/`
(one responsive page for desktop and mobile).

> **Pitch demo:** `index.html` has `<meta name="robots" content="noindex, nofollow">` so
> search engines skip the demo. Remove it when the site goes live on the client's domain.
> HTML comments marked `CONFIRM WITH CLIENT` flag copy still to be checked.

**Stack:** static HTML · Tailwind CSS 3 · Vite 7 · ~3 KB of vanilla JS. No framework,
no runtime dependencies.

## Getting started

Requires Node 22.12+ (Vite alone works on 20.19+; Wrangler needs 22.12+).

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # serve the production build
```

`dist/` is a fully static site: deploy it to any static host (Netlify, Vercel,
Cloudflare Pages, Railway static, S3, etc.).

### Cloudflare Workers

`wrangler.jsonc` deploys `dist/` as Workers static assets (no Worker script).
In Cloudflare Workers Builds use build command `npm run build` and deploy command
`npx wrangler deploy`. Locally: `npm run deploy` (requires `wrangler login`).
Requires Node 22.12+.

## Project structure

```
index.html                  Page markup (from the design, with its CONFIRM WITH CLIENT notes)
src/styles.css              Tailwind entry + small component rules (FAQ, image frames)
src/main.js                 Mobile menu, sticky-header shadow, quote form, footer year
tailwind.config.js          Design tokens: colours (gum, wattle, sand, bark) and fonts
public/images/              Client photos, sample photos and logos (see ASSETS.md)
public/favicon.png          Favicons cropped from the client logo
public/apple-touch-icon.png
design/handoff/v2/          Current design handoff (source of truth)
design/handoff/v1/          First Claude Design export, kept for reference
design/brand/               Client master logo file (not deployed)
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

Values in `tailwind.config.js` are the exact hex codes from the design handoff,
taken from the client's logo colours.

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

- [ ] Remove the `noindex, nofollow` robots meta tag
- [ ] Replace the `sample-*.jpg` stock photos with client photos (see [ASSETS.md](ASSETS.md))
- [ ] Resolve the `CONFIRM WITH CLIENT` notes in `index.html` (insurance, hours, service areas, email)
- [ ] Set `VITE_FORM_ENDPOINT` in the hosting environment
- [ ] Point `og:image` at the live domain and add a canonical URL
- [ ] Point the blog "Read article" links at real posts (currently sample articles)
