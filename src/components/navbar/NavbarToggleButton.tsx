import React, { FC, useState } from 'react';

import '../../styles/components/navbar/NavbarButton.sass';

interface MenuToggleButtonProps {
  toggleOpen: () => void;
}

const NavbarToggleButton: FC<MenuToggleButtonProps> = ({ toggleOpen }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (): void => {
    setIsActive(!isActive);
    toggleOpen();
  };

  return (
    <div className={`menu-icon-conteiner ${isActive ? 'active' : ''}`} onClick={handleClick}>
      <input className="menu-icon_tumbler" type="checkbox" onClick={toggleOpen} />
      <div className="menu-icon">
        <span className="menu-icon-element"></span>
        <span className="menu-icon-element"></span>
      </div>
    </div>
  );
};

export default NavbarToggleButton;
