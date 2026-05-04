const ProjectsSection = () => {
  const projects = [
    {
      title: 'Turon Beton ERP',
      description: 'ERP tizimi — buxgalteriya, sklad, ishlab chiqarish va sotish.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'Ravshanov AI',
      description: 'Sun\'iy intellekt ekotizimi — avtomatlashtirish va tahlil.',
      tags: ['Python', 'TensorFlow', 'React'],
    },
    {
      title: 'IntelliSoft Platform',
      description: 'Biznes jarayonlarini avtomatlashtirish platformasi.',
      tags: ['TypeScript', 'Next.js', 'GraphQL'],
    },
    {
      title: 'Sinergiya Hub',
      description: 'Jamoaviy loyihalar va vazifalar boshqaruvi.',
      tags: ['Vue.js', 'Firebase', 'Flutter'],
    },
  ];

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container-narrow">
        <p className="text-sm text-muted mb-4">Loyihalar</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Tanlangan ishlar
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="p-6 bg-white border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <span className="text-sm text-muted">0{index + 1}</span>
              </div>
              <p className="text-muted mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-sm text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-muted text-sm mt-8">Va boshqa 20+ loyiha</p>
      </div>
    </section>
  );
};

export default ProjectsSection;
