"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Cpu, Globe, Layers, Sparkles, Terminal } from "lucide-react";
import { CanvasScene } from "@/components/canvas/Scene";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";

// Projects showcase data
const projects = [
  {
    num: "01",
    title: "DAVOCHI",
    tags: ["HEALTHCARE", "PWA", "SEARCH ENGINE"],
    desc: "O'zbekiston aptekalaridagi 100+ dorini nomi va tarkibi bo'yicha tezkor qidirish ekotizimi. 3 tilda qidiruv, aptekalar xaritasi va oflayn kesh rejim.",
    link: "https://davochi.uz",
    badge: "LIVE PLATFORM",
  },
  {
    num: "02",
    title: "Maroqli",
    tags: ["ENTERTAINMENT", "GAMING", "WEBSOCKET"],
    desc: "O'yin-kulgi va gaming platformasi. Real-vaqt to'lov shlyuzlari, ko'p foydalanuvchili raqobat tizimi va yuqori tezlikdagi sinxronizatsiya.",
    link: "https://maroqli.uz",
    badge: "HIGH LOAD",
  },
  {
    num: "03",
    title: "Flora Holding",
    tags: ["ENTERPRISE", "LOGISTICS", "ERP SYSTEM"],
    desc: "Xalqaro eksport va logistika korporatsiyasi platformasi. Kunlik 60,000+ atirgul eksportini monitoring qiluvchi va avtomatlashtiruvchi boshqaruv panellari.",
    link: "https://floraholding.uz",
    badge: "GLOBAL EXPORT",
  },
  {
    num: "04",
    title: "InnoHub AI",
    tags: ["ARTIFICIAL INTELLIGENCE", "LLM", "INNOVATION"],
    desc: "Sun'iy intellekt algoritmlari va generativ LLM modellarini biznes jarayonlariga integratsiya qiluvchi innovatsiya markazi platformasi.",
    link: "https://innohub.ai",
    badge: "AI POWERED",
  },
  {
    num: "05",
    title: "or7",
    tags: ["CLOUD INFRASTRUCTURE", "DEVOPS", "DOCKER"],
    desc: "OTBK bulut infratuzilmasi — o'z-o'zini boshqaruvchi serverlar, kiber-xavfsiz API shlyuzlar va barqaror backend xizmatlari yagona boshqaruv markazi.",
    link: "https://or7.uz",
    badge: "CLOUD MATRIX",
  },
  {
    num: "06",
    title: "Airparvoz",
    tags: ["TRAVEL", "BOOKING", "ECOSYSTEM"],
    desc: "O'zbekiston va xalqaro turizm yo'nalishlari uchun zamonaviy sayohat, bron qilish va qulay aviachiptalar platformasi.",
    link: "https://airparvoz.uz",
    badge: "TRAVEL TECH",
  },
  {
    num: "07",
    title: "OTBK Botlar",
    tags: ["TELEGRAM API", "AIOGRAM 3", "AUTOMATION"],
    desc: "O'n minglab faol foydalanuvchiga ega media yuklovchi, to'lov qabul qiluvchi va intellektual guruhlarni boshqaruvchi avtomat-botlar.",
    link: "https://t.me/otbk_uz",
    badge: "100K+ USERS",
  },
];

// Tech Matrix capabilities
const capabilities = [
  {
    icon: Globe,
    title: "Next.js 14 & React Architecture",
    desc: "High-performance Server Components, dynamic streaming, and 100/100 Lighthouse web applications.",
  },
  {
    icon: Sparkles,
    title: "WebGL, Three.js & GLSL Shaders",
    desc: "Interactive 3D particle physics, custom shaders, chromatic post-processing, and tactile fluid dynamics.",
  },
  {
    icon: Terminal,
    title: "Python & aiogram 3 Automation",
    desc: "Scalable asynchronous bots handling thousands of concurrent webhook requests with PostgreSQL.",
  },
  {
    icon: Cpu,
    title: "Cloud & DevOps Infrastructure (or7)",
    desc: "Docker containerization, Nginx reverse-proxies, automated CI/CD pipelines, and 99.9% uptime architectures.",
  },
  {
    icon: Layers,
    title: "Full-Stack Node.js & Supabase",
    desc: "Real-time subscriptions, secure Row Level Security (RLS), edge functions, and RESTful/GraphQL microservices.",
  },
  {
    icon: Code2,
    title: "Logistics Enterprise Digitization",
    desc: "Flora Holding proven experience: automating multi-million dollar international export workflows.",
  },
];

