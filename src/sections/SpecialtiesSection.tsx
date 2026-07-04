import { Monitor, Smartphone, Palette, Zap } from 'lucide-react';
import PremiumCard from '../components/PremiumCard';
import { motion } from 'framer-motion';

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
  const Icon0 = specialties[0].icon;
  const Icon1 = specialties[1].icon;
  const Icon2 = specialties[2].icon;
  const Icon3 = specialties[3].icon;

  return (
    <section className="bg-transparent py-20 md:py-32 border-b border-white/5 relative z-10">
      <div className="container-narrow px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 pb-4"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            <span className="text-gradient">Ixtisosliklar</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg md:text-xl font-light max-w-2xl leading-relaxed tracking-wide">
            Har bir loyihada eng yaxshi arxitektura patternlari, clean code
            tamoyillari va samarali algoritmlardan foydalanaman.
          </p>
        </motion.div>

        {/* New Staggered Layout for Specialties and Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Column: 2 Specialties */}
          <div className="flex flex-col gap-6">
            <PremiumCard 
              title={specialties[0].titleUz}
              description={specialties[0].descriptionUz}
              glowColor="blue"
              icon={<Icon0 className="w-8 h-8 text-[#00f3ff]" />}
            />
            <PremiumCard 
              title={specialties[1].titleUz}
              description={specialties[1].descriptionUz}
              glowColor="purple"
              icon={<Icon1 className="w-8 h-8 text-[#b026ff]" />}
            />
          </div>

          {/* Right Column: 2 Specialties */}
          <div className="flex flex-col gap-6">
            <PremiumCard 
              title={specialties[2].titleUz}
              description={specialties[2].descriptionUz}
              glowColor="pink"
              icon={<Icon2 className="w-8 h-8 text-[#ff003c]" />}
            />
            <PremiumCard 
              title={specialties[3].titleUz}
              description={specialties[3].descriptionUz}
              glowColor="green"
              icon={<Icon3 className="w-8 h-8 text-[#00ff66]" />}
            />
          </div>
        </div>

        {/* Bottom Full-width Image Restructured */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="mt-6 relative w-full h-[250px] md:h-[350px] rounded-2xl overflow-hidden p-[1px] bg-gradient-to-b from-white/15 to-transparent group"
        >
          <div className="absolute inset-0 bg-[#b026ff]/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
          <div className="relative h-full w-full rounded-2xl overflow-hidden bg-black/90 flex items-center justify-center">
            <img
              src="/images/photo_2026-04-14_16-21-43.jpg"
              alt="Teamwork"
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
            />
            <div className="relative z-10 max-w-3xl text-center px-6">
              <p className="text-xl md:text-3xl text-white font-light italic leading-relaxed drop-shadow-lg">
                "Jamoalar bilan ishlashni, bilimlarni baham ko'rishni va yosh dasturchilarga yo'l ko'rsatishni yaxshi ko'raman."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
