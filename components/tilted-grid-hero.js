/* Adapted from Ruixen's Tilted Grid Hero on 21st.dev (MIT).
 * The cylinder geometry and 16-strip construction preserve the supplied component.
 * Framework-free adapter for this site's existing HTML/CSS/JS runtime. */
class TiltedGridHero {
  static SLICES = 16;
  static CAMERA = 1.6;
  static MAX_WIDTH = 55;

  static arc(bend) {
    return (
      (this.CAMERA - 1 + Math.cos(bend)) / (2 * this.CAMERA * Math.sin(bend))
    );
  }

  static measure(width, height, tile, aspect, gap, bend) {
    const h = Math.min(
      (tile / 100) * height,
      ((this.MAX_WIDTH / 100) * width) / aspect,
    );
    const radius = width * this.arc(bend);
    if (!(h > 0) || !(radius > 0))
      return { columns: 2, sweep: 0, unit: 0, limit: 0, height: 0, radius: 0 };
    const deg = (rad) => (rad * 180) / Math.PI;
    const unit = deg(h / radius);
    const pitch = (aspect + gap / 100) * unit;
    const limit = deg(bend) + (aspect * unit) / 2;
    const columns = Math.min(60, Math.max(2, Math.ceil((2 * limit) / pitch)));
    const round = (value) => +value.toFixed(4);
    const sweep = round((columns * pitch) / 2);
    return {
      columns,
      sweep,
      unit: round(unit),
      limit: round(Math.min(sweep, limit)),
      height: h,
      radius,
    };
  }

  constructor(
    root,
    {
      images,
      speed = 4,
      tileHeight = 42,
      aspectRatio = 16 / 9,
      gap = 8,
      axis = 50,
      curve = 80,
      fade = 10,
      paused = false,
    } = {},
  ) {
    this.root = root;
    this.options = {
      images,
      speed,
      tileHeight,
      aspectRatio,
      gap,
      axis,
      curve,
      fade,
    };
    this.shown = new Map();
    this.globalPaused = paused;
    this.userPaused = false;
    this.visible = false;
    this.reduced = matchMedia("(prefers-reduced-motion: reduce)");
    this.band = root.querySelector(".reel-band");
    this.style = document.createElement("style");
    root.append(this.style);
    this.toggle = document.getElementById("reel-toggle");
    this.onToggle = () => {
      this.userPaused = !this.userPaused;
      this.syncPause();
    };
    this.toggle.addEventListener("click",this.onToggle);
    this.onVisibility = () => this.syncPause();
    document.addEventListener("visibilitychange", this.onVisibility);
    this.reduced.addEventListener("change", this.onVisibility);
    this.resize = new ResizeObserver(([entry]) =>
      this.layout(entry.contentRect.width, entry.contentRect.height),
    );
    this.resize.observe(root);
    this.intersection = new IntersectionObserver(([entry]) => {
      this.visible = entry.isIntersecting;
      this.syncPause();
    });
    this.intersection.observe(root);
    this.preloaded = images.map(({ src }) => {
      const image = new Image();
      image.src = src;
      return image;
    });
    root.dataset.ready = "true";
  }

  setGlobalPaused(value) {
    this.globalPaused = value;
    this.syncPause();
  }

  destroy(){
    this.resize.disconnect();this.intersection.disconnect();
    document.removeEventListener('visibilitychange',this.onVisibility);
    this.reduced.removeEventListener('change',this.onVisibility);
    this.toggle.removeEventListener('click',this.onToggle);
    this.style.remove();this.band.replaceChildren();
  }

  syncPause() {
    const paused =
      this.userPaused ||
      this.globalPaused ||
      this.reduced.matches ||
      !this.visible ||
      document.hidden;
    this.root.dataset.paused = String(paused);
    this.toggle.setAttribute("aria-pressed", String(this.userPaused));
    this.toggle.querySelector("span").textContent = t(
      this.userPaused ? "reel_resume" : "reel_pause",
    );
    this.toggle.querySelector("svg").innerHTML = this.userPaused
      ? '<path d="m7 4 10 6-10 6Z"/>'
      : '<path d="M7 4v12M13 4v12"/>';
  }

