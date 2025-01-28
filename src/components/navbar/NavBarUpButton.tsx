import up from '../../assets/icons/up-icon.svg';

import '../../styles/components/navbar/NavBarUpButton.sass';

const NavBarUpButton = () => {
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth", });
  };

  return (
    <div className="nav-bar-up-btn-container">
      <button className="nav-bar-up-btn" onClick={scrollToTop}>
        <img src={up} alt="Stars Logo" />
      </button>
    </div>
  );
}

export default NavBarUpButton;