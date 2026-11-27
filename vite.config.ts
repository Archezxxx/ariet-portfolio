import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { readFileSync, cpSync, existsSync } from "node:fs";
import { resolve } from "node:path";

// Keep the working portfolio behavior together while React owns visual islands.
// One module gives the existing scripts their original shared lexical scope.
function portfolioRuntime(): Plugin {
  const id = "\0virtual:portfolio-runtime";
  const pixelId = "\0virtual:pixel-art-covers";
  const files = ["locales.js", "components/pixel-art-covers.js", "components/tilted-grid-hero.js", "components/flower-fluid.js", "app.js"];
  return {
    name: "portfolio-runtime",
    resolveId(source) {
      if (source === "virtual:portfolio-runtime") return id;
      if (source === "virtual:pixel-art-covers") return pixelId;
    },
    load(source) {
      if (source === pixelId) {
        this.addWatchFile(resolve("components/pixel-art-covers.js"));
        return (
          readFileSync(resolve("components/pixel-art-covers.js"), "utf8") +
          "\nexport default PixelArtCovers;\n"
        );
      }
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
          openProject: id => openProjectWithPixels(id, null),
          mountGallery: (root, images) => new TiltedGridHero(root, {images, tileHeight:42, curve:80, speed:4, paused:motionPaused, onSelect: (id, rect) => openProjectWithPixels(id, rect)})
        };
        window.portfolio=portfolio;
      `
      );
    },
    handleHotUpdate({ file, server }) {
      if (files.some((item) => file === resolve(item))) {
        for (const modId of [id, pixelId]) {
          const mod = server.moduleGraph.getModuleById(modId);
          if (mod) server.moduleGraph.invalidateModule(mod);
        }
        server.ws.send({ type: "full-reload" });
        return [];
      }
    },
    closeBundle() {
      for (const item of ["assets/favicon.svg", "assets/fonts", "assets/icons"]) {
        if (existsSync(item)) {
          cpSync(resolve(item), resolve("dist", item), { recursive: true });
        }
      }
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
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve("index.html"),
        project: resolve("project.html"),
      },
    },
  },
});