  setImage(tile, index) {
    const images = this.options.images;
    const image =
      images[((index % images.length) + images.length) % images.length];
    tile.dataset.cover = image.id;
    tile.querySelectorAll("img").forEach((img) => {
      if (img.getAttribute("src") !== image.src) img.src = image.src;
    });
  }

  layout(width, height) {
    const o = this.options;
    const bend = (Math.min(85, Math.max(5, o.curve)) * Math.PI) / 180;
    const next = TiltedGridHero.measure(
      width,
      height,
      o.tileHeight,
      o.aspectRatio,
      o.gap,
      bend,
    );
    if (!next.height || !o.images.length) {
      this.root.dataset.ready = "false";
      return;
    }
    const key = [width, height, next.columns, next.sweep, next.unit].join("/");
    if (key === this.lastLayout) return;
    this.lastLayout = key;
    const { columns, sweep, unit, limit, radius } = next;
    this.root.dataset.columns = columns;
    this.root.dataset.slices = TiltedGridHero.SLICES;
    const tileWidth = next.height * o.aspectRatio;
    const share = o.aspectRatio / TiltedGridHero.SLICES;
    const turn = (degrees) =>
      `translateZ(${radius.toFixed(3)}px) rotateY(${degrees.toFixed(4)}deg) translateZ(${-radius.toFixed(3)}px)`;
    const hide = +(((sweep - limit) / (2 * sweep || 1)) * 100).toFixed(4);
    this.style.textContent = `@keyframes portfolio-orbit{from{transform:${turn(-sweep)}}to{transform:${turn(sweep)}}0%,${hide}%,${100 - hide}%,100%{visibility:hidden}${hide + 0.001}%,${100 - hide - 0.001}%{visibility:visible}}`;
    this.band.style.perspective = `${radius * TiltedGridHero.CAMERA}px`;
    this.band.style.perspectiveOrigin = `50% ${o.axis}%`;
    this.band.style.maskImage = `linear-gradient(90deg,transparent,#000 ${o.fade}%,#000 ${100 - o.fade}%,transparent)`;
    this.band.style.webkitMaskImage = this.band.style.maskImage;
    this.band.replaceChildren();
    for (let index = 0; index < columns; index++) {
      const tile = document.createElement("div");
      tile.className = "reel-tile";
      tile.style.cssText = `left:${width / 2 - tileWidth / 2}px;top:${(height * o.axis) / 100 - next.height / 2}px;width:${tileWidth}px;height:${next.height}px;animation:portfolio-orbit ${columns * o.speed}s linear ${-index * o.speed}s infinite both;`;
      for (let strip = 0; strip < TiltedGridHero.SLICES; strip++) {
        const slice = document.createElement("div");
        slice.className = "reel-slice";
        slice.style.cssText = `left:${((o.aspectRatio - share) / 2) * next.height}px;width:${share * next.height + (strip === TiltedGridHero.SLICES - 1 ? 0 : 1)}px;height:${next.height}px;transform:${turn((o.aspectRatio / 2 - (strip + 0.5) * share) * unit)};`;
        const img = document.createElement("img");
        img.alt = "";
        img.draggable = false;
        img.width = 960;
        img.height = 540;
        img.style.cssText = `left:${-strip * share * next.height}px;width:${tileWidth}px;height:${next.height}px;`;
        slice.append(img);
        tile.append(slice);
      }
      const first = columns - 1 - index;
      this.setImage(tile, this.shown.get(index) ?? first);
      tile.addEventListener("animationiteration", (event) => {
        if (event.target !== tile) return;
        const lap = Math.round(event.elapsedTime / (columns * o.speed));
        const nextImage = lap * columns + first;
        this.shown.set(index, nextImage);
        this.setImage(tile, nextImage);
      });
      this.band.append(tile);
    }
    this.syncPause();
  }
}
