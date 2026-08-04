# 🥚 Palworld Breeding Path Calculator

A single-file, offline web app that, **starting from one parent Pal**, tells you:

- **🎯 Path to a target** — the shortest breeding chain from a parent to any target species. Doubles as a **skill-transfer planner**: your Cattiva has a great passive and you want it on a Jetragon → it finds the shortest species chain so you carry the passive down the line.
- **🏆 Perfect mount (multi-skill)** — pick up to **4 source Pals**, each carrying a passive skill you want, plus a final target species. It produces a two-phase build plan: (1) route each skill onto the target species, then (2) stack all the skills within the target species (same-species breeding never drifts the species).
- **🧬 All combinations** — every child a given parent can produce, and which partner makes each.
- **🔎 Single pairing** — quick "A + B = ?" lookup.

Every Pal is tagged **catch** (wild-obtainable) or **breed-only**, and you can restrict paths to only route through catchable partners.

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

Breeding data (137 Pals, combi-ranks, 32 special combos) is community-sourced
from datamined breeding calculators. It reflects the base-game roster and may
need updating for later game patches — edit the `PAL_DATA` block in `index.html`.

Not affiliated with Pocketpair. Palworld is a trademark of Pocketpair, Inc.
