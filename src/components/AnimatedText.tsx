import React, { useRef } from 'react';
import { m, useScroll, useTransform } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const Character: React.FC<{
  char: string;
  scrollYProgress: any;
  start: number;
  end: number;
}> = ({ char, scrollYProgress, start, end }) => {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <m.span className="absolute top-0 left-0" style={{ opacity }}>
        {char}
      </m.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const characters = React.useMemo(() => {
    const chars = text.split('');
    return chars.map((char, index) => ({
      id: `${text}-${index}`,
      char,
      start: index / chars.length,
      end: (index + 1) / chars.length
    }));
  }, [text]);

  return (
    <p ref={containerRef} className={className}>
      {characters.map((item) => (
        <Character
          key={item.id}
          char={item.char}
          scrollYProgress={scrollYProgress}
          start={item.start}
          end={item.end}
        />
      ))}
    </p>
  );
};
