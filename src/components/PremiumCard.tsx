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
      whileHover={{ scale: 1.02 }}
      className={`relative group w-full p-[1px] rounded-2xl bg-gradient-to-b from-white/15 to-transparent overflow-hidden ${className}`}
    >
      {/* Orqa fondagi nur (Glow) effekti */}
      <div className={`absolute inset-0 ${glowClass} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500`} />
      
      {/* Asosiy Karta */}
      <div className="relative h-full w-full bg-black/90 backdrop-blur-xl rounded-2xl p-8 border border-white/5 flex flex-col z-10">
        {icon && (
          <div className="mb-4 text-white/80">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-medium text-white tracking-tight">
          {title}
        </h3>
        {description && (
          <p className="mt-3 text-sm text-gray-400 font-light leading-relaxed flex-grow">
            {description}
          </p>
        )}
        {children && (
          <div className="mt-6 flex-grow flex flex-col justify-end">
            {children}
          </div>
        )}
      </div>
    </motion.div>
  );
}
