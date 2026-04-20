import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Monitor, Smartphone, Palette, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Specialty {
  title: string;
  titleUz: string;
  description: string;
  descriptionUz: string;
  icon: React.ElementType;
}

const specialties: Specialty[] = [
  {
    title: 'Applications Web',
    titleUz: 'Web ilovalar',
    description: 'Responsive, high-performance web applications',
    descriptionUz: 'Zamonaviy, tezkor va masshtablanuvchi web ilovalar ishlab chiqish. React, Vue, Next.js kabi frameworklar asosida.',
    icon: Monitor,
  },
  {
    title: 'Applications Mobiles',
    titleUz: 'Mobil ilovalar',
    description: 'Cross-platform mobile applications',
    descriptionUz: 'Flutter va React Native yordamida iOS va Android platformalari uchun cross-platform mobil ilovalar yaratish.',
    icon: Smartphone,
  },
  {
    title: 'Design UI/UX',
    titleUz: 'UI/UX Dizayn',
    description: 'User-centered design solutions',
    descriptionUz: 'Foydalanuvchi markazli dizayn yechimlari. Wireframing, prototyping va interaktiv interfeyslar ishlab chiqish.',
    icon: Palette,
  },
  {
    title: 'DevOps & CI/CD',
    titleUz: 'DevOps & Avtomatizatsiya',
    description: 'Automated deployment pipelines',
    descriptionUz: 'CI/CD pipeline lari, konteynerlashtirish, cloud infratuzilmani boshqarish va avtomatlashtirish.',
    icon: Zap,
  },
];

const SpecialtiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
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
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          },
        }
      );

      // Cards stagger with 3D
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 50, opacity: 0, rotateY: -20 },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Images parallax
      if (imagesRef.current) {
        const images = imagesRef.current.children;
        gsap.fromTo(
          images[0],
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: images[0], start: 'top 85%' },
          }
        );
        gsap.fromTo(
          images[1],
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: { trigger: images[1], start: 'top 85%' },
          }
        );
      }

      // Decorative text
      gsap.to(decorRef.current, {
        x: -100,
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
      {/* Decorative text */}
      <div
        ref={decorRef}
        className="absolute top-20 -right-20 font-orbitron text-[18vw] font-black text-white/[0.02] pointer-events-none select-none leading-none"
      >
        SKILLS
      </div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-bold">
            04 / Ixtisosliklar
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
        </div>

        {/* Main title */}
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-3d-solid max-w-4xl"
        >
          Mobil, web, desktop
          <br />
          <span className="text-[#D4AF37]">buyurtma asosida</span>
          <br />
          ishlab chiqish.
        </h2>

        <p className="text-lg text-[#888888] max-w-2xl mb-16">
          Har bir loyihada eng yaxshi arxitektura patternlari, clean code
          tamoyillari va samarali algoritmlardan foydalanaman.
        </p>

        {/* Asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left column: Large image + 2 cards */}
          <div className="lg:col-span-7 space-y-8">
            {/* Large image */}
            <div ref={imagesRef} className="relative overflow-hidden border border-white/10 group">
              <img
                src="/images/project_erp.jpg"
                alt="Specialty"
                className="w-full h-[300px] md:h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-bold">
                  Beast Mode Development
                </span>
              </div>
            </div>

            {/* Two specialty cards */}
            <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specialties.slice(0, 2).map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={i}
                    className="group p-6 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 bg-[#111111]/50"
                  >
                    <Icon className="w-8 h-8 text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {spec.titleUz}
                    </h3>
                    <p className="text-sm text-[#888888]">{spec.descriptionUz}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column: 2 cards + image */}
          <div className="lg:col-span-5 space-y-8">
            {/* Two more cards */}
            <div className="grid grid-cols-1 gap-4">
              {specialties.slice(2).map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={i}
                    className="group p-6 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 bg-[#111111]/50"
                  >
                    <Icon className="w-8 h-8 text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {spec.titleUz}
                    </h3>
                    <p className="text-sm text-[#888888]">{spec.descriptionUz}</p>
                  </div>
                );
              })}
            </div>

            {/* Second image */}
            <div className="relative overflow-hidden border border-white/10 group">
              <img
                src="/images/project_ai.jpg"
                alt="Teamwork"
                className="w-full h-[250px] md:h-[300px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/80 text-sm italic">
                  "Jamoalar bilan ishlashni, bilimlarni baham ko'rishni va yosh dasturchilarga yo'l ko'rsatishni yaxshi ko'raman."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
