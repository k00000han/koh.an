import { FC } from 'react';
import FooterTitle from './FooterTitle';
import FooterClock from './FooterClock';
import FooterSocialNets from './FooterSocialNets';
import RevealAnimation from '../animations/RevealAnimation';
import {footerItems as footer} from '../../constants/footerItems';

import '../../styles/components/footer/Footer.sass';

const Footer: FC = () => {
  return (
    <div className="footer-conteiner" id="footer">
      <FooterTitle title={footer.slogan}/>
      <FooterClock logo={footer.logo} schedule={footer.schedule}/>
      <FooterSocialNets social_nets={footer.social_nets}/>

      <RevealAnimation styleName="country-conteiner-animation">
        <div className="country-text">{footer.country}</div>
      </RevealAnimation>
    </div>
  );
};

export default Footer;