---
name: "made by Ariet"
description: "An immersive monochrome portfolio for software, automation, and entrepreneurial work."
colors:
  ground: "#080a0b"
  surface: "#111416"
  surface-2: "#1a1e20"
  ink: "#f3f2eb"
  secondary: "#b2b5b4"
  line: "#303537"
  button-ink: "#111414"
  mint: "#b8d3be"
  ice: "#c1d2e3"
  light-ground: "#f3f4f1"
  light-surface: "#e7eae5"
  light-surface-2: "#dde2dc"
  light-ink: "#141918"
  light-secondary: "#515c57"
  light-line: "#bac2bc"
  light-button: "#16201b"
  light-button-ink: "#f4f6f1"
  button-hover: "#d9e5da"
  button-hover-ink: "#152219"
  light-focus: "#365d40"
  paper: "#ebece4"
  paper-ink: "#26362c"
  answer-mark: "#304f3c"
  answer-correct: "#b4d0ae"
  answer-correct-line: "#267244"
  answer-incorrect: "#e6b2a0"
  answer-incorrect-line: "#a52b2b"
  answer-incorrect-mark: "#93312d"
  language-trigger: "#ffffff0c"
  language-trigger-border: "#ffffff24"
  language-trigger-hover: "#ffffff18"
  language-trigger-hover-border: "#ffffff55"
  language-panel: "#191e1b"
  language-hover: "#2a332d"
  language-selected: "#28322b"
  language-secondary: "#a8b8ad"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(76px, 11.8vw, 190px)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.055em"
  headline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(40px, 5.6vw, 80px)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  project-title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "30px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 600
  button:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.5
  about-lead:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(23px, 2vw, 30px)"
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: "-0.025em"
  work-index-title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "23px"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "-0.025em"
rounded:
  paper: "3px"
  fact: "6px"
  small: "8px"
  disclosure: "10px"
  compact-plate: "12px"
  plate: "16px"
  tag: "20px"
  quiet: "40px"
  pill: "100px"
  circle: "50%"
  reel-edge: "9px"
  language-panel: "14px"
spacing:
  gutter: "clamp(24px, 4.45vw, 72px)"
  section: "clamp(96px, 10vw, 160px)"
  control-gap: "10px"
  inline: "12px"
  control: "16px"
  compact: "20px"
  regular: "24px"
  project-gap: "28px"
  capability-gap: "32px"
  process-gap: "36px"
  heading-gap: "40px"
  mobile-section: "100px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.button-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "13px 26px"
  button-primary-hover:
    backgroundColor: "{colors.button-hover}"
    textColor: "{colors.button-hover-ink}"
  button-primary-light:
    backgroundColor: "{colors.light-button}"
    textColor: "{colors.light-button-ink}"
  button-muted:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "13px 26px"
    typography: "{typography.button}"
  button-quiet:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.quiet}"
    padding: "10px 16px"
    height: "44px"
  button-round:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    width: "44px"
    height: "44px"
  work-reel:
    width: "calc(100% + var(--gutter) * 2)"
    height: "clamp(360px, 39vw, 580px)"
  work-index-button:
    textColor: "{colors.ink}"
    typography: "{typography.work-index-title}"
    width: "100%"
    padding: "12px 0"
  language-trigger:
    backgroundColor: "{colors.language-trigger}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "10px 13px"
  language-trigger-expanded:
    backgroundColor: "{colors.language-trigger-hover}"
  language-panel:
    backgroundColor: "{colors.language-panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.language-panel}"
    padding: "7px"
    width: "216px"
  language-option:
    rounded: "{rounded.small}"
    padding: "12px"
  language-option-hover:
    backgroundColor: "{colors.language-hover}"
  language-option-selected:
    backgroundColor: "{colors.language-selected}"
  social-profile:
    rounded: "{rounded.small}"
    padding: "9px 18px"
  model-tag:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.tag}"
    padding: "5px 10px"
  answer-control:
    rounded: "{rounded.circle}"
    width: "44px"
    height: "44px"
  answer-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-ink}"
    rounded: "{rounded.paper}"
    padding: "25px 28px 24px"
  project-dialog:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    padding: "65px 55px 50px"
    width: "calc(100% - 40px)"
  journey-disclosure:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.disclosure}"
    padding: "8px 20px"
---
# Design System: made by Ariet

## Overview

**Creative North Star: "The Living Monochrome Stage"**

An authored monochrome landscape translates Ariet's supplied portfolio film into a spacious web experience. Monumental rounded lettering and a living perspective field introduce a developer in Bishkek; readable project evidence carries the rest. Clients and university admissions readers receive equal emphasis.

