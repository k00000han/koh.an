import { FC } from 'react';
import useOBS from '../../utils/useOBS';
import { worksItems } from '../../constants/worksItems';

import '../../styles/components/works/WorkItemList.sass';

const WorkItemList: FC = () => {
 const itemRef = useOBS();

  return (
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
  );
}

export default WorkItemList;