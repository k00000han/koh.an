import TextBlock from './shared/TextBlock';
import meetIcon from '../assets/icons/meet-me-button.svg';

const TextBlockOne = () => {
  return (
    <TextBlock
      textPart1="The most elegant solutions are born when you dare to look straight to"
      accentText=" the core of the problem,"
      textPart2=" rather than just skirting around its corners."
      buttonText="Meet me"
      imgSrc={meetIcon}
      btnClassName="text-button-one"
      btnTextClassName="text-button-text-one"
    />
  )
}

export default TextBlockOne;