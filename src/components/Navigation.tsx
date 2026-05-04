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

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 border-b border-gray-100' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="text-sm font-medium">
              Otabek
            </a>

            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <div className="w-5 h-0.5 bg-black mb-1" />
              <div className="w-5 h-0.5 bg-black" />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden">
          <button
            className="absolute top-4 right-6 p-2"
            onClick={() => setMenuOpen(false)}
            aria-label="Close"
          >
            <div className="w-5 h-0.5 bg-black rotate-45 absolute" />
            <div className="w-5 h-0.5 bg-black -rotate-45 absolute" />
          </button>
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-lg py-2 border-b border-gray-100"
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
