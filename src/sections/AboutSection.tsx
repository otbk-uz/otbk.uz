import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Database, Globe, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRefs = useRef<HTMLDivElement[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      );

      // Text paragraphs stagger
      textRefs.current.forEach((ref, i) => {
        if (!ref) return;
        gsap.fromTo(
          ref,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref,
              start: 'top 85%',
            },
          }
        );
      });

      // Image reveal with clip-path
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', opacity: 0 },
        {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          opacity: 1,
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 75%',
          },
        }
      );

      // Decorative text parallax
      gsap.to(decorRef.current, {
        x: 100,
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Icons float in
      if (iconsRef.current) {
        gsap.fromTo(
          iconsRef.current.children,
          { y: 30, opacity: 0, rotate: -10 },
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: iconsRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  const techIcons = [
    { icon: Code2, label: 'Frontend' },
    { icon: Database, label: 'Backend' },
    { icon: Globe, label: 'DevOps' },
    { icon: Layers, label: 'Full Stack' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-40 overflow-hidden"
    >
      {/* Decorative background text */}
      <div
        ref={decorRef}
        className="absolute top-20 -right-20 font-orbitron text-[20vw] font-black text-white/[0.03] pointer-events-none select-none leading-none whitespace-nowrap"
      >
        ABOUT
      </div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Content */}
          <div className="lg:col-span-7">
            {/* Section label */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-bold">
                01 / Men haqimda
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
            </div>

            {/* Philosophy quote */}
            <h2
              ref={headingRef}
              className="text-3xl md:text-4xl lg:text-5xl font-bold italic text-white leading-tight mb-10"
            >
              "G'oyadan mahsulotgacha, prototipdan sanoatlashtirishgacha."
            </h2>

            {/* Bio paragraphs */}
            <div className="space-y-6">
              <div ref={addToRefs} className="text-lg text-[#888888] leading-relaxed">
                Men Otabek Ravshanov Avazbekovich — Toshkent shahrida faoliyat
                yurituvchi, 18 yoshli yuqori malakali dasturiy ta'minot
                arxitektori. 22-fevral kuni tug'ilganman. Web va mobil ilovalarni
                noldan loyihalashtirish, murakkab tizimlar yaratish va istalgan
                dasturlash tiliga tezkor moslashish qobiliyatiga egaman.
              </div>

              <div ref={addToRefs} className="text-lg text-[#888888] leading-relaxed">
                Dasturlashga bo'lgan sayohatim 2017-yilda boshlangan. Bir
                vaqtlar takvando sporti bilan shug'ullanganman, lekin
                keyinchalik uni to'xtatib, dasturlashga qiziqishimga asosiy
                e'tibor qaratishga qaror qildim. 2018-yilda Qo'qon Innavations
                dasturlash kursida o'qishni boshladim.
              </div>

              <div ref={addToRefs} className="text-lg text-[#888888] leading-relaxed">
                Bugungi kunda bir nechta muhim lavozimlarda ishlamoqda: Turon
                Beton MChJ da dasturiy ta'minotni ishlab chiqish bo'limi
                boshlig'i, Ravshanov AI (RAI) asoschisi va bosh arxitektori,
                InteliSoft strategik a'zosi va bosh maslahatchi, shuningdek
                Sinergiya hamkorlik loyihalarida hammuallif va texnik direktor.
              </div>

              <div ref={addToRefs} className="text-lg text-[#888888] leading-relaxed">
                Poliglot dasturchi sifatida har qanday murakkablikdagi
                loyihalarni bir nechta dasturlash tillarida amalga oshira
                olaman. React, Vue, Flutter, Python, JavaScript, TypeScript
                kabi texnologiyalarda chuqur tajribaga egaman.
              </div>
            </div>

            {/* Tech stack icons */}
            <div ref={iconsRef} className="flex flex-wrap gap-6 mt-12">
              {techIcons.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-5 py-3 border border-white/10 hover:border-[#D4AF37]/50 transition-colors duration-300 group"
                >
                  <Icon className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5 relative">
            {/* Side labels */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 hidden xl:block">
              <div className="vertical-text text-[10px] tracking-[0.4em] uppercase text-white/30 space-y-4">
                <span>Fullstack</span>
                <span className="text-[#D4AF37]">•</span>
                <span>5+ yil</span>
                <span className="text-[#D4AF37]">•</span>
                <span>Freelance</span>
              </div>
            </div>

            <div
              ref={imageRef}
              className="relative overflow-hidden"
            >
              <img
                src="/images/photo_2026-04-14_16-21-23.jpg"
                alt="Otabek Ravshanov"
                className="w-full h-[500px] lg:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">5+</div>
                    <div className="text-[10px] tracking-wider uppercase text-[#888888] mt-1">Yil tajriba</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#D4AF37]">20+</div>
                    <div className="text-[10px] tracking-wider uppercase text-[#888888] mt-1">Loyiha</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">10+</div>
                    <div className="text-[10px] tracking-wider uppercase text-[#888888] mt-1">Mijoz</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width workspace image */}
        <div className="mt-24 relative overflow-hidden">
          <img
            src="/images/photo_2026-04-14_16-21-43.jpg"
            alt="Workspace"
            className="w-full h-[40vh] md:h-[50vh] object-cover object-center opacity-60 hover:opacity-80 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xl md:text-2xl lg:text-3xl font-light italic text-white/80 text-center max-w-3xl px-6">
              "Har bir loyiha san'at asari kabi mukammal bo'lishi kerak"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
