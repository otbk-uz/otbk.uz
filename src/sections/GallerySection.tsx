import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from '../components/TiltCard';

gsap.registerPlugin(ScrollTrigger);

interface Photo {
  src: string;
  alt: string;
  caption: string;
}

const photos: Photo[] = [
  {
    src: '/images/photo_2026-04-14_16-21-21.jpg',
    alt: 'Otabek Ravshanov (Otabek Avazbekovich) - Dasturchi va IT mutaxassis, Qishki kunning soya portreti',
    caption: 'Qishki kunning soya portreti',
  },
  {
    src: '/images/photo_2026-04-14_16-21-23.jpg',
    alt: 'Otabek Ravshanov (Otabek Avazbekovich) - Kodlash jarayonida, dasturlash ishlari',
    caption: 'Kodlash jarayonida',
  },
  {
    src: '/images/photo_2026-04-14_16-21-40.jpg',
    alt: 'Otabek Ravshanov (Otabek Avazbekovich) - Ish stolida, web va mobil ilovalar yaratish jarayoni',
    caption: 'Ish stolida',
  },
  {
    src: '/images/photo_2026-04-14_16-21-40 (2).jpg',
    alt: 'Otabek Ravshanov (Otabek Avazbekovich) - Dam olish vaqti',
    caption: 'Dam olish',
  },
  {
    src: '/images/photo_2026-04-14_16-21-43.jpg',
    alt: 'Otabek Ravshanov (Otabek Avazbekovich) - Jamo bilan, IT mutaxassislari',
    caption: 'Jamo bilan',
  },
  {
    src: '/images/photo_2026-04-14_16-21-44.jpg',
    alt: 'Otabek Ravshanov (Otabek Avazbekovich) - Loyiha ustida ishlash jarayoni',
    caption: 'Loyiha ustida ishlash',
  },
  {
    src: '/images/photo_2026-04-14_16-21-47.jpg',
    alt: 'Otabek Ravshanov (Otabek Avazbekovich) - Texnik direktor va IT boshqaruvchi',
    caption: 'Texnik direktor',
  },
  {
    src: '/images/photo_2026-04-14_16-21-49.jpg',
    alt: 'Otabek Ravshanov (Otabek Avazbekovich) - Maslahatchi, IT yechimlar va sun\'iy intellekt',
    caption: 'Maslahatchi',
  },
];

const GallerySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Title reveal
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

      // Grid items stagger
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

      // Decorative parallax
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
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-24 md:py-40 overflow-hidden"
    >
      {/* Decorative text */}
          <div
        ref={decorRef}
        className="absolute top-20 -right-20 font-orbitron text-[18vw] font-black text-white/[0.02] pointer-events-none select-none leading-none"
      >
        PHOTO
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 175, 55, 0.03) 2px, rgba(212, 175, 55, 0.03) 4px)' }}
      />

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex items-center justify-between border-b-2 border-gold pb-3 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-6 bg-gold"></div>
            <h2 ref={titleRef} className="text-2xl font-bold text-white uppercase tracking-wider">
              Fotogalereya
            </h2>
          </div>
          <a href="#gallery" className="text-gold text-sm hover:underline">
            Barcha rasmlar
          </a>
        </div>

        {/* Photo grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {photos.map((photo, i) => (
            <TiltCard key={i} maxTilt={8} scale={1.03}>
              <div className="group relative aspect-[3/4] overflow-hidden border border-white/10 hover:border-[#D4AF37] transition-all duration-500">
                {/* Image */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  title={photo.caption}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm text-[#D4AF37] font-mono tracking-wider">
                    {photo.caption}
                  </p>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#D4AF37]/0 group-hover:border-[#D4AF37] transition-all duration-300" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#D4AF37]/0 group-hover:border-[#D4AF37] transition-all duration-300" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#D4AF37]/0 group-hover:border-[#D4AF37] transition-all duration-300" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#D4AF37]/0 group-hover:border-[#D4AF37] transition-all duration-300" />

                {/* Gold glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 40px rgba(212, 175, 55, 0.1)' }}
                />
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
