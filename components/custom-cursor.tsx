'use client';
import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // We use spring for smoother follow
  const cursorX = useSpring(-100, { stiffness: 500, damping: 28, mass: 0.5 });
  const cursorY = useSpring(-100, { stiffness: 500, damping: 28, mass: 0.5 });

  useEffect(() => {
    setIsVisible(true);
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('.magnetic-target') ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference items-center justify-center overflow-hidden hidden md:flex"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      animate={{
        backgroundColor: isHovering ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)',
        border: isHovering ? '0px solid rgba(255, 255, 255, 0.5)' : '1px solid rgba(255, 255, 255, 0.5)',
        scale: isHovering ? 1.5 : 1,
      }}
      initial={false}
      transition={{
          scale: { duration: 0.2 },
          backgroundColor: { duration: 0.2 },
          border: { duration: 0.2 }
      }}
    />
  );
}
