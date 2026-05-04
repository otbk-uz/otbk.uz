const ProjectsSection = () => {
  const projects = [
    {
      title: 'Turon Beton ERP',
      description: 'ERP tizimi — buxgalteriya, sklad, ishlab chiqarish va sotish bo\'limlarini birlashtirgan korporativ dasturiy ta\'minot.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    },
    {
      title: 'Ravshanov AI',
      description: 'Sun\'iy intellekt ekotizimi — avtomatlashtirish, ma\'lumotlar tahlili va AI asosida qaror qabul qilish tizimi.',
      tags: ['Python', 'TensorFlow', 'React', 'AWS'],
    },
    {
      title: 'IntelliSoft Platform',
      description: 'Biznes jarayonlarini avtomatlashtirish va raqamli transformatsiya uchun kompleks yechim.',
      tags: ['TypeScript', 'Next.js', 'GraphQL', 'GCP'],
    },
    {
      title: 'Sinergiya Hub',
      description: 'Jamoaviy loyihalar, vazifalar boshqaruvi va resurslarni optimallashtirish platformasi.',
      tags: ['Vue.js', 'Firebase', 'Flutter', 'CI/CD'],
    },
  ];

  return (
    <section id="projects" className="section bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gold/5 to-transparent" />
      
      <div className="container-narrow relative z-10">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-semibold mb-4">
            Loyihalar
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tanlangan ishlar
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-gold p-8 rounded-lg group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl font-bold text-gold/20 group-hover:text-gold/40 transition-colors">
                  0{index + 1}
                </span>
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 text-xs border border-gold/30 text-gold/70 rounded-full group-hover:border-gold/50 group-hover:text-gold transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 mb-6">Va boshqa 20+ muvaffaqiyatli loyiha</p>
          <a href="#contact" className="btn-outline-gold inline-block">
            Barcha loyihalar
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
