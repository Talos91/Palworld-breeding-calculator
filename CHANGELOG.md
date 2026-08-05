# Changelog

All notable changes to the **Palworld Companion & Breeding Calculator** are
documented here. Versions are assigned retroactively — one bump per development
"passage" — using [Semantic Versioning](https://semver.org/)-ish rules
(`MAJOR.MINOR.PATCH`).

The current release is shown in the app footer (`v1.2.0`).

---

## [Unreleased]

### Planned
- **Accounts & cloud sync** (Supabase) — sign in to sync your owned Pals,
  wishlist and base plan across devices; falls back to local storage when
  signed out.
- **Capture-rate calculator** — estimate catch odds by sphere and HP (community
  formula; flagged as an estimate).
- **Damage / type-effectiveness calculator** — boss-counter suggestions from the
  element chart.

---

## [1.2.0] — Base planner, tech tree & richer Pal detail

### Added
- **🏭 Base planner** — assign the Pals you own to base work slots, see a live
  **coverage grid** for every work type (kindling, watering, planting, mining,
  lumbering, handiwork, transporting, farming, cooling, generating electricity,
  gathering, medicine) and spot the gaps at a glance.
- **Best-Pals-for-a-job ranker** — pick a work type + whether to limit to owned
  Pals, and get the top workers ranked by work level.
- **🔬 Tech tree browser** — the full technology tree with unlock levels and
  ancient/normal tech points.
- **Active skills** on every Pal's detail card (level, element, power, cooldown).
- **Element matchups** on every Pal's detail card — what it's strong and weak
  against, computed from the 9-element chart.

### Changed
- Wiki sub-navigation reorganised: the old "Jobs" tab became the fuller
  **Base** planner; sub-tabs are now uniform and sleek across every section.
- Grittier navigation iconography (the paw stays).

### Data
- New `data/skills.json` (326 skills + per-Pal skill lists).
- New `data/combat.json` (capture-rate corrections, spheres, passive inheritance).
- New `data/tech.json` (full technology tree).

---

## [1.1.0] — Map, spawns & a big UX pass

### Added
- **🗺️ Interactive map** of Palpagos with **pinch-to-zoom** and drag-to-pan.
- **Spawn locations** — pick a Pal to see its day / night / alpha spawn points,
  the same way the popular companion apps do it.
- **Marker clustering** so dense regions stay readable, loosened after feedback
  so nearby spawns don't over-merge.
- **All effigy locations** (Lifmunk and the rest — Lamball, Pengullet, …), not
  just Lifmunk.

### Changed
- **Full-width bottom navigation dock** replaces the floating dock — bigger
  targets, more thumb-friendly.
- **Breeding-path chains decluttered** — clearer step tags instead of a wall of
  "catch/breed" labels, especially on long chains.
- **"What can I breed?"** now shows the **chain step count** for each result
  before you open it.
- Schematics list restyled from a plain list into thumbnailed cards; items with
  no specific drop source get a simple **"found in dungeon"** tag instead of a
  "not in drop table" note; source-item thumbnails added.

### Fixed
- Map zoom buttons and marker taps no longer swallowed by the pan handler.
- Map no longer leaves dead space in tall viewports (`aspect-ratio` fix).
- Mobile keyboard no longer auto-pops when opening a dropdown/picker.
- "Boss on map" button restricted to the ~24 real boss drops instead of every
  schematic.

---

## [1.0.0] — Full companion, installable, wiki'd

### Added
- **📚 In-app Wiki** with thumbnails throughout:
  - all **items** (with descriptions),
  - all **schematics**,
  - all **buildings** (with build recipes),
  - all **Pals** — clickable, with full stat cards,
  - **tier guides** (fastest flying / ground / swimming mounts, strongest
    attackers, highest HP, best base Pals).
- **📦 My Pals** — mark what you own (saved in-browser, import/export JSON),
  filter routes to only Pals you own, breed a missing Pal from your collection,
  and a "what can I breed?" view.
- **📝 Wishlist** — target Pals + desired skills with per-entry plans and a
  whole-wishlist farm optimizer that merges shared intermediates.
- **Item crafting recipes** sourced and merged into the items data.
- **📱 Installable PWA** — add to home screen, works offline (service worker +
  web manifest), app icons.

### Changed
- Complete UX/UI overhaul toward an "AAA", less-generic Palworld-styled look.

---

## [0.5.0] — Real data, ordering & filters

### Added
- Every Pal has its **own thumbnail**.
- Pals ordered by **Paldeck number** (was alphabetical).
- **Filters** by Paldeck number, by type/element, and by work skill (farming,
  planting, mining, …).
- **Skill picker** replaced the free-text field — pick a real passive skill and
  see its description.

### Changed
- Breeding roster rebuilt to the current **Feybreak** era: **288 Pals** with
  real datamined CombiRanks and 258 special combos.

---

## [0.2.0] — Perfect Pal multi-skill planner

### Added
- **🏆 Perfect Pal planner** — pick up to 4 source Pals, each with a desired
  passive skill, plus a target species; get a two-phase build plan (route each
  skill onto the target, then stack them within the species) with a
  passive-inheritance egg estimate.
- **🧬 All combinations** and **🔎 single-pairing / best-partner** finders.

---

## [0.1.0] — Initial breeding calculator

### Added
- **🎯 Path to a target** — shortest breeding chain from any parent to any
  target species.
- **Skill-transfer** framing — carry a good passive down the chain to the Pal
  you want it on.
- Breeding engine implementing the game's nearest-combi-rank rule with
  same-species-breeds-true and a special-combo override table.
- Deployed as a single self-contained `index.html` on **GitHub Pages**.
