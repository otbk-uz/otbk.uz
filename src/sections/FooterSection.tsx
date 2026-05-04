const FooterSection = () => {
  return (
    <footer className="py-12 section bg-black border-t border-gold/30">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-gold mb-2">OTABEK</p>
            <p className="text-sm text-gray-500">Full-Stack Developer</p>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm text-gray-400">Mavjud</span>
          </div>
          
          <p className="text-sm text-gray-500">
            © 2026 <span className="text-gold">Otabek Ravshanov</span>
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gold/20 text-center">
          <p className="text-gray-600 text-sm italic">
            "Sifatli kod, chiroyli dizayn, mukammal natija"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
