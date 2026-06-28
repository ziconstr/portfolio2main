# Portfolio II – Zico

A modern React (Vite) portfolio for **Zico Sebastian** — *Noroff Front‑End Development*.

## Features
- React + Vite + TailwindCSS + React Router + Framer Motion
- Sections: Hero, Projects, KPI, Parallax, Skills, About, Contact
- 5 project pages (including a Coming Soon placeholder)
- Matching abstract thumbnails generated as SVGs

## Resit Features (POR2-features-resit branch)
This branch adds the following features for the Portfolio 2 resit:

### 1. KPI Section
A new "By the Numbers" section placed directly below the project cards on the home page. Displays three key metrics:
- Projects Completed
- Years of Experience
- Clients

Located in `src/components/KPISection.jsx`. Animated with Framer Motion to match the existing project cards.

### 2. Parallax Section
A full-width parallax band placed below the KPI section on the home page. Uses CSS `background-attachment: fixed` (Tailwind `bg-fixed`) so the background image stays put while page content scrolls over it.

Located in `src/components/ParallaxSection.jsx`. Reuses the existing `nordlys.png` aurora image in `/public/images/` for visual consistency with the hero.

## Getting Started
```bash
npm install
npm run dev
# build + preview
npm run build
npm run preview
```

### Deploy
For Netlify, `_redirects` is included for SPA routing.
For GitHub Pages, use a 404.html redirect or a Pages adapter.

## Edit Projects
Edit `src/data.projects.js` to change links, titles, and teasers.

## AI Usage
See `AI_LOG.md` for documentation of AI assistance used in this resit.
