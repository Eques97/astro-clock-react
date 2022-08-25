import React, { useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import earthImg from './earth.png'

export default function Earth(props) {
    const EARTH_RADIUS = 6.371;
    const textureMap = useLoader(TextureLoader, earthImg);
    return (
    <mesh {...props} >
    <sphereGeometry args={[EARTH_RADIUS, 32, 32]} />
    <meshStandardMaterial map={textureMap} />
    </mesh>
    )
}
