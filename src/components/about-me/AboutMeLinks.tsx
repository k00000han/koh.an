import { FC } from 'react';
import RevealAnimation from '../animations/RevealAnimation';

import '../../styles/components/about-me/AboutMeLinks.sass';

interface AboutMeLinksProps {
  link_one: string;
  link_one_icon: string;
  link_two: string;
  link_two_icon: string;
}

const AboutMeLinks: FC<AboutMeLinksProps> = ({link_one, link_one_icon, link_two, link_two_icon}) => {
  return (
    <div className="about-me-links-conteiner">
      <RevealAnimation styleName="about-me-links-animation">
        <a className="bandcamp-link" href={link_one}>
          <img className="bandcamp-logo" src={link_one_icon} alt="img" />
        </a>
        <a className="github-link" href={link_two}>
          <img className="github-logo" src={link_two_icon} alt="img" />
        </a>
      </RevealAnimation>
    </div>
  );
};

export default AboutMeLinks;