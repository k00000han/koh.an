import React, {FC} from 'react';
import {AnimatePresence, motion} from 'framer-motion';

interface DropdownAnimationProps {
  isMenuOpen: boolean;
  children: React.ReactNode;
}

const DropdownAnimation: FC<DropdownAnimationProps> = ({isMenuOpen, children}) => {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
        className="dropdown-conteiner"
        initial={{x: 0, y: -400, opacity: 20, filter: 'blur(0px)'}}
        animate={{x: 0, y: 0, opacity: 10, filter: 'blur(0px)'}}
        exit={{x: 0, y: -400, opacity: 20, filter: 'blur(0px)'}}
        transition={{
        duration: 0.7,
        ease: [0.8, 0, 0.58, 1],
        delay: 0.2
        }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownAnimation;
