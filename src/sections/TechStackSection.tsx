import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Server,
  Cloud,
  Monitor,
  Database,
  CheckCircle2,
} from 'lucide-react';
import TiltCard from '../components/TiltCard';
import TextScramble from '../components/TextScramble';

gsap.registerPlugin(ScrollTrigger);

interface TechCategory {
  title: string;
  titleUz: string;
  items: string[];
  icon: React.ElementType;
}

const techCategories: TechCategory[] = [
  {
    title: 'Systèmes d\'information',
    titleUz: 'Axborot tizimlari',
    items: ['ERP', 'CRM', 'Intranet', 'Platformalar'],
    icon: Server,
  },
  {
    title: 'Cloud & Scalabilité',
    titleUz: 'Cloud & Masshtablanish',
    items: ['AWS', 'GCP', 'Docker', 'Microservices'],
    icon: Cloud,
  },
  {
    title: 'Frontend',
    titleUz: 'Frontend',
    items: ['React', 'Vue', 'TypeScript', 'TailwindCSS'],
    icon: Monitor,
  },
  {
    title: 'Backend & Data',
    titleUz: 'Backend & Ma\'lumotlar',
    items: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL'],
    icon: Database,
  },
];

const TechStackSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Decorative text parallax
      gsap.to(decorRef.current, {
        y: -200,
        x: 50,
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Cards stagger reveal with 3D effect
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 100, opacity: 0, rotateX: 35, rotateY: -15 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Image reveal
      gsap.fromTo(
        imageRef.current,
        { scale: 1.15, opacity: 0, rotateZ: 3 },
        {
          scale: 1,
          opacity: 1,
          rotateZ: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="relative py-24 md:py-40 overflow-hidden"
    >
      {/* Giant background text */}
      <div
        ref={decorRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-orbitron text-[30vw] font-black text-white/[0.02] pointer-events-none select-none leading-none"
        style={{ textShadow: '0 0 150px rgba(212, 175, 55, 0.15)' }}
      >
        TECH
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 175, 55, 0.05) 2px, rgba(212, 175, 55, 0.05) 4px)' }}
      />

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-bold font-mono">
            <TextScramble text="02 / TEXNOLOGIYALAR" scrambleOnMount={true} scrambleOnHover={true} duration={1} />
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Tech categories */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-3d-solid">
              To'liq stack
              <br />
              <span className="text-[#D4AF37]">texnologiyalar</span>
            </h2>
            <p className="text-lg text-[#888888] mb-12 max-w-lg font-mono">
              <TextScramble
                text="Frontenddan tortib backend, mobil ilovalar, AI/ML loyihalar va DevOps jarayonlarigacha bo'lgan to'liq stack ishlab chiqish qobiliyati."
                scrambleOnMount={true}
                scrambleOnHover={true}
                duration={2}
              />
            </p>

            <div
              ref={cardsRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {techCategories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <TiltCard key={i} maxTilt={10} scale={1.03}>
                    <div
                      className="group relative p-6 border border-white/10 hover:border-[#D4AF37] transition-all duration-500 bg-[#0a0a0a]/80 backdrop-blur-sm overflow-hidden h-full"
                    >
                      {/* Hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Icon */}
                      <div className="relative flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 flex items-center justify-center border border-[#D4AF37]/30 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all">
                          <Icon className="w-5 h-5 text-[#D4AF37]" />
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                          {cat.titleUz}
                        </h3>
                      </div>

                      {/* Items */}
                      <ul className="relative space-y-2">
                        {cat.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm text-[#888888] group-hover:text-white/70 transition-colors"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </div>

          {/* Right: Image with code */}
          <div ref={imageRef} className="relative">
            <div className="sticky top-32">
              <TiltCard maxTilt={8} scale={1.02}>
                <div className="relative overflow-hidden border border-white/10 group">
                  <img
                    src="/images/photo_2026-04-14_16-21-40.jpg"
                    alt="Coding"
                    className="w-full h-[400px] lg:h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Code overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="font-mono text-xs text-[#D4AF37]/80 space-y-1">
                      <div>{`const developer = {`}</div>
                      <div className="pl-4">{`name: "Otabek",`}</div>
                      <div className="pl-4">{`mode: "beast",`}</div>
                      <div className="pl-4">{`stack: "full",`}</div>
                      <div className="pl-4 text-white/60">{`// Building the future`}</div>
                      <div>{`};`}</div>
                    </div>
                  </div>

                  {/* Glitch scanlines */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 175, 55, 0.05) 2px, rgba(212, 175, 55, 0.05) 4px)',
                    }}
                  />
                </div>
              </TiltCard>

              {/* Floating tech badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-black border border-[#D4AF37]/50 backdrop-blur-sm animate-float gold-glow">
                <span className="text-[#D4AF37] text-xs font-bold tracking-wider font-mono">REACT</span>
              </div>
              <div
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-black border border-white/20 backdrop-blur-sm animate-float"
                style={{ animationDelay: '2s' }}
              >
                <span className="text-white text-xs font-bold tracking-wider font-mono">PYTHON</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
