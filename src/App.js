import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import CameraController from "./CameraController";
import Earth from "./Earth";
import Sun from "./Sun";
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Clock from "./Clock";
import Space from "./Space";
// import { unitData } from "./DataExport";
// import { EffectComposer, Bloom } from '@react-three/postprocessing';

export default function App() {
  const SOLSTICE_OFFSET = 14774400;
  const initdate = new Date();
  const [timestamps, setTimestamps] = useState(initdate.getTime());
  const timefactor = 1;

  const handleChange = (e) => {
    if (e) setTimestamps(e.getTime());
  };
  return (
    <div id="main" style={{ position:"relative", width:"100vw", height:"100vh", overflow:"hidden", backgroundColor:"black" }}>
    <div style={{position:"absolute", textAlign:"center", left:0, right:0, top:0, color:"white"}}>
    <DatePicker
    format="yyyy-MM-dd HH:mm:ss"
    calendarDefaultDate={initdate}
    ranges={[
      {
        label: "Present",
        value: () => new Date(),
      }
    ]}
    style={{ width: 260 }}
    onChange={(e) => handleChange(e)}
    />
    </div>
    <Clock baseTimestamps={timestamps} timefactor={timefactor} />
    <div id="canvas" style={{ width: "100%", height: "100%", display: "block", backgroundColor: "black" }}>
    <Canvas camera={{ position: [-50, 0, 0], fov: 45, far: 300000 }}>
    <Space/>
    <CameraController />
    <ambientLight intensity={0.01} />
    <Sun timestamps={timestamps / 1000 - SOLSTICE_OFFSET} timefactor={timefactor} />
    <Earth timestamps={timestamps / 1000 - SOLSTICE_OFFSET} timefactor={timefactor} />
    {/* <EffectComposer>
    <Bloom mipmapBlur luminanceThreshold={1} />
    </EffectComposer> */}
    </Canvas>
    </div>
    </div>
  );
}
