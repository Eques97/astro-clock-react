import React from 'react'

export default function Clock({timestamps}) {
    let date = new Date(timestamps);
    return (
    <div>{date.toString()}</div>
    )
}
