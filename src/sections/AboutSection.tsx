import { portfolioData } from '../data/portfolioData';
import { useState, useEffect } from 'react';

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
    <section id="about" className="bg-white py-12 md:py-20 border-b border-gray-200">
      <div className="container-narrow px-4">
        {/* Article Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-4 mb-6 border-b border-gray-200 pb-4">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
              Maxsus Reportaj
            </span>
            <span className="text-gray-400 text-sm">|</span>
            <span className="text-gray-500 text-sm">IT & Biznes</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
            {article.headline}
          </h2>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
              <img src="/images/photo_2026-04-14_16-21-47.jpg" alt={`${domain} tahririyati`} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-gray-900 font-bold">{domain} Tahririyati</p>
              <p className="text-gray-500 text-sm">19 Iyun, 2026</p>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-9 space-y-10">
            <p className="text-xl md:text-2xl text-gray-800 font-serif leading-relaxed font-light italic border-l-4 border-blue-600 pl-6 bg-gray-50 py-4 pr-4">
              {article.intro}
            </p>

            {article.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  {section.title}
                </h3>
                <div className="text-gray-800 text-lg leading-relaxed font-serif whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Sidebar Image in text flow */}
            <div className="my-10 border border-gray-200 p-2 rounded bg-white shadow-sm max-w-2xl">
              <img src="/images/photo_2026-04-14_16-21-23.jpg" alt="Kodlash jarayoni" className="w-full h-auto rounded" />
              <p className="text-sm text-gray-500 mt-3 text-center italic">Real loyihalar ustida uzluksiz mehnat va tizimni kengaytirish amaliyoti.</p>
            </div>

            {/* Conclusion */}
            <div className="bg-blue-50 p-8 rounded border-l-4 border-blue-600 mt-12 max-w-3xl">
              <p className="text-lg text-gray-900 font-medium leading-relaxed font-serif">
                {article.conclusion}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
