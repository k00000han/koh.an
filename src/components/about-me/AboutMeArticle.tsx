import { FC } from 'react';
import RevealAnimation from '../animations/RevealAnimation';

import '../../styles/components/about-me/AboutMeArticle.sass';


interface AboutMeArticleProps {
  text : string;
}

const AboutMeArticle: FC<AboutMeArticleProps> = ({text}) => {
  return (
    <div className="about-me-text-conteiner">
      <RevealAnimation styleName="about-me-text-animation">
        <div className="about-me-text" dangerouslySetInnerHTML={{ __html: text }} />
      </RevealAnimation>
    </div>
  );
};

export default AboutMeArticle;