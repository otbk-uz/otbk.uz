const ContactSection = () => {
  const contacts = [
    { label: 'Email', value: 'otabekxoff@gmail.com', href: 'mailto:otabekxoff@gmail.com' },
    { label: 'Telegram', value: '@otbk_uz', href: 'https://t.me/otbk_uz' },
    { label: 'Telefon', value: '+998 88 001 67 77', href: 'tel:+998880016777' },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-gray-900 border border-white/5 rounded p-6">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-l from-gold/5 to-transparent" />
      
      <div className="relative z-10">
        <div className="mb-6">
          <p className="text-xs text-gold font-bold tracking-[0.2em] uppercase mb-2">
            Bog'lanish
          </p>
          <h2 className="text-2xl font-bold mb-4 leading-tight">
            <span className="text-white">Birga ishlaylik</span>
          </h2>
          <div className="w-10 h-1 bg-gold mb-4" />
          
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Yangi loyihalar yoki hamkorlik uchun murojaat qiling. 
            <span className="text-gold block mt-1">Har qanday murakkablikdagi</span> loyihalarga tayyorman.
          </p>

          <a href="mailto:otabekxoff@gmail.com" className="w-full block text-center py-2.5 bg-gold hover:bg-gold-light text-black font-bold text-sm uppercase tracking-wider rounded transition-colors mb-8">
            Xabar yuborish
          </a>

          {/* Contact cards */}
          <div className="flex flex-col gap-3">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="p-4 border border-white/5 rounded bg-black/30 hover:border-gold/50 hover:bg-white/5 transition-all group flex flex-col justify-center items-center text-center"
              >
                <p className="text-[10px] text-gold mb-1 uppercase tracking-wider">{contact.label}</p>
                <p className="text-white text-sm font-medium group-hover:text-gold transition-colors">{contact.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
