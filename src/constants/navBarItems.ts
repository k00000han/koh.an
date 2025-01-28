interface NavBarItem {
  number: string;
  label: string;
  href: string;
}

export const navBarItems: NavBarItem[]  = [
  {number: '1.0', label: 'Name ', href: 'name'},
  {number: '2.0', label: 'Tech-stack', href: 'stack'},
  {number: '3.0' ,label: 'Works', href: 'works'},
  {number: '4.0', label: 'Contacts', href: 'footer'},
];
