# The Matts' NotebookLM Prompt Library

A React + TypeScript + Vite app: a browsable library of ready-to-use NotebookLM
prompts (summarising, analysing, learning, styling and podcast prompts), with
category filters, search, copy-to-clipboard, a personal "toolkit" you can build,
and a PDF playbook export. Built for The Matts' "AI in the Workplace" workshop,
Cardiff University.

Ported from the structure of the `coding` prompt-library app; the prompts are
defined as typed data in `src/data/useCases.ts` (auto-generated from the original
`notebooklm.html`).

## Develop

```bash
npm install
npm run dev      # http://localhost:5173/notebooklm/
npm run build    # tsc -b && vite build  ->  dist/
npm run preview
```

## Structure

- `src/data/useCases.ts` — the prompts (`UseCase` interface). `welsh` flags the
  Welsh twins (surfaced by the Cymraeg filter); `studioRevise` flags prompts meant
  for the NotebookLM Studio revise (pencil) panel.
- `src/data/categories.ts` — category names and badge colours.
- `src/components/` — `landing`, `layout` (category pills), `storefront` (cards,
  search, toolkit drawer), `shared` (CTA modal, export button), `pdf` (playbook).
- `src/store/useAppStore.ts` — Zustand store (view, filters, search, toolkit).

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to GitHub Pages. The Vite `base` is `/notebooklm/`, so the site
serves at `https://wmgmm.github.io/notebooklm/`. The repo's Pages source must be
set to "GitHub Actions".
