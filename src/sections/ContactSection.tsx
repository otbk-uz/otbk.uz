const ContactSection = () => {
  const contacts = [
    { label: 'Email', value: 'otabekxoff@gmail.com', href: 'mailto:otabekxoff@gmail.com' },
    { label: 'Telegram', value: '@otbk_uz', href: 'https://t.me/otbk_uz' },
    { label: 'Telefon', value: '+998 88 001 67 77', href: 'tel:+998880016777' },
  ];

  return (
    <section id="contact" className="section bg-gray-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      
      <div className="container-narrow relative z-10">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-semibold mb-4">
            Bog'lanish
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Birga ishlaylik
          </h2>
          <div className="divider-gold mx-auto" />
          <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
            Yangi loyihalar, hamkorlik yoki shunchaki fikr almashish uchun murojaat qiling. 
            <span className="text-gold block mt-2 font-medium">Har qanday murakkablikdagi loyihalarni amalga oshirishga tayyorman.</span>
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="p-8 border border-white/5 rounded-lg bg-black/40 hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 group flex flex-col justify-center items-center text-center"
            >
              <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center mb-4 group-hover:border-gold group-hover:bg-gold/10 transition-all">
                {contact.label === 'Email' && (
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
                {contact.label === 'Telegram' && (
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-2 1.26-5.63 3.72-.53.36-1 .54-1.42.53-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.38-.49 1.04-.75 4.08-1.77 6.8-2.94 8.16-3.5 3.88-1.61 4.69-1.89 5.21-1.9.12 0 .37.03.54.17.14.11.18.26.2.38.02.09.02.25.01.32z" />
                  </svg>
                )}
                {contact.label === 'Telefon' && (
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                )}
              </div>
              <p className="text-xs text-gold uppercase tracking-widest mb-2 font-semibold">{contact.label}</p>
              <p className="text-white text-sm md:text-base font-bold group-hover:text-gold transition-colors font-sans break-all">{contact.value}</p>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a href="mailto:otabekxoff@gmail.com" className="btn-gold inline-block font-bold px-10 py-4 shadow-lg hover:shadow-gold/20">
            Xabar yuborish
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
