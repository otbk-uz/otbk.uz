import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PremiumCardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'pink';
}

export default function PremiumCard({
  title,
  description,
  children,
  icon,
  className = '',
  glowColor = 'blue'
}: PremiumCardProps) {
  const glowColors = {
    blue: 'bg-[#00f3ff]/10',
    purple: 'bg-[#b026ff]/10',
    green: 'bg-[#00ff66]/10',
    pink: 'bg-[#ff003c]/10',
  };

  const glowClass = glowColors[glowColor] || glowColors.blue;

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative group w-full p-[1px] rounded-2xl bg-gradient-to-b from-white/20 via-white/5 to-transparent overflow-hidden shadow-lg ${className}`}
    >
      {/* Orqa fondagi nur (Glow) effekti */}
      <div className={`absolute inset-0 ${glowClass} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500`} />
      
      {/* Spotlight Effect (Top center) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none" />

      {/* Asosiy Karta */}
      <div className="relative h-full w-full bg-[#080808]/90 backdrop-blur-xl rounded-2xl p-8 flex flex-col z-10 transition-colors duration-500 group-hover:bg-[#0c0c0c]/90">
        
        {/* Inner border for depth */}
        <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]"></div>

        <div className="relative z-10 flex-grow flex flex-col">
          {icon && (
            <div className="mb-5 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              {icon}
            </div>
          )}
          <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-400 font-light leading-relaxed flex-grow">
              {description}
            </p>
          )}
          {children && (
            <div className="mt-6 flex-grow flex flex-col justify-end">
              {children}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
