import { FC, useEffect, useState } from 'react';
import useOBS from '../../utils/useOBS';
import { getTime } from '../../utils/time';

import '../../styles/components/footer/FooterClock.sass';

interface FooterClockProps {
  logo: string;
  schedule: string;
}

const FooterClock: FC<FooterClockProps> = ({logo, schedule}) => {
  const timeRef = useOBS();
  const [time, setTime] = useState<string>(getTime());

  useEffect(() => {
    const intervalId = setInterval((): void => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock-conteiner-animation" ref={timeRef}>
      <div className="clock-conteiner">
        <div className="clock-indicator">
          <img src={logo} alt="img" className="footer-logo" />
          <div className="blinking-dot"></div>
        </div>
        <div className="clock-text-conteiner">
          <p className="clock">{time}</p>
          <p className="schedule">{schedule}</p>
        </div>
      </div>
    </div>
  );
};

export default FooterClock;