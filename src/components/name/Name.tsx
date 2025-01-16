import { FC } from 'react';

import '../../styles/components/name/Name.sass';

const Name: FC = () => {
  return (
    <div className="name-conteiner">
      <div className="name-introduction">
        <div className="name-element">
          Kohan<br />
          Constantin
        </div>
        <div className="specialisation-conteiner">
          <p className="specialisation-title">Specialisation:</p>
          <div className="specialisation-content">Full-Stack Software Engineer</div>
        </div>
      </div>
      <div className="name-gradient-1"></div>
      <div className="name-gradient-2"></div>
    </div>
  );
}

export default Name;