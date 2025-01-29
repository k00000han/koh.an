import { FC } from 'react';
import RevealAnimation from '../animations/RevealAnimation';

import '../../styles/components/footer/FooterTitle.sass';

interface FooterTitleProps {
  title: string;
}

const FooterTitle: FC<FooterTitleProps> = ({title}) => {
  return (
    <RevealAnimation styleName="footer-title-animation">
      <div className="footer-title-conteiner">
        <p className="footer-title">{title}</p>
      </div>
    </RevealAnimation>
  );
};

export default FooterTitle;