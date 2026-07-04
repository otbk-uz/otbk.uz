import PremiumCard from '../components/PremiumCard';

const TechStackSection = () => {
  const techCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Sass/SCSS", "Redux", "Zustand"]
    },
    {
      title: "Backend & APIs",
      skills: ["Node.js", "Python", "FastAPI", "Express.js", "NestJS", "RESTful APIs", "GraphQL", "WebSockets"]
    },
    {
      title: "Database & Storage",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase", "Firebase", "Prisma ORM"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "AWS (EC2, S3, RDS)", "Nginx", "Linux/Ubuntu", "CI/CD (GitHub Actions)", "Vercel", "Netlify"]
    },
    {
      title: "Tools & Others",
      skills: ["Git & GitHub", "Figma", "Postman", "Jest", "Vitest", "Webpack", "Vite", "Agile/Scrum"]
    }
  ];

  const colors: ('blue' | 'purple' | 'green' | 'pink')[] = ['blue', 'purple', 'green', 'pink', 'blue'];

  return (
    <section id="tech-stack" className="bg-black py-16 md:py-24 border-b border-white/5 relative z-10">
      <div className="container-narrow px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Qo'llaniladigan Texnologiyalar
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f3ff] to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, idx) => (
            <PremiumCard 
              key={idx}
              title={category.title}
              description=""
              glowColor={colors[idx % colors.length]}
            >
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-md text-xs font-medium tracking-wide hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
