import { portfolioData } from '../data/portfolioData';
import { useState, useEffect } from 'react';
import PremiumCard from '../components/PremiumCard';

const AboutSection = () => {
  const { article } = portfolioData;
  const [domain, setDomain] = useState('Or7.uz');

  useEffect(() => {
    // Set domain dynamically based on hostname
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
    <section id="about" className="bg-[#050505] py-20 md:py-32 border-b border-white/5 relative">
      <div className="container-narrow px-4 relative z-10">
        {/* Article Header */}
        <div className="max-w-4xl mb-16">
          <div className="flex items-center gap-4 mb-8 pb-4">
            <span className="text-[#00f3ff] font-medium uppercase tracking-wider text-xs">
              Maxsus Reportaj
            </span>
            <span className="text-white/20 text-sm">|</span>
            <span className="text-gray-500 text-xs tracking-wider uppercase">IT & Biznes</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-10 tracking-tight">
            {article.headline}
          </h2>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white/5 border border-white/10">
              <img src="/images/photo_2026-04-14_16-21-47.jpg" alt={`${domain} tahririyati`} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-white font-medium text-sm">{domain} Tahririyati</p>
              <p className="text-gray-500 text-xs mt-1">19 Iyun, 2026</p>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-9 space-y-12">
            <PremiumCard 
              title=""
              description={article.intro}
              glowColor="purple"
              className="mb-8"
            />

            {article.sections.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mt-12 mb-6 tracking-tight">
                  {section.title}
                </h3>
                <div className="text-gray-400 text-lg leading-relaxed font-light whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Conclusion using PremiumCard */}
            <div className="mt-16">
              <PremiumCard 
                title="Xulosa"
                description={article.conclusion}
                glowColor="blue"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
