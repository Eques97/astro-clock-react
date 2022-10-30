import React, { useEffect, useState } from "react";

export default function Clock({baseTimestamps, timefactor}) {
    const [timestamps, setTimestamps] = useState(0);
    useEffect(() => {
      setTimestamps(baseTimestamps);
      let interval = setInterval(() => {
        setTimestamps(prevTimestamps => prevTimestamps + 1000 * timefactor);
      }, 1000);
      return () => clearInterval(interval);
    },[baseTimestamps, timefactor]);
    const date = new Date(timestamps);
    return (
    <div style={{position:"fixed", textAlign:"center", left:0, color:"white", fontSize:"100%", zIndex: 1}}>{date.toString()}</div>
    )
}
