import { ArrowUpRight } from 'lucide-react';

interface Project {
  number: string;
  title: string;
  descriptionUz: string;
  tags: string[];
  image: string;
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Turon Beton ERP',
    descriptionUz: 'Turon Beton MChJ uchun ERP tizimi — buxgalteriya, sklad, ishlab chiqarish va sotish bo\'limlarini birlashtirgan korporativ dasturiy ta\'minot.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    image: '/images/project_erp.jpg',
  },
  {
    number: '02',
    title: 'Ravshanov AI',
    descriptionUz: 'Sun\'iy intellekt ekotizimi — avtomatlashtirish, ma\'lumotlar tahlili va sun\'iy intellekt asosida qaror qabul qilish tizimi.',
    tags: ['Python', 'TensorFlow', 'React', 'AWS'],
    image: '/images/project_ai.jpg',
  },
  {
    number: '03',
    title: 'IntelliSoft Platform',
    descriptionUz: 'IntelliSoft strategik platformasi — biznes jarayonlarini avtomatlashtirish va raqamli transformatsiya uchun kompleks yechim.',
    tags: ['TypeScript', 'Next.js', 'GraphQL', 'GCP'],
    image: '/images/project_cloud.jpg',
  },
  {
    number: '04',
    title: 'Sinergiya Hub',
    descriptionUz: 'Sinergiya hamkorlik platformasi — jamoaviy loyihalar, vazifalar boshqaruvi va resurslarni optimallashtirish tizimi.',
    tags: ['Vue.js', 'Firebase', 'Flutter', 'CI/CD'],
    image: '/images/project_collab.jpg',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 section-padding bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-gold font-medium">
            Loyihalar
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-stone-900 mt-4">
            Tanlangan ishlar
          </h2>
          <div className="gold-line-left w-24 mt-6" />
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group relative overflow-hidden bg-white border border-stone-200 hover:border-gold/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-4 right-4 text-5xl font-serif text-white/20">
                  {project.number}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-medium text-stone-900 mb-3 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  {project.descriptionUz}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs border border-stone-200 text-stone-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center gap-2 text-gold text-sm font-medium">
                  <span>Batafsil</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects link */}
        <div className="mt-12 text-center">
          <p className="text-stone-500 mb-4">Va boshqa 20+ loyiha</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-stone-300 text-stone-700 text-sm tracking-wider uppercase font-medium hover:border-gold hover:text-gold transition-all duration-300"
          >
            Hammasini ko'rish
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
