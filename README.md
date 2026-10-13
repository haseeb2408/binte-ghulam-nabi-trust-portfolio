# Binte Ghulam Nabi Trust — Website

A one-page portfolio site for the trust, built with Next.js (App Router), TypeScript and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Requires Node 18.18+ (Node 20+ recommended).

## Edit the content

Everything editable is in **`lib/content.ts`**:

- `site.contact` — email, phone, WhatsApp, address (empty fields are hidden)
- `site.donation` — bank / wallet details (the Donate section shows them once filled)
- `about`, `programs` — text and program areas (currently **placeholders**)
- `stats` — impact numbers, e.g. `{ value: "250+", label: "Families supported" }`
- `gallery` — add photos to `public/gallery/` and list them

The Instagram and Facebook links are already wired into the hero, gallery, contact section and footer.

## Colors and fonts

Theme colors are defined in `app/globals.css` under `@theme`. Fonts (Fraunces + Inter) are set in `app/layout.tsx`.

## Deploy

Push to GitHub and import the repo in Vercel, or run `npm run build && npm start` on any Node host.
