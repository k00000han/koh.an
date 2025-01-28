import { FC } from 'react';
import useOBS from '../../utils/useOBS';
import { socialNetsItem } from '../../constants/footerItems';

import '../../styles/components/footer/FooterSocialNets.sass';

interface FooterSocialNetsProps {
  social_nets: socialNetsItem[];
}

const FooterSocialNets: FC<FooterSocialNetsProps> = ({social_nets}) => {
  const linkRef = useOBS();

  return (
    <div className="social-nets-conteiner-animation" ref={linkRef}>
      {social_nets.map((item, index: number) =>
        <div className="social-nets-conteiner" key={index}>
          <a className="social-nets-link" href={item.url}>{item.title}</a>
        </div>
      )}
    </div>
  );
};

export default FooterSocialNets;