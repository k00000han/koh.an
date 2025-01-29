import { FC } from 'react';
import { worksItems } from '../../constants/worksItems';
import DisappearAnimation from '../animations/DisappearAnimation';

import '../../styles/components/works/WorkItemList.sass';


const WorkItemList: FC = () => {
  return (
    <div className="work-items-conteiner">
      {worksItems.map((item: { number: string, title: string, type: string, link: string, linkTitle: string }, index: number) =>
          <DisappearAnimation styleName="works-item-animation">
            <div className="works-item" key={index}>
              <p className="works-item-number">{item.number}</p>
              <p className="works-item-title">{item.title}</p>
              <p className="works-item-type">{item.type}</p>
              <a className="works-item-link" href={item.link}>{item.linkTitle}</a>
            </div>
          </DisappearAnimation>
      )}
    </div>
  );
}

export default WorkItemList;