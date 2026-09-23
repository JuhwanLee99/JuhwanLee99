# Portfolio

Personal project portfolio built with React, Vite, and TypeScript.

## Local development

```sh
npm install
npm run dev
```

## Vercel deployment

Import `JuhwanLee99/JuhwanLee99` in Vercel and select the `portfolio` branch as the production branch. Use the Vite framework preset, `npm run build` as the build command, and `dist` as the output directory. The SPA rewrite for direct project-page URLs is defined in `vercel.json`.

Search-engine indexing is currently disabled by `index.html` and `public/robots.txt`, as requested. Review those settings before making the site discoverable.

## Separate profile document

The README that previously occupied this branch is preserved at [`docs/profile/README.md`](docs/profile/README.md). This portfolio branch does not manage the GitHub profile README on the repository's default branch.
