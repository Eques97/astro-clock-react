import React from 'react'

export default function Clock({timestamps}) {
    let date = new Date(timestamps);
    return (
    <div style={{position:"fixed", textAlign:"center", left:0, color:"white", fontSize:"100%", zIndex: 1}}>{date.toString()}</div>
    )
}
