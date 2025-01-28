import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import IcoGeo from './IcoGeo';

import '../../styles/components/name/Animation.sass';

const Animation = () => {
  return (
    <div className="bthsTech__3d">
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
    </div>
  );
};

export default Animation;