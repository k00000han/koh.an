import React, { FC } from 'react';
import { motion } from "motion/react";

interface RotateAnimationProps {
  styleName?: string;
  children: React.ReactNode;
}

const RotateAnimation: FC<RotateAnimationProps> = ({styleName, children}) => {
  return (
    <motion.div
      className={styleName}
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }}
    >
      {children}
    </motion.div>
  );
}

export default RotateAnimation;