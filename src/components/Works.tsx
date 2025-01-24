import { FC } from 'react';
import useOBS from '../utils/useOBS';
import {worksItems} from '../constants/worksItems';

import star_icon from '../assets/icons/star-icon.svg';
import star_bg from '../assets/icons/works-star-bg.svg';
import '../styles/components/Works.sass';

const Works: FC = () => {
 const titleRef = useOBS();
 const itemRef = useOBS()

  return (
    <div className="works-conteiner">
      <div className="works-title-animation" ref={titleRef}>
        <div className="works-title-conteiner">
          <img className="works-title-img" src={star_icon} alt="img" />
          <p className="works-title">Works</p>
        </div>
      </div>

      <div className="work-items-conteiner" ref={itemRef}>
        {worksItems.map((item: { number: string, title: string, type: string, link: string, linkTitle: string }, index: number) =>
          <div className="works-item-animation">
            <div className="works-item" key={index}>
              <p className="works-item-number">{item.number}</p>
              <p className="works-item-title">{item.title}</p>
              <p className="works-item-type">{item.type}</p>
              <a className="works-item-link" href={item.link}>{item.linkTitle}</a>
            </div>
          </div>
        )}
      </div>
      
      <div className="star-conteiner">
        <img className="star-bg" src={star_bg} alt="img" />
      </div>
    </div>
  );
}

export default Works;