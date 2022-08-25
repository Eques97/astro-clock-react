import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import CameraController from './CameraController';
import Earth from './Earth'
import Sun from './Sun';


export default function Scene({timestamps}) {
  const SOLSTICE_OFFSET = 14774400;
  timestamps -= SOLSTICE_OFFSET;
  return (
    <div id="canvas-container" style={{ width: 240, height: 240, backgroundColor: 'black' }} >
    <Canvas camera={{position: [-15, 0, 0]}} >
    <CameraController />
    <ambientLight intensity={0.01} />
    <Sun timestamps={timestamps} />
    <Earth timestamps={timestamps} />
    </Canvas>
    </div>
  )
};
