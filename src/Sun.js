import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';

export default function Sun({timestamps}) {

  const childMesh = useRef();

  const AXIAL_TILT = 23.439281 * 1;
  const SECONDS_IN_YEAR = 31558149.7635456;

  useFrame((state, delta) => {
    const yearGauge = timestamps % SECONDS_IN_YEAR / SECONDS_IN_YEAR;
    childMesh.current.rotation.y = yearGauge * Math.PI * 2;
  })

  return (
    <group rotation={[0, 0, -AXIAL_TILT / 180 * Math.PI]}>
    <group ref={childMesh}>
    <directionalLight position={[-1, 0, 0]}/>
    </group>
    </group>
  )
}
