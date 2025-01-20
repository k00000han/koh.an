import useOBS from '../utils/useOBS';
import TechStackList from './shared/TechStackList';
import {frontEndItems, backEndItems} from '../constants/techStackItems';

import '../styles/components/TeckStack.sass';

const TeckStack = () => {
   const textBlockRef = useOBS();

  return (
    <div className="tech-stack-conteiner">
      <div className="tech-stack-title-animation" ref={textBlockRef}>
        <div className="tech-stack-title-conteiner">
          <span className="tech-stack-title-1">My</span>
          <span className="tech-stack-title-2">Tech Stack</span>
        </div>
      </div>
      <div className="tech-stack">
        <TechStackList listStyleName="front-end-list" list={frontEndItems} />
        <TechStackList listStyleName="back-end-list" list={backEndItems} />
      </div>
    </div>
  );
}

export default TeckStack