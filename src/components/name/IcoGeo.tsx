import { MeshDistortMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { IcosahedronGeometry } from "three";

extend({ IcosahedronGeometry });

export default function IcoGeo(): JSX.Element {
  return (
    <mesh rotation={[180, 0, 20]}>
      <icosahedronGeometry attach="geometry" args={[2.8, 0]} />
      <MeshDistortMaterial
        attach="material"
        color="#a793cc"
        wireframe={true}
        distort={0.4}
      />
    </mesh>
  );
}