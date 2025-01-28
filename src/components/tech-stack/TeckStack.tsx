import TechStackList from './TechStackList';
import TeckStackTitle from './TechStackTitle';
import {frontEndItems, backEndItems} from '../../constants/techStackItems';

import '../../styles/components/tech-stack/TeckStack.sass';

const TeckStack = () => {
  return (
    <div className="tech-stack-conteiner" id="stack">
      <TeckStackTitle/>
      <div className="tech-stack-lists">
        <TechStackList listStyleName="front-end-list" list={frontEndItems} />
        <TechStackList listStyleName="back-end-list" list={backEndItems} />
      </div>
    </div>
  );
}

export default TeckStack