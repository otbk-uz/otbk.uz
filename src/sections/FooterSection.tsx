const FooterSection = () => {
  return (
    <footer className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container-narrow px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-200 pb-8">
          <div className="text-center md:text-left">
            <p className="text-2xl font-black text-gray-900 mb-1 tracking-tight">
              Or<span className="text-blue-600">7</span>.uz
            </p>
            <p className="text-sm text-gray-500 font-serif">Texnologiyalar va Biznes</p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://t.me/otbk_uz" className="text-gray-500 hover:text-blue-600 transition-colors">Telegram</a>
            <a href="mailto:otabekxoff@gmail.com" className="text-gray-500 hover:text-blue-600 transition-colors">Email</a>
          </div>
        </div>
        
        <div className="mt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Or7.uz Tahririyati. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-gray-400 text-xs">
            Saytdagi ma'lumotlardan foydalanilganda manba ko'rsatilishi shart.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
