import "./App.css"
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import CameraController from "./CameraController";
import Earth from "./Earth";
import Sun from "./Sun";
import { DatePicker, SelectPicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { unitData } from "./DataExport";
import { set } from "rsuite/esm/utils/dateUtils";
import Clock from "./Clock";

export default function App({}) {
  const SOLSTICE_OFFSET = 14774400;
  // const [date, setDate] = useState(new Date());
  const [timestamps, setTimestamps] = useState(0);
  // const [timeFactor, setTimeFactor] = useState(1);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimestamps(prevTime => prevTime + 10);
    }, 10);
    return () => clearInterval(interval);
  },[]);

  const handleChange = (e) => {
    if (e) setTimestamps(e.getTime());
  };

  // const getTimeStamps = () => {
  //   let timestamps = date.getTime() / 1000;
  //   timestamps -= SOLSTICE_OFFSET;
  //   return timestamps;
  // };

  // const handleSelect = (e) => {
  //   if (e) setTimeFactor(e);
  // };

  return (
    <div id="main" style={{background:"black"}}>
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
    <Clock timestamps={timestamps} />
    {/* <SelectPicker
    data={unitData}
    searchable={false}
    style={{ width: 224 }}
    onChange={(e) => handleSelect(e)}
    /> */}
    <div id="canvas-container" style={{ width: "100%", height: "100vh", backgroundColor: "black" }}>
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
