import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function CameraController() {
    const { camera, gl } = useThree();
    useEffect(() => {
          const controls = new OrbitControls(camera, gl.domElement);
          controls.minDistance = 10;
          controls.maxDistance = 30;
          return () => {
            controls.dispose();
          };
       },
       [camera, gl]
    );
    return null;
}
