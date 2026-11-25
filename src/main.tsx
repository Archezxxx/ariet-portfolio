import { createRoot } from "react-dom/client";
import { lazy, Suspense } from "react";
import ShaderDemo_ATC from "@/components/ui/atc-shader";
import CurvedGallery from "@/components/ui/curved-gallery";
import MoonCursor from "@/components/ui/moon-cursor";
import { portfolio } from "virtual:portfolio-runtime";
import "@/styles.css";
import { usePortfolioPaused } from "@/src/use-portfolio";

const BackgroundLines = lazy(() =>
  import("@/components/ui/background-lines").then((module) => ({
    default: module.BackgroundLines,
  })),
);
function LabScene() {
  const paused = usePortfolioPaused();
  return (
    <Suspense fallback={null}>
      <BackgroundLines
        paused={paused}
        className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden bg-transparent md:h-full dark:bg-transparent"
      >
        {null}
      </BackgroundLines>
    </Suspense>
  );
}

document.documentElement.classList.toggle(
  "dark",
  portfolio.getTheme() === "dark",
);
document.addEventListener("portfolio:theme", () =>
  document.documentElement.classList.toggle(
    "dark",
    portfolio.getTheme() === "dark",
  ),
);
createRoot(document.getElementById("work-shader")!).render(<ShaderDemo_ATC />);
createRoot(document.getElementById("work-reel")!).render(<CurvedGallery />);
createRoot(document.getElementById("lab-background")!).render(<LabScene />);
const cursor = document.createElement("div");
cursor.id = "cursor-root";
document.body.append(cursor);
createRoot(cursor).render(<MoonCursor />);
