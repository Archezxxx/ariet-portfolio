/* Procedural pixel-matrix animations for the Selected Work curved gallery.
 * Inspired by dot-matrix / particle-morphing pixel art on a deep dark ground. */
class PixelArtCovers {
  static WIDTH = 320;
  static HEIGHT = 180;
  static COLS = 64;
  static ROWS = 36;
  static CELL = 5; // 64 * 5 = 320, 36 * 5 = 180
  static FPS = 24;

  static THEMES = {
    ocr: {
      label: "01 / AIM OCR",
      bg: "#070a09",
      grid: "rgba(184, 211, 190, 0.055)",
      primary: [184, 211, 190],
      accent: [74, 222, 128],
      bright: [243, 242, 235],
    },
    exam: {
      label: "02 / AIM EXAM",
      bg: "#07090d",
      grid: "rgba(193, 210, 227, 0.055)",
      primary: [193, 210, 227],
      accent: [56, 189, 248],
      bright: [243, 242, 235],
    },
    cosmic: {
      label: "03 / COSMIC POS",
      bg: "#090807",
      grid: "rgba(245, 158, 11, 0.05)",
      primary: [226, 232, 240],
      accent: [245, 158, 11],
      bright: [243, 242, 235],
    },
    consult: {
      label: "04 / CONSULTEAM",
      bg: "#080a09",
      grid: "rgba(214, 211, 201, 0.05)",
      primary: [214, 211, 201],
      accent: [167, 243, 208],
      bright: [243, 242, 235],
    },
    cargo: {
      label: "05 / AIM CARGO",
      bg: "#0a0807",
      grid: "rgba(249, 115, 22, 0.055)",
      primary: [148, 163, 184],
      accent: [251, 146, 60],
      bright: [243, 242, 235],
    },
  };

  constructor(ids) {
    this.ids = ids;
    this.buffers = new Map();
    this.particles = new Map();
    this.listeners = new Set();
    this.paused = true;
    this.raf = 0;
    this.time = 1.4;
    this.lastTick = 0;

    for (const id of ids) {
      const canvas = document.createElement("canvas");
      canvas.width = PixelArtCovers.WIDTH;
      canvas.height = PixelArtCovers.HEIGHT;
      const ctx = canvas.getContext("2d", { alpha: false });
      this.buffers.set(id, { canvas, ctx });
      this.particles.set(id, this.createAmbientDust(id));
    }

    this.renderAll(this.time);
  }

