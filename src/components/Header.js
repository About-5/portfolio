import React from 'react'
import githublogo from '../assets/github.jpg'

export default function Header() {
    return (
        <header style={headerStyle}>
            <ul style={{margin:'auto',padding:0,listStyleType:'none'}}>
                <li>
                    <a href='https://github.com/About-5' target='_blank' rel='noopener noreferrer'>
                        <img src={githublogo} alt='GitHub' style={imgStyle}/>
                    </a>
                </li>
            </ul>
        </header>
    )
}

const headerStyle = {
    borderLeft: '1px white solid',
    borderRight: '1px white solid',
    backgroundColor: '#3f586b',
    height: '80px',
    margin: 'auto',
    padding: '0',
    width: '1000px'
}

const imgStyle = {
    border: '#fff 1px solid',
    margin: '15px 10px',
    width: '50px',
    height: '50px',
    borderRadius: '50%'
}