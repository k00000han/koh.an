import { FC } from 'react';
import useOBS from '../../utils/useOBS';

import '../../styles/components/about-me/AboutMeLinks.sass';

interface AboutMeLinksProps {
  link_one: string;
  link_one_icon: string;
  link_two: string;
  link_two_icon: string;
}

const AboutMeLinks: FC<AboutMeLinksProps> = ({link_one, link_one_icon, link_two, link_two_icon}) => {
  const linksRef = useOBS();

  return (
    <div className="about-me-links-animation" ref={linksRef}>
      <div className="about-me-links-conteiner">
        <a className="bandcamp-link" href={link_one}>
          <img className="bandcamp-logo" src={link_one_icon} alt="img" />
        </a>
        <a className="github-link" href={link_two}>
          <img className="github-logo" src={link_two_icon} alt="img" />
        </a>
      </div>
    </div>
  );
};

export default AboutMeLinks;