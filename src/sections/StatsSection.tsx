import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { hero } = portfolioData;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const numbers = gsap.utils.toArray<HTMLElement>('.stat-number');
      
      numbers.forEach((number) => {
        const targetValue = parseFloat(number.getAttribute('data-value') || '0');
        const isPlus = number.getAttribute('data-value')?.includes('+');
        const suffix = number.getAttribute('data-suffix') || '';
        
        gsap.to(number, {
          innerHTML: targetValue,
          duration: 2,
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
          onUpdate: function() {
            number.innerHTML = Math.round(Number(this.targets()[0].innerHTML)) + suffix + (isPlus ? '+' : '');
          }
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-transparent border-t border-b border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-full h-full max-w-4xl bg-neon-purple blur-[150px] rounded-full" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {hero.stats.map((stat, i) => {
            const hasK = stat.value.includes('K');
            
            return (
              <div key={i} className="text-center group">
                <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 mb-4 stat-number font-sans" 
                  data-value={stat.value} 
                  data-suffix={hasK ? 'K' : ''}
                >
                  0
                </div>
                <div className="w-12 h-1 bg-neon-blue mx-auto mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                <p className="text-sm md:text-base text-white/60 uppercase tracking-widest font-mono">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
