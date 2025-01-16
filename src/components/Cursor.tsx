import { useEffect, useRef } from 'react';

import '../styles/components/Cursor.sass';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }): void => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return (): void => {
      document.removeEventListener('mousemove', handleMouseMove); // Очистка обработчика при размонтировании
    };
  }, []);

  return(
    <div className="cursor-object" ref={cursorRef}></div>
  )
}

export default Cursor