import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import TextScramble from '../components/TextScramble';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  number: string;
  title: string;
  descriptionUz: string;
  tags: string[];
  image: string;
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Turon Beton ERP',
    descriptionUz: 'Turon Beton MChJ uchun ERP tizimi — buxgalteriya, sklad, ishlab chiqarish va sotish bo\'limlarini birlashtirgan korporativ dasturiy ta\'minot.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    image: '/images/project_erp.jpg',
  },
  {
    number: '02',
    title: 'Ravshanov AI',
    descriptionUz: 'Sun\'iy intellekt ekotizimi — avtomatlashtirish, ma\'lumotlar tahlili va sun\'iy intellekt asosida qaror qabul qilish tizimi.',
    tags: ['Python', 'TensorFlow', 'React', 'AWS'],
    image: '/images/project_ai.jpg',
  },
  {
    number: '03',
    title: 'IntelliSoft Platform',
    descriptionUz: 'IntelliSoft strategik platformasi — biznes jarayonlarini avtomatlashtirish va raqamli transformatsiya uchun kompleks yechim.',
    tags: ['TypeScript', 'Next.js', 'GraphQL', 'GCP'],
    image: '/images/project_cloud.jpg',
  },
  {
    number: '04',
    title: 'Sinergiya Hub',
    descriptionUz: 'Sinergiya hamkorlik platformasi — jamoaviy loyihalar, vazifalar boshqaruvi va resurslarni optimallashtirish tizimi.',
    tags: ['Vue.js', 'Firebase', 'Flutter', 'CI/CD'],
    image: '/images/project_collab.jpg',
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const ctx = gsap.context(() => {
      // Decorative text parallax
      gsap.to(decorRef.current, {
        x: 300,
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Header reveal
      gsap.fromTo(
        headerRef.current,
        { y: 80, opacity: 0, filter: 'blur(15px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
        }
      );

      // Horizontal scroll
      const scrollWidth = container.scrollWidth - window.innerWidth;

      gsap.to(container, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Giant background text */}
      <div
        ref={decorRef}
        className="absolute top-1/2 -translate-y-1/2 -left-40 font-orbitron text-[40vw] font-black text-white/[0.02] pointer-events-none select-none leading-none whitespace-nowrap"
        style={{ textShadow: '0 0 150px rgba(212, 175, 55, 0.1)' }}
      >
        WORK
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] z-10"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 175, 55, 0.05) 2px, rgba(212, 175, 55, 0.05) 4px)' }}
      />

      {/* Header */}
      <div
        ref={headerRef}
        className="absolute top-0 left-0 right-0 z-20 pt-24 md:pt-32 px-6 md:px-12 lg:px-20"
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-bold font-mono">
            <TextScramble text="03 / LOYIHALAR" scrambleOnMount={true} scrambleOnHover={true} duration={0.8} />
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-3d-solid">
          Tanlangan
          <br />
          <span className="text-white">loyihalar</span>
        </h2>
      </div>

      {/* Horizontal scrolling container */}
      <div
        ref={containerRef}
        className="flex items-center h-screen pt-32 gap-6 md:gap-8 px-6 md:px-12 lg:px-20"
      >
        {projects.map((project, i) => (
          <TiltCard key={i} maxTilt={8} scale={1.02} className="flex-shrink-0">
            <div
              className="group relative w-[80vw] md:w-[50vw] lg:w-[40vw] h-[60vh] border border-white/10 hover:border-[#D4AF37] transition-all duration-500 overflow-hidden bg-[#0a0a0a]"
            >
              {/* Background image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent group-hover:from-black/90 group-hover:via-black/70 transition-all duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                {/* Number */}
                <span className="absolute top-6 right-6 font-orbitron text-6xl md:text-7xl font-black text-white/10 group-hover:text-[#D4AF37]/30 transition-colors">
                  {project.number}
                </span>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-[#888888] mb-4 max-w-md group-hover:text-white/70 transition-colors font-mono">
                  {project.descriptionUz}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs border border-white/20 text-white/60 group-hover:border-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center gap-2 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-sm font-medium font-mono">Batafsil</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Corner accents on hover */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_#D4AF37]" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_#D4AF37]" />

              {/* Scanlines on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 175, 55, 0.03) 2px, rgba(212, 175, 55, 0.03) 4px)',
                }}
              />
            </div>
          </TiltCard>
        ))}

        {/* End card */}
        <div className="flex-shrink-0 w-[40vw] md:w-[30vw] h-[60vh] flex items-center justify-center border border-white/5 hover:border-[#D4AF37]/30 transition-colors">
          <div className="text-center">
            <div className="font-orbitron text-6xl md:text-8xl font-black text-white/5 mb-4 group-hover:text-[#D4AF37]/20 transition-colors">
              20+
            </div>
            <p className="text-[#888888] text-sm font-mono">
              Ko'proq loyihalar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