The system alternates an expressive stage with quiet, flat reading surfaces. The implemented canvas contains seeded six-petal marks and fine stems, arranged in a gently moving perspective landscape. Real HTML carries the identity, navigation, and calls to action above it. A curved work reel presents local project artwork above a static accessible index; the artwork explains the work and is not verified production photography or screenshots. Dark is the default; light mode changes reading surfaces while preserving the black introductory stage. The identity is written as made by Ariet. English is the initial language when no explicit preference is stored; subsequent choices persist.

**Key Characteristics:**
- Monumental Manrope lettering with compact, quiet navigation.
- A genuine canvas landscape with explicit motion control and a complete static reading path.
- A 16-strip cylindrical project reel, five accessible project entries, and direct explanatory interaction.
- Flat tonal surfaces, restrained project color, and native disclosure and dialog semantics.
- English by default, with persistent Russian and Kyrgyz choices in a custom listbox.

## Colors

A near-black and warm-white framework gives the name and work authority; muted project colors distinguish explanations without recoloring the entire site. Frontmatter contains the normative values; the runtime source is `styles.css`.

### Primary

- **Warm Ink** (`ink`): primary reading text and the default dark-theme filled action.
- **Muted Mint** (`mint`): OCR project artwork, identity motif, selected-language checkmark, and dark-theme focus outline.
- **Ice Blue** (`ice`): the exam project artwork. It is a project color, not a page-wide accent.

### Neutral

- **Night Ground / Surface / Raised Surface** (`ground`, `surface`, `surface-2`): page, lab and disclosure container, and compact secondary controls.
- **Soft Secondary / Functional Line** (`secondary`, `line`): supporting prose and meaningful process separators.
- **Button Ink** (`button-ink`): dark lettering on the default pale filled action.
- **Light Ground / Surface / Raised Surface** (`light-ground`, `light-surface`, `light-surface-2`): light-mode reading hierarchy, mapped to the corresponding runtime custom properties.
- **Light Ink / Secondary / Line** (`light-ink`, `light-secondary`, `light-line`): light-mode foreground roles.
- **Light Button / Button Ink** (`light-button`, `light-button-ink`): inverted filled action in light reading sections.
- **Hover Pair** (`button-hover`, `button-hover-ink`): soft green feedback for filled actions.
- **Light Focus** (`light-focus`): stronger green keyboard outline against light surfaces.
- **Answer Paper / Paper Ink** (`paper`, `paper-ink`): a stable pale answer sheet independent of page theme.
- **Answer States** (`answer-mark`, `answer-correct`, `answer-correct-line`, `answer-incorrect`, `answer-incorrect-line`, `answer-incorrect-mark`): selected marks and correct/incorrect feedback in the local model. Keep the result text and status announcement alongside color.

- **Language Trigger States** (`language-trigger`, `language-trigger-border`, `language-trigger-hover`, `language-trigger-hover-border`): restrained translucent fill and border for the black-stage trigger.
- **Language Popover States** (`language-panel`, `language-hover`, `language-selected`, `language-secondary`): dark neutral-green menu, separate hover and selected backgrounds, and subdued language abbreviations. These extend the established palette without changing its world.

**The The Stage Rule.** The introductory landscape stays near-black in both themes; theme changes apply to the reading environment.

**The The Evidence Rule.** Project color belongs to the work. Keep the page framework monochrome and identify local models and explanatory diagrams honestly.

## Typography

**Display Font:** Manrope, with Arial and sans-serif fallbacks.
**Body Font:** the same Manrope family; hierarchy comes from scale, weight, tracking, and line-height rather than an unrelated second face.

Manrope is self-hosted through three TTF assets: regular (400), the middle-weight face declared for 500?700, and heavy (800). The heavy face is preloaded, all faces use `font-display: swap`, and the assets support Cyrillic. Treat the declared middle-weight range as the implemented mapping, not proof that separate static files exist for every weight.

### Hierarchy

- **Display:** the frontmatter display role governs desktop identity. At widths up to 1000px it becomes proportional to the viewport; at 760px and below, the name becomes two intentional block lines, with the second line enlarged to 1.5 times the first and tighter line-height.
- **Headline:** fluid section headings, balanced wrapping, heavy weight, and close tracking. The OCR title, about title, dialog title, and contact invitation have deliberate contextual scales.
- **Work Index Title:** the current five-project index uses the `work-index-title` role, reducing to 21px on tablet and 20px on mobile, then 18px on narrow mobile. The earlier `project-title` primitive is retained for compatibility; the retired paired-plate layout no longer consumes it.
- **Body:** regular reading copy uses the body role, with paragraph width capped at 68 characters. Lab introduction is slightly larger; project summaries, process copy, and substantial biography copy retain the final reading scale.
- **About Lead:** a medium-weight opening statement with a looser line-height than display type.
- **Label / Button:** quiet navigation and controls; short descriptive captions can be smaller. Uppercase appears in actual project artifacts, not as a repeated label above every section.

