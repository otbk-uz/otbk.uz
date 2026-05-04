const StatsSection = () => {
  const stats = [
    { value: '5+', label: 'Yil tajriba' },
    { value: '20+', label: 'Loyiha' },
    { value: '10+', label: 'Mijoz' },
    { value: '15+', label: 'Texnologiya' },
  ];

  return (
    <section className="section bg-gray-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
      
      <div className="container-narrow relative z-10">
        <div className="text-center mb-12">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-semibold mb-4">
            Natijalar
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Raqamlar gapiradi
          </h2>
          <div className="divider-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="text-center p-6 border border-gold/30 rounded-lg bg-black/50 hover:border-gold transition-all duration-300"
            >
              <p className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.value}</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
