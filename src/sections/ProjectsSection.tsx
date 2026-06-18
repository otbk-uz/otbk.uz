import { portfolioData } from '../data/portfolioData';

const ProjectsSection = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section bg-transparent relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-[200px] pointer-events-none" />
      
      <div className="container-narrow relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1.5 h-6 bg-neon-blue rounded-full shadow-neon-blue"></div>
              <p className="text-neon-blue text-sm font-mono tracking-[0.3em] uppercase">
                PORTFOLIO
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Raqamli Yechimlar
            </h2>
          </div>
          <p className="text-white/40 max-w-sm md:text-right font-light">
            B2B va B2C segmentlar uchun ishlab chiqilgan, xalqaro miqyosdagi yuqori yuklamali loyihalar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-panel p-8 md:p-10 rounded-2xl group cursor-pointer flex flex-col justify-between border-white/5 hover:border-neon-blue/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Cyber Background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 via-neon-blue/0 to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <span className="text-5xl font-black text-white/5 group-hover:text-neon-blue/20 transition-colors font-mono">
                    0{index + 1}
                  </span>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-neon-blue group-hover:bg-neon-blue/10 transition-all">
                    <svg className="w-5 h-5 text-white/50 group-hover:text-neon-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-white/60 mb-8 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-4 py-1.5 text-xs font-mono bg-white/5 border border-white/10 text-white/70 rounded-full group-hover:border-neon-blue/30 group-hover:text-neon-blue transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 relative z-10 flex flex-col items-center">
          <div className="w-px h-16 bg-gradient-to-b from-neon-blue/50 to-transparent mb-6" />
          <a href="#contact" className="text-white/70 hover:text-white uppercase tracking-widest text-sm font-mono border-b border-white/20 hover:border-neon-blue pb-1 transition-all">
            Barcha loyihalar bilan tanishish
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