**The The Readable Evidence Rule.** Preserve the final reading scale when extending the page; do not shrink substantive project or process copy to decorative caption size.

## Layout

Native document scroll connects the stage, five selected works, interactive OCR case, about and capabilities, four ordered workflow steps, and contact. Keep section headings and supporting copy open on the page, with containers reserved for artifacts and interaction.

The fluid outer gutter and section rhythm are frontmatter spacing tokens. At 1600px and above, section padding also respects a centered 1440px content span. The hero uses the full small viewport height, with explicit minimum and maximum heights; content remains real HTML over a decorative canvas.

- **Desktop:** a wide cylindrical work reel sits above a five-column text index. OCR and biography use two columns with generous inter-column space; the process uses four columns.
- **Tablet (761-1000px):** the work index becomes three columns and the reel has a 420px frame. The OCR case stacks with a centered lab stage, and the biography uses an uneven two-column split with a single capabilities column.
- **Mobile (760px and below):** outer gutter is fixed, navigation switches to a menu, and the large name becomes two lines. The 330px reel remains curved with tiles capped at 55% of frame width. Five accessible project rows pair a title button with explanatory text; OCR and biography stack, while the process becomes two columns. Social links hide secondary handles while preserving the icon and service name. Intentional desktop line breaks disappear where appropriate; preserve a whitespace character when joining translated text.
- **Narrow mobile (370px and below):** gutter reduces again, the reel frame becomes 300px high, the language trigger and social-link spacing tighten, and capabilities become a single column.

Review the hierarchy at 390px, 768px, and 1440px. These are inspection widths, not three interchangeable CSS breakpoints. Actual breakpoint values are recorded in the sidecar. Keep the curved reel, accessible index, popover, dialog overflow, long translated labels, and answer controls inside their available width.

## Elevation & Depth

Reading surfaces are predominantly flat and separated by tone. The supplied reel uses real cylindrical perspective, while the canvas supplies the introductory spatial field. The mobile menu and language popover use diffuse dark shadows. The native project dialog uses a dimmed, blurred backdrop rather than a pile of card shadows. The hero description has no final text shadow.

**The The Flat Reading Rule.** Use tonal separation for content. Reserve atmospheric depth for the stage and the native modal backdrop.

## Shapes

Lab surfaces and the dialog use gently curved rectangular corners. The reel retains gently rounded outer tile edges built from narrow strips; its static text index stays unboxed. The language panel has a modest rectangular radius and smaller option corners. Disclosure containers step down in radius. Answer paper is nearly square; its bubbles and icon actions are circular. Filled actions are full pills. Do not promote the pill radius to every container.

The answer control's visible small circle is drawn inside a larger true hit area. Keep its apparent paper scale while retaining its minimum interactive dimensions. Separators are functional: the four process items use a top rule, while most narrative text remains unboxed.

## Components

### Buttons

Filled actions are calm, high-contrast pills with room for a short label and optional inline SVG arrow. The primary action uses theme-aware button colors; the hero and header actions remain pale against the dark stage. Secondary contact actions use the raised surface, and quiet lab controls use a smaller pill. Hover lifts the filled action slightly and applies the hover pair; press scales it subtly. Round actions use a real 44px square target. Focus is a visible two-pixel outline offset from the control, stronger green on light reading surfaces. Disabled evaluation controls visibly reduce opacity while busy.

### Navigation

An absolute, unglazed header sits within the stage. The capitalized made by Ariet wordmark, simple navigation links, custom language trigger, and direct contact action share a quiet baseline. Desktop links reveal an underline on hover and keyboard focus. At the mobile breakpoint, a labelled 44px menu button controls a separate link panel through `aria-expanded` and `aria-controls`. Footer controls provide theme switching and direct Telegram, GitHub, and LinkedIn links.

### Language Listbox and Flower Fluid

The custom monochrome trigger combines a globe, current language code, and a rotating chevron. It exposes expanded state and controls a three-option listbox: English, Russian, and Kyrgyz. The selected option uses a background and checkmark together. Arrow keys, Home, and End move focus; Escape closes and returns focus to the trigger; Tab and outside clicks dismiss. Choosing a language persists it, updates copy, and returns focus. Kyrgyz uses KG as its visible code.

A changed choice briefly fades visible translated copy out and brings it back with a slight blur and vertical response. The falling flower fluid launches from the trigger as a decorative, pointer-transparent canvas. Its particles use gravity, neighbor pressure, cohesion, viscosity, and damped floor collisions before fading. The stage dims during this finite flow. Paused motion and reduced motion bypass the effect and apply language immediately; hidden documents stop the fluid. Choosing the already selected language closes the list without replaying the effect.

