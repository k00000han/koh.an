import { FC } from 'react';
import RevealAnimation from '../animations/RevealAnimation';

import '../../styles/components/about-me/AboutMeTitle.sass';

interface AboutMeTitleProps {
  title: string;
  title_icon: string;
}

const AboutMeTitle: FC<AboutMeTitleProps> = ({title, title_icon}) => {

  return (
    <div className="about-me-title-conteiner">
      <RevealAnimation styleName="about-me-title-animation">
        <p className="about-me-title">{title}</p>
        <img className="about-me-title-img" src={title_icon} alt="img" />
      </RevealAnimation>
    </div>
  );
};

export default AboutMeTitle;