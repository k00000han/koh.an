import { FC } from 'react';
import {AnimatePresence, motion} from 'framer-motion';

import '../../styles/components/navbar/NavBarBlur.sass';

interface MenuToggleButtonProps {
	isMenuOpen: boolean;
}

const NavBarBlur: FC<MenuToggleButtonProps> = ({isMenuOpen}) => {
	return (
		<AnimatePresence>
			{isMenuOpen &&
				<motion.div
				className="background-blur"
				initial={{opacity: 0, filter: 'blur(0px)'}}
				animate={{opacity: 1, filter: 'blur(5px)'}}
				exit={{opacity: 0, filter: 'blur(0px)'}}
				transition={{
				duration: 0.5,
				ease: [1, 1, 0.58, 1],
				delay: 1
				}}
				>
				</motion.div>}
		</AnimatePresence>
	);
}

export default NavBarBlur;