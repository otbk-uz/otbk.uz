import { portfolioData } from '../data/portfolioData';

const AboutSection = () => {
  const { article } = portfolioData;

  return (
    <section id="about" className="section relative bg-gray/50 border-t border-white/5">
      {/* Subtle Background Mesh */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container-narrow relative z-10">
        {/* Magazine Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-neon-purple text-xs font-mono tracking-widest uppercase bg-neon-purple/10 px-3 py-1 rounded-full border border-neon-purple/20">
              Maxsus Reportaj
            </span>
            <div className="h-px bg-white/10 flex-1" />
            <span className="text-white/40 text-xs font-mono uppercase tracking-wider hidden sm:block">IT & Biznes</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 max-w-5xl tracking-tight">
            {article.headline}
          </h2>
          
          <div className="flex items-center gap-6 pb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neon-blue/20 border border-neon-blue/50 flex items-center justify-center p-0.5 overflow-hidden">
                <img src="/images/photo_2026-04-14_16-21-47.jpg" alt="Kun.uz tahririyati" className="w-full h-full object-cover rounded-full grayscale" />
              </div>
              <div>
                <p className="text-white text-sm font-bold">Kun.uz Tahririyati</p>
                <p className="text-white/40 text-xs font-mono">19 Iyun, 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Magazine Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Main Article Content */}
          <div className="lg:col-span-8 space-y-12">
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed border-l-4 border-neon-blue pl-6 italic">
              {article.intro}
            </p>

            {article.sections.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                  <span className="text-neon-purple text-lg font-mono">0{idx + 1}.</span>
                  {section.title}
                </h3>
                <div className="space-y-4 text-white/60 text-lg leading-relaxed font-serif whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Conclusion / Quote Box */}
            <div className="glass-panel p-8 md:p-12 rounded-2xl border-l-4 border-l-neon-purple relative overflow-hidden mt-16">
              <div className="absolute -right-10 -top-10 text-[150px] text-white/5 font-serif leading-none">"</div>
              <p className="text-lg md:text-xl text-white/90 font-medium leading-relaxed relative z-10 italic">
                {article.conclusion}
              </p>
            </div>
          </div>

          {/* Sidebar / Visuals */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-32 space-y-8">
              {/* Image 1 */}
              <div className="rounded-2xl overflow-hidden glass-panel group relative aspect-[3/4]">
                <img src="/images/photo_2026-04-14_16-21-23.jpg" alt="Kodlash jarayoni" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-neon-blue text-xs font-mono uppercase tracking-widest mb-2">Jarayon</p>
                  <p className="text-white/90 text-sm font-medium">Real loyihalar ustida uzluksiz mehnat va tizimni kengaytirish amaliyoti.</p>
                </div>
              </div>

              {/* Data Widget */}
              <div className="glass-panel p-6 rounded-2xl border border-white/5">
                <h4 className="text-white font-bold mb-6 text-lg border-b border-white/10 pb-4">Asosiy Fokuslar</h4>
                <ul className="space-y-4">
                  {['Enterprise Development', 'Global Eksport', 'Tech Mentorship', 'AI Integratsiyasi'].map((tag, i) => (
                    <li key={i} className="flex items-center gap-3 group">
                      <div className="w-8 h-8 rounded-full bg-neon-purple/10 flex items-center justify-center border border-neon-purple/20 group-hover:bg-neon-purple/20 transition-colors">
                        <div className="w-1.5 h-1.5 bg-neon-purple rounded-full shadow-neon-purple" />
                      </div>
                      <span className="text-white/70 font-mono text-sm uppercase tracking-wider group-hover:text-white transition-colors">{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
