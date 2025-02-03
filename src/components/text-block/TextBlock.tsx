import TextBlockBase from './TextBlockBase';

const TextBlock = () => {
  return (
    <TextBlockBase
      textPart1="A good developer does not choose a problem to suit his skills and tools."
      accentText=" He chooses tools to solve the problem."
      buttonText="Check CV"
      btnClassName="text-button-two"
      btnTextClassName="text-button-text-two"
      cvPath="/Kohan_Constantin_CV.pdf"
    />
  );
}

export default TextBlock;