
const ContactSection = () => {
  const contacts = [
    { label: 'Telefon', value: '+998 88 001 67 77', href: 'tel:+998880016777', color: 'blue' },
    { label: 'Telegram', value: '@otbk_uz', href: 'https://t.me/otbk_uz', color: 'blue' },
    { label: 'Instagram', value: '@otbk.uz', href: 'https://instagram.com/otbk.uz', color: 'purple' },
    { label: 'Email', value: 'otabekxoff@gmail.com', href: 'mailto:otabekxoff@gmail.com', color: 'purple' },
  ];

  const glowColors: Record<string, string> = {
    blue: 'bg-[#00f3ff]/20',
    purple: 'bg-[#b026ff]/20'
  };

  return (
    <section id="contact" className="bg-black py-16 md:py-24 border-b border-white/5 relative z-10">
      <div className="container-narrow px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Bog'lanish
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f3ff] to-[#b026ff] mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed font-light">
            Yangi loyihalar, hamkorlik yoki shunchaki fikr almashish uchun murojaat qiling. 
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="group relative block w-full rounded-2xl p-[1px] bg-gradient-to-b from-white/15 to-transparent overflow-hidden"
            >
              <div className={`absolute inset-0 ${glowColors[contact.color] || glowColors.blue} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
              
              <div className="relative h-full w-full bg-black/80 backdrop-blur-xl p-8 border border-white/5 flex flex-col justify-center items-center text-center rounded-2xl transition-all group-hover:bg-black/90">
                <p className="text-xs text-[#00f3ff] uppercase tracking-widest mb-3 font-bold drop-shadow-md">{contact.label}</p>
                <p className="text-white text-lg font-medium tracking-wide">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a href="mailto:otabekxoff@gmail.com" className="inline-block relative overflow-hidden group bg-white text-black px-10 py-4 rounded-md font-medium tracking-wider transition-all hover:scale-[1.02]">
            <div className="absolute inset-0 bg-[#00f3ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Xabar yuborish</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
