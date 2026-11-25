# Ariet &mdash; AI & Automation Developer

> 11th-grade student, developer, and entrepreneur building real-world products with AI, automation, and software.  
> **Live Website:** [ariet.site](https://ariet.site)

---

## 🌟 About Me

I am an 11th-grade student with big ambitions and a strong interest in Artificial Intelligence, software development, automation, and entrepreneurship.

* **Experience:** Programming since 2023 (~3 years of practical software engineering).
* **Approach to AI:** I don't see AI only as a technology to study. I use modern AI tools (Antigravity, Claude Code, Codex, n8n) as part of my daily development workflow to prototype, build, debug, and improve projects faster.
* **Long-Term Goal:** Study at university, continue developing my technical and entrepreneurial capabilities, and make a meaningful contribution to the technological development of Kyrgyzstan.

---

## 📊 Key Numbers

* **3+ Years** &bull; Programming and software development
* **20,000+** &bull; Examination answer sheets automated for AALAM schools
* **6** &bull; AALAM school campuses equipped with automated grading
* **500+ kg** &bull; Cross-border packages transported from China to Kyrgyzstan (AIM Cargo)
* **3 Founders** &bull; Cosmic Team (Restaurant POS solutions across Kyrgyzstan)

---

## 🚀 Main Projects

### 1. AIM &mdash; EXAM OCR SYSTEM (Flagship)
**Automated examination checking system for AALAM school network in Kyrgyzstan (6 schools)**
* **The Problem:** 20,000+ physical paper examination sheets needed to be evaluated. Manual checking would require teachers to spend an immense amount of time with high risk of fatigue and error.
* **The Solution:** Team of 2 developed a desktop computer vision pipeline that processes scanner feeds, corrects skew through homography, dynamically snaps to bubbles, and exports final scores directly to Excel.
* **6-Step Pipeline:**
  1. Sheet Collection &rarr; 2. High-Speed Optical Scanning &rarr; 3. Image Transfer &rarr; 4. Computer Vision Processing (Hough fiducials + Homography matrix + Subpixel bubble snapping &plusmn;15px) &rarr; 5. Automated Score Calculation &rarr; 6. Excel Report Generation.
* **Impact:** 6 schools, 20,000+ sheets, reduced manual work for teachers, instant Excel reports.

### 2. AIM &mdash; EXAM WEBSITE
**Online entrance examination platform with proctoring defenses**
* **Anti Tab-Switch Monitoring:** Real-time detection when candidates navigate away or switch browser tabs. Warning alerts on first attempts; automatic exam disqualification upon repeat violations.
* **Camera Monitoring:** Webcam feed analyzed with client-side computer vision. Detects when more than one person enters the camera frame and alerts the candidate.
* **Secure Workflow:** Proctored test flow, question timer, and cheat prevention.

### 3. CONSULTTEAM &mdash; Landing Website
* Domain: [`consulteam.edu.kg`](https://consulteam.edu.kg)
* Developed a modern landing page for an educational consulting company assisting students with applications and admission to universities abroad.

### 4. AIM CARGO &mdash; Cross-Border Logistics Venture
* Small logistics business delivering packages from Chinese marketplaces (Taobao, 1688, Pinduoduo) to customers in Kyrgyzstan.
* Operated for ~1 year, transporting over 500 kg of parcels.
* Sourcing with Chinese suppliers, customs clearance, package tracking, customer communication, pricing, and registered individual business (ИП).

### 5. COSMIC TEAM &mdash; Restaurant POS Solutions
* Co-founded with two friends to build modern technology solutions for restaurants across Kyrgyzstan.
* Point-of-sale software, dining room table layouts, thermal receipt printing (ESC/POS protocol), and turn-key hardware deployment.

---

## 🛠️ Skills & Toolkit

* **Programming Languages:** Python, JavaScript, HTML5, CSS3
* **Development & Systems:** Backend Development, Web Development, API Integration, Databases, Process Automation, Computer Vision, OCR Systems
* **AI & Automation Tools:** Antigravity, Claude Code, Codex, n8n
* **Business & Operations:** Entrepreneurship, Product Development, International Logistics (China &rarr; KG), B2B Sales & Installation, Teamwork

---

## 🌐 Multi-Language Support

The portfolio uses a monochrome, video-inspired identity, self-hosted Manrope typography, a moving perspective flower field, and an interactive OMR evaluation model. Its semantic HTML page and existing interactions are supported by React visual components, TypeScript, Vite, and Tailwind CSS v4, with three languages:
* **English (en)**
* **Русский (ru)**
* **Кыргызча (ky)**

---

## 📬 Contact & Links

* **Website:** [ariet.site](https://ariet.site)
* **Email:** [ariet5656@gmail.com](mailto:ariet5656@gmail.com)
* **Telegram:** [@thearchhe](https://t.me/thearchhe)
* **GitHub:** [github.com/Archezxxx](https://github.com/Archezxxx)
* **LinkedIn:** [Ariet Saipidinov](https://www.linkedin.com/in/ariet-saipidinov-a45650448)

&copy; 2026 Ariet. AI & Automation Developer.

## Local preview

Requires Node.js 22.12+ or 24+. Install the project dependencies before starting Vite.

```sh
npm install
npm run dev
```

Open http://localhost:4173. `npm run check` checks TypeScript and JavaScript syntax. `npm run build` creates the static `dist/` output; `npm run preview` serves that build on the same port. Stop dev before running preview. Source `index.html` requires Vite and is not opened directly as a file.

The redesign is a local working copy in `Desktop/port`, branch `redesign/video-inspired`. The existing `CNAME` remains `ariet.site`. The preview command does not deploy the site.

## Editing and behavior

- `index.html`: English-first semantic page, accessible project index, custom language picker, and social profiles.
- `components/tilted-grid-hero.js` and `components/ui/curved-gallery.tsx`: the previous curved cylinder retained by request, with 16 slices per tile, responsive measurement, preloading, offscreen wrapping, and a gallery pause control.
- `components/flower-fluid.js`: finite flower flow beginning at the language trigger, then spreading across the screen with wind, drag, soft gravity, and fading during flight. No floor accumulation.
- `assets/work/`: five 960×540 covers captured from the site's own original HTML/CSS project illustrations.
- `styles.css`: Tailwind v4 entry, responsive layout, tokens, light/dark themes, self-hosted typography, and liquid-metal controls.
- `components/ui/atc-shader.tsx`, `background-lines.tsx`, `moon-cursor.tsx`: shader, source-based SVG background, and fine-pointer flower follower.
- `src/main.tsx`, `vite.config.ts`, `components.json`, `lib/utils.ts`: React mounts, scoped legacy-runtime bridge, shadcn aliases, and class-merging helper.
- `locales.js`: existing owner-supplied case-study translations. `app.js` adds the redesigned page copy and interactions.
- `app.js`: perspective scene, language/theme preferences, native project dialogs, OCR model, CSV export, exam behavior simulations, and mobile navigation.
- `DESIGN_DIRECTION.md`, `DESIGN.md`, `PRODUCT.md`: design decisions and factual content context.
- `assets/fonts`: Manrope from Google Fonts, licensed under SIL OFL 1.1; see `OFL.txt`.

The browser OCR model compares ten editable answers against a fixed key; it does not process uploaded scans. The production project described in the case study uses Python/OpenCV and exports Excel. The exam model simulates warnings without requesting camera access. The original generated illustrations remain in `assets/images` for reference and are not displayed as product screenshots.

Motion pauses when the hero is offscreen or the tab is hidden. The visitor can pause it manually; the system's reduced-motion setting is respected. No external font or animation requests are needed at runtime.

English is the initial language. An explicit visitor choice is remembered. The language menu supports arrow keys, Home, End, Escape, and focus restoration. Reduced motion changes language immediately without the flower flow. The curved gallery retains its still layout when paused. Sources and licenses for the 21st.dev adaptation and social icons are recorded in `THIRD_PARTY.md`.

Implementation differences from the supplied components, lifecycle choices, and build setup are documented in [INTEGRATION.md](INTEGRATION.md).
