const AboutSection = () => {
  return (
    <section id="about" className="section bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      
      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-gold font-semibold tracking-[0.3em] uppercase mb-4">
              Men haqimda
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Tajriba va</span>
              <br />
              <span className="gold-gradient">mahorat</span>
            </h2>
            <div className="divider-gold mb-8" />
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                18 yoshli dasturiy ta'minot arxitektori. Web va mobil 
                ilovalarni noldan loyihalashtirish, murakkab tizimlar 
                yaratish va istalgan dasturlash tiliga tezkor moslashish 
                qobiliyatiga egaman.
              </p>
              <p>
                2017-yildan beri dasturlash sohasida. React, Vue, Flutter, 
                Python, TypeScript va boshqa zamonaviy texnologiyalarda 
                ishlayman.
              </p>
              <p className="text-gold">
                Turon Beton MChJ da dasturiy ta'minot bo'limi boshlig'i, 
                Ravshanov AI asoschisi.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-sm font-semibold text-gold tracking-[0.2em] uppercase mb-6">
              Texnologiyalar
            </h3>
            <div className="flex flex-wrap gap-3">
              {['React', 'Vue', 'Flutter', 'Python', 'TypeScript', 'Node.js', 'Django', 'PostgreSQL', 'MongoDB', 'AWS'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-4 py-2 bg-gray-dark border border-gold/30 text-gold text-sm font-medium hover:border-gold hover:bg-gold/10 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Decorative element */}
            <div className="mt-12 p-6 border border-gold/20 rounded-lg bg-gray-dark/30">
              <p className="text-gold-light italic text-lg">
                "Har bir loyiha yangi bilim va tajriba olib keladi"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
