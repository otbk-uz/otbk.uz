import { portfolioData } from '../data/portfolioData';

const HeroSection = () => {
  const { hero } = portfolioData;

  return (
    <section id="hero" className="min-h-screen flex items-center section bg-transparent relative overflow-hidden pt-32">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-neon-blue/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[180px]" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="relative">
            {/* Name with neon accent */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-neon-blue shadow-neon-blue" />
              <p className="text-neon-blue text-sm tracking-[0.4em] uppercase font-bold font-mono">
                {hero.title}
              </p>
            </div>

            {/* Main heading with glass gradient */}
            <h1 className="text-5xl sm:text-7xl font-black leading-[1.05] mb-8 font-sans tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                {hero.subtitle.split(' ')[0]}
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                {hero.subtitle.split(' ').slice(1).join(' ')}
              </span>
            </h1>

            {/* Divider */}
            <div className="divider-gold mb-8 bg-gradient-to-r from-neon-blue to-transparent shadow-none w-32 h-[1px]" />

            {/* Description */}
            <p className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed mb-10 font-light">
              {hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-14">
              <a href="#contact" className="btn-gold relative group overflow-hidden bg-white text-black hover:text-white">
                <span className="relative z-10">Bog'lanish</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a href="#projects" className="btn-outline-gold hover:border-neon-blue/50 hover:bg-neon-blue/5">
                Loyihalar
              </a>
            </div>

            {/* Stats - Glassmorphism */}
            <div className="flex gap-4 md:gap-8 p-6 glass-panel rounded-2xl w-max border-white/5 shadow-glass">
              {hero.stats.map((stat, idx) => (
                <div key={idx} className="flex gap-4 md:gap-8 items-center">
                  <div>
                    <p className="text-3xl font-black text-white">{stat.value}</p>
                    <p className="text-[10px] text-neon-blue/80 uppercase tracking-widest font-mono">{stat.label}</p>
                  </div>
                  {idx < hero.stats.length - 1 && <div className="w-px h-10 bg-white/10" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Portrait Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -inset-4 border border-neon-blue/20 rounded-2xl transform rotate-2 pointer-events-none" />
            <div className="absolute -inset-4 border border-neon-purple/20 rounded-2xl transform -rotate-2 pointer-events-none" />
            
            <div className="relative w-80 h-[32rem] md:w-[28rem] md:h-[38rem] rounded-2xl overflow-hidden glass-panel group">
              <img
                src="/images/photo_2026-04-14_16-21-21.jpg"
                alt="Otabek Ravshanov"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              {/* High-tech overlay details */}
              <div className="absolute bottom-6 left-6 right-6 font-mono text-[10px] text-neon-blue/70 flex justify-between items-end">
                <div className="space-y-1">
                  <p className="text-white/40">SYS.STATUS: <span className="text-neon-green">ONLINE</span></p>
                  <p>USER: ROOT</p>
                  <p>UID: 0x00A1</p>
                </div>
                <div className="text-right">
                  <div className="w-12 h-12 border border-neon-blue/30 rounded-full flex items-center justify-center mb-2 ml-auto">
                    <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse shadow-neon-blue" />
                  </div>
                  <p>TARGET ACQUIRED</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
