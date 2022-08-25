import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Earth from './Earth'
import Sun from './Sun';

export default function Scene({timestamps}) {
  console.log(timestamps);
  const SECONDS_IN_YEAR = 31558149.7635456;
  const SECONDS_IN_SIDEREAL_DAY = 86164.1;
  const dayGauge = timestamps % SECONDS_IN_SIDEREAL_DAY / SECONDS_IN_SIDEREAL_DAY;
  const yearGauge = timestamps % SECONDS_IN_YEAR / SECONDS_IN_YEAR;
  console.log(dayGauge, yearGauge);
  return (
    <div id="canvas-container" style={{ width: 1080, height: 720, backgroundColor: 'black' }} >
    <Canvas camera={{position: [-15, 0, 0]}} >
    <Earth rotation={[0, dayGauge * Math.PI, 0]} />
    <Sun rotation={[0, yearGauge * Math.PI * 2, 0]} />
    </Canvas>
    </div>
  )
}
