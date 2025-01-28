import { useEffect } from 'react';

export const noScroll = (isOpen: boolean): void => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);
};

export const scrollToSection = (id: string): void => {
  const target: HTMLElement | null = document.getElementById(id);
    if (target) {
      window.scrollTo({ top: target.offsetTop, behavior: "smooth", });
    }
};