import { useEffect, useRef, useState } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  scrambleOnHover?: boolean;
  scrambleOnMount?: boolean;
  duration?: number;
}

const chars = '!<>-_\\/[]{}--=+*^?#________';

const TextScramble = ({
  text,
  className = '',
  scrambleOnHover = true,
  scrambleOnMount = true,
  duration = 1,
}: TextScrambleProps) => {
  const elRef = useRef<HTMLSpanElement>(null);
  const [displayText, setDisplayText] = useState(text);
  const frameRef = useRef<number>(0);
  const queueRef = useRef<Array<{ from: string; to: string; start: number; end: number }>>([]);
  const frameRequestRef = useRef<number>(0);

  const scramble = () => {
    const length = text.length;
    queueRef.current = [];
    for (let i = 0; i < length; i++) {
      const from = displayText[i] || '';
      const to = text[i] || '';
      const start = Math.floor(Math.random() * (40 * duration));
      const end = start + Math.floor(Math.random() * (40 * duration));
      queueRef.current.push({ from, to, start, end });
    }

    cancelAnimationFrame(frameRequestRef.current);
    frameRef.current = 0;
    update();
  };

  const update = () => {
    let output = '';
    let complete = 0;

    for (let i = 0; i < queueRef.current.length; i++) {
      const { from, to, start, end } = queueRef.current[i];
      let char = from;

      if (frameRef.current >= end) {
        complete++;
        char = to;
      } else if (frameRef.current >= start) {
        if (!char || Math.random() < 0.28) {
          char = chars[Math.floor(Math.random() * chars.length)];
        }
        queueRef.current[i].from = char;
      }

      output += char;
    }

    setDisplayText(output);

    if (complete === queueRef.current.length) {
      return;
    }

    frameRef.current++;
    frameRequestRef.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    if (scrambleOnMount) {
      const timer = setTimeout(scramble, 500);
      return () => {
        clearTimeout(timer);
        cancelAnimationFrame(frameRequestRef.current);
      };
    }
    return () => cancelAnimationFrame(frameRequestRef.current);
  }, [text]);

  return (
    <span
      ref={elRef}
      className={`font-mono ${className}`}
      onMouseEnter={scrambleOnHover ? scramble : undefined}
    >
      {displayText}
    </span>
  );
};

export default TextScramble;
