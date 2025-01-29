import { motion } from "motion/react"
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import IcoGeo from './IcoGeo';

import '../../styles/components/name/Animation.sass';

const Animation = () => {
  return (
    <motion.div
      className="bthsTech__3d"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 5, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <Canvas>
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={3}
        />
        <ambientLight intensity={0.7} />
        <directionalLight position={[-2, 5, 2]} intensity={2} />
        <IcoGeo />
      </Canvas>
    </motion.div>
  );
};

export default Animation;