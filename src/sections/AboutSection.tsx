const AboutSection = () => {
  return (
    <section id="about" className="section bg-gray-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-gold/5 to-transparent" />
      
      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-semibold mb-4">
              Men haqimda
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Tajriba va mahorat
            </h2>
            <div className="divider-gold mb-6" />
            
            <div className="space-y-6 text-gray-400 text-base leading-relaxed mb-8">
              <p>
                Men 18 yoshli dasturiy ta'minot arxitektoriman. Web va mobil 
                ilovalarni noldan loyihalashtirish, murakkab va yuqori yuklamalarga chidamli tizimlar 
                yaratish qobiliyatiga egaman.
              </p>
              <p>
                2017-yildan beri dasturlash sohasida faoliyat yuritaman. React, Vue, Python, TypeScript 
                va boshqa zamonaviy texnologiyalarda professional darajada ishlayman.
              </p>
            </div>

            {/* Tech stack */}
            <div className="space-y-4 mb-8">
              <h3 className="text-xs font-semibold text-gold tracking-widest uppercase">
                Texnologiyalar
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {['React', 'Vue', 'Python', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3.5 py-1.5 bg-black border border-gold/30 text-gold text-sm hover:border-gold hover:bg-gold/10 transition-all rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Quote */}
            <div className="p-5 border-l-4 border-gold bg-black/30 rounded-r">
              <p className="text-gold text-sm italic leading-relaxed">
                "Har bir loyiha yangi bilim, tajriba va innovatsion yechimlar yaratish imkoniyatidir."
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            {/* Decorative frames */}
            <div className="absolute -inset-4 border border-gold/30 rounded transform -rotate-3 pointer-events-none" />
            <div className="absolute -inset-8 border border-gold/10 rounded transform rotate-2 pointer-events-none" />
            
            <div className="relative rounded overflow-hidden border border-gold/30 shadow-2xl">
              <img
                src="/images/photo_2026-04-14_16-21-23.jpg"
                alt="Otabek Ravshanov - Ish jarayoni"
                loading="lazy"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-2xl font-bold font-sans">5+ Yillik Tajriba</p>
                <p className="text-gold text-sm uppercase tracking-wider mt-1">Dasturlash sohasida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
