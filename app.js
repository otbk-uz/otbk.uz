/**
 * OTBK (0ta777) — Lusion.co 1:1 Interactive Engine
 * 3D WebGL Ribbons (Spline Tubes) · Scroll Camera Choreography · 3D Tilt · Web Audio Synth · Lightbox
 * Pure Zero-Dependency Architecture with Three.js WebGL & Graceful 2D Fallback
 */

(function () {
  "use strict";

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);
  const lerp = (start, end, factor) => start + (end - start) * factor;

  /* ==========================================================
     1. Lusion Magnetic Custom Cursor
     ========================================================== */
  function initCursor() {
    const cursor = $("#cursor");
    const dot = $("#cursor-dot");
    const ring = $("#cursor-ring");
    const text = $("#cursor-text");

    if (!cursor || !dot || !ring || window.matchMedia("(pointer: coarse)").matches) {
      if (cursor) cursor.style.display = "none";
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let dotX = mouseX;
    let dotY = mouseY;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function setHover(isHover, label = "") {
      if (isHover) {
        document.body.classList.add("cursor-hover");
        if (text) text.textContent = label;
      } else {
        document.body.classList.remove("cursor-hover");
        if (text) text.textContent = "";
      }
    }

    const hoverMap = [
      { sel: "a, button", label: "" },
      { sel: ".btn-approach", label: "YONDASHUV" },
      { sel: ".btn-talk-lusion", label: "BOG'LANISH" },
      { sel: ".btn-menu-lusion", label: "MENYU" },
      { sel: ".btn-sound-mini", label: "OVOZ" },
      { sel: ".screen-card", label: "REEL" },
      { sel: ".tablet-device", label: "3D STAGE" },
      { sel: ".work-row", label: "LOYIHA" },
      { sel: ".gal-card", label: "777" },
      { sel: ".scard", label: "XIZMAT" },
      { sel: ".clink-lusion", label: "ALOQA" }
    ];

    hoverMap.forEach(({ sel, label }) => {
      $$(sel).forEach((el) => {
        el.addEventListener("mouseenter", () => {
          const custom = el.getAttribute("data-cursor") || label;
          setHover(true, custom);
        });
        el.addEventListener("mouseleave", () => setHover(false));
      });
    });

    function render() {
      ringX = lerp(ringX, mouseX, 0.2);
      ringY = lerp(ringY, mouseY, 0.2);
      dotX = lerp(dotX, mouseX, 0.85);
      dotY = lerp(dotY, mouseY, 0.85);

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      dot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0)`;

      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }

  /* ==========================================================
     2. Lusion.co 1:1 Three.js 3D Ribbon & Spatial Engine
     ========================================================== */
  function init3DScene() {
    const canvas = $("#lusion-canvas");
    if (!canvas) return;

    // Check if Three.js is loaded
    if (typeof THREE === "undefined") {
      init2DFallbackRibbon(canvas);
      return;
    }

    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 28);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.4);
    dirLight1.position.set(20, 25, 20);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x3b82f6, 1.0);
    dirLight2.position.set(-20, -15, 10);
    scene.add(dirLight2);

    const cyanLight = new THREE.PointLight(0x00f0ff, 2.5, 60);
    cyanLight.position.set(0, -18, 14);
    scene.add(cyanLight);

    /* ----------------------------------------------------------
       Ribbon 1: The Iconic Lusion Electric Blue Curved Ribbon (Screenshot 4)
       Loops around the Hero curved stage and flows down
       ---------------------------------------------------------- */
    const bluePoints = [
      new THREE.Vector3(-18, 16, -8),
      new THREE.Vector3(-10, 18, 2),
      new THREE.Vector3(2, 14, 6),
      new THREE.Vector3(14, 8, -2),
      new THREE.Vector3(16, -2, 4),
      new THREE.Vector3(10, -12, -4),
      new THREE.Vector3(-2, -16, 2),
      new THREE.Vector3(-12, -10, -6),
      new THREE.Vector3(-16, 0, 2),
      new THREE.Vector3(-14, 10, -4),
      new THREE.Vector3(-2, 16, -6)
    ];

    const blueCurve = new THREE.CatmullRomCurve3(bluePoints, true, "centripetal", 0.5);
    const blueGeo = new THREE.TubeGeometry(blueCurve, 260, 1.35, 24, true);
    const blueMat = new THREE.MeshPhysicalMaterial({
      color: 0x2454ff,
      emissive: 0x071545,
      roughness: 0.12,
      metalness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95
    });
    const blueRibbon = new THREE.Mesh(blueGeo, blueMat);
    scene.add(blueRibbon);

    /* ----------------------------------------------------------
       Ribbon 2: The Glowing Cyan Orbit Ribbon (Screenshot 5 behind Tablet)
       Positioned at Section 2 (Approach / Tablet)
       ---------------------------------------------------------- */
    const cyanPoints = [];
    const cyanRadius = 9.5;
    const cyanSegments = 50;
    for (let i = 0; i <= cyanSegments; i++) {
      const theta = (i / cyanSegments) * Math.PI * 2;
      const x = Math.cos(theta) * cyanRadius - 3.5;
      const y = Math.sin(theta) * (cyanRadius * 0.75) - 20;
      const z = Math.sin(theta * 2) * 3.8 - 2;
      cyanPoints.push(new THREE.Vector3(x, y, z));
    }
    const cyanCurve = new THREE.CatmullRomCurve3(cyanPoints, true, "catmullrom", 0.4);
    const cyanGeo = new THREE.TubeGeometry(cyanCurve, 180, 0.85, 20, true);
    const cyanMat = new THREE.MeshPhysicalMaterial({
      color: 0x00f0ff,
      emissive: 0x004550,
      roughness: 0.15,
      metalness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });
    const cyanRibbon = new THREE.Mesh(cyanGeo, cyanMat);
    scene.add(cyanRibbon);

    /* ----------------------------------------------------------
       Floating 3D Atmospheric Particles
       ---------------------------------------------------------- */
    const particleCount = 140;
    const partGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 50;
      positions[i + 1] = (Math.random() - 0.5) * 100 - 25;
      positions[i + 2] = (Math.random() - 0.5) * 35;
    }
    partGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const partMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.35,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(partGeo, partMat);
    scene.add(particles);

    // Mouse Tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener("mousemove", (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // Resize Handler
    function onResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    window.addEventListener("resize", onResize);

    // Smooth Scroll State
    let scrollY = window.scrollY;
    let smoothScroll = scrollY;

    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
    }, { passive: true });

    // HTML Elements for Parallax and Monitor Zoom
    const stage = $(".curved-screen-stage");
    const tablet = $("#approachTablet") || $(".tablet-device");
    const tabletBezel = $("#tabletBezel");
    const tabletHud = $("#tabletHud");
    const approachContent = $("#approachContent");
    const monitorPortal = $("#monitorPortal");
    const approachTrack = $("#approach");

    let clock = new THREE.Clock();
    let warpFactor = 0;

    // Expose 3D camera warp trigger for menu & navigation transitions
    window.__triggerWarp = function() {
      warpFactor = 1.0;
    };

    function animate() {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Lerp mouse, scroll, and 3D warp
      mouseX = lerp(mouseX, targetMouseX, 0.05);
      mouseY = lerp(mouseY, targetMouseY, 0.05);
      smoothScroll = lerp(smoothScroll, scrollY, 0.06);
      warpFactor = lerp(warpFactor, 0, 0.06);

      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const scrollRatio = Math.min(1, Math.max(0, smoothScroll / maxScroll));

      // 3D Camera Travel along Y & Z with warp acceleration
      const targetCamY = -scrollRatio * 64;
      camera.position.y = lerp(camera.position.y, targetCamY, 0.08);
      camera.position.x = mouseX * 1.8 + Math.sin(scrollRatio * Math.PI * 2) * 2.0;

      let targetCamZ = 28 + Math.cos(scrollRatio * Math.PI) * 2.5 - (warpFactor * 16);

      // Ribbon 1 (Hero Blue Tube) 3D Motion (accelerates during 3D warp)
      const warpSpeed = 1 + warpFactor * 3.5;
      blueRibbon.rotation.y = time * 0.12 * warpSpeed + smoothScroll * 0.0018;
      blueRibbon.rotation.x = Math.sin(time * 0.2) * 0.12 + smoothScroll * 0.0006;
      blueRibbon.rotation.z = Math.cos(time * 0.15) * 0.08;

      // Ribbon 2 (Cyan Loop at Tablet) 3D Motion
      cyanRibbon.rotation.z = time * 0.2 * warpSpeed + smoothScroll * 0.0028;
      cyanRibbon.rotation.y = Math.sin(time * 0.18) * 0.25 + smoothScroll * 0.0012;
      cyanRibbon.rotation.x = Math.cos(time * 0.2) * 0.15;

      // Atmospheric Particles gentle float & warp streak
      particles.rotation.y = time * 0.03 * warpSpeed;

      // Hero Stage 3D Parallax on Scroll
      if (stage && smoothScroll < window.innerHeight * 1.5) {
        const tiltX = smoothScroll * 0.015;
        const scale = Math.max(0.9, 1 - smoothScroll * 0.00025);
        const transY = smoothScroll * 0.12;
        stage.style.transform = `perspective(1200px) rotateX(${tiltX.toFixed(2)}deg) scale(${scale.toFixed(3)}) translateY(${transY.toFixed(1)}px)`;
      }

      /* ----------------------------------------------------------
         1:1 LUSI0N.CO SIGNATURE: ZOOM DIVE INTO TABLET MONITOR PHOTO
         ---------------------------------------------------------- */
      if (approachTrack && tablet) {
        const trackRect = approachTrack.getBoundingClientRect();
        const totalDist = trackRect.height - window.innerHeight;
        const rawP = totalDist > 0 ? -trackRect.top / totalDist : 0;
        const p = Math.max(0, Math.min(1, rawP));

        if (p <= 0.02) {
          // Initial resting 3D isometric tilt
          tablet.style.transform = `perspective(1400px) rotateY(12deg) rotateX(4deg) translate3d(0, 0, 0) scale(1)`;
          if (approachContent) {
            approachContent.style.opacity = "1";
            approachContent.style.transform = "none";
          }
          if (tabletBezel) {
            tabletBezel.style.borderWidth = "";
            tabletBezel.style.borderRadius = "";
            tabletBezel.style.boxShadow = "";
          }
          if (tabletHud) tabletHud.style.opacity = "1";
          if (monitorPortal) monitorPortal.style.opacity = "0";
        } else if (p < 0.24) {
          // Phase 1: Straighten tablet up to face camera
          const alignP = p / 0.24;
          const rotY = 12 * (1 - alignP);
          const rotX = 4 * (1 - alignP);
          tablet.style.transform = `perspective(1400px) rotateY(${rotY.toFixed(2)}deg) rotateX(${rotX.toFixed(2)}deg) translate3d(0, 0, 0) scale(1)`;
          if (approachContent) {
            approachContent.style.opacity = "1";
            approachContent.style.transform = "none";
          }
          if (tabletHud) tabletHud.style.opacity = "1";
          if (monitorPortal) monitorPortal.style.opacity = "0";
        } else if (p < 0.88) {
          // Phase 2: DIVE INTO THE MONITOR (Photo expands to full screen)
          const diveP = (p - 0.24) / (0.88 - 0.24); // 0.0 -> 1.0
          const easeZoom = Math.pow(diveP, 2.5);
          const scale = 1 + easeZoom * 28; // Exponential scale from 1 to 29!

          // Centering shift towards viewport center (offset grid on desktop)
          const isWide = window.innerWidth > 960;
          const shiftX = isWide ? (window.innerWidth * 0.22 * Math.min(1, diveP * 2.2)) : 0;

          tablet.style.transform = `perspective(1400px) rotateY(0deg) rotateX(0deg) translate3d(${shiftX.toFixed(1)}px, 0, 0) scale(${scale.toFixed(3)})`;

          // Editorial philosophy text fades away and slides out
          if (approachContent) {
            const fade = Math.max(0, 1 - diveP * 3.2);
            approachContent.style.opacity = fade.toFixed(3);
            approachContent.style.transform = `translateX(${(diveP * 110).toFixed(1)}px) scale(${(1 - diveP * 0.08).toFixed(3)})`;
          }

          // Fade bezel border, radius and HUD so photo takes over screen seamlessly
          if (tabletBezel) {
            const borderW = Math.max(0, 8 * (1 - diveP * 2.5));
            const borderR = Math.max(0, 36 * (1 - diveP * 2.2));
            tabletBezel.style.borderWidth = `${borderW.toFixed(1)}px`;
            tabletBezel.style.borderRadius = `${borderR.toFixed(1)}px`;
            tabletBezel.style.boxShadow = `0 35px 80px rgba(0,0,0,${Math.max(0, 0.45 * (1 - diveP * 2)).toFixed(2)})`;
          }
          if (tabletHud) {
            tabletHud.style.opacity = Math.max(0, 1 - diveP * 4).toFixed(2);
          }

          // 3D WebGL Camera dives forward through the screen into the photo!
          targetCamZ -= easeZoom * 20;
          blueRibbon.scale.setScalar(1 + easeZoom * 1.6);
          cyanLight.intensity = 2.5 + easeZoom * 5.0;

          // Monitor portal tunnel glow
          if (monitorPortal) {
            const glow = Math.sin(diveP * Math.PI) * 0.85;
            monitorPortal.style.opacity = glow.toFixed(3);
          }
        } else {
          // Phase 3: Entered inside monitor, fully immersive portal
          const exitP = (p - 0.88) / 0.12;
          tablet.style.transform = `perspective(1400px) rotateY(0deg) rotateX(0deg) scale(29)`;
          if (approachContent) approachContent.style.opacity = "0";
          if (monitorPortal) monitorPortal.style.opacity = Math.max(0, 1 - exitP * 2).toFixed(3);
          targetCamZ -= 20;
        }
      }

      camera.position.z = lerp(camera.position.z, targetCamZ, 0.09);
      camera.lookAt(camera.position.x * 0.2, camera.position.y, 0);

      renderer.render(scene, camera);
    }

    animate();
  }

  /* Graceful 2D Fallback Ribbon (only used if WebGL/CDN is unavailable) */
  function init2DFallbackRibbon(canvas) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w, h;
    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    function render2D() {
      t += 0.015;
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 14;
      ctx.strokeStyle = "rgba(37, 99, 235, 0.4)";
      ctx.beginPath();
      for (let x = 0; x <= w; x += 30) {
        const y = h * 0.4 + Math.sin(x * 0.003 + t) * 80 + Math.cos(t * 0.5) * 40;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      requestAnimationFrame(render2D);
    }
    requestAnimationFrame(render2D);
  }

  /* ==========================================================
     3. Jazz Synthesizer — Warm Walking Bass & Brushed Chords
     ========================================================== */
  function initAudioExperience() {
    const toggle = $("#soundToggle");
    if (!toggle) return;

    let audioCtx = null;
    let isPlaying = false;
    let masterGain = null;
    let jazzInterval = null;
    let hihatInterval = null;

    // Jazz chord progressions (ii-V-I in C: Dm7 → G7 → Cmaj7 → Am7)
    const jazzChords = [
      [293.66, 349.23, 440.00, 523.25],  // Dm7 (D4, F4, A4, C5)
      [392.00, 493.88, 587.33, 698.46],  // G7 (G4, B4, D5, F5)
      [261.63, 329.63, 392.00, 493.88],  // Cmaj7 (C4, E4, G4, B4)
      [220.00, 261.63, 329.63, 392.00]   // Am7 (A3, C4, E4, G4)
    ];

    // Walking bass line notes
    const bassNotes = [146.83, 164.81, 174.61, 196.00, 220.00, 196.00, 174.61, 164.81];
    let bassIndex = 0;
    let chordIndex = 0;

    function playNote(freq, type, gain, duration, delay) {
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);
      g.gain.setValueAtTime(0.001, audioCtx.currentTime + delay);
      g.gain.exponentialRampToValueAtTime(gain, audioCtx.currentTime + delay + 0.06);
      g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + delay + duration);
      osc.connect(g);
      g.connect(masterGain);
      osc.start(audioCtx.currentTime + delay);
      osc.stop(audioCtx.currentTime + delay + duration + 0.05);
    }

    function playBrushHihat() {
      if (!audioCtx) return;
      // White noise burst filtered to hihat frequency
      const bufferSize = audioCtx.sampleRate * 0.04;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.15));
      }
      const src = audioCtx.createBufferSource();
      src.buffer = buffer;
      const hiG = audioCtx.createGain();
      hiG.gain.setValueAtTime(0.008, audioCtx.currentTime);
      const hiF = audioCtx.createBiquadFilter();
      hiF.type = "highpass";
      hiF.frequency.setValueAtTime(6000, audioCtx.currentTime);
      src.connect(hiF);
      hiF.connect(hiG);
      hiG.connect(masterGain);
      src.start();
    }

    function jazzTick() {
      // Walking bass note
      playNote(bassNotes[bassIndex % bassNotes.length], "triangle", 0.04, 0.45, 0);
      bassIndex++;

      // Every 2 beats, play chord voicing
      if (bassIndex % 2 === 0) {
        const chord = jazzChords[chordIndex % jazzChords.length];
        chord.forEach((freq, i) => {
          playNote(freq, "sine", 0.012, 0.8, i * 0.03);
        });
        if (bassIndex % 8 === 0) chordIndex++;
      }
    }

    function start() {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
        masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.7, audioCtx.currentTime + 1.5);
        masterGain.connect(audioCtx.destination);

        bassIndex = 0;
        chordIndex = 0;

        // Walking bass + chords at ~120 BPM (500ms per beat)
        jazzTick();
        jazzInterval = setInterval(jazzTick, 500);

        // Brushed hi-hat on swing eighths (~250ms)
        hihatInterval = setInterval(playBrushHihat, 250);

        isPlaying = true;
        toggle.classList.add("active");
      } catch (e) {
        console.warn("Jazz Audio blocked:", e);
      }
    }

    function stop() {
      if (masterGain && audioCtx) {
        masterGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
        clearInterval(jazzInterval);
        clearInterval(hihatInterval);
        setTimeout(() => {
          if (audioCtx) audioCtx.close();
          audioCtx = null;
          masterGain = null;
          isPlaying = false;
          toggle.classList.remove("active");
        }, 550);
      }
    }

    toggle.addEventListener("click", () => {
      if (!isPlaying) start();
      else stop();
    });

    // Jazz brush tick on hover
    function playJazzTick() {
      if (!isPlaying || !audioCtx) return;
      playNote(1318.51, "sine", 0.008, 0.05, 0); // E6 soft ping
    }

    $$("a, button, .gal-card, .work-row, .menu-item").forEach((el) => {
      el.addEventListener("mouseenter", playJazzTick);
    });
  }

  /* ==========================================================
     4. 3D Card Tilt Physics ([data-tilt])
     ========================================================== */
  function initTilt() {
    $$("[data-tilt]").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;

        const rx = ((y - cy) / cy) * -8;
        const ry = ((x - cx) / cx) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      });
    });
  }

  /* ==========================================================
     5. Magnetic Card Spotlight ([data-magnetic-card])
     ========================================================== */
  function initSpotlight() {
    $$("[data-magnetic-card]").forEach((c) => {
      c.addEventListener("mousemove", (e) => {
        const r = c.getBoundingClientRect();
        c.style.setProperty("--mx", e.clientX - r.left + "px");
        c.style.setProperty("--my", e.clientY - r.top + "px");
      });
    });
  }

  /* ==========================================================
     6. Lusion Floating Card Drawer Menu
     ========================================================== */
  function initMenu() {
    const toggle = $("#menuToggle");
    const overlay = $("#menu-overlay");
    const backdrop = $(".menu-drawer-backdrop");
    const menuItems = $$(".menu-item");
    const hoverIndicator = $(".menu-hover-indicator");

    const drawerStack = $(".menu-drawer-stack");

    if (!toggle || !overlay) return;

    function open() {
      document.body.classList.add("menu-open");
      overlay.setAttribute("aria-hidden", "false");
    }

    function close() {
      document.body.classList.remove("menu-open");
      overlay.setAttribute("aria-hidden", "true");
    }

    toggle.addEventListener("click", () => {
      if (document.body.classList.contains("menu-open")) close();
      else open();
    });

    // Click backdrop to close
    if (backdrop) backdrop.addEventListener("click", close);

    // 3D Spatial Transition on Menu Item Click
    menuItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        const href = item.getAttribute("href");
        if (!href || !href.startsWith("#")) return;
        e.preventDefault();

        menuItems.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");

        // 1. Trigger 3D Camera Warp in WebGL
        if (typeof window.__triggerWarp === "function") {
          window.__triggerWarp();
        }

        // 2. Add visual 3D cinematic flash overlay
        document.body.classList.add("warp-transition-active");

        // 3. 3D Menu Drawer Card Exit Animation
        if (drawerStack) {
          drawerStack.style.transition = "transform 0.4s cubic-bezier(0.7, 0, 0.3, 1), opacity 0.35s ease";
          drawerStack.style.transform = "perspective(1200px) rotateY(-18deg) translateZ(-90px) scale(0.92)";
          drawerStack.style.opacity = "0";
        }

        setTimeout(() => {
          close();
          if (drawerStack) {
            drawerStack.style.transform = "";
            drawerStack.style.transition = "";
            drawerStack.style.opacity = "";
          }

          // 4. Smoothly scroll to the target section
          const targetEl = document.querySelector(href);
          if (targetEl) {
            const headerHeight = 72;
            const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({
              top: Math.max(0, targetPos),
              behavior: "smooth"
            });
          }

          // 5. Release 3D warp flash
          setTimeout(() => {
            document.body.classList.remove("warp-transition-active");
          }, 650);
        }, 280);
      });

      // Magnetic hover indicator follows the hovered item
      item.addEventListener("mouseenter", () => {
        if (hoverIndicator) {
          const itemRect = item.getBoundingClientRect();
          const navRect = item.parentElement.getBoundingClientRect();
          hoverIndicator.style.top = (itemRect.top - navRect.top) + "px";
          hoverIndicator.style.height = itemRect.height + "px";
        }
      });
    });

    // Also wire up BIZNING YONDASHUV button in header to trigger 3D warp
    const approachBtn = $(".btn-approach");
    if (approachBtn) {
      approachBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (typeof window.__triggerWarp === "function") window.__triggerWarp();
        document.body.classList.add("warp-transition-active");
        const target = $("#approach");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
        setTimeout(() => {
          document.body.classList.remove("warp-transition-active");
        }, 650);
      });
    }

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.body.classList.contains("menu-open")) close();
    });
  }

  /* ==========================================================
     7. Header Scroll State
     ========================================================== */
  function initHeaderScroll() {
    const header = $("#header");
    if (!header) return;

    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 25);
    }, { passive: true });
  }

  /* ==========================================================
     8. Scroll Reveal & Metric Counting
     ========================================================== */
  function initRevealAndCounters() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.1 });

    $$(".reveal").forEach((el, i) => {
      el.style.transitionDelay = (i % 4) * 0.08 + "s";
      io.observe(el);
    });

    const counted = new Set();
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting || counted.has(en.target)) return;
        counted.add(en.target);

        const el = en.target;
        const target = +el.dataset.count;
        const duration = 1600;
        const start = performance.now();

        function step(now) {
          const progress = Math.min((now - start) / duration, 1);
          const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          el.textContent = Math.floor(ease * target);

          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target;
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });

    $$("[data-count]").forEach((el) => countObserver.observe(el));
  }

  /* ==========================================================
     9. 777 Gallery Lightbox Modal
     ========================================================== */
  function initLightbox() {
    const lightbox = $("#lightbox");
    const lightboxImg = $("#lightbox-img");
    const closeBtn = $(".lightbox-close");
    const backdrop = $(".lightbox-backdrop");

    if (!lightbox || !lightboxImg) return;

    function open(src) {
      lightboxImg.src = src;
      lightbox.classList.add("active");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function close() {
      lightbox.classList.remove("active");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      setTimeout(() => { lightboxImg.src = ""; }, 300);
    }

    $$(".gal-card").forEach((card) => {
      card.addEventListener("click", () => {
        const src = card.getAttribute("data-img") || card.querySelector("img")?.src;
        if (src) open(src);
      });
    });

    if (closeBtn) closeBtn.addEventListener("click", close);
    if (backdrop) backdrop.addEventListener("click", close);

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("active")) close();
    });
  }

  /* ==========================================================
     Bootstrap
     ========================================================== */
  function boot() {
    initCursor();
    init3DScene();
    initAudioExperience();
    initTilt();
    initSpotlight();
    initMenu();
    initHeaderScroll();
    initRevealAndCounters();
    initLightbox();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
