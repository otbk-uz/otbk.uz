const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center section bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gold rounded-full blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gold rounded-full blur-[100px]" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="max-w-4xl">
          {/* Name with gold accent */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-gold" />
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-semibold">
              Otabek Ravshanov
            </p>
          </div>

          {/* Main heading with gold gradient */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1] mb-8">
            <span className="text-white">Full-Stack</span>
            <br />
            <span className="gold-gradient">Developer</span>
          </h1>

          {/* Gold divider */}
          <div className="divider-gold mb-8" />

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
            Web va mobil ilovalarni noldan loyihalashtiraman.
            <span className="text-gold"> Murakkab tizimlar</span> va skaling muammolarini yechaman.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a href="#contact" className="btn-gold">
              Bog'lanish
            </a>
            <a href="#projects" className="btn-outline-gold">
              Loyihalar
            </a>
          </div>

          {/* Stats with gold borders */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gold/30">
            <div className="text-center p-4 border border-gold/20 rounded-lg bg-gray-dark/50">
              <p className="text-4xl md:text-5xl font-bold text-gold mb-2">5+</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Yil Tajriba</p>
            </div>
            <div className="text-center p-4 border border-gold/20 rounded-lg bg-gray-dark/50">
              <p className="text-4xl md:text-5xl font-bold text-gold mb-2">20+</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Loyiha</p>
            </div>
            <div className="text-center p-4 border border-gold/20 rounded-lg bg-gray-dark/50">
              <p className="text-4xl md:text-5xl font-bold text-gold mb-2">18</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Yosh</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
