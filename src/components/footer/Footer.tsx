import { FC } from 'react';
import useOBS from '../../utils/useOBS';
import FooterTitle from './FooterTitle';
import FooterClock from './FooterClock';
import FooterSocialNets from './FooterSocialNets';
import {footerItems as footer} from '../../constants/footerItems';

import '../../styles/components/footer/Footer.sass';

const Footer: FC = () => {
  const countryRef = useOBS();

  return (
    <div className="footer-conteiner" id="footer">
      <FooterTitle title={footer.slogan}/>
      <FooterClock logo={footer.logo} schedule={footer.schedule}/>
      <FooterSocialNets social_nets={footer.social_nets}/>

      <div className="country-conteiner-animation" ref={countryRef}>
        <div className="country-text">{footer.country}</div>
      </div>
    </div>
  );
};

export default Footer;