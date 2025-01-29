import React, { FC } from 'react';
import { motion } from "motion/react";

interface DisappearAnimationProps {
  styleName: string;
  children: React.ReactNode;
}

const DisappearAnimation: FC<DisappearAnimationProps> = ({styleName, children}) => {
  return (
    <motion.div
      className={styleName}
      initial={{ opacity: 0, transform: 'translate(0, 0)' }}
      whileInView={{ opacity: 1, transform: 'translate(0, 0)'  }}
      transition={{ duration: 3, ease: [0.77, 0, 0.175, 1] }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default DisappearAnimation;