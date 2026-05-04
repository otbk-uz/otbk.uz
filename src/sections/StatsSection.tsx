const StatsSection = () => {
  const stats = [
    { value: '5+', label: 'Yil tajriba' },
    { value: '20+', label: 'Loyiha' },
    { value: '10+', label: 'Mijoz' },
    { value: '15+', label: 'Texnologiya' },
  ];

  return (
    <section className="section bg-white border-y border-gold">
      <div className="container-narrow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-semibold text-gold mb-1">{stat.value}</p>
              <p className="text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
