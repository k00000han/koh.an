import { FC, useEffect, useState } from 'react';
import RevealAnimation from '../animations/RevealAnimation';
import { getTime } from '../../utils/time';

import '../../styles/components/footer/FooterClock.sass';

interface FooterClockProps {
  logo: string;
  schedule: string;
}

const FooterClock: FC<FooterClockProps> = ({logo, schedule}) => {
  const [time, setTime] = useState<string>(getTime());

  useEffect(() => {
    const intervalId = setInterval((): void => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock-conteiner">
      <RevealAnimation styleName="clock-conteiner-animation">
        <div className="clock-indicator">
          <img src={logo} alt="img" className="footer-logo" />
          <div className="blinking-dot"></div>
        </div>
        <div className="clock-text-conteiner">
          <p className="clock">{time}</p>
          <p className="schedule">{schedule}</p>
        </div>
      </RevealAnimation>
    </div>
  );
};

export default FooterClock;