const ContactSection = () => {
  const contacts = [
    { label: 'Email', value: 'otabekxoff@gmail.com', href: 'mailto:otabekxoff@gmail.com' },
    { label: 'Telegram', value: '@otabek_avazbekovich', href: 'https://t.me/otabek_avazbekovich' },
    { label: 'Telefon', value: '+998 88 001 67 77', href: 'tel:+998880016777' },
  ];

  return (
    <section id="contact" className="section bg-white">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="text-sm text-gold font-medium mb-4">Bog'lanish</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Birga ishlaylik
          </h2>
          <div className="gold-line w-16 mb-6" />
          <p className="text-muted mb-8">
            Yangi loyihalar yoki hamkorlik uchun murojaat qiling.
          </p>

          <a
            href="mailto:otabekxoff@gmail.com"
            className="inline-block px-6 py-3 bg-gold text-white text-sm font-medium hover:bg-amber-600 transition-colors mb-12"
          >
            Xabar yuborish
          </a>

          <div className="space-y-4 pt-8 border-t border-gold">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="flex items-center justify-between py-2 hover:text-gold transition-colors"
              >
                <span className="text-sm text-muted">{contact.label}</span>
                <span className="font-medium text-gold">{contact.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
