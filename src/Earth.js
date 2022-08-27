import React, { useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import earthImg from './earth.png'

export default function Earth({timestamps, timeFactor}) {

    const childMesh = useRef();
    const textureMap = useLoader(TextureLoader, earthImg);

    const RADIUS = 6.371;
    const AXIAL_TILT = 23.439281;
    const SECONDS_IN_SIDEREAL_DAY = 86164.1;

    useFrame((state, delta) => {
        timestamps += delta * timeFactor;
        const dayGauge = timestamps % SECONDS_IN_SIDEREAL_DAY / SECONDS_IN_SIDEREAL_DAY;
        childMesh.current.rotation.y = dayGauge * Math.PI * 2;
    });
    
    return (
    <group rotation={[0, 0, AXIAL_TILT / 180 * Math.PI]}>
    <mesh ref={childMesh} >
    <sphereGeometry args={[RADIUS, 32, 32]} />
    <meshStandardMaterial map={textureMap} />
    </mesh>            
    </group>    
    )
}
