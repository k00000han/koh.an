import React, { useEffect, useRef } from 'react';

const useOBS = () => {
  const blockRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        entries.forEach((entry: IntersectionObserverEntry): void => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return (): void => {
      if (blockRef.current) {
        observer.unobserve(blockRef.current);
      }
    };
  }, []);

  return blockRef;
}

export default useOBS;