// 777 Visual Archive images
const galleryItems = [
  { id: "01", src: "/assets/img13.png", alt: "777" },
  { id: "02", src: "/assets/img10.png", alt: "777" },
  { id: "03", src: "/assets/img14.png", alt: "777" },
  { id: "04", src: "/assets/img11.png", alt: "777" },
  { id: "05", src: "/assets/img12.jpg", alt: "777" },
  { id: "06", src: "/assets/img2.jpg", alt: "777" },
  { id: "07", src: "/assets/img5.jpg", alt: "777" },
  { id: "08", src: "/assets/img4.jpg", alt: "777" },
  { id: "09", src: "/assets/img6.jpg", alt: "777" },
  { id: "10", src: "/assets/img7.jpg", alt: "777" },
  { id: "11", src: "/assets/img8.jpg", alt: "777" },
  { id: "12", src: "/assets/img9.jpg", alt: "777" },
];

export default function LusionPortfolio() {
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Tashkent Live UTC+5 Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const tTime = new Date(utc + 3600000 * 5);
      setTime(
        `${String(tTime.getHours()).padStart(2, "0")}:${String(
          tTime.getMinutes()
        ).padStart(2, "0")}:${String(tTime.getSeconds()).padStart(2, "0")} UTC+5`
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SmoothScroll>
      {/* 1. Initial Interactive Preloader */}
      <Preloader />

      {/* 2. Custom Magnetic Cursor */}
      <CustomCursor />

      {/* 3. 3D WebGL Fluid Particles Background */}
      <CanvasScene />

      {/* 4. Fullscreen Navigation Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-8 md:p-16 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-6"
        }`}
      >
        <div className="flex justify-between items-center border-b border-white/10 pb-4 text-xs font-mono text-zinc-400">
          <span>[ OTBK MATRIX // 0ta777 ]</span>
          <span>41.2995° N, 69.2401° E // TASHKENT</span>
        </div>

        <nav className="my-auto flex flex-col gap-3">
          {[
            { num: "01", name: "Bosh sahifa", href: "#hero" },
            { num: "02", name: "Loyihalar", href: "#work" },
            { num: "03", name: "777 Galereya", href: "#gallery" },
            { num: "04", name: "Men haqimda", href: "#about" },
            { num: "05", name: "Xizmatlar", href: "#services" },
            { num: "06", name: "Bog'lanish", href: "#contact" },
          ].map((item) => (
            <a
              key={item.num}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-baseline gap-6 text-3xl md:text-6xl font-display font-bold hover:text-emerald-400 transition-all duration-300"
            >
              <span className="text-xs md:text-sm font-mono text-emerald-400">
                {item.num}
              </span>
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        <div className="flex justify-between items-center border-t border-white/10 pt-4 text-xs font-mono text-zinc-400">
          <div className="flex gap-6">
            <a href="https://t.me/otbk_uz" target="_blank" className="hover:text-emerald-400">Telegram ↗</a>
            <a href="https://instagram.com/0ta777" target="_blank" className="hover:text-emerald-400">Instagram ↗</a>
            <a href="https://github.com/otbk-uz" target="_blank" className="hover:text-emerald-400">GitHub ↗</a>
          </div>
          <div>© 2026 Otabek Ravshanov</div>
        </div>
      </div>

      {/* 5. Minimalist Lusion Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-14 py-6 flex items-center justify-between border-b border-white/5 bg-black/40 backdrop-blur-md">
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="font-display font-bold text-xl tracking-tight">
            OTBK<span className="text-emerald-400">.</span>
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-emerald-400/30 text-emerald-400 bg-emerald-400/10">
            777
          </span>
        </a>

        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>AVAILABLE FOR ARCHITECTURE & DEV</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-cursor="TALK"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black font-display text-xs font-bold tracking-wide hover:bg-emerald-400 transition-all duration-300"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-xs font-display font-semibold hover:border-white transition-all duration-300"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* 6. Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-14 pt-32 pb-16">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-emerald-400/30 text-emerald-400 bg-emerald-400/10">
                [ SYSTEM ARCHITECT // 0ta777 ]
              </span>
              <span className="text-xs font-mono text-zinc-400">
                TASHKENT {time}
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.95] mb-6">
              RAQAMLI OLAM<br />
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                ARXITEKTORI.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed mb-8">
              Otabek Ravshanov — Tizim arxitektori, dasturchi va IT tadbirkor.
              G&apos;oyalarni millionlab foydalanuvchilar uchun xizmat qiladigan barqaror platformalar,
              xalqaro logistika avtomatizatsiyasi va sun&apos;iy intellekt ekotizimlariga aylantiraman.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                data-cursor="EXPLORE"
                className="px-8 py-4 rounded-full bg-emerald-400 text-black font-display font-bold text-sm tracking-wide hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(74,222,128,0.3)]"
              >
                LOYIHALARNI KO&apos;RISH ↓
              </a>
              <a
                href="#about"
                className="px-8 py-4 rounded-full border border-white/20 bg-white/5 font-display text-sm font-semibold hover:border-white transition-all duration-300"
              >
                KONSEPSIYA // 777
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative p-2 rounded-2xl border border-white/20 bg-zinc-950/80 backdrop-blur-xl shadow-2xl max-w-xs w-full"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-black">
                <img
                  src="/assets/img13.png"
                  alt="Otabek Ravshanov - 0ta777"
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="flex justify-between items-center mt-3 px-1">
                <span className="text-[11px] font-mono text-zinc-400 tracking-wider">
                  OTBK // ARCHITECT
                </span>
                <span className="text-sm font-display font-bold text-emerald-400 tracking-widest">
                  777
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Selected Works Section */}
      <section id="work" className="py-24 px-6 md:px-14 border-t border-white/10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">
              [ 02 // SELECTED WORKS ]
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mt-2">
              MEN QURGAN MAHSULOTLAR.
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {projects.map((proj) => (
              <motion.article
                key={proj.num}
                whileHover={{ y: -4 }}
                className="group p-8 md:p-10 rounded-2xl border border-white/10 bg-zinc-950/60 backdrop-blur-lg hover:border-emerald-400/40 transition-all duration-300 shadow-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-2 text-sm font-mono text-emerald-400 tracking-widest">
                    {proj.num} / 07
                  </div>

                  <div className="md:col-span-8">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {proj.tags.map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/10 text-zinc-400">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-display font-bold group-hover:text-emerald-400 transition-colors duration-300 mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-4">
                      {proj.desc}
                    </p>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener"
                      data-cursor="VISIT"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 tracking-wider hover:underline"
                    >
                      <span>{proj.link.replace("https://", "")}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="md:col-span-2 flex md:justify-end">
                    <span className="text-xs font-mono px-3 py-1 rounded-full border border-white/10 text-zinc-400 bg-white/[0.02]">
                      {proj.badge}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 777 Visual Archive Gallery */}
      <section id="gallery" className="py-24 px-6 md:px-14 border-t border-white/10 bg-zinc-950/40 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">
              [ 03 // ARCHIVE 777 ]
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mt-2">
              VIZUAL ARTEFAKTLAR.
            </h2>
            <p className="text-sm md:text-base text-zinc-400 mt-2">
              Kadrlar ortidagi jarayonlar, intizom, liderlik va xotirjamlik lahzalari.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedImage(item.src)}
                data-cursor="777"
                className="group cursor-pointer rounded-xl overflow-hidden border border-white/10 bg-black flex flex-col shadow-lg"
              >
                <div className="aspect-[3/4] overflow-hidden bg-zinc-950 relative">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="w-10 h-10 rounded-full bg-emerald-400 text-black font-bold flex items-center justify-center text-lg">
                      +
                    </span>
                  </div>
                </div>
                <div className="p-3 text-center bg-zinc-950 border-t border-white/5">
                  <span className="font-display font-bold text-sm tracking-[0.3em] text-emerald-400 group-hover:tracking-[0.45em] transition-all duration-300">
                    777
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Identity & Capabilities Section */}
      <section id="about" className="py-24 px-6 md:px-14 border-t border-white/10 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">
              [ 04 // IDENTITY & PHILOSOPHY ]
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mt-3 mb-6">
              G&apos;OYANI BARQAROR RAQAMLI EKOTIZIMGA AYLANTIRAMIZ.
            </h2>
            <div className="rounded-2xl overflow-hidden border border-white/20 bg-zinc-950 p-2 shadow-2xl">
              <img
                src="/assets/img6.jpg"
                alt="Otabek Ravshanov"
                className="w-full aspect-[4/3.5] object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="text-[11px] font-mono text-zinc-400 mt-2 px-1">
                MANAGEMENT · FLORA HOLDING
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 text-zinc-300 text-base md:text-lg leading-relaxed">
            <p>
              Men <strong className="text-white">Otabek Ravshanov (0ta777)</strong> — IT mutaxassis, tizim arxitektori va tadbirkorman.
              Faoliyatimning asosiy maqsadi — murakkab biznes talablarini oson va qulay raqamli mahsulotga aylantirish.
            </p>
            <p>
              Bugungi kunda <strong className="text-white">Flora Holding</strong> kompaniyasida menejer sifatida xalqaro miqyosdagi ko&apos;p millionli
              eksport va logistika jarayonlarini to&apos;liq avtomatlashtirish, monitoring qilish va xatoliklarni nolga
              tushiruvchi boshqaruv dasturlarini joriy qilish bilan shug&apos;ullanaman.
            </p>
            <p>
              <strong className="text-white">OTBK</strong> va <strong className="text-white">or7</strong> brendlarim ostida mustaqil server infratuzilmalari,
              Telegram orqali yuqori yuklamali avtomat-botlar, zamonaviy Next.js/React platformalar va sun&apos;iy intellekt
              (AI) modellarini sinxron ishlatishga ixtisoslashganman.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              {[
                { num: "25+", lbl: "Loyihalar" },
                { num: "08+", lbl: "Jonli mahsulot" },
                { num: "100k+", lbl: "Foydalanuvchilar" },
                { num: "99.9%", lbl: "Tizim barqarorligi" },
              ].map((m) => (
                <div key={m.lbl} className="p-4 rounded-xl border border-white/10 bg-zinc-950/60">
                  <div className="text-2xl md:text-3xl font-display font-bold text-emerald-400">
                    {m.num}
                  </div>
                  <div className="text-xs font-mono text-zinc-400 mt-1">
                    {m.lbl}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Capabilities Grid */}
      <section id="services" className="py-24 px-6 md:px-14 border-t border-white/10 bg-zinc-950/40 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">
              [ 05 // CAPABILITIES ]
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mt-2">
              NIMALAR QILA OLAMAN.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="p-8 rounded-2xl border border-white/10 bg-zinc-950/80 hover:border-emerald-400/40 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-emerald-400 mb-6" />
                  <h3 className="text-xl font-display font-bold mb-3">
                    {c.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. Contact CTA Section */}
      <section id="contact" className="py-32 px-6 md:px-14 border-t border-white/10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">
            [ 06 // INITIATE CONTACT ]
          </span>
          <h2 className="text-4xl md:text-8xl font-display font-bold tracking-tighter mt-4 mb-6">
            LOYIHANGIZ BORMI?<br />
            <span className="text-emerald-400">GAPLASHAYLIK.</span>
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto mb-12">
            Yangi startap, tizim arxitekturasi yoki korporativ avtomatlashtirish bo&apos;yicha maslahat — istalgan vaqtda yozing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left mb-12">
            {[
              { type: "Telegram", handle: "@otbk_uz", link: "https://t.me/otbk_uz" },
              { type: "Instagram", handle: "@0ta777", link: "https://instagram.com/0ta777" },
              { type: "Telefon", handle: "+998 88 001 67 77", link: "tel:+998880016777" },
              { type: "Email", handle: "otabekxoff@gmail.com", link: "mailto:otabekxoff@gmail.com" },
            ].map((c) => (
              <a
                key={c.type}
                href={c.link}
                target="_blank"
                rel="noopener"
                data-cursor="CONNECT"
                className="group p-5 rounded-xl border border-white/10 bg-zinc-950/80 hover:border-emerald-400/50 flex justify-between items-center transition-all duration-300"
              >
                <div>
                  <div className="text-[11px] font-mono text-zinc-500 uppercase">{c.type}</div>
                  <div className="text-base font-display font-bold group-hover:text-emerald-400 transition-colors">
                    {c.handle}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Footer */}
      <footer className="py-12 px-6 md:px-14 border-t border-white/10 text-xs font-mono text-zinc-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>© 2026 Otabek Ravshanov · 0ta777</div>
        <div className="text-emerald-400">otbk.uz · or7.uz</div>
        <div>41.2995° N, 69.2401° E // TASHKENT</div>
      </footer>

      {/* 13. Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden border border-white/20 p-2 bg-black">
            <img
              src={selectedImage}
              alt="777 Enlarged"
              className="max-h-[80vh] w-auto object-contain rounded-xl"
            />
            <div className="text-center font-mono text-xs text-emerald-400 tracking-widest pt-3">
              OTBK · 777 VISUAL ARTIFACT
            </div>
          </div>
        </div>
      )}
    </SmoothScroll>
  );
}
