import React from 'react'

export default function Sun({timestamps}) {
  const SECONDS_IN_YEAR = 31558149.7635456;
  const yearGauge = timestamps % SECONDS_IN_YEAR / SECONDS_IN_YEAR;
  return (
    <group rotation={[0, yearGauge * Math.PI * 2, 0]} >
    <directionalLight position={[-1, 0, 0]}/>
    </group>
  )
}
