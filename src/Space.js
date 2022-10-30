import { CubeTextureLoader } from 'three'
// import React from 'react'
import { useThree } from '@react-three/fiber';
// import { TextureLoader } from 'three';

export default function Space() {
  const {scene} = useThree();
  const loader = new CubeTextureLoader();
  console.log("space rendered!")
  const texture = loader.load([
    "/skybox/1.jpg",
    "/skybox/2.jpg",
    "/skybox/3.jpg",
    "/skybox/4.jpg",
    "/skybox/5.jpg",
    "/skybox/6.jpg"
  ]);
  scene.background = texture;
  return null;
}
