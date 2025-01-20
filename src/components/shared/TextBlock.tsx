import React from 'react';
import useOBS from '../../utils/useOBS';

import '../../styles/components/TextBlock.sass';

interface TextBlockProps {
  textPart1: string;
  accentText: string;
  textPart2?: string;
  buttonText: string;
  imgSrc?: string;
  btnClassName: string;
  btnTextClassName: string;
}

const TextBlock: React.FC<TextBlockProps> = (
  {
    textPart1,
    accentText,
    textPart2,
    buttonText,
    imgSrc,
    btnClassName,
    btnTextClassName
  }) => {
  const textBlockRef = useOBS();
  const buttonRef = useOBS();

  return (
    <div className="text-conteiner">
      <div className="text-animation-conteiner" ref={textBlockRef}>
        <div className="text-content">
          {textPart1}
          <span className="text-accent"> {accentText}</span>
          {textPart2}
        </div>
      </div>
      <div className="button-animation-conteiner" ref={buttonRef}>
        <button className={btnClassName}>
          <p className={btnTextClassName}>{buttonText}</p>
          {imgSrc && <img className="text-button-img" src={imgSrc} alt="img" />}
        </button>
      </div>
    </div>
  )
}

export default TextBlock;