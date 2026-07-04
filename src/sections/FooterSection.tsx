import { useState, useEffect } from 'react';

const FooterSection = () => {
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

  const renderLogo = () => {
    if (domain === 'Or7.uz') {
      return <>Or<span className="text-[#00f3ff]">7</span>.uz</>;
    }
    return <>O<span className="text-[#00f3ff]">tbk</span>.uz</>;
  };

  return (
    <footer className="py-12 bg-black border-t border-white/10 relative z-10">
      <div className="container-narrow px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/5 pb-8">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-white mb-1 tracking-tight drop-shadow-md">
              {renderLogo()}
            </p>
            <p className="text-sm text-gray-400 font-light tracking-wide uppercase">Texnologiyalar va Biznes</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://t.me/otbk_uz" className="text-sm font-medium text-gray-400 hover:text-[#00f3ff] transition-colors uppercase tracking-widest">Telegram</a>
            <a href="mailto:otabekxoff@gmail.com" className="text-sm font-medium text-gray-400 hover:text-[#00f3ff] transition-colors uppercase tracking-widest">Email</a>
          </div>
        </div>
        
        <div className="mt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs tracking-wider">
            © 2026 {domain} Tahririyati. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-gray-600 text-xs tracking-wider">
            Saytdagi ma'lumotlardan foydalanilganda manba ko'rsatilishi shart.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
