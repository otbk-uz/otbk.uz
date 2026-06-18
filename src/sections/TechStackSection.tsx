import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechStackSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const techCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "GSAP"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "FastAPI", "Express", "PostgreSQL", "Supabase"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "AWS", "Firebase", "CI/CD", "Nginx", "Linux"]
    }
  ];

  return (
    <section id="tech-stack" ref={sectionRef} className="section bg-transparent relative border-t border-white/5">
      <div className="container-narrow relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Texnologiyalar
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent mx-auto opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCategories.map((category, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-neon-blue/30 transition-colors group">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-neon-purple shadow-neon-purple animate-pulse" />
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-white/5 text-white/80 rounded-lg text-sm border border-white/10 hover:bg-neon-purple/10 hover:text-white hover:border-neon-purple/30 transition-all cursor-default"
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
