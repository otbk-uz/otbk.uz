interface StatItem {
  value: string;
  label: string;
  labelEn: string;
}

const stats: StatItem[] = [
  { value: '5+', label: 'Yillik tajriba', labelEn: 'Years' },
  { value: '20+', label: 'Muvaffaqiyatli loyiha', labelEn: 'Projects' },
  { value: '10+', label: 'Doimiy mijoz', labelEn: 'Clients' },
  { value: '15+', label: 'Texnologiya', labelEn: 'Technologies' },
];

const StatsSection = () => {
  return (
    <section className="py-20 md:py-28 section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-gold font-medium">
            Erishilgan natijalar
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-stone-900 mt-4">
            Raqamlar gapiradi
          </h2>
          <div className="gold-line w-32 mx-auto mt-6" />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 border border-stone-200 hover:border-gold/40 transition-colors duration-300 bg-stone-50"
            >
              <div className="text-4xl md:text-5xl font-serif text-gold mb-3">
                {stat.value}
              </div>
              <div className="text-sm text-stone-600 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-xs text-stone-400 uppercase tracking-wider mt-1">
                {stat.labelEn}
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <p className="text-lg md:text-xl text-stone-500 italic max-w-2xl mx-auto">
            "Har bir loyiha yangi bilim va ko'nikmalar olib keladi"
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
