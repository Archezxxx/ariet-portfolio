import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
export default function MoonCursor() {
  const flower = useRef<HTMLDivElement>(null);
  const [host, setHost] = useState<Element>(document.body);
  useEffect(() => {
    const dialog = document.querySelector("#project-dialog");
    if (!dialog) return;
    const observer = new MutationObserver(() =>
      setHost(document.querySelector("dialog[open]") || document.body),
    );
    observer.observe(dialog, { attributes: true, attributeFilter: ["open"] });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const fine = matchMedia("(pointer:fine)");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0,
      x = 0,
      y = 0,
      tx = 0,
      ty = 0,
      last = 0,
      shown = false;
    const draw = (time: number) => {
      frame = 0;
      const dt = Math.min((time - last) / 16.67 || 1, 2);
      last = time;
      const k = reduce.matches ? 1 : 1 - Math.pow(0.82, dt);
      x += (tx - x) * k;
      y += (ty - y) * k;
      if (flower.current)
        flower.current.style.transform = `translate3d(${x}px,${y}px,0) rotate(${(tx - x) * 0.3}deg)`;
      if (Math.hypot(tx - x, ty - y) > 0.15)
        frame = requestAnimationFrame(draw);
    };
    const move = (event: PointerEvent) => {
      if (!fine.matches || event.pointerType === "touch") return;
      tx = event.clientX - 37;
      ty = event.clientY + 27;
      if (!shown) {
        shown = true;
        x = tx;
        y = ty;
      }
      if (flower.current) flower.current.style.opacity = "1";
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const leave = () => {
      shown = false;
      if (flower.current) flower.current.style.opacity = "0";
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    window.addEventListener("blur", leave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      window.removeEventListener("blur", leave);
    };
  }, [host]);
  return createPortal(
    <div
      ref={flower}
      id="moon-flower"
      className="moon-flower"
      aria-hidden="true"
    >
      <svg viewBox="0 0 80 80">
        <g fill="currentColor">
          {Array.from({ length: 6 }, (_, n) => (
            <ellipse
              key={n}
              cx="40"
              cy="25"
              rx="6"
              ry="16"
              transform={`rotate(${n * 60} 40 40)`}
            />
          ))}
          <circle cx="40" cy="40" r="5" />
        </g>
      </svg>
    </div>,
    host,
  );
}
