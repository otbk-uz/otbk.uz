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

  return (
    <section id="tech-stack" className="bg-gray-50 py-12 md:py-20 border-b border-gray-200">
      <div className="container-narrow px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Qo'llaniladigan Texnologiyalar
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techCategories.map((category, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
