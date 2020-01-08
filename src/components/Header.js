import React from 'react'
import { Link} from 'react-router-dom'
import githublogo from '../assets/github.jpg'
import linkedinlogo from '../assets/linkedin.jpg'

export default function Header() {
    return (
        <header style={headerStyle}>
            <nav style={{margin:'auto',padding:0}}>
                <Link style={linkStyle} to='/'>Home</Link>
                <a href='https://github.com/About-5' target='_blank' rel='noopener noreferrer'>
                    <img src={githublogo} alt='GitHub' style={imgStyle}/>
                </a>
                <a href='https://www.linkedin.com/in/dylan-larson-a27463133/' target='_blank' rel='noopener noreferrer'>
                    <img src={linkedinlogo} alt='LinkedIn' style={imgStyle}/>
                </a>
            </nav>
        </header>
    )
}

// styling
const headerStyle = {
    borderLeft: '1px white solid',
    borderRight: '1px white solid',
    borderBottom: '1px white solid',
    backgroundColor: '#171e26',
    height: '80px',
    margin: 'auto',
    width: '55vw'
}

const imgStyle = {
    border: '#fff 2px solid',
    margin: '13px 10px 13px 0px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    float: 'right',
}

const linkStyle = {
    textShadow: '1px 1px 5px #fff',
    color: '#fff',
    fontFamily: 'Times',
    fontSize: '65px',
    margin: '0 0 0 20px',
    textDecoration: 'none',
}