import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from '../components/TiltCard';
import TextScramble from '../components/TextScramble';

gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  labelUz: string;
}

const stats: StatItem[] = [
  { value: 5, suffix: '+', label: 'Years Experience', labelUz: 'Yillik tajriba' },
  { value: 20, suffix: '+', label: 'Projects Done', labelUz: 'Muvaffaqiyatli loyiha' },
  { value: 10, suffix: '+', label: 'Happy Clients', labelUz: 'Doimiy mijoz' },
  { value: 15, suffix: '+', label: 'Technologies', labelUz: 'O\'zlashtirilgan texnologiya' },
];

const AnimatedCounter = ({ value, suffix, triggered }: { value: number; suffix: string; triggered: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;

    let start = 0;
    const duration = 2500;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [triggered, value]);

  return (
    <span className="font-mono">
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const decorRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Trigger counter animation
      ScrollTrigger.create({
        trigger: section,
        start: 'top 70%',
        onEnter: () => setTriggered(true),
      });

      // Title reveal
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0, skewX: 5 },
        {
          y: 0,
          opacity: 1,
          skewX: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          },
        }
      );

      // Cards stagger reveal with 3D effect
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 80, opacity: 0, rotateX: 30, rotateY: -10 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Decorative text parallax
      gsap.to(decorRef.current, {
        x: -150,
        rotateZ: -5,
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 overflow-hidden">
      {/* Background decorative element */}
      <div
        ref={decorRef}
        className="absolute top-1/2 -translate-y-1/2 -right-32 font-orbitron text-[25vw] font-black text-white/[0.03] pointer-events-none select-none leading-none"
        style={{ textShadow: '0 0 100px rgba(212, 175, 55, 0.1)' }}
      >
        2026
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 175, 55, 0.05) 2px, rgba(212, 175, 55, 0.05) 4px)' }}
      />

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-bold font-mono">
            <TextScramble text="ERISHILGAN NATIJALAR" scrambleOnMount={true} scrambleOnHover={true} duration={1} />
          </span>
          <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-3d-solid">
            Raqamlar gapiradi
          </h2>
        </div>

        {/* Stats grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <TiltCard key={index} maxTilt={12} scale={1.04}>
              <div
                className="relative group p-6 md:p-8 border border-white/10 hover:border-[#D4AF37] transition-all duration-500 bg-[#0a0a0a]/80 backdrop-blur-sm overflow-hidden"
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#D4AF37]/0 group-hover:border-[#D4AF37] transition-all duration-300" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#D4AF37]/0 group-hover:border-[#D4AF37] transition-all duration-300" />

                {/* Number */}
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    triggered={triggered}
                  />
                </div>

                {/* Labels */}
                <div className="text-sm text-[#888888] uppercase tracking-wider group-hover:text-white transition-colors">
                  {stat.labelUz}
                </div>
                <div className="text-[10px] text-white/30 uppercase tracking-wider mt-1 font-mono">
                  {stat.label}
                </div>

                {/* Neon glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 30px rgba(212, 175, 55, 0.1)' }}
                />
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Bottom quote with scramble */}
        <div className="mt-16 text-center">
          <p className="text-lg md:text-xl text-[#888888] italic max-w-2xl mx-auto font-mono">
            <TextScramble
              text={"\"Har bir loyiha yangi bilim va ko'nikmalar olib keladi, ularni keyingi loyihalarda qo'llayman.\""}
              scrambleOnMount={true}
              scrambleOnHover={true}
              duration={2}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
