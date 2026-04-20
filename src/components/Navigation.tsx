import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import TextScramble from './TextScramble';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const navItems = [
    { label: 'Bosh sahifa', href: '#hero' },
    { label: 'Men haqimda', href: '#about' },
    { label: 'Tajriba', href: '#tech' },
    { label: 'Loyihalar', href: '#projects' },
    { label: 'Bog\'lanish', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
      );
    }
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-[#D4AF37]/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleClick(e, '#hero')}
              className="font-orbitron text-lg md:text-xl font-bold tracking-wider text-white hover:text-[#D4AF37] transition-colors duration-300"
            >
              <TextScramble text="OTABEK." scrambleOnMount={true} scrambleOnHover={true} duration={0.5} />
            </a>

            {/* Nav Items - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="relative text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors duration-300 group"
                >
                  <span className="group-hover:hidden">{item.label}</span>
                  <span className="hidden group-hover:inline font-mono text-[#D4AF37]">
                    <TextScramble text={item.label.toUpperCase()} scrambleOnMount={false} scrambleOnHover={false} duration={0.3} />
                  </span>
                  <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </a>
              ))}
            </div>

            {/* Status */}
            <div className="hidden lg:flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_#4ade80]" />
              <span className="text-[#888888] text-xs tracking-[0.2em] uppercase">
                <TextScramble text="ONLINE" scrambleOnMount={true} scrambleOnHover={true} duration={0.5} />
              </span>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 z-50"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
              <span className={`w-4 h-px bg-[#D4AF37] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-2xl font-bold text-white hover:text-[#D4AF37] transition-colors"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
