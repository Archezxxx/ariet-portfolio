// Aerial flower transition: wind advection, drag, soft gravity, and finite life.
// Petals fade in flight, so they never collect on the floor.
// Optimized for 60-120fps with zero layout thrashing, in-place recycling, and bounded particle count.
class FlowerFluid {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.particles = [];
    this.frame = 0;
    this.heroBottom = 0;
    this.isLight = false;
    this.maxParticles = 60;
    this.sprites = ["#f3f2eb", "#203329"].map((color) => {
      const image = document.createElement("canvas");
      image.width = image.height = 80;
      const ctx = image.getContext("2d");
      ctx.translate(40, 40);
      ctx.fillStyle = color;
      for (let i = 0; i < 6; i++) {
        ctx.save();
        ctx.rotate((i * Math.PI) / 3);
        ctx.beginPath();
        ctx.ellipse(0, -13, 5.5, 15, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.beginPath();
      ctx.arc(0, 0, 4, 0, Math.PI * 2);
      ctx.fill();
      return image;
    });
    this.resize = () => {
      this.width = innerWidth;
      this.height = innerHeight;
      const scale = Math.min(devicePixelRatio || 1, 1.25);
      canvas.width = Math.round(this.width * scale);
      canvas.height = Math.round(this.height * scale);
      this.ctx?.setTransform(scale, 0, 0, scale, 0, 0);
    };
    addEventListener("resize", this.resize, { passive: true });
    this.resize();
    this.tick = this.tick.bind(this);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) this.stop();
    });
    matchMedia("(prefers-reduced-motion: reduce)").addEventListener(
      "change",
      (event) => {
        if (event.matches) this.stop();
      },
    );
  }
  launch(origin) {
    if (!this.ctx || reducedMotion.matches || motionPaused) return;
    this.origin = origin;
    this.emitted = 0;
    this.emitTime = 0;
    this.maxParticles = this.width < 768 ? 38 : 58;
    this.last = performance.now();
    const hero = document.getElementById("home");
    this.heroBottom = hero
      ? hero.getBoundingClientRect().bottom
      : this.height * 0.9;
    this.isLight = document.documentElement.dataset.theme === "light";
    this.canvas.hidden = false;
    this.canvas.dataset.active = "true";
    document.documentElement.classList.add("language-changing");
    if (!this.frame) this.frame = requestAnimationFrame(this.tick);
  }
  stop() {
    cancelAnimationFrame(this.frame);
    this.frame = 0;
    this.particles.length = 0;
    this.ctx?.clearRect(0, 0, this.width, this.height);
    this.canvas.hidden = true;
    this.canvas.dataset.active = "false";
    document.documentElement.classList.remove("language-changing");
  }
  spawn() {
    const target = Math.random() * this.width;
    const dispersed = this.emitted > this.maxParticles * 0.3;
    this.particles.push({
      x: dispersed ? target : this.origin.x + (Math.random() - 0.5) * 30,
      y: dispersed
        ? Math.random() * this.height * 0.7 - 30
        : this.origin.y + (Math.random() - 0.5) * 20,
      vx: dispersed
        ? (Math.random() - 0.5) * 100
        : (target - this.origin.x) * (0.6 + Math.random() * 0.3),
      vy: 42 + Math.random() * 75,
      radius: 4 + Math.random() * 6,
      angle: Math.random() * 6.28,
      spin: (Math.random() - 0.5) * 1.8,
      phase: Math.random() * 6.28,
      life: 1.4 + Math.random() * 1.4,
      age: 0,
    });
  }
  tick(now) {
    const dt = Math.min((now - this.last) / 1000, 1 / 30);
    this.last = now;
    this.emitTime += dt;
    const target = Math.min(
      this.maxParticles,
      Math.floor(this.emitTime * (this.maxParticles * 1.6)),
    );
    while (this.emitted < target) {
      this.spawn();
      this.emitted++;
    }
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.age += dt;
      p.vx += Math.sin(p.y * 0.006 + now * 0.0004 + p.phase) * 32 * dt;
      p.vx *= 1 - 0.55 * dt;
      p.vy += 26 * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt + Math.sin(p.age * 1.5 + p.phase) * 12 * dt;
      p.angle += p.spin * dt;
      const progress = p.age / p.life;
      ctx.globalAlpha =
        Math.max(0, Math.min(1, p.age * 4)) *
        Math.pow(Math.max(0, 1 - progress), 0.65);
      const size = p.radius * 2.8;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      const sprite =
        this.sprites[this.isLight && p.y > this.heroBottom ? 1 : 0];
      ctx.drawImage(sprite, -size / 2, -size / 2, size, size);
      ctx.restore();
    }
    let alive = 0;
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      if (
        p.age < p.life &&
        p.y < this.height + 40 &&
        p.x > -80 &&
        p.x < this.width + 80
      ) {
        this.particles[alive++] = p;
      }
    }
    this.particles.length = alive;
    if (this.particles.length || this.emitted < this.maxParticles) {
      this.frame = requestAnimationFrame(this.tick);
    } else {
      this.stop();
    }
  }
}
