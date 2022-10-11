import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import CameraController from "./CameraController";
import Earth from "./Earth";
import Sun from "./Sun";
import { DatePicker, SelectPicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { unitData } from "./DataExport";
import Clock from "./Clock";

export default function App({}) {
  const SOLSTICE_OFFSET = 14774400;
  const [timestamps, setTimestamps] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimestamps(prevTime => prevTime + 10);
    }, 10);
    return () => clearInterval(interval);
  },[]);

  const handleChange = (e) => {
    if (e) setTimestamps(e.getTime());
  };

  return (
    <div id="main" style={{ position:"relative", width:"100vw", height:"100vh", overflow:"hidden", backgroundColor:"black" }}>
    <div style={{position:"absolute", right:0, color:"white"}}>
    <DatePicker
    format="yyyy-MM-dd HH:mm:ss"
    calendarDefaultDate={new Date("2022-02-02 00:00:00")}
    ranges={[
      {
        label: "Now",
        value: new Date(),
      },
    ]}
    style={{ width: 260 }}
    onChange={(e) => handleChange(e)}
    />
    </div>
    <Clock timestamps={timestamps} />
    <div id="canvas" style={{ width: "100%", height: "100%", display: "block", backgroundColor: "black" }}>
    <Canvas camera={{ position: [-15, 0, 0] }}>
    <CameraController />
    <ambientLight intensity={0.01} />
    <Sun timestamps={timestamps / 1000 - SOLSTICE_OFFSET} />
    <Earth timestamps={timestamps / 1000 - SOLSTICE_OFFSET} />
    </Canvas>
    </div>
    </div>
  );
}
