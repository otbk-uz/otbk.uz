import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

const GallerySection = () => {
  const glowColors = ['bg-[#00f3ff]/20', 'bg-[#b026ff]/20', 'bg-[#ff003c]/20', 'bg-[#00ff66]/20'];

  return (
    <section id="gallery" className="bg-[#050505] py-16 md:py-24 border-b border-white/5 relative z-10">
      <div className="container-narrow px-4 relative">
        <div className="mb-16 border-b border-white/10 pb-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Fotogalereya
          </h2>
          <p className="text-gray-400 mt-4 text-lg font-light max-w-2xl leading-relaxed">
            Kadrlar ortidagi jarayonlar va ish muhiti.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.gallery.map((photo, i) => (
            <motion.div 
              whileHover={{ scale: 1.03 }}
              key={i} 
              className="group relative aspect-[3/4] overflow-hidden rounded-xl p-[1px] bg-gradient-to-b from-white/15 to-transparent cursor-pointer"
            >
              <div className={`absolute inset-0 ${glowColors[i % glowColors.length]} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500`} />
              
              <div className="relative h-full w-full rounded-xl overflow-hidden bg-black">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  title={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-sm text-white font-bold mb-1 tracking-wide uppercase">
                    {photo.title}
                  </p>
                  <p className="text-xs text-gray-300 leading-snug font-light">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
