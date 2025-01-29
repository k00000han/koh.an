import logo from '../assets/icons/footer-icon.svg';

export interface socialNetsItem {
  title: string;
  url: string;
}

export interface footerItem {
  slogan: string;
  logo: string;
  schedule: string;
  country: string
  social_nets: socialNetsItem[];
}


export const footerItems: footerItem =
  {
    slogan: "Are we a good match?",
    logo: logo,
    schedule: "mon. to fri. 9 to 5",
    country: "Germany",
    social_nets: [
      {
        title: "E-Mail",
        url: "mailto:constantin.kohan@gmail.com",
      },
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/constantin-kohan/",
      },
      {
        title: "GitHub",
        url: "https://github.com/k00000han",
      },
      {
        title: "X",
        url: "https://x.com/KostyaKohan",
      }
    ]
  }