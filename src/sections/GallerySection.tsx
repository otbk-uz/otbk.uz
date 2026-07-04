import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

const GallerySection = () => {
  const glowColors = ['bg-[#00f3ff]/20', 'bg-[#b026ff]/20', 'bg-[#ff003c]/20', 'bg-[#00ff66]/20'];

  return (
    <section id="gallery" className="bg-transparent py-20 md:py-32 border-b border-white/5 relative z-10">
      <div className="container-narrow px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 pb-4"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            <span className="text-gradient">Fotogalereya</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg md:text-xl font-light max-w-2xl leading-relaxed tracking-wide">
            Kadrlar ortidagi jarayonlar va ish muhiti.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.gallery.map((photo, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              key={i} 
              className="group relative aspect-[3/4] overflow-hidden rounded-xl p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent cursor-pointer shadow-lg"
            >
              <div className={`absolute inset-0 ${glowColors[i % glowColors.length]} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500`} />
              
              <div className="relative h-full w-full rounded-xl overflow-hidden bg-black">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  title={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-sm text-[#00f3ff] font-bold mb-2 tracking-widest uppercase shadow-sm">
                    {photo.title}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed font-light tracking-wide">
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
