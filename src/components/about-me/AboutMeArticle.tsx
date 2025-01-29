import { FC } from 'react';
import DisappearAnimation from '../animations/DisappearAnimation';

import '../../styles/components/about-me/AboutMeArticle.sass';


interface AboutMeArticleProps {
  text : string;
}

const AboutMeArticle: FC<AboutMeArticleProps> = ({text}) => {
  return (
    <div className="about-me-text-conteiner">
      <DisappearAnimation styleName="about-me-text-animation">
        <div className="about-me-text" dangerouslySetInnerHTML={{ __html: text }} />
      </DisappearAnimation>
    </div>
  );
};

export default AboutMeArticle;