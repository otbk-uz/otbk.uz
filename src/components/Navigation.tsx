import { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [domain, setDomain] = useState('Or7.uz');

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
        setDomain('Otbk.uz');
      } else {
        setDomain('Or7.uz');
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
    if (domain === 'Or7.uz') {
      return <>Or<span className="text-[#00f3ff]">7</span>.uz</>;
    }
    return <>O<span className="text-[#00f3ff]">tbk</span>.uz</>;
  };

  return (
    <>
      <header className="w-full absolute top-0 left-0 right-0 z-50">
        {/* Top bar */}
        <div className="bg-black/40 backdrop-blur-md border-b border-white/5 text-gray-400 text-xs py-2 hidden md:block">
          <div className="container-narrow px-4 mx-auto flex justify-between items-center">
            <div className="flex items-center gap-6 font-medium">
              <span>{today}</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <span className="uppercase text-[#00f3ff] tracking-wider font-bold drop-shadow-[0_0_8px_rgba(0,243,255,0.5)]">Texnologiya va Biznes</span>
            </div>
            <div className="flex gap-4 items-center">
              <a href="https://t.me/otbk_uz" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Telegram kanal</a>
              <a href="mailto:otabekxoff@gmail.com" className="hover:text-white transition-colors">Email</a>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className={`transition-all duration-300 ${scrolled ? 'fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg' : 'relative z-50 bg-transparent border-b border-white/5'}`}>
          <div className="container-narrow px-4 mx-auto flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="text-3xl md:text-4xl font-bold text-white tracking-tighter flex items-center gap-1 group">
              {renderLogo()}
            </a>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-[13px] font-medium text-gray-400 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all uppercase tracking-widest"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA button (Desktop) */}
            <div className="hidden md:block">
              <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="bg-white/5 border border-white/10 text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
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
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl transition-all duration-300 md:hidden flex flex-col pt-24 px-6 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col gap-6 w-full">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-xl font-bold text-white border-b border-white/10 pb-4 hover:text-[#00f3ff] transition-colors uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="mt-4 bg-white/10 border border-white/10 text-white px-6 py-4 text-center rounded-sm font-bold text-lg uppercase tracking-wider">
            Bog'lanish
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
