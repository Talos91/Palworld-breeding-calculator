# Changelog

All notable changes to the **Palworld Companion & Breeding Calculator** are
documented here. Versions are assigned retroactively — one bump per development
"passage" — using [Semantic Versioning](https://semver.org/)-ish rules
(`MAJOR.MINOR.PATCH`).

The current release is shown in the app footer (`v1.5.1`).

---

## [1.5.1] — Hero header redesign

### Changed
- Rebuilt the app header into a **cinematic hero banner** — a layered scenic
  background (sky glow + mountain silhouette in the app's palette), a large
  "Palworld Companion" wordmark, a glass subtitle pill, and the action buttons
  cleanly clustered top-right (no more cramped/overlapping layout).
- **Optional custom key art:** drop an image at `img/hero.jpg` and it becomes
  the header background automatically (behind a readability scrim); without it,
  the designed default shows. Keeps the repo free of third-party art by default.

---

## [1.5.0] — Terraria Pals, effigy layers, visual glow-up & fixes

### Added
- **11 Terraria "Tides of Terraria" crossover Pals** (roster now **299**):
  Eye of Cthulhu, Demon Eye, Green/Blue/Illuminant/Purple/Rainbow/Red Slime,
  Enchanted Sword, Cave Bat, Illuminant Bat — with real datamined stats,
  elements, work suitabilities and portraits. They're catch-only (no breeding
  combi in the game data), so they show across the Dex/Map/Tiers but are
  correctly flagged non-breedable.
- **Per-type effigy map layers** — Lifmunk plus every Pal-effigy type
  (Lamball, Pengullet, Munchill, Rooby, Herbil, Tanzee, Depresso, Lunaris,
  Relaxaurus, Yakumo) each as its own toggle; tapping a marker shows what that
  effigy boosts. New **🗿 Effigies guide** lists all 13 types, counts & effects.
- **Ore split by material** — the mining layer is now separate **Ore, Coal,
  Sulfur, Pure Quartz, Pal Crystal and Nightstone** toggles (a gap vs
  palcompanion.com), so you can isolate the exact resource you're farming.

### Changed — 🎨 maximum visual glow-up
- Living **aurora** background, gradient-framed brand header with a glossy
  animated egg mark, page/tab **entrance animations**, frosted-glass bottom dock
  with a glowing active indicator, hover-lift cards & Pal tiles, vivid gradient
  element badges, glossy buttons, glowing stat/production bars and accent
  section headers. Fully theme-aware and respects reduced-motion.

### Fixed
- **Capture calculator** was collapsing to ~1% for the **Ultimate / Exotic /
  Sol / Ancient** spheres (their multiplier isn't in the datamine → the formula
  hit a null). Sphere power for those tiers is now derived from the datamined
  capture-level, giving a correct, monotonic curve across all 10 spheres.

---

## [1.4.0] — Combat tools, calculators, map layers, guides & localization

A large batch clearing the whole roadmap.

### Added — ⚔️ Combat section (new)
- **🐲 Boss Counter** — pick any boss (or one of the 83 map alpha bosses via a
  chip) and get its element plus your best counter Pals, ranked by attack, with
  a jump to the alphas on the map. Owned-only toggle.
- **🔷 Type Chart** — full 9-element super-effective matrix plus a per-element
  strong/weak quick reference.
- **🔴 Capture Calculator** — catch-odds estimate across every sphere from the
  target's datamined capture-correction, level, HP %, and status/grapple/night/
  alpha modifiers. Clearly labelled as a community-formula estimate.
- **💥 Damage Calculator** — attacker Attack × skill power × element advantage ÷
  defender Defense, with super-effective detection and counter-element hints.

### Added — collection & planning
- **Dex completion** bars (overall + catchable) on My Pals.
- **🎯 To-catch checklist** — every catchable Pal you're missing, each with a
  📍 jump to its spawns on the map.
- **Per-Pal notes & passives** — record notes and up to 4 passive skills on each
  owned Pal (synced to the cloud when signed in).
- **📸 Share as image** — render your collection (completion %, top attackers,
  portraits) to a PNG and share via the native share sheet or download.
- **📊 Base production throughput** — the Base planner now shows combined
  work-power per job with bottleneck flags.
- **Refined inheritance odds** — the Perfect Pal egg estimate now uses exact
  combinatorics over the datamined `Combi_PassiveInheritNum` counts instead of a
  flat guess.

### Added — 🗺️ map depth
- **Four new layers** merged from the PalDex datamine: **treasure chests
  (9,202)**, **ore / mining nodes (7,547)**, **egg nests (1,786)** and **fishing
  spots (700)** — aligned to the same map transform as the existing markers.
  Heavy layers default off and load lazily.
- **Nearest fast-travel** shown when you tap any non-fast-travel marker.

### Added — 📖 Guides & 🌐 localization
- **Guides** sub-tab in the Wiki: Beginner, Breeding meta, Best bases, and
  Combat & types.
- **Language selector** (🌐) — UI navigation & headings localized to Español,
  Français, Deutsch, Italiano, Português and 日本語 (Pal/item names stay
  canonical). Choice is persisted.

### Notes
- The capture and damage numbers are approximations — Palworld's real formulas
  live in Blueprint bytecode. The app labels them as estimates; relative
  comparisons are reliable, absolute values are not.

---

## [1.3.0] — Accounts & cloud sync

### Added
- **👤 Account & cloud sync** via Supabase — sign up / sign in with email +
  password and your **owned Pals, wishlist and base plan sync automatically**
  across every device on each change.
- Header account button with a sign-in / sign-out modal and a "Sync now" action.
- Graceful fallback: with no Supabase keys configured (or offline) the app runs
  exactly as before on browser-local storage — nothing to set up to use it.
- **`SUPABASE_SETUP.md`** — ~2-minute one-time setup: create a free project, run
  the provided SQL (a `profiles` table protected by Row-Level-Security so each
  user only ever sees their own row), and paste in your project URL + anon key.

### Security
- Row Level Security policies restrict every read/write to the signed-in user's
  own row; the anon key is safe to ship in the public static site.

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
