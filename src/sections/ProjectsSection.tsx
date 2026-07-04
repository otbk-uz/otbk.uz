import { portfolioData } from '../data/portfolioData';
import PremiumCard from '../components/PremiumCard';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const { projects } = portfolioData;

  const glowColors: ('blue' | 'purple' | 'pink' | 'green')[] = ['blue', 'purple', 'pink', 'green'];

  return (
    <section id="projects" className="bg-transparent py-20 md:py-32 border-b border-white/5 relative z-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#b026ff]/5 to-transparent pointer-events-none"></div>
      
      <div className="container-narrow px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 border-b border-white/10 pb-8"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            <span className="text-gradient">Tanlangan Loyihalar</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed tracking-wide">
            B2B va B2C segmentlar uchun ishlab chiqilgan, xalqaro miqyosdagi yuqori yuklamali loyihalar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <PremiumCard 
                title={project.title}
                description={project.description}
                glowColor={glowColors[index % glowColors.length]}
                className="h-full flex flex-col"
              >
                <div className="mb-4">
                  <span className="text-[#00f3ff] text-xs font-bold tracking-widest uppercase shadow-sm">
                    Loyiha #{index + 1}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-[11px] uppercase font-bold tracking-widest rounded-md hover:bg-white/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <a href="#contact" className="btn-outline">
            Barcha loyihalar bilan tanishish
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
