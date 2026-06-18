const ContactSection = () => {
  const contacts = [
    { label: 'Email', value: 'otabekxoff@gmail.com', href: 'mailto:otabekxoff@gmail.com' },
    { label: 'Telegram', value: '@otbk_uz', href: 'https://t.me/otbk_uz' },
    { label: 'Telefon', value: '+998 88 001 67 77', href: 'tel:+998880016777' },
  ];

  return (
    <section id="contact" className="bg-gray-50 py-12 md:py-20 border-b border-gray-200">
      <div className="container-narrow px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Bog'lanish
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed font-serif">
            Yangi loyihalar, hamkorlik yoki shunchaki fikr almashish uchun murojaat qiling. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="bg-white p-6 border border-gray-200 rounded hover:shadow-md transition-shadow flex flex-col justify-center items-center text-center"
            >
              <p className="text-xs text-blue-600 uppercase tracking-widest mb-2 font-bold">{contact.label}</p>
              <p className="text-gray-900 text-lg font-bold">{contact.value}</p>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a href="mailto:otabekxoff@gmail.com" className="btn-primary">
            Xabar yuborish
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
