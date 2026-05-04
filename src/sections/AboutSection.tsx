import { Code2, Database, Globe, Layers } from 'lucide-react';

const AboutSection = () => {
  const techIcons = [
    { icon: Code2, label: 'Frontend' },
    { icon: Database, label: 'Backend' },
    { icon: Globe, label: 'DevOps' },
    { icon: Layers, label: 'Full Stack' },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 section-padding bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-gold font-medium">
            Men haqimda
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-stone-900 mt-4 max-w-3xl leading-tight">
            "G'oyadan mahsulotgacha, prototipdan sanoatlashtirishgacha."
          </h2>
          <div className="gold-line-left w-24 mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Content */}
          <div className="space-y-6">
            <p className="text-lg text-stone-600 leading-relaxed">
              Men Otabek Ravshanov Avazbekovich — Toshkent shahrida faoliyat
              yurituvchi, 18 yoshli yuqori malakali dasturiy ta'minot
              arxitektori. Web va mobil ilovalarni noldan loyihalashtirish, 
              murakkab tizimlar yaratish va istalgan dasturlash tiliga tezkor 
              moslashish qobiliyatiga egaman.
            </p>

            <p className="text-lg text-stone-600 leading-relaxed">
              Dasturlashga bo'lgan sayohatim 2017-yilda boshlangan. 2018-yilda 
              Qo'qon Innavations dasturlash kursida o'qishni boshladim va shundan 
              beri bir nechta sohalarda tajriba to'plab kelmoqdaman.
            </p>

            <p className="text-lg text-stone-600 leading-relaxed">
              Bugungi kunda bir nechta muhim lavozimlarda ishlamoqda: Turon
              Beton MChJ da dasturiy ta'minotni ishlab chiqish bo'limi
              boshlig'i, Ravshanov AI (RAI) asoschisi va bosh arxitektori.
            </p>

            <p className="text-lg text-stone-600 leading-relaxed">
              React, Vue, Flutter, Python, JavaScript, TypeScript kabi 
              texnologiyalarda chuqur tajribaga egaman.
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-4 pt-6">
              {techIcons.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 border border-stone-200 hover:border-gold/50 transition-colors duration-300 group bg-white"
                >
                  <Icon className="w-4 h-4 text-gold" />
                  <span className="text-sm text-stone-600">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative overflow-hidden border border-stone-200">
              <img
                src="/images/photo_2026-04-14_16-21-23.jpg"
                alt="Otabek Ravshanov"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>
            
            {/* Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white border border-stone-200 p-6 shadow-lg">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-serif text-stone-900">5+</div>
                  <div className="text-xs tracking-wider uppercase text-stone-500 mt-1">Yil</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-serif text-gold">20+</div>
                  <div className="text-xs tracking-wider uppercase text-stone-500 mt-1">Loyiha</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-serif text-stone-900">10+</div>
                  <div className="text-xs tracking-wider uppercase text-stone-500 mt-1">Mijoz</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
