import { useState } from 'react';
import NavbarList from './NavbarList';
import NavBarBlur from './NavBarBlur';
import NavBarUpButton from './NavBarUpButton';
import DropdownAnimation from './NavbarAnimation';
import NavbarToggleButton from './NavbarToggleButton';

import '../../styles/components/navbar/NavBar.sass';
import { noScroll } from '../../utils/scrollTools';

const NavBar = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);
  const toggleOpen = (): void => {setMenuIsOpen(!isMenuOpen);};
  noScroll(isMenuOpen);

  return (
    <div className="navbar-conteiner">
      <NavBarUpButton/>
      <NavbarList styleName={'list-conteiner'} toggleOpen={toggleOpen}/>
      <NavbarToggleButton isMenuOpen={isMenuOpen} toggleOpen={toggleOpen} />
      <DropdownAnimation isMenuOpen={isMenuOpen}>
        <NavbarList styleName={'list-conteiner-mobile'} toggleOpen={toggleOpen}/>
      </DropdownAnimation>
      <NavBarBlur isMenuOpen={isMenuOpen}/>
    </div>
  )
}

export default NavBar;