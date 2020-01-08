import React from 'react'

export default function Snake() {
    return (
        <div style={divStyle}>
            Snake
        </div>
    )
}

// styling
const divStyle = {
    borderLeft: '1px white solid',
    borderRight: '1px white solid',
    margin: 'auto',
    height: '100vh',
    width: '55vw'
}