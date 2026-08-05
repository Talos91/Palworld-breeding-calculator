# 🥚 Palworld Companion & Breeding Calculator

A single-file, offline web app covering the full current (Feybreak) roster of
**288 Pals**. Tabs:

- **🎯 Path to a target** — shortest breeding chain from a parent to any target;
  doubles as a **skill-transfer planner** (carry a passive down the chain).
- **🏆 Perfect Pal (multi-skill)** — pick up to 4 source Pals each with a desired
  passive + a target; get a two-phase build plan (route each skill onto the
  target, then stack them within the species), with a passive-inheritance egg
  estimate.
- **🧬 All combinations** — every child a parent can make and the partner for each.
- **🔎 Single pairing** — "A + B = ?" plus a **best-partner finder** (parent +
  wanted child → every partner that makes it).
- **🐾 Paldex** — a filterable dex of all Pals: search, filter by element/work,
  sort, and an **All/Owned/Missing/★Favorites** view. Tap **＋** to add to your
  collection or tap a Pal for a full **detail drawer** (stats incl. stamina/walk/
  run/ride/transport/craft/stomach, rhythm, price, breed power, drops with rates,
  work suitability, skills, matchups, favorite + breeding shortcut). Collection
  tools (traits/notes, breed-from-collection, "what can I breed?") live here too.
- **📝 Wishlist** — target Pals + desired skills, with per-entry plans and a
  **whole-wishlist farm optimizer** (shared intermediates merged).
- **🏅 Tiers & Jobs** — per-Pal **stat card** (HP/Atk/Def, rarity, size, mount
  type + speed, partner skill, work levels, drops); **tier lists** (fastest
  flying/ground/swimming mounts, strongest attackers, highest HP, best base
  Pals); and a **best-Pals-for-a-job** ranker.
- **⚔️ Combat** — **boss counter** (boss → best counter Pals by element & attack),
  a full **type-effectiveness chart**, and **capture** & **damage** calculators
  (labelled community estimates).
- **🏭 Base planner** — assign owned Pals to work slots, see work-coverage gaps
  and **production throughput** per job.
- **🗺️ Map** — Pal spawns (day/night/alpha), effigies, fast-travel, dungeons,
  merchants, plus **treasure chests, ore, egg nests & fishing spots**; pinch-zoom,
  clustering, and **nearest fast-travel** on any marker.
- **📖 Guides** — beginner, breeding meta, best bases, combat & types.

The UI navigation is **localized** (🌐): English, Español, Français, Deutsch,
Italiano, Português, 日本語. Sign in (👤) to **sync** your collection, wishlist,
base plan and per-Pal notes across devices (Supabase — see `SUPABASE_SETUP.md`).

Every Pal is tagged **catch** (wild-obtainable) or **breed-only**, has an element
badge and Paldeck number, and pickers filter by name/number/type/work skill.

> **Accounts & cloud sync** are built in (Supabase): sign in with the **👤**
> button and your owned Pals, wishlist and base plan sync across devices. It's
> optional — with no keys configured the app runs entirely on the browser's
> `localStorage` (use **Export** in My Pals to back up). See
> [`SUPABASE_SETUP.md`](SUPABASE_SETUP.md) for the ~2-minute setup.

## Run it

It's one self-contained file — no build step, no server, no internet needed.

- **Locally:** download `index.html` and double-click it (opens in any browser).
- **Hosted:** enable GitHub Pages (see below) and it's live at
  `https://talos91.github.io/palworld-breeding-calculator/`.

## Enabling GitHub Pages (one-time, ~1 minute)

1. Go to the repo's **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Set **Branch** to `main` and the folder to `/ (root)`, then **Save**.

Wait about a minute and the site goes live at
`https://talos91.github.io/palworld-breeding-calculator/`. Every future push to
`main` re-publishes it automatically — no workflow needed.

## How the breeding math works

- Each Pal has a **breeding combi-rank**. For a normal pairing, the child is the
  species whose combi-rank is closest to `floor((rankA + rankB + 1) / 2)`;
  equidistant ties resolve to the lower Paldeck id.
- **Same species + same species always breeds true.**
- A table of **special combos** (e.g. Relaxaurus + Sparkit = Relaxaurus Lux)
  overrides the formula.
- **Passive skills** are species-independent and a child inherits from *both*
  parents' pooled passives (up to the 4-skill cap), with RNG — which is why the
  multi-skill planner routes skills onto the target species first, then stacks
  them within the species.

## Data & credits

Breeding data (288 Pals covering the current Feybreak roster — dex #001–#204
incl. variant forms — with real datamined CombiRanks and 258 special combos)
comes from [CreativeTechGuy/PalworldDBIndex](https://github.com/CreativeTechGuy/PalworldDBIndex)
(datamined game DataTables) and is cross-checked against
[tylercamp/palcalc](https://github.com/tylercamp/palcalc). Passive-skill names,
ranks, and effect descriptions (145 inheritable skills) come from a Feybreak-era
datamine. To update for a later patch, edit the `PAL_DATA` / `PASSIVES` blocks
in `index.html`.

Pal portraits in `img/` are from
[tylercamp/palcalc](https://github.com/tylercamp/palcalc), stored by name-slug.

Not affiliated with Pocketpair. Palworld is a trademark of Pocketpair, Inc.
