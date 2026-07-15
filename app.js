/* ===== OTBK — interaktiv ===== */
(function () {
  "use strict";
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  /* Nav: scroll holati + mobil menyu */
  const nav = $(".nav");
  addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 20), { passive: true });
  const toggle = $("#navToggle"), links = $("#navLinks");
  toggle.addEventListener("click", () => { toggle.classList.toggle("open"); links.classList.toggle("open"); });
  links.addEventListener("click", (e) => { if (e.target.tagName === "A") { toggle.classList.remove("open"); links.classList.remove("open"); } });

  /* Reveal on scroll */
  const io = new IntersectionObserver((es) => {
    es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  $$(".reveal").forEach((el, i) => { el.style.transitionDelay = (i % 3) * 0.08 + "s"; io.observe(el); });

  /* Stat counters */
  const counted = new Set();
  const co = new IntersectionObserver((es) => {
    es.forEach((en) => {
      if (!en.isIntersecting || counted.has(en.target)) return;
      counted.add(en.target);
      const el = en.target, target = +el.dataset.count; let n = 0;
      const step = () => { n += Math.ceil(target / 28); if (n >= target) n = target; el.textContent = n; if (n < target) requestAnimationFrame(step); };
      step();
    });
  }, { threshold: 0.6 });
  $$("[data-count]").forEach((el) => co.observe(el));

  /* Work card spotlight */
  $$(".work-card").forEach((c) => {
    c.addEventListener("mousemove", (e) => {
      const r = c.getBoundingClientRect();
      c.style.setProperty("--mx", (e.clientX - r.left) + "px");
      c.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });

  /* Background particle grid ("raqamli olam") */
  const cv = $("#bg-canvas"), ctx = cv.getContext("2d");
  let w, h, pts, raf;
  const DPR = Math.min(devicePixelRatio || 1, 2);
  function resize() {
    w = cv.width = innerWidth * DPR; h = cv.height = innerHeight * DPR;
    cv.style.width = innerWidth + "px"; cv.style.height = innerHeight + "px";
    const count = Math.min(70, Math.floor(innerWidth / 22));
    pts = Array.from({ length: count }, (_, i) => ({
      x: ((i * 97) % innerWidth) * DPR,
      y: ((i * 53) % innerHeight) * DPR,
      vx: (((i * 13) % 10) / 10 - 0.5) * 0.25 * DPR,
      vy: (((i * 7) % 10) / 10 - 0.5) * 0.25 * DPR,
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }
    // ulanishlar
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d = Math.hypot(dx, dy);
        if (d < 130 * DPR) {
          ctx.strokeStyle = `rgba(74,222,128,${(1 - d / (130 * DPR)) * 0.16})`;
          ctx.lineWidth = DPR;
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
        }
      }
    }
    for (const p of pts) {
      ctx.fillStyle = "rgba(74,222,128,.45)";
      ctx.beginPath(); ctx.arc(p.x, p.y, 1.4 * DPR, 0, 7); ctx.fill();
    }
    raf = requestAnimationFrame(draw);
  }
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    resize(); draw();
    addEventListener("resize", () => { cancelAnimationFrame(raf); resize(); draw(); });
  }
})();
