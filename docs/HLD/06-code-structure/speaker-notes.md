# Slide 6 — Code structure

**Visual:** [slide.puml](./slide.puml)

- Two files only: `index.html` (layout and styling) and `app.js` (all behavior).
- `app.js` keeps one small `mic` object holding the live state; `tick()` is the heart of the program.
- `setState()` is the single place that changes the panel, used by both the manual buttons and the timer.
- Thresholds (`0.02` level, `300 ms` hold, `2500 ms` silence, `45 s` / `75 s`) are named constants at the top of the file for easy tuning.
- No dependencies, build step, or server: open `index.html` in a browser.
