const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center section">
      <div className="container-narrow">
        <div className="max-w-3xl">
          <p className="text-gold text-sm font-medium mb-4">Otabek Ravshanov</p>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6">
            Full-Stack
            <br />
            <span className="text-gold">Developer</span>
          </h1>
          
          <p className="text-lg text-muted max-w-xl leading-relaxed mb-8">
            Web va mobil ilovalarni noldan loyihalashtiraman. 
            Murakkab tizimlar va skaling muammolarini yechaman.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-gold text-white text-sm font-medium hover:bg-amber-600 transition-colors"
            >
              Bog'lanish
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-gold text-gold text-sm font-medium hover:bg-gold hover:text-white transition-colors"
            >
              Loyihalar
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-12 text-sm">
            <div>
              <p className="text-2xl font-semibold text-gold mb-1">5+</p>
              <p className="text-muted">Yil tajriba</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-gold mb-1">20+</p>
              <p className="text-muted">Loyiha</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-gold mb-1">18</p>
              <p className="text-muted">Yosh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
