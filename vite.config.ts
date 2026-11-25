import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { readFileSync, cpSync, existsSync } from "node:fs";
import { resolve } from "node:path";

// Keep the working portfolio behavior together while React owns visual islands.
// One module gives the existing scripts their original shared lexical scope.
function portfolioRuntime(): Plugin {
  const id = "\0virtual:portfolio-runtime";
  const files = ["locales.js", "components/tilted-grid-hero.js", "components/flower-fluid.js", "app.js"];
  return {
    name: "portfolio-runtime",
    resolveId(source) {
      if (source === "virtual:portfolio-runtime") return id;
    },
    load(source) {
      if (source !== id) return;
      files.forEach((file) => this.addWatchFile(resolve(file)));
      return (
        files.map((file) => readFileSync(resolve(file), "utf8")).join("\n") +
        `
        export const portfolio = {
          getLanguage: () => currentLang,
          translate: (key, vars) => t(key, vars),
          setLanguage: applyLanguage,
          getPaused: () => motionPaused,
          setPaused: value => { motionPaused = value; syncMotion(); },
          getTheme: () => theme,
          setTheme: value => { theme = value; syncTheme(); },
          openProject: id => { selectedProject=id; renderProject(id); dialog.showModal(); document.body.classList.add('dialog-open'); },
          mountGallery: (root, images) => new TiltedGridHero(root, {images, tileHeight:42, curve:80, speed:4, paused:motionPaused})
        };
        window.portfolio=portfolio;
      `
      );
    },
    handleHotUpdate({ file, server }) {
      if (files.some((item) => file === resolve(item))) {
        server.ws.send({ type: "full-reload" });
        return [];
      }
    },
    closeBundle() {
      cpSync(resolve("assets"), resolve("dist/assets"), { recursive: true });
      if (existsSync("CNAME")) cpSync(resolve("CNAME"), resolve("dist/CNAME"));
      if (existsSync(".nojekyll")) cpSync(resolve(".nojekyll"), resolve("dist/.nojekyll"));
    },
  };
}
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), portfolioRuntime()],
  resolve: { alias: { "@": resolve(".") } },
  server: { host: "127.0.0.1", port: 4173, strictPort: true },
  preview: { host: "127.0.0.1", port: 4173, strictPort: true },
  build: { outDir: "dist", emptyOutDir: true },
});
