import { FC } from 'react';
import useOBS from '../../utils/useOBS';

import '../../styles/components/about-me/AboutMeArticle.sass';


interface AboutMeArticleProps {
  text : string;
}

const AboutMeArticle: FC<AboutMeArticleProps> = ({text}) => {
  const textRef = useOBS();

  return (
    <div className="about-me-text-animation" ref={textRef}>
      <div className="about-me-text-conteiner">
        <div className="about-me-text" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
};

export default AboutMeArticle;