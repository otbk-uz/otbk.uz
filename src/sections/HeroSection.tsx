import { portfolioData } from '../data/portfolioData';

const HeroSection = () => {
  const { hero } = portfolioData;

  return (
    <section id="hero" className="relative w-full min-h-[85vh] flex items-end bg-[#0b1b36]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/photo_2026-04-14_16-21-40 (2).jpg"
          alt="Otabek Ravshanov qishki sayohat chog'ida"
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e3a75] via-[#0e3a75]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b36]/90 via-[#0b1b36]/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container-narrow px-4 relative z-10 w-full pb-16 md:pb-24 pt-32">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-yellow-400 text-[#0e3a75] px-3 py-1 text-xs font-black uppercase tracking-widest">
              Bosh Mavzu
            </span>
            <span className="text-white/80 text-sm font-medium tracking-wide">
              Muvaffaqiyat tarixi
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white tracking-tight">
            {hero.subtitle}
          </h1>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl font-serif">
            {hero.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#about" className="bg-yellow-400 text-[#0e3a75] px-8 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-yellow-300 transition-colors shadow-lg">
              Batafsil o'qish
            </a>
            <a href="#contact" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-white/20 transition-colors">
              Hamkorlik
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-white/20 pt-8 max-w-2xl">
            {hero.stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl md:text-4xl font-black text-yellow-400 mb-1">{stat.value}</p>
                <p className="text-xs text-white/70 uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
