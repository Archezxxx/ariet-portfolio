import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import PixelArtCovers from "virtual:pixel-art-covers";
import MoonCursor from "@/components/ui/moon-cursor";
import {
  PROJECTS,
  PROJECT_ORDER,
  type Lang,
  type ProjectId,
} from "@/src/project-details";
import "@/styles.css";

const UI_TEXT: Record<
  Lang,
  {
    back: string;
    allProjects: string;
    stackTitle: string;
    prevProject: string;
    nextProject: string;
    pauseAnim: string;
    playAnim: string;
    themeDark: string;
    themeLight: string;
    simTitle: string;
    simNote: string;
    simTab: string;
    simCam: string;
    simReset: string;
    simReady: string;
    simWarn: (n: number) => string;
    simCamWarn: string;
    simBlocked: string;
  }
> = {
  en: {
    back: "Back to portfolio",
    allProjects: "All projects",
    stackTitle: "Tech Stack",
    prevProject: "Previous project",
    nextProject: "Next project",
    pauseAnim: "Pause pixel art",
    playAnim: "Play pixel art",
    themeDark: "Dark theme",
    themeLight: "Light theme",
    simTitle: "Interactive Proctoring Model",
    simNote:
      "Simulation only: test how the browser exam guard responds to tab-switching and camera events. No permissions are requested.",
    simTab: "Simulate tab switch",
    simCam: "Simulate camera drop",
    simReset: "Reset",
    simReady: "Session active · 0 violations",
    simWarn: (n) => `Warning ${n}/3 · Tab focus lost`,
    simCamWarn: "Camera stream interrupted · Proctoring alert logged",
    simBlocked: "3/3 violations · Exam session locked",
  },
  ru: {
    back: "Назад в портфолио",
    allProjects: "Все проекты",
    stackTitle: "Стек технологий",
    prevProject: "Предыдущий проект",
    nextProject: "Следующий проект",
    pauseAnim: "Пауза анимации",
    playAnim: "Запустить анимацию",
    themeDark: "Тёмная тема",
    themeLight: "Светлая тема",
    simTitle: "Интерактивная модель прокторинга",
    simNote:
      "Демонстрационная модель: проверьте реакцию системы на переключение вкладок и потерю камеры. Разрешения браузера не запрашиваются.",
    simTab: "Имитировать смену вкладки",
    simCam: "Имитировать сбой камеры",
    simReset: "Сбросить",
    simReady: "Сессия активна · 0 нарушений",
    simWarn: (n) => `Предупреждение ${n}/3 · Потеря фокуса вкладки`,
    simCamWarn: "Поток камеры прерван · Событие записано в журнал",
    simBlocked: "3/3 нарушений · Сессия экзамена заблокирована",
  },
  ky: {
    back: "Портфолиого кайтуу",
    allProjects: "Бардык долбоорлор",
    stackTitle: "Технологиялар",
    prevProject: "Мурунку долбоор",
    nextProject: "Кийинки долбоор",
    pauseAnim: "Анимацияны токтотуу",
    playAnim: "Анимацияны улантуу",
    themeDark: "Караңгы тема",
    themeLight: "Жарык тема",
    simTitle: "Интерактивдүү прокторинг модели",
    simNote:
      "Симуляция гана: өтмөк алмаштыруу жана камера окуяларына системанын реакциясын текшериңиз. Уруксат суралбайт.",
    simTab: "Өтмөк алмаштыруу",
    simCam: "Камера үзгүлтүгү",
    simReset: "Тазалоо",
    simReady: "Сессия активдүү · 0 бузуу",
    simWarn: (n) => `Эскертүү ${n}/3 · Өтмөк фокусу жоголду`,
    simCamWarn: "Камера агымы үзүлдү · Эскертүү жазылды",
    simBlocked: "3/3 бузуу · Экзамен сессиясы бөгөттөлдү",
  },
};

function readInitialProject(): ProjectId {
  const param = new URLSearchParams(window.location.search).get("id");
  if (param && param in PROJECTS) return param as ProjectId;
  return "ocr";
}

function readLang(): Lang {
  try {
    const saved = localStorage.getItem("ariet_language");
    if (saved === "en" || saved === "ru" || saved === "ky") return saved;
  } catch {}
  return "en";
}

