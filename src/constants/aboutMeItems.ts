import yin_yan from '../assets/icons/yin-yang.svg';
import bandcamp_icon from '../assets/icons/bandcamp-icon.svg';
import github_icon from '../assets/icons/github-icon.svg';

interface AboutMeItem {
  title: string;
  title_icon: string;
  link_one: string;
  link_one_icon: string;
  link_two: string;
  link_two_icon: string;
  text: string
}

export const aboutMeItems: AboutMeItem =
  {
    title: "About Me",
    title_icon: yin_yan,
    link_one: "https://kohan.bandcamp.com",
    link_one_icon: bandcamp_icon,
    link_two: "https://github.com/k00000han",
    link_two_icon: github_icon,
    text: `
      <div>I am a 25-year-old programmer based in Berlin, Germany, though my roots trace back to Ukraine. 
      My life has always been intertwined with computers, and they fuel my passion and curiosity in everything I do. 
      Beyond coding, I compose experimental music in the realm of alternative electronic genres, blending Ableton, 
      MAX for Live, and custom <span class='highlight'>C++</span> modules to craft unique sounds. 
      The world of <span class='highlight'>Web</span> technologies and the seamless exchange of information across the globe captivates me deeply. 
      My understanding of how computers work gives me the agility to quickly adapt to new technologies and methodologies, 
      allowing me to constantly evolve in this ever-changing digital landscape.</div>`
  };