import RevealAnimation from '../animations/RevealAnimation';

import '../../styles/components/tech-stack/TechStackTitle.sass';

const TeckStackTitle = () => {
  return (
    <div className="tech-stack-title-conteiner">
      <RevealAnimation styleName="tech-stack-title-animation">
        <span className="tech-stack-title-1">My</span>
        <span className="tech-stack-title-2">Tech Stack</span>
      </RevealAnimation>
    </div>
  );
}

export default TeckStackTitle