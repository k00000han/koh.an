import { FC } from 'react';
import RevealAnimation from '../animations/RevealAnimation';
import { socialNetsItem } from '../../constants/footerItems';

import '../../styles/components/footer/FooterSocialNets.sass';

interface FooterSocialNetsProps {
  social_nets: socialNetsItem[];
}

const FooterSocialNets: FC<FooterSocialNetsProps> = ({social_nets}) => {
  return (
    <div className="social-nets-conteiner-animation">
      {social_nets.map((item, index: number) =>
        <RevealAnimation styleName="social-nets-conteiner" key={index}>
          <a
            className="social-nets-link"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </a>
        </RevealAnimation>
      )}
    </div>
  );
};

export default FooterSocialNets;