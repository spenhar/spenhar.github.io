# Portfolio — Float

A personal portfolio with infinite-scrolling float layout. Drag in any direction — the canvas wraps infinitely. Click images to expand; those with a description show a reading panel.

---

## Quick Start (GitHub Pages)

1. **Push this folder** to a GitHub repo (e.g. `yourusername.github.io` for a user site, or any repo for a project site).
2. In repo **Settings → Pages**, set source to `main` branch, root `/`.
3. Root **`.nojekyll`** is included so GitHub Pages skips Jekyll (needed for paths that start with `_`).
4. Your site is live at `https://yourusername.github.io` (or `https://yourusername.github.io/repo-name/`).

**Content source** — In `index.html`, set `CONTENT_SOURCE` to `'arena'` plus `ARENA_CHANNEL_SLUG`, or to any other string (e.g. `'json'`) to load `window.PORTFOLIO_ITEMS` or `data/items.json`. Are.na uses the public API in the browser (no token for public channels).

**Optional embedded data** — To use `data/items.local.js` (e.g. opening `index.html` as `file://` where `fetch` to JSON fails), add before the main `<script>` block in `<head>`:

```html
<script src="data/items.local.js"></script>
```

> **Project sites**: if your repo is NOT `yourusername.github.io`, update any asset paths in `index.html` from `assets/...` to `/repo-name/assets/...`, or set a `<base href="/repo-name/">` tag in `<head>`.

---

## File Structure

```
/
├── index.html                  ← the portfolio (IS the homepage)
├── .nojekyll                   ← disables Jekyll on GitHub Pages
├── README.md
│
├── data/
│   ├── items.json              ← source of truth for all tiles/items
│   ├── items.local.js          ← local-file fallback for direct open (`file://`)
│   └── desc-template.md        ← starter template for project descriptions
│
└── assets/
    └── images/
        ├── my-project/
        │   ├── image.jpg       ← the image shown in the float
        │   └── desc.md         ← OPTIONAL: project description (triggers detail panel)
        ├── another-project/
        │   └── image.jpg
        └── ...
```

---

## Adding Portfolio Items

### 1. Add an item to `data/items.json`

```json
{
  "id": "my-project",
  "type": "project",
  "tile": [4, 0],
  "width": 45,
  "marginLeft": 10,
  "marginTop": 20,
  "aspectRatio": 1.5,
  "src": "assets/images/my-project/image.jpg",
  "srcHD": "assets/images/my-project/image-hd.jpg",
  "alt": "Description of the image.",
  "tags": ["design", "architecture"],
  "descUrl": "assets/images/my-project/desc.md"
}
```

Item types:
- `mood` → image-only (no description panel)
- `project` → opens metadata + markdown details panel from `descUrl`

### 2. Add the image file

Place it at `assets/images/my-project/image.jpg` (or `.png`, `.webp`).

For best performance:
- Canvas thumbnails: **800px wide**, compressed JPEG/WebP
- Lightbox HD version: **1600px wide**

### 3. For project items, add `desc.md`

Create `assets/images/my-project/desc.md`:

```markdown
---
title: My Project Name
tags: [design, architecture]
date: 2026-03
year: 2026
role: Design + Engineering
contributors: [Name One, Name Two]
status: In Progress
client: Personal
---

Your project description here. Supports **Markdown**.

Paragraphs, links, whatever you need.
```

The detail panel auto-renders fields like `date`, `year`, `role`, `contributors`, `status`, `client`, and `link` if present.

---

## The tile grid

The infinite canvas uses a wrapping grid (default **5×5**; **Are.na** mode grows columns/rows to fit every block). Each tile is 1/3 of the container square. Tiles wrap seamlessly as you drag.

Each `tile: [col, row]` coordinate places an image in a specific cell:

```
[0,0]  [1,0]  [2,0]  [3,0]  [4,0]
[0,1]  [1,1]  [2,1]  [3,1]  [4,1]
[0,2]  [1,2]  [2,2]  [3,2]  [4,2]
[0,3]  [1,3]  [2,3]  [3,3]  [4,3]
[0,4]  [1,4]  [2,4]  [3,4]  [4,4]
```

Empty cells are invisible. You can have one image per cell. For best results, leave some cells empty — the breathing room is part of the aesthetic.

### Image positioning within a tile

`width`, `marginLeft`, `marginTop` are all percentages of the **tile size** (not the viewport).

A tile is roughly 1/3 of the viewport square. At 1440px wide:
- 1 tile ≈ 480px
- `width: 50` → image is 240px wide
- `marginLeft: 25` → 120px from tile left edge

---

## Tag-Based Gravity (future)

Items share `tags`. A future enhancement will cluster items by tag — e.g. all `architecture` items drift toward each other on the canvas using a soft spring simulation. The `tags` field is already on every item in preparation for this.

---

## Hidden Features (starter)

The prototype includes a small hidden-feature framework in `index.html`:

- `↑ ↑ ↓ ↓ ← → ← → B A` toggles **Night Flight** mode.
- Press `p` to toggle **Pilot Radar** (speed + focused tile item).
- Secret notifications use a tiny toast system (`showSecretToast`) so you can add more easter eggs quickly.

You can add your own hidden triggers by extending the hidden-features section near the bottom of the script.

---

## Performance Notes

- **No framework, no build step.** Pure HTML/CSS/JS.
- Tile transforms use `translate3d()` → GPU compositing, no layout reflow.
- Images use `loading="lazy"` except the first tile — browser loads off-screen images as you approach.
- Inertia physics run on `requestAnimationFrame` only while moving, zero idle CPU.
- Description files (`desc.md`) are fetched on-demand and cached after first load.