  createAmbientDust(seedKey) {
    let seed = 0;
    for (let i = 0; i < seedKey.length; i++) {
      seed = (seed * 31 + seedKey.charCodeAt(i)) >>> 0;
    }
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };
    const items = [];
    for (let i = 0; i < 42; i++) {
      items.push({
        x: Math.floor(rand() * PixelArtCovers.COLS),
        y: Math.floor(rand() * PixelArtCovers.ROWS),
        phase: rand() * Math.PI * 2,
        speed: 0.6 + rand() * 1.4,
        drift: (rand() - 0.5) * 0.4,
        bright: rand() > 0.72,
      });
    }
    return items;
  }

  subscribe(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  setPaused(paused) {
    if (this.paused === paused) return;
    this.paused = paused;
    if (paused) {
      if (this.raf) cancelAnimationFrame(this.raf);
      this.raf = 0;
    } else {
      this.lastTick = performance.now();
      const loop = (now) => {
        if (this.paused) return;
        const elapsed = now - this.lastTick;
        if (elapsed >= 1000 / PixelArtCovers.FPS) {
          this.lastTick = now - (elapsed % (1000 / PixelArtCovers.FPS));
          this.time += Math.min(elapsed, 100) / 1000;
          this.renderAll(this.time);
          this.listeners.forEach((fn) => fn());
        }
        this.raf = requestAnimationFrame(loop);
      };
      this.raf = requestAnimationFrame(loop);
    }
  }

  destroy() {
    this.setPaused(true);
    this.listeners.clear();
    this.buffers.clear();
    this.particles.clear();
  }

  getCanvas(id) {
    return this.buffers.get(id)?.canvas ?? null;
  }

  plot(ctx, gx, gy, rgb, alpha = 1, size = 1) {
    if (gx < 0 || gy < 0 || gx >= PixelArtCovers.COLS || gy >= PixelArtCovers.ROWS) {
      return;
    }
    const a = alpha < 0 ? 0 : alpha > 1 ? 1 : alpha;
    if (a < 0.02) return;
    const c = PixelArtCovers.CELL;
    const pad = size === 1 ? 0.5 : 0;
    ctx.globalAlpha = a;
    ctx.fillStyle = rgb._css || (rgb._css = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`);
    ctx.fillRect(
      Math.round(gx) * c + pad,
      Math.round(gy) * c + pad,
      c * size - pad * 2,
      c * size - pad * 2,
    );
  }

  renderAll(t) {
    for (const id of this.ids) {
      const entry = this.buffers.get(id);
      if (!entry) continue;
      this.renderFrame(id, entry.ctx, t);
    }
  }

  renderFrame(id, ctx, t) {
    const theme = PixelArtCovers.THEMES[id] || PixelArtCovers.THEMES.ocr;
    const W = PixelArtCovers.WIDTH;
    const H = PixelArtCovers.HEIGHT;
    const C = PixelArtCovers.CELL;

    // Deep dark void background
    ctx.globalAlpha = 1;
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, W, H);

    // Subtle pixel-matrix grid
    ctx.fillStyle = theme.grid;
    for (let x = 0; x < W; x += C) {
      ctx.fillRect(x, 0, 1, H);
    }
    for (let y = 0; y < H; y += C) {
      ctx.fillRect(0, y, W, 1);
    }

    // Ambient twinkling pixel dust (like ffff.mp4 outer particles)
    const dust = this.particles.get(id) || [];
    for (const p of dust) {
      const tw = 0.5 + 0.5 * Math.sin(t * p.speed + p.phase);
      if (tw > 0.35) {
        const dx = (p.x + Math.sin(t * 0.4 + p.phase) * p.drift * 4 + PixelArtCovers.COLS) % PixelArtCovers.COLS;
        const rgb = p.bright ? theme.bright : theme.primary;
        this.plot(ctx, dx, p.y, rgb, (tw - 0.35) * 0.45);
      }
    }

    // Project-specific hero pixel-matrix animation
    if (id === "ocr") this.drawOcr(ctx, theme, t);
    else if (id === "exam") this.drawExam(ctx, theme, t);
    else if (id === "cosmic") this.drawCosmic(ctx, theme, t);
    else if (id === "consult") this.drawConsult(ctx, theme, t);
    else if (id === "cargo") this.drawCargo(ctx, theme, t);

    // Subtle vignette & corner pixel reticles
    this.plot(ctx, 2, 2, theme.primary, 0.45);
    this.plot(ctx, 3, 2, theme.primary, 0.25);
    this.plot(ctx, 2, 3, theme.primary, 0.25);

    this.plot(ctx, PixelArtCovers.COLS - 3, 2, theme.primary, 0.45);
    this.plot(ctx, PixelArtCovers.COLS - 4, 2, theme.primary, 0.25);
    this.plot(ctx, PixelArtCovers.COLS - 3, 3, theme.primary, 0.25);

    // Crisp monospace pixel tag at bottom-left
    ctx.globalAlpha = 1;
    ctx.fillStyle = "rgba(7, 10, 11, 0.72)";
    ctx.fillRect(8, H - 24, 126, 16);
    ctx.font = "700 10px ui-monospace, SFMono-Regular, Menlo, monospace";
    ctx.fillStyle = `rgb(${theme.bright[0]},${theme.bright[1]},${theme.bright[2]})`;
    ctx.fillText(theme.label, 14, H - 12);
  }

  drawOcr(ctx, theme, t) {
    // Sweeping laser scan across a pixelated OMR answer sheet
    const scanX = ((t * 14) % 44) + 10;
    const startX = 14;
    const startY = 7;

    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 10; col++) {
        const gx = startX + col * 4;
        const gy = startY + row * 4;
        const dist = scanX - gx;
        const isAnswer = ((row * 7 + col * 3) % 5) === 0;

        if (dist >= 0 && dist < 3) {
          // Active scan flash
          this.plot(ctx, gx, gy, theme.bright, 0.95);
          this.plot(ctx, gx + 1, gy, theme.accent, 0.85);
          this.plot(ctx, gx, gy + 1, theme.accent, 0.75);
        } else if (dist >= 3 && isAnswer) {
          // Verified answer cell glows mint/emerald
          const pulse = 0.75 + 0.25 * Math.sin(t * 4 + row);
          this.plot(ctx, gx, gy, theme.accent, pulse);
          this.plot(ctx, gx + 1, gy, theme.bright, pulse * 0.9);
          this.plot(ctx, gx, gy + 1, theme.accent, pulse * 0.85);
          this.plot(ctx, gx + 1, gy + 1, theme.primary, pulse * 0.7);
        } else {
          // Unscanned / empty bubble
          this.plot(ctx, gx, gy, theme.primary, isAnswer ? 0.35 : 0.16);
          this.plot(ctx, gx + 1, gy, theme.primary, 0.12);
        }
      }
    }

    // Vertical scan beam
    for (let y = 5; y <= 30; y++) {
      const glow = 0.55 + 0.45 * Math.sin(t * 6 + y * 0.3);
      this.plot(ctx, scanX, y, theme.bright, glow * 0.85);
      this.plot(ctx, scanX - 1, y, theme.accent, glow * 0.35);
    }
  }

  drawExam(ctx, theme, t) {
    // Pixelated biometric iris / proctoring reticle
    const cx = 32;
    const cy = 17;
    const pulse = 1 + 0.14 * Math.sin(t * 2.2);

    for (let y = 3; y < 32; y++) {
      for (let x = 14; x < 50; x++) {
        const dx = (x - cx) * 0.85;
        const dy = y - cy;
        const r = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx);

        // Outer rotating dashed ring
        if (Math.abs(r - 12 * pulse) < 0.85) {
          const seg = Math.sin(angle * 6 + t * 2.4);
          if (seg > -0.1) {
            this.plot(ctx, x, y, theme.primary, 0.6 + 0.3 * seg);
          }
        }
        // Inner iris ring
        else if (Math.abs(r - 6.5) < 0.9) {
          const sweep = Math.sin(angle * 2 - t * 3.2);
          this.plot(
            ctx,
            x,
            y,
            sweep > 0.3 ? theme.bright : theme.accent,
            0.55 + 0.4 * Math.max(0, sweep),
          );
        }
        // Core pupil
        else if (r < 2.6) {
          this.plot(ctx, x, y, r < 1.3 ? theme.bright : theme.accent, 0.95);
        }
      }
    }

    // Corner lock brackets
    const lock = 0.5 + 0.5 * Math.sin(t * 3);
    for (let i = 0; i < 4; i++) {
      this.plot(ctx, 16 + i, 5, theme.accent, 0.4 + lock * 0.5);
      this.plot(ctx, 16, 5 + i, theme.accent, 0.4 + lock * 0.5);
      this.plot(ctx, 48 - i, 29, theme.accent, 0.4 + lock * 0.5);
      this.plot(ctx, 48, 29 - i, theme.accent, 0.4 + lock * 0.5);
    }
  }

  drawCosmic(ctx, theme, t) {
    // Pixelated cosmic spiral / POS node constellation
    const cx = 32;
    const cy = 17;
    const arms = 3;
    for (let arm = 0; arm < arms; arm++) {
      const baseAngle = (arm * Math.PI * 2) / arms + t * 0.85;
      for (let i = 1; i <= 18; i++) {
        const dist = i * 0.85;
        const theta = baseAngle + i * 0.24;
        const x = cx + Math.cos(theta) * dist * 1.35;
        const y = cy + Math.sin(theta) * dist * 0.78;
        const fade = 1 - i / 21;
        const isNode = i % 5 === 0;
        const rgb = isNode ? theme.bright : i < 7 ? theme.accent : theme.primary;
        this.plot(ctx, x, y, rgb, fade * 0.95);
        if (isNode) {
          this.plot(ctx, x + 1, y, theme.accent, fade * 0.65);
          this.plot(ctx, x, y + 1, theme.accent, fade * 0.65);
        }
      }
    }
    // Bright central core
    const core = 0.75 + 0.25 * Math.sin(t * 4);
    this.plot(ctx, cx, cy, theme.bright, core);
    this.plot(ctx, cx + 1, cy, theme.accent, core * 0.85);
    this.plot(ctx, cx - 1, cy, theme.accent, core * 0.85);
    this.plot(ctx, cx, cy + 1, theme.accent, core * 0.85);
    this.plot(ctx, cx, cy - 1, theme.accent, core * 0.85);
  }

  drawConsult(ctx, theme, t) {
    // 3D rotating pixel globe + upward trajectory arc
    const cx = 32;
    const cy = 17;
    const R = 10.5;

    for (let lat = -3; lat <= 3; lat++) {
      const phi = (lat / 4) * (Math.PI / 2);
      const ry = Math.sin(phi) * R;
      const ringR = Math.cos(phi) * R;
      for (let lon = 0; lon < 14; lon++) {
        const theta = (lon / 14) * Math.PI * 2 + t * 0.9;
        const z = Math.sin(theta);
        if (z > -0.15) {
          const x = cx + Math.cos(theta) * ringR * 1.15;
          const y = cy + ry * 0.95;
          const depth = (z + 0.15) / 1.15;
          const rgb = depth > 0.75 ? theme.bright : depth > 0.4 ? theme.accent : theme.primary;
          this.plot(ctx, x, y, rgb, 0.25 + depth * 0.75);
        }
      }
    }

    // Rising trajectory beacon
    const prog = (t * 8) % 24;
    for (let s = 0; s < 16; s++) {
      const u = s / 15;
      const px = 14 + u * 36;
      const py = 26 - Math.pow(u, 1.3) * 18;
      const dist = Math.abs(s - prog);
      if (dist < 4) {
        this.plot(ctx, px, py, dist < 1.3 ? theme.bright : theme.accent, 1 - dist / 4);
      }
    }
  }

  drawCargo(ctx, theme, t) {
    // Pixelated mountain ridge (Tian Shan) & Silk Road cargo packets
    for (let x = 4; x < 60; x++) {
      const ridge =
        23 -
        Math.round(
          Math.abs(Math.sin(x * 0.13) * 5 + Math.cos(x * 0.27) * 2.5),
        );
      for (let y = ridge; y < 29; y++) {
        const edge = y === ridge;
        this.plot(
          ctx,
          x,
          y,
          edge ? theme.primary : theme.primary,
          edge ? 0.45 : 0.12,
        );
      }
    }

    // Curved logistics route arc from East (right) to West (left)
    const packet1 = (t * 15) % 48;
    const packet2 = (t * 15 + 24) % 48;
    for (let i = 0; i <= 48; i++) {
      const u = i / 48;
      const gx = 56 - i;
      const gy = 17 - Math.sin(u * Math.PI) * 8;

      if (i % 2 === 0) {
        this.plot(ctx, gx, gy, theme.primary, 0.22);
      }

      for (const p of [packet1, packet2]) {
        const d = Math.abs(i - p);
        if (d < 4) {
          const rgb = d < 1.2 ? theme.bright : theme.accent;
          this.plot(ctx, gx, gy, rgb, 1 - d / 4);
          if (d < 1.2) {
            this.plot(ctx, gx, gy - 1, theme.accent, 0.75);
          }
        }
      }
    }

    // Origin & destination beacons
    const beacon = 0.6 + 0.4 * Math.sin(t * 4);
    this.plot(ctx, 8, 17, theme.bright, beacon);
    this.plot(ctx, 56, 17, theme.accent, beacon);
  }

  static animateToDialog(id, sourceRect, onReady) {
    const theme = PixelArtCovers.THEMES[id] || PixelArtCovers.THEMES.ocr;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Target modal bounds matching .project-dialog
    const targetW = Math.min(800, vw - 40);
    const targetH = Math.min(540, vh * 0.82);
    const targetX = (vw - targetW) / 2;
    const targetY = (vh - targetH) / 2;

    const overlay = document.createElement("canvas");
    overlay.className = "pixel-assemble-overlay";
    overlay.width = Math.round(vw * dpr);
    overlay.height = Math.round(vh * dpr);
    document.body.append(overlay);

    const ctx = overlay.getContext("2d");
    if (!ctx) {
      overlay.remove();
      onReady();
      return;
    }
    ctx.scale(dpr, dpr);

    // Build pixel particles from the clicked gallery card to the modal grid
    const cols = 18;
    const rows = 12;
    const cellW = targetW / cols;
    const cellH = targetH / rows;
    const particles = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const isEdge = r === 0 || r === rows - 1 || c === 0 || c === cols - 1;
        // Skip some interior cells for airy, fast pixel-matrix feel
        if (!isEdge && (r + c) % 2 === 1 && Math.random() > 0.45) continue;

        const sx =
          sourceRect.left +
          (c / (cols - 1)) * sourceRect.width +
          (Math.random() - 0.5) * 18;
        const sy =
          sourceRect.top +
          (r / (rows - 1)) * sourceRect.height +
          (Math.random() - 0.5) * 18;
        const tx = targetX + c * cellW;
        const ty = targetY + r * cellH;

        const pick = Math.random();
        const rgb =
          isEdge && pick > 0.4
            ? theme.accent
            : pick > 0.82
              ? theme.bright
              : theme.primary;

        particles.push({
          sx,
          sy,
          tx,
          ty,
          w: Math.max(6, Math.min(12, cellW * 0.35)),
          delay: Math.random() * 0.18,
          arc: (Math.random() - 0.5) * 90,
          rgb,
          isEdge,
        });
      }
    }

    const duration = 520;
    const start = performance.now();
    let opened = false;

    const frame = (now) => {
      const elapsed = now - start;
      const p = Math.min(1, elapsed / duration);

      ctx.clearRect(0, 0, vw, vh);

      // Subtle backdrop dim
      ctx.fillStyle = `rgba(0, 0, 0, ${(p * 0.68).toFixed(3)})`;
      ctx.fillRect(0, 0, vw, vh);

      // As pixels gather (> 55%), materialize the dark modal surface
      if (p > 0.5) {
        const surfaceAlpha = Math.min(1, (p - 0.5) / 0.35);
        ctx.fillStyle = `rgba(17, 20, 22, ${(surfaceAlpha * 0.96).toFixed(3)})`;
        ctx.beginPath();
        ctx.roundRect(targetX, targetY, targetW, targetH, 16);
        ctx.fill();
      }

      // Draw flying pixels snapping into the modal
      for (const pt of particles) {
        const local = Math.max(0, Math.min(1, (p - pt.delay) / (1 - pt.delay)));
        const ease = 1 - Math.pow(1 - local, 3);
        const swirl = Math.sin(local * Math.PI) * pt.arc;
        const x = pt.sx + (pt.tx - pt.sx) * ease + swirl * 0.35;
        const y = pt.sy + (pt.ty - pt.sy) * ease - Math.abs(swirl) * 0.25;

        const alpha =
          local < 0.85
            ? 0.95
            : 0.95 * (1 - (local - 0.85) / 0.15);

        if (alpha > 0.02) {
          ctx.fillStyle = `rgba(${pt.rgb[0]},${pt.rgb[1]},${pt.rgb[2]},${alpha.toFixed(3)})`;
          const size = pt.w * (1 - ease * 0.25);
          ctx.fillRect(Math.round(x), Math.round(y), Math.round(size), Math.round(size));
        }
      }

      if (p >= 0.82 && !opened) {
        opened = true;
        onReady();
      }

      if (p < 1) {
        requestAnimationFrame(frame);
      } else {
        overlay.remove();
      }
    };

    requestAnimationFrame(frame);
  }
}
