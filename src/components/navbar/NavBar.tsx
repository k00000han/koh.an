import { useState } from 'react';
import NavbarList from './NavbarList';
import NavBarBlur from './NavBarBlur';
import NavBarUpButton from './NavBarUpButton';
import DropdownAnimation from './NavbarAnimation';
import NavbarToggleButton from './NavbarToggleButton';
import useNoScroll from '../../utils/useNoScroll';

import '../../styles/components/navbar/NavBar.sass';

const NavBar = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);
  const toggleOpen = (): void => {setMenuIsOpen(!isMenuOpen);};
  useNoScroll(isMenuOpen);

  return (
    <div className="navbar-conteiner">
      <NavBarUpButton/>
      <NavbarList styleName={'list-conteiner'}/>
      <NavbarToggleButton toggleOpen={toggleOpen}/>
      <DropdownAnimation isMenuOpen={isMenuOpen}>
        <NavbarList styleName={'list-conteiner-mobile'}/>
      </DropdownAnimation>
      <NavBarBlur isMenuOpen={isMenuOpen}/>
    </div>
  )
}

export default NavBar;