import React, { useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import earthImg from './earth.png'

export default function Earth({timestamps}) {
    const RADIUS = 6.371;
    const AXIAL_TILT = 23.439281;
    const SECONDS_IN_SIDEREAL_DAY = 86164.1;
    const dayGauge = timestamps % SECONDS_IN_SIDEREAL_DAY / SECONDS_IN_SIDEREAL_DAY;
    const textureMap = useLoader(TextureLoader, earthImg);
    return (
    <group rotation={[0, 0, AXIAL_TILT / 180 * Math.PI]}>
    <mesh rotation={[0, dayGauge * Math.PI * 2, 0]} >
    <sphereGeometry args={[RADIUS, 32, 32]} />
    <meshStandardMaterial map={textureMap} />
    </mesh>            
    </group>    
    )
}
