import React, { useEffect, useRef } from 'react';

export default function MouseEffect() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const particlesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    const particlesContainer = particlesContainerRef.current;
    let lastX = 0;
    let lastY = 0;

    const createParticle = (x: number, y: number, speedX: number, speedY: number) => {
      if (!particlesContainer) return;
      
      const particle = document.createElement('div');
      particle.className = 'cursor-particles';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.setProperty('--tx', `${speedX * 100}px`);
      particle.style.setProperty('--ty', `${speedY * 100}px`);
      
      particlesContainer.appendChild(particle);
      setTimeout(() => particle.remove(), 1000);
    };

    const moveCursor = (e: MouseEvent) => {
      if (cursor && cursorDot) {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        const speed = Math.sqrt(dx * dx + dy * dy);

        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        cursorDot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;

        if (speed > 5) {
          createParticle(
            e.clientX,
            e.clientY,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
          );
        }

        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (cursor && cursorDot) {
        if (target.tagName === 'A' || target.tagName === 'BUTTON') {
          cursor.classList.add('scale-150');
          cursorDot.classList.add('scale-150');
        } else if (target.tagName === 'IMG') {
          cursor.classList.add('scale-[2]');
        } else if (target.tagName === 'H1' || target.tagName === 'H2') {
          cursor.classList.add('scale-[1.5]');
        } else if (target.closest('nav')) {
          cursor.classList.add('scale-125');
          cursorDot.classList.add('scale-125');
        }
      }
    };

    const handleMouseOut = () => {
      if (cursor && cursorDot) {
        cursor.classList.remove('scale-150', 'scale-[2]', 'scale-125');
        cursorDot.classList.remove('scale-150', 'scale-125');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div className="animated-bg" />
      <div 
        ref={cursorRef} 
        className="fixed pointer-events-none z-[70] w-8 h-8 -ml-4 -mt-4 rounded-full 
                   bg-white/20 blur-sm
                   transition-all duration-300 ease-out"
      />
      <div 
        ref={cursorDotRef} 
        className="fixed pointer-events-none z-[70] w-2 h-2 -ml-1 -mt-1 rounded-full 
                   bg-white
                   transition-all duration-200 ease-out"
      />
      <div
        ref={particlesContainerRef}
        className="fixed inset-0 pointer-events-none z-[69] overflow-hidden"
      />
    </>
  );
}