const ProjectsSection = () => {
  const projects = [
    {
      title: 'Playnation.uz',
      description: 'O\'yinlar va geymerlar uchun zamonaviy ijtimoiy tarmoq va musobaqalar platformasi.',
      tags: ['React', 'Next.js', 'Supabase', 'Tailwind'],
    },
    {
      title: 'floraholding.uz',
      description: 'Gullar va o\'simliklar savdosi, yetkazib berish korporativ boshqaruv tizimi.',
      tags: ['TypeScript', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'innohub.ai',
      description: 'Sun\'iy intellekt ekotizimi, innovatsion g\'oyalar va startaplar inkubatori.',
      tags: ['Python', 'AI/ML', 'React', 'FastAPI'],
    },
    {
      title: 'AirVarvoz',
      description: 'Aviabiletlarni qulay qidirish, band booking va xarid qilish portali.',
      tags: ['Vue.js', 'Firebase', 'Mobile App'],
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
            Mening loyihalarim
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-gold p-8 rounded-lg group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-6">
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
                
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
              
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

        <div className="text-center mt-16">
          <p className="text-gray-500 mb-6">Va boshqa ko'plab muvaffaqiyatli loyihalar</p>
          <a href="#contact" className="btn-outline-gold inline-block">
            Barcha loyihalarni ko'rish
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
