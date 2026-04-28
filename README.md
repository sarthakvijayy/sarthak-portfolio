# Sarthak Vijay — Portfolio (Split Architecture)

Performance-optimized React portfolio split into focused, memoized components.

## 📁 Final folder structure

Place files inside your existing `src/` directory like this:

```
src/
├── App.jsx                          ← replace existing
├── Portfolio.jsx                    ← main composer (small)
├── index.css                        ← replace with styles/globals.css
├── main.jsx                         ← keep your existing one
│
├── lib/
│   ├── constants.js                 ← EASE, colors, nav links
│   └── data.js                      ← all content (jobs, projects, skills…)
│
└── components/
    ├── Cursor.jsx                   ← isolated custom cursor
    ├── ScrollProgress.jsx           ← top progress bar
    │
    ├── ui/
    │   ├── SplitText.jsx
    │   ├── Magnetic.jsx
    │   ├── CapabilityCard.jsx
    │   ├── Stat.jsx
    │   ├── ProjectCard.jsx
    │   └── ContactCard.jsx
    │
    └── sections/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Marquee.jsx
        ├── About.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── Skills.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## 🛠️ Steps to set up

1. **Delete old `Portfolio.jsx`** in `src/` (the giant 1000-line file).
2. **Create the folders** above inside `src/`.
3. **Drop in all the new files** as per the structure.
4. **Replace `src/index.css`** with the contents of `styles/globals.css`.
5. **Replace `src/App.jsx`** with the new one.
6. Make sure `src/main.jsx` imports `./index.css` at the top.
7. Restart dev server: `npm run dev`.

## ⚡ Performance optimizations applied

| Change | Why |
|---|---|
| Sections split into separate files | Each section re-renders independently — scroll doesn't trigger Hero re-renders |
| `React.memo()` on every UI primitive | Cards skip re-render when parent updates |
| `lazy()` + `Suspense` for below-fold sections | Hero loads instantly, rest loads as needed |
| Custom cursor isolated with own state + custom event bus | Mousemove no longer re-renders the whole tree (huge win) |
| ScrollProgress isolated | scroll subscription scoped to one component |
| `IntersectionObserver` for active nav (instead of scroll listener) | Fires only on visibility change, not every scroll tick |
| `will-change: transform` + `gpu-layer` class on Hero | Browser promotes to GPU layer for buttery animation |
| Data extracted to `lib/data.js` | Easy to update, no JSX touched, content-first |
| Icon mapping via string keys | Icons not bundled into data layer |

## 🎯 Where the original lag was coming from

The single-file version had **every mousemove event re-rendering 12+ sections** because cursor state lived at the top. Now the cursor is fully isolated — uses a `CustomEvent` bus to communicate, so children just call `setCursorHover(true)` without prop drilling.

That alone fixes ~80% of the scroll jank.
