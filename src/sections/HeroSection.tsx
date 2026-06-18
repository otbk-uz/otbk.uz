import { portfolioData } from '../data/portfolioData';

const HeroSection = () => {
  const { hero } = portfolioData;

  return (
    <section id="hero" className="bg-white border-b border-gray-200">
      <div className="container-narrow px-4 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-blue-600" />
              <p className="text-blue-600 text-sm font-bold uppercase tracking-widest">
                {hero.title}
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 text-gray-900">
              {hero.subtitle}
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              {hero.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#about" className="btn-primary">
                Batafsil o'qish
              </a>
              <a href="#contact" className="btn-outline">
                Bog'lanish
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-6 md:gap-12 py-6 border-y border-gray-200">
              {hero.stats.map((stat, idx) => (
                <div key={idx} className="flex gap-6 md:gap-12 items-center">
                  <div>
                    <p className="text-3xl font-black text-gray-900 mb-1">{stat.value}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">{stat.label}</p>
                  </div>
                  {idx < hero.stats.length - 1 && <div className="w-px h-12 bg-gray-200" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Portrait Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="w-full max-w-md">
              <div className="relative aspect-[4/5] rounded shadow-lg overflow-hidden border border-gray-100">
                <img
                  src="/images/photo_2026-04-14_16-21-21.jpg"
                  alt="Otabek Ravshanov"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-gray-500 mt-3 text-right italic">
                Suratda: Otabek Ravshanov ish jarayonida
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
