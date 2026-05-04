const ContactSection = () => {
  const contacts = [
    { label: 'Email', value: 'otabekxoff@gmail.com', href: 'mailto:otabekxoff@gmail.com' },
    { label: 'Telegram', value: '@otabek_avazbekovich', href: 'https://t.me/otabek_avazbekovich' },
    { label: 'Telefon', value: '+998 88 001 67 77', href: 'tel:+998880016777' },
  ];

  return (
    <section id="contact" className="section bg-gray-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      
      <div className="container-narrow relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-gold font-semibold tracking-[0.3em] uppercase mb-4">
            Bog'lanish
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Birga</span>
            <span className="gold-gradient"> ishlaylik</span>
          </h2>
          <div className="divider-gold mx-auto mb-8" />
          <p className="text-gray-400 text-lg mb-10">
            Yangi loyihalar yoki hamkorlik uchun murojaat qiling.
            <br />
            <span className="text-gold">Har qanday murakkablikdagi</span> loyihalarga tayyorman.
          </p>

          <a href="mailto:otabekxoff@gmail.com" className="btn-gold inline-block mb-16">
            Xabar yuborish
          </a>

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gold/30">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="p-6 border border-gold/20 rounded-lg bg-black/30 hover:border-gold hover:bg-gold/5 transition-all group"
              >
                <p className="text-sm text-gold mb-2 uppercase tracking-wider">{contact.label}</p>
                <p className="text-white font-medium group-hover:text-gold transition-colors">{contact.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
