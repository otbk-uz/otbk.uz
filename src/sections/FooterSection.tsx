import { ArrowUp } from 'lucide-react';

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Bosh sahifa', href: '#hero' },
    { label: 'Men haqimda', href: '#about' },
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
    <footer className="py-12 md:py-16 section-padding bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="font-serif text-xl font-medium tracking-wider">
              Otabek<span className="text-gold">.</span>
            </span>
            <span className="text-sm text-stone-400">
              © 2026 Otabek Ravshanov
            </span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-stone-400 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-stone-400 hover:text-gold transition-colors duration-300"
          >
            <span className="tracking-wider uppercase text-xs">Yuqoriga</span>
            <div className="w-8 h-8 flex items-center justify-center border border-stone-600 group-hover:border-gold transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Bottom quote */}
        <div className="mt-12 pt-8 border-t border-stone-800 text-center">
          <p className="text-xs text-stone-500 tracking-[0.2em] uppercase">
            Mukammal dizayn va qat'iy mantiq
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
