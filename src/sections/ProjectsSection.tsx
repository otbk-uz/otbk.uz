import { portfolioData } from '../data/portfolioData';

const ProjectsSection = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="bg-white py-12 md:py-20 border-b border-gray-200">
      <div className="container-narrow px-4">
        <div className="mb-12 border-b border-gray-200 pb-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Tanlangan Loyihalar
          </h2>
          <p className="text-gray-600 mt-2 text-lg font-serif">
            B2B va B2C segmentlar uchun ishlab chiqilgan, xalqaro miqyosdagi yuqori yuklamali loyihalar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="news-card p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="text-blue-600 font-bold mb-3 text-sm tracking-widest uppercase">
                  Loyiha #{index + 1}
                </div>
                
                <h3 className="news-title text-2xl mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed font-serif mb-6">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-outline">
            Barcha loyihalar bilan tanishish
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
