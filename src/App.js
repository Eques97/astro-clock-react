import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import CameraController from "./CameraController";
import Earth from "./Earth";
import Sun from "./Sun";
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
// import { unitData } from "./DataExport";
import Clock from "./Clock";
// import Space from "./Space";

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
    <div style={{position:"absolute", right:0, color:"white"}}>
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
    <Canvas camera={{ position: [-15, 0, 0] }}>
    {/* <Space/> */}
    <CameraController />
    <ambientLight intensity={0.01} />
    <Sun timestamps={timestamps / 1000 - SOLSTICE_OFFSET} timefactor={timefactor} />
    <Earth timestamps={timestamps / 1000 - SOLSTICE_OFFSET} timefactor={timefactor} />
    </Canvas>
    </div>
    </div>
  );
}
