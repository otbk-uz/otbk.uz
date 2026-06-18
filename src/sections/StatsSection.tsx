import { portfolioData } from '../data/portfolioData';

const StatsSection = () => {
  const { hero } = portfolioData;

  return (
    <section className="bg-gray-50 py-12 border-b border-gray-200">
      <div className="container-narrow px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {hero.stats.map((stat, i) => (
            <div key={i} className="text-center bg-white p-6 rounded border border-gray-200 shadow-sm">
              <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2 font-sans">
                {stat.value}
              </div>
              <p className="text-sm text-gray-500 uppercase tracking-wide font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
