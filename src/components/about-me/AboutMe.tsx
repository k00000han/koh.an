import AboutMeLinks from './AboutMeLinks';
import AboutMeTitle from './AboutMeTitle';
import AboutMeArticle from './AboutMeArticle';
import {aboutMeItems as about_me} from '../../constants/aboutMeItems';

import '../../styles/components/about-me/AboutMe.sass';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <AboutMeTitle title={about_me.title} title_icon={about_me.title_icon}/>
      <AboutMeLinks
        link_one={about_me.link_one}
        link_one_icon={about_me.link_one_icon}
        link_two={about_me.link_two}
        link_two_icon={about_me.link_two_icon}
      />
      <AboutMeArticle text={about_me.text}/>
    </div>
  );
};

export default AboutMe;