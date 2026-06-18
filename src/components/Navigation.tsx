import { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [domain, setDomain] = useState('OR7.UZ');

  const navItems = [
    { label: 'Asosiy', href: '#hero' },
    { label: 'Maxsus Reportaj', href: '#about' },
    { label: 'Loyihalar', href: '#projects' },
    { label: 'Galereya', href: '#gallery' },
    { label: 'Aloqa', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set domain dynamically based on hostname
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      if (hostname.includes('otbk.uz')) {
        setDomain('OTBK.UZ');
      } else {
        setDomain('OR7.UZ');
      }
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const today = new Date().toLocaleDateString('uz-UZ', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  // Function to render domain with highlight
  const renderLogo = () => {
    if (domain === 'OR7.UZ') {
      return <>OR<span className="text-yellow-400">7</span>.UZ</>;
    }
    return <>O<span className="text-yellow-400">TBK</span>.UZ</>;
  };

  return (
    <>
      <header className="w-full bg-[#0e3a75] shadow-lg">
        {/* Top bar */}
        <div className="bg-[#0b2d5c] text-white/80 text-xs py-2 hidden md:block">
          <div className="container-narrow px-4 mx-auto flex justify-between items-center">
            <div className="flex items-center gap-6 font-medium">
              <span>{today}</span>
              <span className="w-1 h-1 bg-white/30 rounded-full"></span>
              <span className="uppercase text-yellow-400 tracking-wider">Texnologiya va Biznes</span>
            </div>
            <div className="flex gap-4 items-center">
              <a href="https://t.me/otbk_uz" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Telegram kanal</a>
              <a href="mailto:otabekxoff@gmail.com" className="hover:text-white transition-colors">Email</a>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className={`transition-all duration-300 ${scrolled ? 'fixed top-0 left-0 right-0 z-50 bg-[#0e3a75] shadow-md' : 'relative z-50'}`}>
          <div className="container-narrow px-4 mx-auto flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="text-3xl md:text-4xl font-black text-white tracking-tighter flex items-center gap-1 group">
              {renderLogo()}
            </a>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-[15px] font-bold text-white hover:text-yellow-400 transition-colors uppercase tracking-wide"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA button (Desktop) */}
            <div className="hidden md:block">
              <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="bg-yellow-400 text-[#0e3a75] px-6 py-2 rounded-sm font-bold text-sm uppercase tracking-wider hover:bg-yellow-300 transition-colors">
                Bog'lanish
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 relative w-10 h-10 text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-5 flex flex-col justify-between">
                <div className={`w-full h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <div className={`w-full h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-full h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <div className={`fixed inset-0 z-40 bg-[#0e3a75] transition-all duration-300 md:hidden flex flex-col pt-24 px-6 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col gap-6 w-full">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-xl font-bold text-white border-b border-white/10 pb-4 hover:text-yellow-400 transition-colors uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="mt-4 bg-yellow-400 text-[#0e3a75] px-6 py-4 text-center rounded-sm font-bold text-lg uppercase tracking-wider">
            Bog'lanish
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
