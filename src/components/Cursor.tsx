import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import '../styles/components/Cursor.sass';

const Cursor = () => {
  const cursorRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      const cursor: HTMLDivElement | null = cursorRef.current;
      const cursorWidth: number = cursor?.offsetWidth || 0;
      const cursorHeight: number = cursor?.offsetHeight || 0;

      gsap.to(cursor, {
        x: e.clientX - cursorWidth / 2,
        y: e.clientY - cursorHeight / 2,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return (): void => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return(
    <div className="cursor-object" ref={cursorRef}></div>
  )
}

export default Cursor