# Monish Mudaliar — Portfolio

Next.js (App Router) + TypeScript + Tailwind v4. Fully static, no backend,
no database, no API keys, no env vars.

## Editing content

**All content lives in `src/lib/data.ts`.** Edit the objects there, commit,
push — Vercel redeploys automatically. You never need to touch component
files for routine updates.

Sections in that file: `profile`, `stats`, `marquee`, `experience`,
`research`, `projects`, `skillGroups`, `education`, `certifications`,
`leadership`.

Adding a new job: append an object to `experience`. Adding a project:
append to `projects` (each has `modules`, `metrics`, and a `trend` array
of relative 0-100 values that draws the sparkline).

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. vercel.com/new → import the repo.
3. Leave all settings default. No environment variables needed.
4. Deploy.

Every push to `main` redeploys. You can edit `src/lib/data.ts` directly in
GitHub's web editor to update the live site without any local setup.

## Design notes

Dark, high-contrast editorial layout. Acid lime (`--acid`) is the primary
accent, coral (`--coral`) marks research, azure (`--azure`) marks the
toolkit. All three are defined at the top of `src/app/globals.css` — change
them there and the whole site follows.

Type: Archivo (display, heavy + tight tracking), IBM Plex Mono (labels,
data), Inter (body). Self-hosted at build time via `next/font`, so no
runtime requests to Google and no layout shift.

## Structure

```
src/
  app/
    layout.tsx     Fonts + metadata
    page.tsx       Section order
    globals.css    Color tokens, animations
  components/
    Nav, Hero, Experience, Research, Projects,
    Skills, Background, Contact
    SectionHead, Sparkline
  lib/
    data.ts        <-- all your content
```
