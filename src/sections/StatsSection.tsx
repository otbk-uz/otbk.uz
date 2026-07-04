import { portfolioData } from '../data/portfolioData';
import PremiumCard from '../components/PremiumCard';

const StatsSection = () => {
  const { hero } = portfolioData;

  return (
    <section className="bg-[#050505] py-12 border-b border-white/5 relative z-10">
      <div className="container-narrow px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {hero.stats.map((stat, i) => (
            <PremiumCard 
              key={i}
              title={stat.value}
              description={stat.label}
              glowColor={i % 2 === 0 ? 'blue' : 'purple'}
              className="text-center"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
