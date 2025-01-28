import { FC } from 'react';
import useOBS from '../../utils/useOBS';

import '../../styles/components/footer/FooterTitle.sass';

interface FooterTitleProps {
  title: string;
}

const FooterTitle: FC<FooterTitleProps> = ({title}) => {
  const titleRef = useOBS();

  return (
    <div className="footer-title-animation" ref={titleRef}>
      <div className="footer-title-conteiner">
        <p className="footer-title">{title}</p>
      </div>
    </div>
  );
};

export default FooterTitle;