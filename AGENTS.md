# Civ 4 Leader Picker — AGENTS.md

## Project

Static single-page web app: pick up to 8 Civ 4 leaders. No build, no tests, no CI, no package manager.

- **Run**: open `index.html` in a browser (or `npx serve .`)
- **Verify**: manual only — inspect in browser after changes

## Structure

```
index.html       → entry point, loads style.css + script.js
script.js        → all JS (vanilla, no modules, no imports)
style.css        → all CSS
img/leaders/     → 48 WebP portraits, one per leader
```

## Key facts

- **`script.js`**: `LEADERS` array (48 entries), each with `{ id, name, civ, traits[], image }`. The `image` field is unused by display code — portraiture loads as `` `img/leaders/${leader.id}.webp` ``.
- **localStorage key**: `civ4-leader-picks` (JSON array of 8 leader IDs). `loadPicks()` runs before `render()` at startup.
- **DOM**: 8 `<select id="leader-0">` through `<select id="leader-7">`. Value is the leader `id` or `""`.
- **Adding a leader**: append to `LEADERS` array + add `img/leaders/<id>.webp`.
- **Trait colors**: `TRAIT_COLORS` map in `script.js:3-15` — hardcoded hex per trait.

## Style conventions

- **JS**: `const` over `let`, no `var`. Top-level `function` declarations. DOM built with `createElement` + `appendChild`, never `innerHTML` for template strings. `document.getElementById` for lookups.
- **CSS**: kebab-case class names, CSS Grid layout, dark theme (`#1a1a2e` bg, `#16213e` card, `#f0c27f` gold accent).
- **HTML**: blocking `<script>` at end of `<body>`, synchronous stylesheet in `<head>`.
- **IDs/kebab-case**: leader IDs, image filenames, DOM ids all kebab-case.

## No tooling

No linter, formatter, typechecker, or bundler configured. The `.gitignore` has `node_modules/` pre-added.
