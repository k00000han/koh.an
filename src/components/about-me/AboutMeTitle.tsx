import { FC } from 'react';
import useOBS from '../../utils/useOBS';

import '../../styles/components/about-me/AboutMeTitle.sass';

interface AboutMeTitleProps {
  title: string;
  title_icon: string;
}

const AboutMeTitle: FC<AboutMeTitleProps> = ({title, title_icon}) => {
  const titleRef = useOBS();

  return (
    <div className="about-me-title-animation" ref={titleRef}>
      <div className="about-me-title-conteiner">
        <p className="about-me-title">{title}</p>
        <img className="about-me-title-img" src={title_icon} alt="img" />
      </div>
    </div>
  );
};

export default AboutMeTitle;