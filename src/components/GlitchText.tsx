import { useEffect, useRef, useState } from 'react';
import './GlitchText.css';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'div';
  intensity?: 'low' | 'medium' | 'high';
}

const GlitchText = ({ text, className = '', as: Tag = 'div', intensity = 'medium' }: GlitchTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200 + Math.random() * 300);
    }, 3000 + Math.random() * 4000);

    return () => clearInterval(interval);
  }, []);

  const intensityMap = {
    low: 'glitch-low',
    medium: 'glitch-medium',
    high: 'glitch-high',
  };

  return (
    <div ref={containerRef} className={`glitch-wrapper relative inline-block ${className}`}>
      <Tag
        className={`glitch-text ${intensityMap[intensity]} ${isGlitching ? 'glitch-active' : ''}`}
        data-text={text}
      >
        {text}
      </Tag>
      {isGlitching && (
        <>
          <Tag
            className="glitch-clone glitch-clone-1 absolute top-0 left-0"
            aria-hidden="true"
          >
            {text}
          </Tag>
          <Tag
            className="glitch-clone glitch-clone-2 absolute top-0 left-0"
            aria-hidden="true"
          >
            {text}
          </Tag>
        </>
      )}
    </div>
  );
};

export default GlitchText;
