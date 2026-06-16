const StatsSection = () => {
  const stats = [
    { value: '5+', label: 'Yil tajriba' },
    { value: '20+', label: 'Muvaffaqiyatli Loyiha' },
    { value: '10+', label: 'Mamnun Mijoz' },
    { value: '15+', label: 'Texnologiya' },
  ];

  return (
    <section className="section bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
      
      <div className="container-narrow relative z-10">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-semibold mb-4">
            Natijalar
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Raqamlar gapiradi
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="text-center p-4 md:p-8 border border-white/5 rounded-lg bg-gray-900/40 hover:border-gold/50 hover:bg-gold/5 transition-all duration-500 transform hover:-translate-y-1"
            >
              <p className="text-3xl md:text-5xl font-black text-gold mb-2 md:mb-3">{stat.value}</p>
              <p className="text-[10px] md:text-sm text-gray-400 uppercase tracking-wider md:tracking-widest leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
