const AboutSection = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-gold font-medium mb-4">Men haqimda</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Tajriba va mahorat
            </h2>
            <div className="gold-line w-16 mb-6" />
            
            <div className="space-y-4 text-muted">
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
              <p>
                Turon Beton MChJ da dasturiy ta'minot bo'limi boshlig'i, 
                Ravshanov AI asoschisi.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted mb-4">Texnologiyalar</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Vue', 'Flutter', 'Python', 'TypeScript', 'Node.js', 'Django', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white border border-gold text-gold text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
