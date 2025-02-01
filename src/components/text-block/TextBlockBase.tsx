import React from 'react';
import RevealAnimation from '../animations/RevealAnimation';
import DisappearAnimation from '../animations/DisappearAnimation';

import '../../styles/components/text-block/TextBlock.sass';

interface TextBlockProps {
  textPart1: string;
  accentText: string;
  textPart2?: string;
  buttonText: string;
  imgSrc?: string;
  btnClassName: string;
  btnTextClassName: string;
  cvPath: string;
}

const TextBlockBase: React.FC<TextBlockProps> = (
  {
    textPart1,
    accentText,
    textPart2,
    buttonText,
    imgSrc,
    btnClassName,
    btnTextClassName,
    cvPath
  }) => {

  return (
    <div className="text-conteiner">
      <div className="text-animation-conteiner">
        <RevealAnimation styleName="text-content">
          {textPart1}
          <span className="text-accent"> {accentText}</span>
          {textPart2}
        </RevealAnimation>
      </div>
      <DisappearAnimation styleName="button-animation-conteiner">
        <button
          className={btnClassName}
          onClick={() => window.open(cvPath, '_blank')}
        >
          <p className={btnTextClassName}>{buttonText}</p>
          {imgSrc && <img className="text-button-img" src={imgSrc} alt="img" />}
        </button>
      </DisappearAnimation>
    </div>
  )
}

export default TextBlockBase;