import { portfolioData } from '../data/portfolioData';
import PremiumCard from '../components/PremiumCard';

const ProjectsSection = () => {
  const { projects } = portfolioData;

  const glowColors: ('blue' | 'purple' | 'pink' | 'green')[] = ['blue', 'purple', 'pink', 'green'];

  return (
    <section id="projects" className="bg-black py-16 md:py-24 border-b border-white/5 relative z-10">
      <div className="container-narrow px-4 relative">
        <div className="mb-16 border-b border-white/10 pb-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Tanlangan Loyihalar
          </h2>
          <p className="text-gray-400 mt-4 text-lg font-light max-w-2xl leading-relaxed">
            B2B va B2C segmentlar uchun ishlab chiqilgan, xalqaro miqyosdagi yuqori yuklamali loyihalar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <PremiumCard 
              key={project.title}
              title={project.title}
              description={project.description}
              glowColor={glowColors[index % glowColors.length]}
              className="h-full flex flex-col"
            >
              <div className="mb-4">
                <span className="text-[#00f3ff] text-xs font-bold tracking-widest uppercase">
                  Loyiha #{index + 1}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs font-medium tracking-wide rounded-md hover:bg-white/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </PremiumCard>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-block bg-transparent border border-white/20 text-white px-8 py-3 rounded-md font-medium tracking-wide hover:bg-white/5 transition-colors">
            Barcha loyihalar bilan tanishish
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
