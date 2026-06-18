import { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [domain, setDomain] = useState('OR7.UZ');

  const navItems = [
    { label: 'Bosh sahifa', href: '#hero' },
    { label: 'Maqola', href: '#about' },
    { label: 'Loyihalar', href: '#projects' },
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
      return <>OR<span className="text-blue-600">7</span>.UZ</>;
    }
    return <>O<span className="text-blue-600">TBK</span>.UZ</>;
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white border-b border-gray-200'
      }`}>
        {/* Top Info Bar */}
        <div className="hidden md:block border-b border-gray-100 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between text-xs text-gray-500 font-medium">
            <div className="flex items-center gap-4">
              <span>{today}</span>
            </div>
            <div className="flex gap-6">
              <a href="#contact" onClick={(e) => handleClick(e, '#contact')} className="hover:text-blue-600 transition-colors">Bog'lanish</a>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight flex items-center gap-1 group">
              {renderLogo()}
            </a>

            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <button
              className="md:hidden p-2 relative w-10 h-10 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-5 flex flex-col justify-between">
                <div className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <div className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-white transition-all duration-300 md:hidden flex flex-col pt-24 px-6 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col gap-6 w-full">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4 hover:text-blue-600 transition-colors"
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
