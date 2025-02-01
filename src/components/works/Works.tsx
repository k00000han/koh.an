import { FC } from 'react';
import WorkTitle from './WorkTitle';
import WorkItemList from './WorkItemList';
import star_bg from '../../assets/icons/works-star-bg.svg';

import '../../styles/components/works/Works.sass';
import RotateAnimation from '../animations/RotateAnimation';

const Works: FC = () => {
  return (
    <div className="works-conteiner" id="works">
      <WorkTitle/>
      <WorkItemList/>
      <RotateAnimation styleName="star-conteiner">
        <img className="star-bg" src={star_bg} alt="img" />
      </RotateAnimation>
    </div>
  );
}

export default Works;