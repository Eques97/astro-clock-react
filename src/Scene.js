import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import CameraController from "./CameraController";
import Earth from "./Earth";
import Sun from "./Sun";
import { DatePicker, SelectPicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { unitData } from "./DataExport";

export default function Scene({}) {
  const SOLSTICE_OFFSET = 14774400;
  const [date, setDate] = useState(new Date());
  const [timeFactor, setTimeFactor] = useState(1);

  const handleChange = (e) => {
    if (e) setDate(e);
  };

  const getTimeStamps = () => {
    let timestamps = date.getTime() / 1000;
    timestamps -= SOLSTICE_OFFSET;
    return timestamps;
  };

  const handleSelect = (e) => {
    if (e) setTimeFactor(e);
  };

  return (
    <div
      id="canvas-container"
      style={{ width: "100%", height: "100vh", backgroundColor: "black" }}
    >
      <div>
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
        <SelectPicker
          data={unitData}
          searchable={false}
          style={{ width: 224 }}
          onChange={(e) => handleSelect(e)}
        />
      </div>
      <Canvas camera={{ position: [-15, 0, 0] }}>
        <CameraController />
        <ambientLight intensity={0.01} />
        <Sun timestamps={getTimeStamps()} timeFactor={timeFactor} />
        <Earth timestamps={getTimeStamps()} timeFactor={timeFactor} />
      </Canvas>
    </div>
  );
}
