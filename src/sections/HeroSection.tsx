import { portfolioData } from '../data/portfolioData';
import PremiumCard from '../components/PremiumCard';

const HeroSection = () => {
  const { hero } = portfolioData;

  return (
    <section id="hero" className="relative w-full min-h-[85vh] flex items-end bg-black">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        {/* Abstract dark gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#00f3ff]/5 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#b026ff]/5 blur-[120px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-black to-black"></div>
      </div>

      {/* Content */}
      <div className="container-narrow px-4 relative z-10 w-full pb-16 md:pb-24 pt-32">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-white/10 border border-white/10 text-white px-3 py-1 text-xs font-medium tracking-widest rounded-full backdrop-blur-md">
              Bosh Mavzu
            </span>
            <span className="text-gray-400 text-sm font-medium tracking-wide">
              Muvaffaqiyat tarixi
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white tracking-tight">
            {hero.subtitle}
          </h1>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-12 max-w-3xl font-light">
            {hero.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a href="#about" className="relative group overflow-hidden bg-white text-black px-8 py-3 rounded-md font-medium tracking-wide transition-all hover:scale-[1.02]">
              <span className="relative z-10">Batafsil o'qish</span>
            </a>
            <a href="#contact" className="bg-transparent border border-white/10 text-white px-8 py-3 rounded-md font-medium tracking-wide hover:bg-white/5 transition-colors">
              Hamkorlik
            </a>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/5 max-w-4xl">
            {hero.stats.map((stat, idx) => (
              <PremiumCard 
                key={idx}
                title={stat.value}
                description={stat.label}
                glowColor={idx % 2 === 0 ? 'blue' : 'purple'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
