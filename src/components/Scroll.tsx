import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';


interface ScrollProps {
  children: React.ReactNode;
}

const Scroll: React.FC<ScrollProps> = ({children}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll: LocomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return (): void => {scroll.destroy()};
    }
  }, []);

  return (
    <div className="scroll" ref={scrollRef}>
      {children}
    </div>
  )
}

export default Scroll;