import { portfolioData } from '../data/portfolioData';
import { useState, useEffect } from 'react';
import PremiumCard from '../components/PremiumCard';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const { article } = portfolioData;
  const [domain, setDomain] = useState('Or7.uz');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      if (hostname.includes('otbk.uz')) {
        setDomain('Otbk.uz');
      } else {
        setDomain('Or7.uz');
      }
    }
  }, []);

  return (
    <section id="about" className="bg-[#050505] py-20 md:py-32 border-b border-white/5 relative z-10 overflow-hidden">
      
      {/* Background depth texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

      <div className="container-narrow px-4 relative z-10">
        {/* Article Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mb-16"
        >
          <div className="flex items-center gap-4 mb-8 pb-4">
            <span className="text-[#00f3ff] font-medium uppercase tracking-widest text-xs shadow-sm">
              Maxsus Reportaj
            </span>
            <span className="text-white/20 text-sm">|</span>
            <span className="text-gray-500 text-xs tracking-widest uppercase">IT & Biznes</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black leading-[1.1] mb-10 tracking-tighter">
            <span className="text-gradient">{article.headline}</span>
          </h2>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white/5 border border-white/10 p-[2px]">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src="/images/photo_2026-04-14_16-21-47.jpg" alt={`${domain} tahririyati`} className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <p className="text-white font-medium text-sm tracking-wide">{domain} Tahririyati</p>
              <p className="text-[#00f3ff] text-xs mt-1 uppercase tracking-widest">19 Iyun, 2026</p>
            </div>
          </div>
        </motion.div>

        {/* Article Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-9 space-y-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <PremiumCard 
                title=""
                description={article.intro}
                glowColor="purple"
                className="mb-8 border-l-4 border-l-[#b026ff]"
              />
            </motion.div>

            {article.sections.map((section, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="space-y-6 relative"
              >
                <div className="absolute -left-8 top-2 w-1 h-12 bg-gradient-to-b from-[#00f3ff] to-transparent rounded-full hidden md:block opacity-30"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
                  {section.title}
                </h3>
                <div className="text-gray-400 text-lg leading-[1.8] font-light whitespace-pre-line tracking-wide">
                  {section.content}
                </div>
              </motion.div>
            ))}

            {/* Conclusion using PremiumCard */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-20"
            >
              <PremiumCard 
                title="Xulosa"
                description={article.conclusion}
                glowColor="blue"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
