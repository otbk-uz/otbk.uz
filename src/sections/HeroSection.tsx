const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center section bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gold rounded-full blur-[180px]" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gold rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/20 rounded-full blur-[200px]" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Name with gold accent */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-1 bg-gold" />
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-semibold">
                Otabek Ravshanov
              </p>
            </div>

            {/* Main heading with gold gradient */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] mb-8">
              <span className="text-white">Full-Stack</span>
              <br />
              <span className="gold-gradient">Developer</span>
            </h1>

            {/* Gold divider */}
            <div className="divider-gold mb-8" />

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed mb-10">
              Web va mobil ilovalarni noldan loyihalashtiraman.
              <span className="text-gold"> Murakkab tizimlar</span> va skaling muammolarini yechaman.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#contact" className="btn-gold">
                Bog'lanish
              </a>
              <a href="#projects" className="btn-outline-gold">
                Loyihalar
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-bold text-gold">5+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Yil</p>
              </div>
              <div className="w-px bg-gold/30" />
              <div>
                <p className="text-3xl font-bold text-gold">20+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Loyiha</p>
              </div>
              <div className="w-px bg-gold/30" />
              <div>
                <p className="text-3xl font-bold text-gold">18</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Yosh</p>
              </div>
            </div>
          </div>

          {/* Right: Portrait Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Gold frame decoration */}
            <div className="absolute -inset-4 border-2 border-gold/50 rounded-lg transform rotate-3" />
            <div className="absolute -inset-8 border border-gold/20 rounded-lg transform -rotate-2" />
            
            {/* Image container */}
            <div className="relative w-80 h-[28rem] md:w-96 md:h-[32rem] rounded-lg overflow-hidden gold-border">
              <img
                src="/images/photo_2026-04-14_16-21-21.jpg"
                alt="Otabek Ravshanov"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Gold corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gold" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gold" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gold" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gold" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-gold/70 uppercase tracking-widest">Pastga</span>
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
