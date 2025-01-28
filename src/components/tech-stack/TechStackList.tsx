import React from 'react';
import useOBS from '../../utils/useOBS';
import { techStack, techStackItems } from '../../constants/techStackItems';

import '../../styles/components/tech-stack/TechStackLists.sass';

interface TechStackListProps {
  listStyleName: string;
  list: techStack;
}

const TechStackList: React.FC<TechStackListProps> = ({ listStyleName,  list }) => {
  const listTitleRef = useOBS();
  const listItemRef = useOBS();

  return (
    <div className={listStyleName}>
      <div className="tech-list-title-animation" ref={listTitleRef}>
        <div className="tech-list-title-conteiner" ref={listTitleRef}>
          <p className="tech-list-title">{list.title}</p>
          <img className="tech-list-title-img" src={list.title_icon} alt="" />
        </div>
      </div>

      <div className="tech-list-items-conteiner" ref={listItemRef}>
        {list.items.map((item: techStackItems) => (
          <div className="tech-list-item-animation">
            <div className="tech-list-item">
              <img className="tech-list-item-img" src={item.name_icon} alt="img" />
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStackList;