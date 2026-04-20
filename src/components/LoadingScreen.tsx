import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            onComplete();
          },
        });
      },
    });

    // Simulate loading
    tl.to(
      {},
      {
        duration: 2.5,
        onUpdate: function () {
          setProgress(Math.floor(this.progress() * 100));
        },
      }
    );

    // Text scramble animation
    const text = 'INITIALIZING...';
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    let iteration = 0;
    const interval = setInterval(() => {
      if (!textRef.current) return;
      textRef.current.innerText = text
        .split('')
        .map((_char, index) => {
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
      iteration += 1 / 3;
      if (iteration >= text.length) clearInterval(interval);
    }, 30);

    return () => {
      clearInterval(interval);
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9998] bg-black flex flex-col items-center justify-center"
    >
      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37]" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#D4AF37]" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#D4AF37]" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37]" />

      {/* Main content */}
      <div className="text-center">
        {/* Logo */}
        <div className="font-orbitron text-4xl md:text-6xl font-black tracking-[0.3em] text-white mb-8">
          OTABEK<span className="text-[#D4AF37]">.</span>
        </div>

        {/* Scramble text */}
        <div
          ref={textRef}
          className="font-mono text-sm text-[#D4AF37] tracking-[0.5em] mb-12 h-6"
        >
          INITIALIZING...
        </div>

        {/* Progress bar */}
        <div className="w-64 md:w-96 h-px bg-white/10 relative overflow-hidden">
          <div
            ref={progressRef}
            className="absolute top-0 left-0 h-full bg-[#D4AF37] transition-all duration-100"
            style={{ width: `${progress}%`, boxShadow: '0 0 20px #D4AF37' }}
          />
        </div>

        {/* Progress percentage */}
        <div className="mt-4 font-mono text-xs text-[#888888] tracking-[0.3em]">
          {progress}%
        </div>

        {/* System info */}
        <div className="mt-12 font-mono text-[10px] text-white/20 space-y-1">
          <div>System: ONLINE</div>
          <div>Mode: BEAST</div>
          <div>Stack: FULL</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
