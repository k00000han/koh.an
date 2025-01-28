import { FC } from 'react';
import useOBS from '../../utils/useOBS';

import star_icon from '../../assets/icons/star-icon.svg';

import '../../styles/components/works/WorkTitle.sass';

const WorkTitle: FC = () => {
 const titleRef = useOBS();

  return (
    <div className="works-title-animation" ref={titleRef}>
      <div className="works-title-conteiner">
        <img className="works-title-img" src={star_icon} alt="img" />
        <p className="works-title">Works</p>
      </div>
    </div>
  );
}

export default WorkTitle;