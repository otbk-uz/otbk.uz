const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-gray-900 border border-white/5 rounded p-6">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gold/5 to-transparent" />
      
      <div className="relative z-10">
        <div className="flex flex-col gap-6">
          {/* Top: Content */}
          <div>
            <p className="text-xs text-gold font-bold tracking-[0.2em] uppercase mb-2">
              Men haqimda
            </p>
            <h2 className="text-2xl font-bold mb-4 leading-tight">
              <span className="text-white">Tajriba va mahorat</span>
            </h2>
            <div className="w-10 h-1 bg-gold mb-4" />
            
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed mb-6">
              <p>
                18 yoshli dasturiy ta'minot arxitektori. Web va mobil 
                ilovalarni noldan loyihalashtirish, murakkab tizimlar 
                yaratish qobiliyatiga egaman.
              </p>
              <p>
                2017-yildan beri dasturlash sohasida. React, Vue, Python, TypeScript 
                texnologiyalarida ishlayman.
              </p>
            </div>

            {/* Tech stack */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-gold tracking-widest uppercase">
                Texnologiyalar
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'Vue', 'Python', 'TS', 'Node.js', 'PostgreSQL'].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 bg-black border border-gold/30 text-gold text-xs hover:border-gold hover:bg-gold/10 transition-all rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Quote */}
            <div className="mt-6 p-4 border-l-2 border-gold bg-black/30 rounded-r">
              <p className="text-gold text-xs italic">
                "Har bir loyiha yangi bilim va tajriba olib keladi"
              </p>
            </div>
          </div>

          {/* Bottom: Image */}
          <div className="relative mt-2">
            <div className="relative rounded overflow-hidden border border-gold/20">
              <img
                src="/images/photo_2026-04-14_16-21-23.jpg"
                alt="Otabek Ravshanov - Ish jarayoni"
                loading="lazy"
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white text-lg font-bold">5+ Yillik Tajriba</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
