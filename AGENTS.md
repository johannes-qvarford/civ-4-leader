# Civ 4 Leader Picker

## Project

Static, single-page app for choosing up to 8 Civilization IV leaders. It uses plain HTML, CSS, and JavaScript; there is no build step, package manager, test suite, or CI configuration.

- **Run**: open `index.html` in a browser (or serve the directory, for example with `npx serve .`).
- **Verify**: manually inspect the app in a browser after changes.

## Structure

```
index.html       → page shell; loads `style.css` and `script.js`
script.js        → leader data, autocomplete, persistence, and rendering
style.css        → all application styles
img/leaders/     → 52 WebP leader portraits, named `<leader-id>.webp`
```

## Application details

- `LEADERS` in `script.js` contains 52 records with `{ id, name, civ, traits[] }`. The IDs are unique and each has a matching portrait. Portrait paths are assembled from `IMG_PATH` and the leader ID; there is no `image` property in the data.
- The UI creates 8 labeled text inputs (`leader-0` through `leader-7`) at startup. They use autocomplete suggestions based on leader name and civilization, with fuzzy ranking; up to `MAX_SUGGESTIONS` matches are shown. Keyboard arrows navigate suggestions, Enter selects, and Escape closes the list.
- Selected leaders are displayed as 8 cards in `#results`, with portrait, name, civilization, and trait badges. `TRAIT_COLORS` maps traits to badge background colors.
- Picks are persisted under localStorage key `civ4-leader-picks` as a JSON array of 8 leader IDs or empty strings. `loadPicks()` restores valid IDs before the initial render.
- To add a leader, add a record to `LEADERS` and a matching `img/leaders/<id>.webp` portrait. Keep IDs and filenames lowercase kebab-case.

## Conventions

- Keep the app dependency-free and compatible with direct static hosting; JavaScript is a regular script, not a module.
- Use the existing DOM-building functions and class names when extending the UI. The code uses `createElement`/`appendChild` for elements, and clears generated suggestion/result contents with `innerHTML = ''`.
- Keep CSS class names kebab-case and follow the existing dark palette (`#1a1a2e` page background, `#16213e` cards/inputs, `#f0c27f` gold accent) and grid-based layouts.
- `index.html` loads the stylesheet in the `<head>` and the script at the end of `<body>`.

## Tooling

There is no configured linter, formatter, typechecker, bundler, automated test runner, or CI. `.gitignore` currently ignores `node_modules/`.
