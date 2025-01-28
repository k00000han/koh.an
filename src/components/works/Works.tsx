import { FC } from 'react';
import WorkTitle from './WorkTitle';
import WorkItemList from './WorkItemList';
import star_bg from '../../assets/icons/works-star-bg.svg';

import '../../styles/components/works/Works.sass';

const Works: FC = () => {
  return (
    <div className="works-conteiner" id="works">
      <WorkTitle/>
      <WorkItemList/>
      <div className="star-conteiner">
        <img className="star-bg" src={star_bg} alt="img" />
      </div>
    </div>
  );
}

export default Works;