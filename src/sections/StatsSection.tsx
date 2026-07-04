import { portfolioData } from '../data/portfolioData';
import PremiumCard from '../components/PremiumCard';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const { hero } = portfolioData;

  return (
    <section className="bg-transparent py-12 border-b border-white/5 relative z-10">
      <div className="container-narrow px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {hero.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <PremiumCard 
                title={stat.value}
                description={stat.label}
                glowColor={i % 2 === 0 ? 'blue' : 'purple'}
                className="text-center h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
