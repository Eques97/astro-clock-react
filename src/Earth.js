import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

export default function Earth({timestamps, timefactor}) {

    const childMesh = useRef();
    const textureMap = useLoader(TextureLoader, '/earth.png');

    const RADIUS = 6.371;
    const AXIAL_TILT = 23.439281 * 0;
    const SECONDS_IN_SIDEREAL_DAY = 86164.1;

    useFrame((state, delta) => {
        timestamps += delta * timefactor;
        const dayGauge = timestamps % SECONDS_IN_SIDEREAL_DAY / SECONDS_IN_SIDEREAL_DAY;
        childMesh.current.rotation.y = dayGauge * Math.PI * 2;
    });
    
    return (
    <group rotation={[0, 0, AXIAL_TILT / 180 * Math.PI]}>
    <mesh ref={childMesh} >
    <sphereGeometry args={[RADIUS, 128, 128]} />
    <meshStandardMaterial map={textureMap} />
    </mesh>            
    </group>
    )
}
