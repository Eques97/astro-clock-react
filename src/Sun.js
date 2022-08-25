import React from 'react'

export default function Sun(props) {
  return (
    <group {...props} >
    <directionalLight position={[-1, 0, 0]}/>
    </group>
  )
}
