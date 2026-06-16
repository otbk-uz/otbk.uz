const StatsSection = () => {
  const stats = [
    { value: '5+', label: 'Yil tajriba' },
    { value: '20+', label: 'Loyiha' },
    { value: '10+', label: 'Mijoz' },
    { value: '15+', label: 'Texnologiya' },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-900 border border-white/5 rounded p-6">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
      
      <div className="relative z-10">
        <div className="mb-6">
          <p className="text-xs text-gold font-bold tracking-[0.2em] uppercase mb-2">
            Natijalar
          </p>
          <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
            Raqamlar gapiradi
          </h2>
          <div className="w-10 h-1 bg-gold" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="text-center p-4 border border-white/5 rounded bg-black/30 hover:border-gold/50 hover:bg-white/5 transition-all duration-300"
            >
              <p className="text-3xl font-bold text-gold mb-1">{stat.value}</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
