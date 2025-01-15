import stars from '../../assets/icons/stars-black.svg';

import '../../styles/components/navbar/NavBarUpButton.sass';

const NavBarUpButton = () => {
	return (
		<div className="nav-bar-up-btn-container">
			<button className="nav-bar-up-btn">
				<img src={stars} alt="Stars Logo" />
			</button>
		</div>
	);
}

export default NavBarUpButton;