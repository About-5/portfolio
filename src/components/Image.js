import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Image(props) {
    return (
        <div>
            <Link to={props.name}><img style={imgStyle}src={props.img} alt={props.name}></img></Link>
        </div>
    )
}

// PropTypes
Image.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}


const imgStyle = {
    border: '1px solid #fff',
    boxShadow: `0px 0px 3px #fff`,
    width: '20vw',
    maxWidth: '400px',
}