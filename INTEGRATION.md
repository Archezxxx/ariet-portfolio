# Requested component integration

## Stack and layout

The portfolio now supports React 19, TypeScript, Vite, Tailwind CSS v4, Motion, `clsx`, `tailwind-merge`, and `lucide-react`. `components.json` configures the shadcn aliases and Aceternity registry. UI components live in `components/ui`, the `@/` alias resolves to the repository root, styles remain in `styles.css`, and `lib/utils.ts` exports the requested `cn` helper. This is implemented, so a separate shadcn bootstrap command is not needed.

The existing multilingual page and OCR logic are retained. Vite composes those scripts into one scoped runtime through a small local plugin; React owns the shader, background lines, gallery wrapper, and cursor follower. The bridge emits language, theme, and motion events. This preserves the existing content and behavior without duplicating the page in another framework.

## Background Lines — source and differences

`components/ui/background-lines.tsx` uses the official [Aceternity registry source](https://ui.aceternity.com/registry/background-lines.json), matching the supplied 21 path strings, 21 colors, two copies of each path, 2.3px strokes, dash variants, 10-second default duration, linear easing, infinite loop, random 0–9s initial delay, and 2–11s repeat delay. The original Tailwind utility strings remain intact. The named `BackgroundLines` export and optional `svgOptions.duration` remain.

Changes from the supplied source:

- Added an optional `paused` prop and Motion controls to honor the site's motion switch, pause when offscreen, and provide a still dash pattern for reduced motion. The supplied source did not contain reduced-motion handling even though the requested checks require it.
- The existing OCR section is the caller. Its `className` uses Tailwind utilities to override the standalone demo's height and white/black background with the section's actual height and a transparent background. `cn` merges those overrides as requested. Source path geometry, palette, and normal timing are unchanged.
- The standalone example remains in `components/background-lines-demo.tsx`. Its placeholder airline/textile copy is not put into Ariet's actual portfolio.

## ATC Shader — source and differences

`components/ui/atc-shader.tsx` retains the supplied WebGL2 vertex and fragment equations, uniforms, matrix transform, tanh replacement, 50-iteration raymarch, and elapsed-time input. It is mounted behind Selected work.

Changes from the supplied source:

- Corrected the invalid newline inside the example's error string and used a typed error handler. Debug details are stored on the decorative canvas rather than displayed over project content.
- The canvas fills the actual work section instead of creating another standalone `100vh` page. A restrained opacity and section-edge scrim keep project copy readable.
- Bounded backing resolution (320,000 pixels desktop, 130,000 mobile), pixel ratio, and frame cadence to keep the background practical. The fragment loop and normalized visual geometry remain the same.
- Added viewport/visibility pausing, the global motion switch, a still reduced-motion state, ResizeObserver sizing, resource cleanup, and a flat fallback when WebGL2 is unavailable. These change lifecycle and performance behavior, not the shader formula.

## Gallery and supplied artwork

Per the latest follow-up, the gallery retains the previous curved cylinder rather than the temporary full-size flat carousel. It uses the original 16-strip construction, camera 1.6, 80° curve, and four seconds per tile. The stage spans the section width and is taller on desktop. The five project buttons remain accessible outside the decorative band.

The six files in `Downloads/images.zip` were extracted to `assets/project-icons/` under stable ASCII filenames. Two archive files are identical. The five unique images are used for AIM OCR, AIM Exam, Cosmic Team, Consulteam, and AIM Cargo. They are project illustrations, not claimed production screenshots. No stock replacement imagery is added.

## Interaction refinements

- Liquid-metal buttons use reflective CSS surfaces with a moving highlight on hover. This intentionally replaces the previous flat-control styling at the user's request.
- The language menu keeps its native button/listbox keyboard behavior. Language changes animate text over 850ms with spatially staggered delays while flowers drift across the viewport and fade during flight. Floor collision and accumulation have been removed.
- Fine pointers use a native SVG moon cursor, with a spring-following flower. The follower moves into the native project dialog's top layer when necessary. Touch devices retain their normal input behavior; reduced motion removes the trailing lag.
- The biography keeps the real text and timeline, with a larger typographic introduction, a reflective Ariet monogram, and a compact skills layout. No invented portrait is used.

## Running

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

Dev and preview use port 4173. The deployable static output is `dist/`, including the existing CNAME. The new React build requires a local server; opening the source `index.html` directly is no longer a supported launch path. No remote publication is performed.
