import { FC } from 'react';
import Animation from './Animation';
import { nameItems } from '../../constants/nameItems'
import RevealAnimation from '../animations/RevealAnimation';

import '../../styles/components/name/Name.sass';

const Name: FC = () => {
  return (
    <div className="name-conteiner" id="name">
      <div className="name-introduction">
        <RevealAnimation styleName="name-animation-conteiner">
          <div className="name-element">
            {nameItems.surname}<br />
            {nameItems.name}
          </div>
          <div className="specialisation-conteiner">
            <p className="specialisation-title">Specialisation:</p>
            <div className="specialisation-content">{nameItems.specialisation}</div>
          </div>
        </RevealAnimation>
      </div>
      <Animation/>
    </div>
  );
}

export default Name;