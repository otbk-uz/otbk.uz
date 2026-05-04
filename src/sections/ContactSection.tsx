import { Mail, Phone, MessageCircle, Globe, ArrowUpRight } from 'lucide-react';

interface ContactLink {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}

const contacts: ContactLink[] = [
  {
    icon: MessageCircle,
    label: 'Telegram',
    value: '@otabek_avazbekovich',
    href: 'https://t.me/otabek_avazbekovich',
  },
  {
    icon: Globe,
    label: 'Instagram',
    value: '@otbk.uz',
    href: 'https://instagram.com/otbk.uz',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'otabekxoff@gmail.com',
    href: 'mailto:otabekxoff@gmail.com',
  },
  {
    icon: Phone,
    label: 'Telefon',
    value: '+998 88 001 67 77',
    href: 'tel:+998880016777',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-gold font-medium">
            Bog'lanish
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-stone-900 mt-4 max-w-xl">
            Birga ishlaylik
          </h2>
          <div className="gold-line-left w-24 mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-md">
              Yangi loyihalar, hamkorlik takliflari yoki shunchaki salomlashish 
              uchun bog'laning. Har qanday murakkablikdagi loyihalarga tayyorman.
            </p>

            {/* Status */}
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-green-200 bg-green-50 mb-10">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-green-700 text-sm tracking-wider uppercase">
                Mavjud
              </span>
            </div>

            {/* CTA */}
            <a
              href="mailto:otabekxoff@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white text-sm tracking-wider uppercase font-medium hover:bg-gold transition-colors duration-300"
            >
              Xabar yuborish
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Contact links */}
          <div className="space-y-4">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 border border-stone-200 hover:border-gold/50 transition-all duration-300 bg-stone-50"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-stone-300 group-hover:border-gold transition-colors">
                    <Icon className="w-4 h-4 text-stone-500 group-hover:text-gold transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs tracking-wider uppercase text-stone-500 mb-1">
                      {contact.label}
                    </div>
                    <div className="text-stone-900 font-medium">
                      {contact.value}
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-gold transition-colors" />
                </a>
              );
            })}

            {/* Location info */}
            <div className="p-4 border border-stone-200 bg-stone-50">
              <p className="text-sm text-stone-600 leading-relaxed">
                Toshkent shahri, O'zbekiston. Global miqyosdagi loyihalarni
                masofaviy ishlab chiqish imkoniyati mavjud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
