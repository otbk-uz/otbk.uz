import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextScramble from '../components/TextScramble';
import TiltCard from '../components/TiltCard';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const decorLetterRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scanlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const badge = badgeRef.current;
    const image = imageRef.current;
    const decorLetter = decorLetterRef.current;
    const stats = statsRef.current;
    const scanline = scanlineRef.current;

    if (!section || !title || !subtitle || !badge || !image || !decorLetter || !stats || !scanline) return;

    const ctx = gsap.context(() => {
      // Scanline animation
      gsap.to(scanline, {
        y: '100vh',
        duration: 3,
        repeat: -1,
        ease: 'none',
      });

      // Initial entrance animations
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(
        decorLetter,
        { opacity: 0, scale: 1.8, rotateY: 45 },
        { opacity: 0.06, scale: 1, rotateY: 0, duration: 2, ease: 'power3.out' }
      )
        .fromTo(
          title.children,
          { y: 150, opacity: 0, rotateX: -60, skewX: 10 },
          { y: 0, opacity: 1, rotateX: 0, skewX: 0, duration: 1.2, stagger: 0.2, ease: 'power4.out' },
          '-=1.5'
        )
        .fromTo(
          subtitle,
          { y: 50, opacity: 0, filter: 'blur(10px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          badge,
          { x: -50, opacity: 0, scale: 0.8 },
          { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
          '-=0.5'
        )
        .fromTo(
          image,
          { x: 150, opacity: 0, scale: 1.2, rotateY: -30 },
          { x: 0, opacity: 1, scale: 1, rotateY: 0, duration: 1.5, ease: 'power4.out' },
          '-=1'
        )
        .fromTo(
          stats,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        );

      // Scroll parallax for decorative letter
      gsap.to(decorLetter, {
        y: -300,
        rotateZ: 15,
        opacity: 0,
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Parallax for image
      gsap.to(image, {
        y: -120,
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Scanline effect */}
      <div
        ref={scanlineRef}
        className="absolute left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(212, 175, 55, 0.08), transparent)',
        }}
      />

      {/* CRT scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[5] opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 175, 55, 0.03) 2px, rgba(212, 175, 55, 0.03) 4px)',
        }}
      />

      {/* Giant decorative letter */}
      <div
        ref={decorLetterRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-orbitron text-[50vw] font-black text-white pointer-events-none select-none leading-none"
        style={{ textShadow: '0 0 100px rgba(212, 175, 55, 0.3)' }}
      >
        O
      </div>

      {/* Floating particles around text */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#D4AF37] rounded-full animate-float opacity-60" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            {/* Name badge */}
            <div ref={badgeRef} className="mb-6 flex items-center gap-3">
              <span className="px-4 py-2 border border-[#D4AF37] text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium hover:bg-[#D4AF37] hover:text-white transition-all duration-300">
                <TextScramble text="OTABEK RAVSHANOV" scrambleOnMount={true} scrambleOnHover={true} duration={0.8} />
              </span>
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_10px_#D4AF37]" />
            </div>

            {/* Main title */}
            <h1
              ref={titleRef}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-black leading-[0.9] tracking-tight mb-8"
              style={{ perspective: '1000px' }}
            >
              <span className="block text-3d hover:scale-[1.02] transition-transform duration-500 origin-left">
                Dasturchi
              </span>
              <span className="block text-white text-3d-solid mt-2 hover:scale-[1.02] transition-transform duration-500 origin-left">
                Full-Stack.
              </span>
            </h1>

            {/* Subtitle with scramble */}
            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-[#888888] max-w-lg leading-relaxed mb-8 font-mono"
            >
              <TextScramble
                text="Web va mobil ilovalarni noldan loyihalashtiruvchi, murakkab tizimlar yaratuvchi va istalgan dasturlash tiliga tezkor moslashuvchi yuqori malakali dasturiy ta'minot arxitektori."
                scrambleOnMount={true}
                scrambleOnHover={true}
                duration={1.5}
              />
            </p>

            {/* Stats */}
            <div ref={statsRef} className="flex items-center gap-6 text-xs tracking-[0.2em] uppercase text-[#888888]">
              <span className="hover:text-[#D4AF37] transition-colors">5+ yil tajriba</span>
              <span className="w-1 h-1 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="hover:text-[#D4AF37] transition-colors">20+ loyiha</span>
              <span className="w-1 h-1 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="hover:text-[#D4AF37] transition-colors">18 yosh</span>
            </div>
          </div>

          {/* Right: Portrait Image with Tilt */}
          <div
            ref={imageRef}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
          >
            <TiltCard className="w-full max-w-md lg:max-w-lg xl:max-w-xl" maxTilt={10} scale={1.03}>
              {/* Glow effect behind image */}
              <div className="absolute -inset-8 bg-gradient-to-t from-[#D4AF37]/30 via-[#D4AF37]/10 to-transparent blur-3xl animate-pulse-glow" />

              {/* Image container with border */}
              <div className="relative overflow-hidden border border-white/10 group">
                <img
                  src="/images/photo_2026-04-14_16-21-21.jpg"
                  alt="Otabek Ravshanov"
                  className="w-full h-[50vh] lg:h-[70vh] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Glitch overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none mix-blend-screen"
                  style={{
                    background: 'linear-gradient(transparent 50%, rgba(212, 175, 55, 0.1) 50%)',
                    backgroundSize: '100% 4px',
                  }}
                />

                {/* Corner accents with neon */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37] shadow-[0_0_10px_#D4AF37]" />

                {/* Scan lines on image */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 175, 55, 0.1) 2px, rgba(212, 175, 55, 0.1) 4px)',
                  }}
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 md:-left-8 px-4 py-3 bg-black border border-[#D4AF37]/50 backdrop-blur-sm gold-glow">
                <div className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-bold">
                  <TextScramble text="BEAST MODE" scrambleOnMount={true} scrambleOnHover={true} duration={0.5} />
                </div>
                <div className="text-white/60 text-[10px] tracking-wider mt-1 font-mono">ON</div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* Side decorative elements */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />
        <span className="vertical-text text-[10px] tracking-[0.4em] text-[#D4AF37]/40 font-mono">2026</span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
