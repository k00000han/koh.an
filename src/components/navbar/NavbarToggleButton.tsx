import React, { FC } from 'react';

import '../../styles/components/navbar/NavbarButton.sass';

interface MenuToggleButtonProps {
  toggleOpen: () => void;
  isMenuOpen: boolean;
}

const NavbarToggleButton: FC<MenuToggleButtonProps> = ({ toggleOpen, isMenuOpen }) => {
  return (
    <div
      className={`menu-icon-conteiner ${isMenuOpen ? 'active' : ''}`}
      onClick={toggleOpen}
    >
      <input className="menu-icon_tumbler" type="checkbox" checked={isMenuOpen} readOnly />
      <div className="menu-icon">
        <span className="menu-icon-element"></span>
        <span className="menu-icon-element"></span>
      </div>
    </div>
  );
};

export default NavbarToggleButton;
