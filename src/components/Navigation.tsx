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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/95 border-b border-gold/20 shadow-lg' : 'bg-[#0a0a0a] border-b border-white/5'
      }`}>
        {/* Top Info Bar */}
        <div className="hidden md:block border-b border-white/5 bg-black">
          <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between text-xs text-gray-400">
            <div>Otabek Ravshanov rasmiy web-sahifasi</div>
            <div className="flex gap-4">
              <span>{today}</span>
              <a href="https://t.me/otbk_uz" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Telegram</a>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="text-2xl md:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              OTBK<span className="text-gold">.UZ</span>
            </a>

            <div className="hidden md:flex items-center gap-6 lg:gap-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-sm font-semibold text-white hover:text-gold transition-colors uppercase tracking-wider relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <div className="w-6 h-0.5 bg-gold mb-1.5" />
              <div className="w-6 h-0.5 bg-gold mb-1.5" />
              <div className="w-6 h-0.5 bg-gold" />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden">
          <button
            className="absolute top-6 right-6 p-2"
            onClick={() => setMenuOpen(false)}
            aria-label="Close"
          >
            <div className="w-6 h-0.5 bg-gold rotate-45 absolute" />
            <div className="w-6 h-0.5 bg-gold -rotate-45 absolute" />
          </button>
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-2xl py-3 border-b border-gold/20 text-white hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