### Curved Work Reel, Index, and Dialog

Selected work uses the user-supplied Tilted Grid Hero, adapted from the supplied component to the existing static runtime. Each image tile is constructed from 16 strips around a cylinder with CAMERA 1.6, curve 80 degrees, and speed 4 seconds per tile. Tile sizing uses a 55% frame-width cap; the height fraction, 16:9 aspect, gap, and axis are measured into the cylinder geometry. Edge masks fade 10% at either side: this specific supplied-component treatment is an explicit exception to general gradient avoidance.

The reel band is decorative and pointer-transparent; all five projects remain available through the static semantic list underneath. Its buttons have descriptive names, visible focus, and animated directional arrows, and open the native project dialog. The reel has its own pause control and also stops for global pause, reduced motion, offscreen state, and hidden documents. Keep the readable index available independently of animation or gallery readiness.

Project detail buttons open a native `<dialog>` with an accessible heading, close control, constrained height, and scrollable content. Preserve native modal focus behavior and Escape dismissal, and return focus to the trigger. The exam security interaction is explicitly a local warning simulation and requests no permissions. Local project artwork and diagrams explain the projects; they are not verified production screenshots.

### Social Profiles

Telegram, GitHub, and LinkedIn use local monochrome SVG assets with service names. The contact row adds secondary handles on larger screens; mobile hides the handles and preserves labelled, comfortably sized links. Icon tone inverts with the reading theme, and the Telegram icon inside the filled contact action uses a currentColor CSS alpha mask and follows that button's foreground. Hover adds a tonal surface and slight lift. Keep the real profile destinations, keyboard focus, and text labels; do not substitute colored brand badges.

### Editable Answer Model

The OCR lab contains a real editable HTML answer sheet. Each question uses radio semantics, a selected state, keyboard navigation, and an actual minimum 44px control. Evaluation compares the current answers with a deterministic local key, announces status through a polite live region, adds textual results with color feedback, and enables CSV export. This is a model of the workflow, not image upload or a live OCR service. The scanning line is a bounded, short evaluation response; reduced-motion mode suppresses the visual scan and shortens the wait. Tilt changes the paper angle without changing the data.

### Tags and Disclosure

The small model tag is a contextual label, not a clickable filter. Facts in the dialog use compact tonal chips. The journey uses native `<details>` and `<summary>` with a real disclosure affordance and an ordered timeline. Keep these structural elements instead of replacing them with decorative cards.

### Ordered Process

The genuine four-step workflow is a semantic ordered list. Large tabular numbers and functional top rules establish order, with readable task descriptions below. Maintain its sequence as the grid changes from four columns to two.

### Living Stage and Motion

The stage is an actual 2D canvas with a seeded perspective field of six-petal marks and stems, slow wave travel, and restrained pointer response. Canvas content is decorative and hidden from assistive technology; real HTML carries identity and actions. Rendering bounds device pixel ratio, limits frame cadence, and stops when the hero is offscreen or the document is hidden. A persistent motion control updates its pressed state and label; reduced-motion preference initializes the stage paused. CSS also removes animations, transitions, and smooth scrolling for reduced motion. The page remains readable while motion is stopped.

A single staggered title arrival, the supplied cylindrical reel, the finite language-choice fluid, and restrained control feedback belong to this world. Do not apply repeated section entrances. Reduced motion preserves the static stage and all reading and interaction content, pauses the reel, and applies language without decorative transition.

## Do's and Don'ts

### Do:

- **Do** keep the black stage and real HTML identity above the canvas in both themes.
- **Do** preserve self-hosted Manrope, the capitalized Ariet identity, English initial language, and persistent explicit language choices at mobile, tablet, and desktop widths.
- **Do** keep actual interactive targets at least 44px, including answer-sheet bubbles.
- **Do** distinguish deterministic local models and code-native diagrams from production screenshots and verified results.
- **Do** retain native scrolling, visible keyboard focus, motion pause, and the reduced-motion reading path.
- **Do** preserve the four-step process as an ordered list and let project evidence precede the tool list.
- **Do** keep all five cases available through the static index below the decorative 16-strip reel.
- **Do** keep Telegram, GitHub, and LinkedIn icons monochrome with visible service labels.

### Don't:

- **Don't** add purple or blue mesh gradients, gradient headline text, floating glass navigation, or decorative glow blobs.
- **Don't** replace the authored hierarchy with a generic centered SaaS headline and three interchangeable cards.
- **Don't** nest every paragraph in rounded cards or shrink reading copy to make a layout fit.
- **Don't** make content depend on animation, scroll hijacking, camera permission, or sound autoplay.
- **Don't** present the local exam warning simulation or OCR answer model as a running production service.
- **Don't** invent testimonials, rates, availability, metrics, or project screenshots.
