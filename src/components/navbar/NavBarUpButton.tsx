import up from '../../assets/icons/up-icon.svg';

import '../../styles/components/navbar/NavBarUpButton.sass';

const NavBarUpButton = () => {
  return (
    <div className="nav-bar-up-btn-container">
      <button className="nav-bar-up-btn">
        <img src={up} alt="Stars Logo" />
      </button>
    </div>
  );
}

export default NavBarUpButton;