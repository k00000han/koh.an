import useOBS from '../../utils/useOBS';

import '../../styles/components/tech-stack/TechStackTitle.sass';

const TeckStackTitle = () => {
   const textBlockRef = useOBS();

  return (
    <div className="tech-stack-title-animation" ref={textBlockRef}>
      <div className="tech-stack-title-conteiner">
        <span className="tech-stack-title-1">My</span>
        <span className="tech-stack-title-2">Tech Stack</span>
      </div>
    </div>
  );
}

export default TeckStackTitle