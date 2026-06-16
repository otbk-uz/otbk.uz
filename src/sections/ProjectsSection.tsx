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
      description: 'Aviabiletlarni qulay qidirish, band qilish va xarid qilish portali.',
      tags: ['Vue.js', 'Firebase', 'Mobile App'],
    },
  ];

  return (
    <section id="projects" className="section bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gold/5 to-transparent" />
      
      <div className="container-narrow relative z-10">
        <div className="flex items-center gap-3 border-b-2 border-gold pb-3 mb-6">
          <div className="w-2 h-6 bg-gold"></div>
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
            So'nggi loyihalar
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group cursor-pointer flex flex-col md:flex-row gap-6 border-b border-white/10 pb-6 hover:bg-white/5 transition-all p-2 -mx-2 rounded"
            >
              <div className="w-full md:w-1/3 aspect-video bg-gray-900 rounded overflow-hidden relative border border-white/5">
                {/* News thumbnail placeholder since we don't have project images easily mapped, we use gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-black/80 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center text-gold/30 font-bold text-4xl">
                  {project.title.charAt(0)}
                </div>
              </div>
              
              <div className="w-full md:w-2/3 flex flex-col justify-center">
                <div className="flex gap-2 mb-2">
                  <span className="text-gold text-xs font-bold uppercase tracking-wider">
                    {project.tags[0]}
                  </span>
                  <span className="text-gray-500 text-xs">| {project.tags[1] || 'Web'}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a href="#contact" className="w-full block text-center py-3 bg-white/5 hover:bg-gold hover:text-black transition-colors font-bold text-sm uppercase tracking-wider border border-white/10">
            Barcha loyihalarni ko'rish
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
