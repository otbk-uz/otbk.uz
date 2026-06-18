import { Monitor, Smartphone, Palette, Zap } from 'lucide-react';

interface Specialty {
  title: string;
  titleUz: string;
  description: string;
  descriptionUz: string;
  icon: React.ElementType;
}

const specialties: Specialty[] = [
  {
    title: 'Applications Web',
    titleUz: 'Web ilovalar',
    description: 'Responsive, high-performance web applications',
    descriptionUz: 'Zamonaviy, tezkor va masshtablanuvchi web ilovalar ishlab chiqish. React, Vue, Next.js kabi frameworklar asosida.',
    icon: Monitor,
  },
  {
    title: 'Applications Mobiles',
    titleUz: 'Mobil ilovalar',
    description: 'Cross-platform mobile applications',
    descriptionUz: 'Flutter va React Native yordamida iOS va Android platformalari uchun cross-platform mobil ilovalar yaratish.',
    icon: Smartphone,
  },
  {
    title: 'Design UI/UX',
    titleUz: 'UI/UX Dizayn',
    description: 'User-centered design solutions',
    descriptionUz: 'Foydalanuvchi markazli dizayn yechimlari. Wireframing, prototyping va interaktiv interfeyslar ishlab chiqish.',
    icon: Palette,
  },
  {
    title: 'DevOps & CI/CD',
    titleUz: 'DevOps & Avtomatizatsiya',
    description: 'Automated deployment pipelines',
    descriptionUz: 'CI/CD pipeline lari, konteynerlashtirish, cloud infratuzilmani boshqarish va avtomatlashtirish.',
    icon: Zap,
  },
];

const SpecialtiesSection = () => {
  return (
    <section className="bg-white py-12 md:py-20 border-b border-gray-200">
      <div className="container-narrow px-4">
        <div className="mb-12 border-b border-gray-200 pb-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Ixtisosliklar
          </h2>
          <p className="text-gray-600 mt-2 text-lg font-serif max-w-2xl">
            Har bir loyihada eng yaxshi arxitektura patternlari, clean code
            tamoyillari va samarali algoritmlardan foydalanaman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {spec.titleUz}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-serif">
                  {spec.descriptionUz}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-video rounded overflow-hidden border border-gray-200">
            <img
              src="/images/photo_2026-04-14_16-21-49.jpg"
              alt="Enterprise Solutions"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur p-3">
              <p className="text-sm font-bold text-gray-900">Enterprise Solutions</p>
            </div>
          </div>
          <div className="relative aspect-video rounded overflow-hidden border border-gray-200">
            <img
              src="/images/photo_2026-04-14_16-21-43.jpg"
              alt="Teamwork"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur p-3">
              <p className="text-sm text-gray-800 italic font-serif">
                "Jamoalar bilan ishlashni, bilimlarni baham ko'rishni va yosh dasturchilarga yo'l ko'rsatishni yaxshi ko'raman."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
