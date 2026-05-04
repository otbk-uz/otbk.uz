const AboutSection = () => {
  return (
    <section id="about" className="section bg-gray-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-gold/5 to-transparent" />
      
      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            {/* Gold frame decoration */}
            <div className="absolute -inset-4 border-2 border-gold/40 rounded-xl transform -rotate-2" />
            <div className="absolute -inset-8 border border-gold/20 rounded-xl transform rotate-1" />
            
            <div className="relative rounded-xl overflow-hidden gold-border">
              <img
                src="/images/photo_2026-04-14_16-21-23.jpg"
                alt="Otabek Ravshanov - Ish jarayoni"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Bottom text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-gold text-sm tracking-wider uppercase mb-2">Tajriba</p>
                <p className="text-white text-2xl font-bold">5+ Yillik Tajriba</p>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-10 h-10 border-l-3 border-t-3 border-gold" />
              <div className="absolute top-4 right-4 w-10 h-10 border-r-3 border-t-3 border-gold" />
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <p className="text-sm text-gold font-semibold tracking-[0.3em] uppercase mb-4">
              Men haqimda
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Tajriba va</span>
              <br />
              <span className="gold-gradient">mahorat</span>
            </h2>
            <div className="divider-gold mb-8" />
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-10">
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
            </div>

            {/* Tech stack */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gold tracking-[0.2em] uppercase">
                Texnologiyalar
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Vue', 'Flutter', 'Python', 'TypeScript', 'Node.js', 'Django', 'PostgreSQL'].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 bg-black border border-gold/40 text-gold text-sm hover:border-gold hover:bg-gold/10 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Quote */}
            <div className="mt-8 p-5 border-l-4 border-gold bg-black/30 rounded-r-lg">
              <p className="text-gold-light italic">
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