function readTheme(): "dark" | "light" {
  try {
    const saved = localStorage.getItem("ariet_theme");
    if (saved === "dark" || saved === "light") return saved;
  } catch {}
  return "dark";
}

function PixelStage({
  projectId,
  paused,
}: {
  projectId: ProjectId;
  paused: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const covers = new PixelArtCovers([projectId]);
    const copyFrame = () => {
      const src = covers.getCanvas(projectId);
      if (!src) return;
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(src, 0, 0);
    };

    copyFrame();
    const unsub = covers.subscribe(copyFrame);
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    covers.setPaused(paused || reduced);

    return () => {
      unsub();
      covers.destroy();
    };
  }, [projectId, paused]);

  return (
    <canvas
      ref={canvasRef}
      width={320}
      height={180}
      className="project-hero-canvas"
      aria-label={`${PROJECTS[projectId].title} pixel animation`}
    />
  );
}

function ProjectPage() {
  const [projectId, setProjectId] = useState<ProjectId>(readInitialProject);
  const [lang, setLang] = useState<Lang>(readLang);
  const [theme, setTheme] = useState<"dark" | "light">(readTheme);
  const [paused, setPaused] = useState(false);
  const [violations, setViolations] = useState(0);
  const [camAlert, setCamAlert] = useState(false);

  const project = PROJECTS[projectId];
  const copy = project.locales[lang];
  const ui = UI_TEXT[lang];

  const currentIndex = PROJECT_ORDER.indexOf(projectId);
  const prevId =
    PROJECT_ORDER[(currentIndex - 1 + PROJECT_ORDER.length) % PROJECT_ORDER.length];
  const nextId = PROJECT_ORDER[(currentIndex + 1) % PROJECT_ORDER.length];

  useEffect(() => {
    document.title = `${project.title} — Developed by Ariet`;
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("ariet_language", lang);
    } catch {}
  }, [project.title, lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("ariet_theme", theme);
    } catch {}
  }, [theme]);

  useEffect(() => {
    const onPop = () => {
      setProjectId(readInitialProject());
      setViolations(0);
      setCamAlert(false);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const switchProject = (id: ProjectId) => {
    if (id === projectId) return;
    const url = new URL(window.location.href);
    url.searchParams.set("id", id);
    window.history.pushState({}, "", url.toString());
    setProjectId(id);
    setViolations(0);
    setCamAlert(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const simStatus =
    violations >= 3
      ? ui.simBlocked
      : camAlert
        ? ui.simCamWarn
        : violations > 0
          ? ui.simWarn(violations)
          : ui.simReady;

  return (
    <>
      <header className="site-header project-page-header">
        <a className="wordmark" href="index.html" aria-label="Ariet — home">
          Developed by Ariet
          <svg className="brand-symbol" viewBox="0 0 30 30" aria-hidden="true">
            <path d="M15 3v24M3 15h24M6.5 6.5l17 17M6.5 23.5l17-17" />
          </svg>
        </a>
        <div className="project-header-controls">
          <a className="quiet-button" href="index.html#work">
            ← {ui.back}
          </a>
          <div className="project-lang-pills" role="group" aria-label="Language">
            {(["en", "ru", "ky"] as Lang[]).map((code) => (
              <button
                key={code}
                type="button"
                className={`quiet-button ${lang === code ? "is-active" : ""}`}
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="quiet-button"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          >
            {theme === "dark" ? ui.themeLight : ui.themeDark}
          </button>
        </div>
      </header>

      <main className="project-page-main section-shell">
        <section className="project-hero-grid">
          <div className="project-hero-copy">
            <p className="project-eyebrow">
              <span>{project.number} / 05</span>
              <span>·</span>
              <span>{copy.category}</span>
            </p>
            <h1 className="project-hero-title">{project.title}</h1>
            <p className="project-hero-tagline">{copy.tagline}</p>

            <div className="project-facts-grid">
              {copy.facts.map((fact) => (
                <div key={fact.label} className="project-fact-cell">
                  <span className="project-fact-label">{fact.label}</span>
                  <strong className="project-fact-value">{fact.value}</strong>
                </div>
              ))}
            </div>

            <div className="project-hero-actions">
              {project.ctaHref && copy.ctaLabel && (
                <a
                  className="button"
                  href={project.ctaHref}
                  target={project.ctaExternal ? "_blank" : undefined}
                  rel={project.ctaExternal ? "noopener noreferrer" : undefined}
                >
                  {copy.ctaLabel}
                </a>
              )}
              <button
                type="button"
                className="quiet-button"
                onClick={() => setPaused((p) => !p)}
              >
                {paused ? ui.playAnim : ui.pauseAnim}
              </button>
            </div>
          </div>

          <div
            className="project-hero-stage"
            style={{ "--project-accent": project.accent } as React.CSSProperties}
          >
            <PixelStage projectId={projectId} paused={paused} />
          </div>
        </section>

        <section className="project-narrative-grid">
          <article className="project-narrative-block">
            <h2>{copy.overviewTitle}</h2>
            {copy.overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </article>
          <article className="project-narrative-block">
            <h2>{copy.solutionTitle}</h2>
            {copy.solution.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </article>
        </section>

        <section className="project-pipeline-section">
          <h2>{copy.pipelineTitle}</h2>
          <div className="project-pipeline-grid">
            {copy.pipeline.map((step, idx) => (
              <div key={step.title} className="project-step-card">
                <span className="project-step-num">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {projectId === "exam" && (
          <section className="project-sim-section">
            <h2>{ui.simTitle}</h2>
            <p className="secondary">{ui.simNote}</p>
            <div className="security-controls">
              <button
                type="button"
                className="quiet-button"
                onClick={() => {
                  setCamAlert(false);
                  setViolations((v) => Math.min(3, v + 1));
                }}
              >
                {ui.simTab}
              </button>
              <button
                type="button"
                className="quiet-button"
                onClick={() => setCamAlert(true)}
              >
                {ui.simCam}
              </button>
              <button
                type="button"
                className="quiet-button"
                onClick={() => {
                  setViolations(0);
                  setCamAlert(false);
                }}
              >
                {ui.simReset}
              </button>
            </div>
            <p className="security-result" role="status" aria-live="polite">
              {simStatus}
            </p>
          </section>
        )}

        <section className="project-narrative-grid">
          <article className="project-narrative-block">
            <h2>{copy.challengesTitle}</h2>
            <div className="project-challenges-list">
              {copy.challenges.map((c) => (
                <div key={c.problem} className="project-challenge-item">
                  <strong>{c.problem}</strong>
                  <p>{c.fix}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="project-narrative-block">
            <h2>{copy.deliverablesTitle}</h2>
            <ul className="project-deliverables-list">
              {copy.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className="project-stack-heading">{ui.stackTitle}</h3>
            <div className="project-stack-tags">
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        </section>

        <nav className="project-switcher" aria-label={ui.allProjects}>
          <a
            href={`project.html?id=${prevId}`}
            className="project-switch-card"
            onClick={(e) => {
              e.preventDefault();
              switchProject(prevId);
            }}
          >
            <span>← {ui.prevProject}</span>
            <strong>
              {PROJECTS[prevId].number} · {PROJECTS[prevId].title}
            </strong>
          </a>

          <div className="project-switch-dots">
            {PROJECT_ORDER.map((id) => (
              <a
                key={id}
                href={`project.html?id=${id}`}
                className={`quiet-button ${id === projectId ? "is-active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  switchProject(id);
                }}
              >
                {PROJECTS[id].title}
              </a>
            ))}
          </div>

          <a
            href={`project.html?id=${nextId}`}
            className="project-switch-card is-next"
            onClick={(e) => {
              e.preventDefault();
              switchProject(nextId);
            }}
          >
            <span>{ui.nextProject} →</span>
            <strong>
              {PROJECTS[nextId].number} · {PROJECTS[nextId].title}
            </strong>
          </a>
        </nav>
      </main>
    </>
  );
}

createRoot(document.getElementById("project-page-root")!).render(<ProjectPage />);
const cursor = document.createElement("div");
cursor.id = "cursor-root";
document.body.append(cursor);
createRoot(cursor).render(<MoonCursor />);
