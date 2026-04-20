import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MessageCircle, Instagram, ArrowUpRight } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import TextScramble from '../components/TextScramble';

gsap.registerPlugin(ScrollTrigger);

interface ContactLink {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  color: string;
}

const contacts: ContactLink[] = [
  {
    icon: MessageCircle,
    label: 'Telegram',
    value: '@otabek_avazbekovich',
    href: 'https://t.me/otabek_avazbekovich',
    color: '#D4AF37',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@otbk.uz',
    href: 'https://instagram.com/otbk.uz',
    color: '#E4405F',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'otabekxoff@gmail.com',
    href: 'mailto:otabekxoff@gmail.com',
    color: '#EA4335',
  },
  {
    icon: Phone,
    label: 'Telefon',
    value: '+998 88 001 67 77',
    href: 'tel:+998880016777',
    color: '#34A853',
  },
];

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Title reveal with glitch-like effect
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, skewX: 10, filter: 'blur(20px)' },
        {
          y: 0,
          opacity: 1,
          skewX: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          },
        }
      );

      // Status badge
      gsap.fromTo(
        statusRef.current,
        { x: -50, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: statusRef.current,
            start: 'top 85%',
          },
        }
      );

      // Contact links stagger with slide
      if (linksRef.current) {
        gsap.fromTo(
          linksRef.current.children,
          { x: 60, opacity: 0, rotateY: -15 },
          {
            x: 0,
            opacity: 1,
            rotateY: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: linksRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Background image parallax
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 0.12,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-40 overflow-hidden min-h-screen flex items-center"
    >
      {/* Background portrait */}
      <div
        ref={imageRef}
        className="absolute inset-0 pointer-events-none"
      >
        <img
          src="/images/photo_2026-04-14_16-21-23.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/80" />
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] z-[1]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 175, 55, 0.05) 2px, rgba(212, 175, 55, 0.05) 4px)' }}
      />

      <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Title and status */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-bold font-mono">
                <TextScramble text="05 / BOG'LANISH" scrambleOnMount={true} scrambleOnHover={true} duration={0.8} />
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />
            </div>

            <h2
              ref={titleRef}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-10"
            >
              <span className="block text-white">Birga</span>
              <span className="block text-3d-solid mt-2">ishlaylik</span>
            </h2>

            {/* Status indicator */}
            <div
              ref={statusRef}
              className="inline-flex items-center gap-3 px-5 py-3 border border-green-500/30 bg-green-500/5 mb-10 gold-glow"
            >
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_#4ade80]" />
              <span className="text-green-400 text-sm tracking-wider uppercase font-medium font-mono">
                2026-yil aprelidan boshlab mavjud
              </span>
            </div>

            <p className="text-lg text-[#888888] max-w-md mb-12 font-mono">
              <TextScramble
                text="Yangi loyihalar, hamkorlik takliflari yoki shunchaki salomlashish uchun bog'laning. Har qanday murakkablikdagi loyihalarga tayyorman."
                scrambleOnMount={true}
                scrambleOnHover={true}
                duration={2}
              />
            </p>

            {/* CTA Button */}
            <a
              href="mailto:otabekxoff@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-dashed border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 gold-glow"
            >
              <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase font-mono group-hover:animate-pulse">
                Xabar yuborish
              </span>
              <ArrowUpRight className="w-5 h-5 text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Right: Contact links */}
          <div ref={linksRef} className="space-y-4">
            {contacts.map((contact, i) => {
              const Icon = contact.icon;
              return (
                <TiltCard key={i} maxTilt={8} scale={1.02}>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-6 p-6 border border-white/10 hover:border-[#D4AF37] transition-all duration-500 bg-[#0a0a0a]/80 backdrop-blur-sm relative overflow-hidden"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Icon */}
                    <div className="relative w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-[#D4AF37] transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#888888] group-hover:text-[#D4AF37] transition-colors" />
                    </div>

                    {/* Info */}
                    <div className="relative flex-1">
                      <div className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-1 font-mono">
                        {contact.label}
                      </div>
                      <div className="text-lg text-white group-hover:text-[#D4AF37] transition-colors font-medium">
                        {contact.value}
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowUpRight className="relative w-5 h-5 text-[#888888] opacity-0 group-hover:opacity-100 group-hover:text-[#D4AF37] transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </TiltCard>
              );
            })}

            {/* Extra info card */}
            <div className="p-6 border border-white/5 bg-white/[0.02] hover:border-[#D4AF37]/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0 animate-pulse shadow-[0_0_10px_#D4AF37]" />
                <div>
                  <p className="text-sm text-[#888888] leading-relaxed font-mono">
                    Toshkent shahri, O'zbekiston. Global miqyosdagi loyihalarni
                    masofaviy ishlab chiqish imkoniyati mavjud. Ingliz, o'zbek
                    va rus tillarida ishlash imkoniyati.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
