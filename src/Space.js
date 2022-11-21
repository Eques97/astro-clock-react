import { TextureLoader, BackSide } from 'three'
import { useLoader } from '@react-three/fiber';

export default function Space() {
  
  const textureMap = useLoader(TextureLoader, 'skydome/eso0932a-modified.jpg');
    
  return (
  <mesh>
  <sphereGeometry args={[250000, 128, 128]} />
  <meshBasicMaterial map={textureMap} side={BackSide} />
  </mesh>            
  )
}