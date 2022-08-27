import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';

export default function Sun({timestamps, timeFactor}) {

  const parentMesh = useRef();

  const SECONDS_IN_YEAR = 31558149.7635456;

  useFrame((state, delta) => {
    timestamps += delta * timeFactor;
    const yearGauge = timestamps % SECONDS_IN_YEAR / SECONDS_IN_YEAR;
    parentMesh.current.rotation.y = yearGauge * Math.PI * 2;
  })

  return (
    <group ref={parentMesh}>
    <directionalLight position={[-1, 0, 0]}/>
    </group>
  )
}
