import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from '../components/TiltCard';
import { portfolioData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const GallerySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          },
        }
      );

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { y: 80, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      gsap.to(decorRef.current, {
        y: -100,
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
    <section id="gallery" ref={sectionRef} className="relative py-24 md:py-40 overflow-hidden bg-transparent">
      {/* Decorative text */}
      <div ref={decorRef} className="absolute top-20 -right-20 font-orbitron text-[18vw] font-black text-white/[0.01] pointer-events-none select-none leading-none">
        MEMORIES
      </div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/10 pb-6 mb-12">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="w-1.5 h-8 bg-neon-blue shadow-neon-blue rounded-full"></div>
            <h2 ref={titleRef} className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Kadrlar Ortida
            </h2>
          </div>
          <p className="text-white/40 text-sm font-mono uppercase tracking-widest text-center md:text-right">
            Ish jarayoni va muhit
          </p>
        </div>

        {/* Photo grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {portfolioData.gallery.map((photo, i) => (
            <TiltCard key={i} maxTilt={8} scale={1.02}>
              <div className="group relative aspect-[3/4] overflow-hidden glass-panel border border-white/10 hover:border-neon-blue/50 transition-all duration-500 rounded-2xl">
                {/* Image */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  title={photo.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-80 group-hover:opacity-100"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content Block */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end h-full">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="text-xs text-neon-blue font-mono uppercase tracking-widest mb-2 border-b border-neon-blue/30 pb-2 inline-block">
                      {photo.title}
                    </p>
                    <p className="text-sm text-white/90 leading-relaxed font-light mt-1">
                      {photo.caption}
                    </p>
                  </div>
                </div>

                {/* Top corner details */}
                <div className="absolute top-4 right-4 text-neon-blue/50 font-mono text-[10px] tracking-widest">
                  IMG_00{i + 1}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
