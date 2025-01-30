import React from 'react';
import RevealAnimation from '../animations/RevealAnimation';
import DisappearAnimation from '../animations/DisappearAnimation';
import { techStack, techStackItems } from '../../constants/techStackItems';

import '../../styles/components/tech-stack/TechStackLists.sass';

interface TechStackListProps {
  listStyleName: string;
  list: techStack;
}

const TechStackList: React.FC<TechStackListProps> = ({ listStyleName,  list }) => {
  return (
    <div className={listStyleName}>
      <RevealAnimation styleName="tech-list-title-animation">
        <div className="tech-list-title-conteiner">
          <p className="tech-list-title">{list.title}</p>
          <img className="tech-list-title-img" src={list.title_icon} alt="" />
        </div>
      </RevealAnimation>

      <div className="tech-list-items-conteiner">
        {list.items.map((item: techStackItems, index) => (
          <DisappearAnimation styleName="tech-list-item-animation" key={index}>
            <div className="tech-list-item">
              <img className="tech-list-item-img" src={item.name_icon} alt="img" />
              {item.name}
            </div>
          </DisappearAnimation>
        ))}
      </div>
    </div>
  )
}

export default TechStackList;