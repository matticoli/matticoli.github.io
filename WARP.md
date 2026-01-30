# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development environment and commands

- **Node version**: Use Node.js `24` (see `.nvmrc` in the repo root).
- **Project root for the app**: All Next.js / npm commands should be run from the `src/` directory, not the repository root.

From the repo root:

```bash
cd src
npm install
```

Common scripts defined in `src/package.json`:

- **Run the development server**
  - `npm run dev`
  - Starts the Next.js dev server (default on port 3000).

- **Build for production**
  - `npm run build`
  - Runs the Next.js production build.

- **Static export**
  - `npm run export`
  - Runs `next build` followed by `next export`, emitting a static site into the `out/` directory.

- **Start production server**
  - `npm run start`
  - Starts the Next.js production server (serves the built app from `.next/`).

There are **no linting or testing scripts** currently defined in `src/package.json`. If you need linting or tests, you will have to add the corresponding tooling and scripts explicitly.

## High-level architecture

This repository hosts a personal portfolio site built with **Next.js + TypeScript + Tailwind CSS 4**, structured as a classic `pages/`-based Next.js app living under the `src/` directory.

### Top-level layout

- The actual Next.js project is inside `src/` and contains all application code, configuration, and dependencies (`package.json`, `tsconfig.json`, Tailwind/PostCSS config, etc.).
- Static files (favicons, resume, images, HTML snippets) live under `src/public/` and are served from the web root (`/`).
- The repo root additionally contains static artifacts like `404.html` used by the deployed site, but day-to-day app development happens entirely in `src/`.

### Routing and pages (`src/pages/`)

The app uses the **Next.js pages router**:

- `_app.tsx`
  - Custom App component that imports global styles from `styles/globals.css`, the firefly animation styles from `styles/fireflies.css`, and Swiper styles.
  - Delegates rendering to the current page component (`<Component {...pageProps} />`).

- `index.tsx` (Home)
  - Uses `getStaticProps` to fetch project metadata via `getAllProjects` from `pages/api/projects-static`.
  - Renders a hero section and a "Featured Projects" grid using the `ProjectTile` component for each project with `featured: true`.

- `about.tsx`
  - About page wrapped in `PageContainer`, with a profile section and an embedded resume.
  - Links to `/resume.pdf` (served from `public/resume.pdf`) and the LinkedIn profile.

- `projects/index.tsx`
  - Uses `getStaticProps` + `getAllProjects` to render a grid of **all** projects.

- `projects/[slug].tsx`
  - Dynamic project-detail page.
  - Uses `getStaticPaths` (via `getProjectPaths`) to enumerate all project slugs and `getStaticProps` (via `getProjectData`) to load a single project.
  - Renders two main columns: a metadata sidebar (roles, team size, responsibilities, timeline, achievements) and a main content area with a Swiper-powered media carousel, "Made With" badges, Markdown-derived HTML content, and external links.

> Note: `pages/api/projects-static.ts` is used as a **local data-access module** imported by pages, not as a conventional HTTP API route.

### Project content and data model

Project case studies are modeled as Markdown files with frontmatter and live under `src/projects/` (for example `call-of-karen.md`, `holiday-escape.md`, `jhdb-contributor-portal.md`).

- `pages/api/projects-static.ts` defines the `Project` TypeScript interface and functions that operate on these Markdown files:
  - `getProjectData(slug: string)`
    - Reads `projects/${slug}.md`.
    - Uses `gray-matter` to parse the frontmatter and `remark` + `remark-html` to convert the Markdown body to HTML.
    - Returns a `Project` object combining typed metadata with an HTML `content` field.
  - `getProjectSlugs()` / `getProjectPaths()`
    - Read the list of Markdown files in `src/projects/` and expose the slugs / `getStaticPaths`-compatible objects.
  - `getAllProjects()`
    - Loads all projects in parallel, then sorts them by the numeric `priority` field before returning.

Key aspects of the `Project` model:

- Frontmatter encodes structured metadata (title, slug, cover image path, excerpt, roles, tags with display colors, featured flag, priority, type, icon key, responsibilities, team size, status, timeline, achievements, media, and external links).
- The `media` and `links` fields are arrays of tuples that the UI interprets to render Swiper slides and type-specific action icons (e.g., Steam, Website, Paper).
- The Markdown body provides the narrative case study content, which is rendered into HTML and injected into the project detail page via `dangerouslySetInnerHTML` inside a container with the `.md` class for custom typography and image styling.

When adding or modifying projects, keep the frontmatter schema in sync with the `Project` interface in `pages/api/projects-static.ts` to preserve type safety and avoid runtime errors.

### Components and layout system (`src/components/`)

The site has a small set of reusable layout and UI primitives that define the visual identity:

- `page-container.tsx`
  - Wraps every page with a consistent layout: `Head` metadata (title and icons), navigation (`Nav`), the animated background (`Fireflies`), the main content area, a global `ContactPopup`, and a footer with social links.
  - All top-level pages (`index.tsx`, `about.tsx`, `projects/*.tsx`) are expected to render their content inside `PageContainer`.

- `card.tsx` (used via `CardInner` and `CardOuter`)
  - Provides a flexible card layout abstraction used across the home, about, and project pages to keep spacing, borders, and background treatments consistent.

- `project-tile.tsx`
  - Renders a summary card for a `Project`, showing role(s), cover image, a subset of tags (as `Badge` components), a short excerpt, and a button linking to the full `/projects/[slug]` page.
  - This component powers the project grids on the home and projects index pages.

- `components/index.tsx`
  - Barrel file that re-exports the primary components (e.g., `Badge`, `Button`, `CardInner`, `CardOuter`, `ContactPopup`, `Elec`, `Fireflies`, `Nav`, `ProjectTile`) for simpler imports.

Other components such as `badge.tsx`, `button.tsx`, `contact-popup.tsx`, `elec.tsx`, `fireflies.tsx`, `hi.tsx`, and `nav.tsx` implement the low-level UI elements, decorative effects, and navigation that give the site its look-and-feel.

When adding new pages or features, prefer composing these existing components (especially `PageContainer`, `CardInner`/`CardOuter`, and `ProjectTile`) to maintain layout and visual consistency.

### Styling and Tailwind configuration

- Global styles live in `src/styles/globals.css`:
  - Imports Google Fonts and `@import "tailwindcss";` to enable Tailwind CSS 4.
  - Defines a `--primary` CSS variable used for accent color, along with utility classes such as `.bg-primary`, `.text-primary`, and `.decoration-primary`.
  - Provides typography and layout rules scoped under the `.md` class for project Markdown content (headings, paragraphs, lists, and images).

- Animated background styles are in `src/styles/fireflies.css` and are used by the `Fireflies` component to render the firefly particle effect.

- `src/tailwind.config.js` limits Tailwind’s content scan to:
  - `./pages/**/*.{js,ts,jsx,tsx,mdx}`
  - `./components/**/*.{js,ts,jsx,tsx,mdx}`

  If you add new top-level directories containing JSX/TSX files (e.g., a `layouts/` or `features/` directory), you may need to update these globs so Tailwind picks up the new class names.

- `src/postcss.config.js` configures PostCSS to use `@tailwindcss/postcss`.

### TypeScript configuration

- `src/tsconfig.json` enables strict TypeScript checking for all `*.ts` and `*.tsx` files in the project while emitting no JS (`noEmit: true`).
- The config targets modern browsers while allowing JSX via `"jsx": "react-jsx"` and standard Next.js module resolution (`"module": "esnext"`, `"moduleResolution": "node"`).

Any new TypeScript files added under `src/` will automatically be included by the existing `include` patterns as long as they are not placed under `node_modules/`.
