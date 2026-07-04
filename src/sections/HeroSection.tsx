import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const { hero } = portfolioData;

  return (
    <section id="hero" className="relative w-full min-h-[90vh] flex items-center pt-24 bg-transparent overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[50%] rounded-full bg-[#00f3ff]/10 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[#b026ff]/10 blur-[150px] pointer-events-none"></div>

      {/* Content */}
      <div className="container-narrow px-4 relative z-10 w-full py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8 tracking-tighter">
            <span className="text-gradient">{hero.subtitle}</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-400 leading-relaxed mb-12 max-w-3xl font-light tracking-wide">
            {hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-20">
            <a href="#about" className="btn-primary">
              <span>Batafsil o'qish</span>
            </a>
            <a href="#contact" className="btn-outline">
              Hamkorlik
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
