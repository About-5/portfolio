import React from 'react'
import Content from '../components/Content'
import snake from '../assets/snake.jpg'
import whatcomStables from '../assets/mainbarn.jpg'

export default function Home() {
    return (
        <div style={divStyle}>
            <Content name='Snake' img={snake} text='Snake using HTML Canvas and JavaScript'/>
            <Content name='WhatcomStables' img={whatcomStables} text='Whatcom Stables Website using HTML/CSS and JavaScript'/>
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
