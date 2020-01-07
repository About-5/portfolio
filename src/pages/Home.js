import React from 'react'
import Content from '../components/Content'

export default function Home() {
    return (
        <div style={divStyle}>
            Home
            <Content/>
        </div>
    )
}

const divStyle = {
    borderLeft: '1px white solid',
    borderRight: '1px white solid',
    textAlign: 'center',
    margin: 'auto',
    height: '100vh',
    width: '1000px'
}