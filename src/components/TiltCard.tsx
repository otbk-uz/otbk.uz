import { useRef, useEffect, type ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
}

const TiltCard = ({ children, className = '', maxTilt = 15, scale = 1.02 }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;

      // Move glow
      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;
      glow.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(212, 175, 55, 0.15) 0%, transparent 60%)`;
      glow.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      glow.style.opacity = '0';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt, scale]);

  return (
    <div className={`relative ${className}`} style={{ transformStyle: 'preserve-3d' }}>
      <div
        ref={cardRef}
        className="relative transition-transform duration-200 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </div>
      {/* Glow overlay */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 rounded-none"
      />
    </div>
  );
};

export default TiltCard;
