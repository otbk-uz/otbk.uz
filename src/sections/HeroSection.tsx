const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center section-padding py-32">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            {/* Name tag */}
            <div className="mb-8">
              <span className="text-sm tracking-[0.3em] uppercase text-stone-500 font-medium">
                Otabek Ravshanov
              </span>
              <div className="gold-line-left w-16 mt-2" />
            </div>

            {/* Main title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight mb-8 text-stone-900">
              Dasturchi
              <span className="block text-gold">Full-Stack.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-stone-600 max-w-lg leading-relaxed mb-10">
              Web va mobil ilovalarni noldan loyihalashtiruvchi, murakkab tizimlar 
              yaratuvchi va istalgan dasturlash tiliga tezkor moslashuvchi dasturiy 
              ta'minot arxitektori.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#contact"
                className="px-8 py-4 bg-stone-900 text-white text-sm tracking-wider uppercase font-medium hover:bg-gold transition-colors duration-300"
              >
                Bog'lanish
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border border-stone-300 text-stone-700 text-sm tracking-wider uppercase font-medium hover:border-gold hover:text-gold transition-all duration-300"
              >
                Loyihalar
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 text-sm text-stone-500">
              <div>
                <span className="block text-2xl font-serif text-stone-900">5+</span>
                <span className="text-xs uppercase tracking-wider">Yil tajriba</span>
              </div>
              <div className="w-px h-10 bg-stone-200" />
              <div>
                <span className="block text-2xl font-serif text-stone-900">20+</span>
                <span className="text-xs uppercase tracking-wider">Loyiha</span>
              </div>
              <div className="w-px h-10 bg-stone-200" />
              <div>
                <span className="block text-2xl font-serif text-stone-900">18</span>
                <span className="text-xs uppercase tracking-wider">Yosh</span>
              </div>
            </div>
          </div>

          {/* Right: Portrait Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-delay">
            <div className="relative">
              {/* Subtle gold border frame */}
              <div className="absolute -inset-3 border border-gold/20" />
              <div className="absolute -inset-6 border border-gold/10" />
              
              <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem] overflow-hidden bg-stone-100">
                <img
                  src="/images/photo_2026-04-14_16-21-21.jpg"
                  alt="Otabek Ravshanov"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-[0.2em] uppercase text-stone-400">Pastga</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
