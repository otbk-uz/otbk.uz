import { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Bosh sahifa', href: '#hero' },
    { label: 'Men haqimda', href: '#about' },
    { label: 'Loyihalar', href: '#projects' },
    { label: 'Bog\'lanish', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const today = new Date().toLocaleDateString('uz-UZ', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-panel bg-black/50 border-b border-neon-blue/20 shadow-[0_4px_30px_rgba(0,240,255,0.1)]' : 'bg-transparent border-b border-white/5'
      }`}>
        {/* Top Info Bar */}
        <div className="hidden md:block border-b border-white/5 bg-black/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between text-[10px] text-white/40 font-mono tracking-widest uppercase">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-neon-green shadow-[0_0_8px_#00ff66] animate-pulse"></div>
              <span>System Online</span>
            </div>
            <div className="flex gap-6">
              <span>{today}</span>
              <a href="https://t.me/otbk_uz" target="_blank" rel="noreferrer" className="hover:text-neon-blue transition-colors">Telegram</a>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="text-2xl md:text-3xl font-black text-white tracking-tighter flex items-center gap-1 group">
              O<span className="text-neon-blue group-hover:text-neon-purple transition-colors">TBK</span>
            </a>

            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-xs font-mono text-white/80 hover:text-neon-blue transition-colors uppercase tracking-[0.2em] relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-neon-blue transition-all duration-300 group-hover:w-full shadow-neon-blue"></span>
                </a>
              ))}
            </div>

            <button
              className="md:hidden p-2 relative w-10 h-10 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-5 flex flex-col justify-between">
                <div className={`w-full h-0.5 bg-neon-blue transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <div className={`w-full h-0.5 bg-neon-blue transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-full h-0.5 bg-neon-blue transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 md:hidden flex items-center justify-center ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 to-transparent pointer-events-none" />
        <div className="flex flex-col gap-8 text-center relative z-10 w-full px-6">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-3xl font-black text-white hover:text-neon-blue transition-colors tracking-tight"
              style={{
                transitionDelay: `${index * 50}ms`,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: menuOpen ? 1 : 0
              }}
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
