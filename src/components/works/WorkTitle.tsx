import { FC } from 'react';
import RevealAnimation from '../animations/RevealAnimation';

import star_icon from '../../assets/icons/star-icon.svg';
import '../../styles/components/works/WorkTitle.sass';

const WorkTitle: FC = () => {
  return (
    <div className="works-title-animation">
      <RevealAnimation styleName="works-title-conteiner">
        <img className="works-title-img" src={star_icon} alt="img" />
        <p className="works-title">Works</p>
      </RevealAnimation>
    </div>
  );
}

export default WorkTitle;