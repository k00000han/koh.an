export interface worksItem {
  number: string;
  title: string;
  type: string;
  link: string;
  linkTitle: string;
}

export const worksItems: worksItem[] = [
  {number: '1.0', title: 'Portfolio', type: 'Interactive website', link: 'https://github.com/k00000han/koh.an', linkTitle: 'GitHub'},
  {number: '2.0', title: 'Sendify', type: 'Business Agent', link: 'https://github.com/k00000han/mail_service', linkTitle: 'GitHub'},
  {number: '3.0', title: 'Smart Notes', type: 'Interactive website', link: 'https://k00000han.github.io/smart_notes/', linkTitle: 'Live'},
  {number: '4.0', title: 'BrightFrame', type: 'Interactive app', link: 'https://github.com/k00000han', linkTitle: 'In work'},
  {number: '5.0', title: 'SwiftSphere', type: 'App', link: 'https://github.com/k00000han', linkTitle: 'In work'},
];