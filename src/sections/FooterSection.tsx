import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FooterSection = () => {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top 90%',
          },
        }
      );
    }, footer);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Bosh sahifa', href: '#hero' },
    { label: 'Men haqimda', href: '#about' },
    { label: 'Tajriba', href: '#tech' },
    { label: 'Loyihalar', href: '#projects' },
    { label: 'Bog\'lanish', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative py-12 md:py-16 border-t border-white/10"
    >
      <div
        ref={contentRef}
        className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="font-orbitron text-xl font-bold tracking-wider text-white">
              OTABEK<span className="text-[#D4AF37]">.</span>
            </span>
            <span className="text-sm text-[#888888]">
              © 2026 Otabek Ravshanov. Barcha huquqlar himoyalangan.
            </span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-[#888888] hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-[#888888] hover:text-[#D4AF37] transition-colors duration-300"
          >
            <span className="tracking-wider uppercase">Yuqoriga</span>
            <div className="w-8 h-8 flex items-center justify-center border border-white/20 group-hover:border-[#D4AF37] transition-colors">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

        {/* Bottom quote */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-white/30 tracking-[0.3em] uppercase">
            "Beast mode" darajasida qat'iy mantiq va mukammal texnik dizayn
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
