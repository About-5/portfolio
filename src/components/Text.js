import React from 'react'

export default function Text(props) {
    return (
        <div style={divStyle}>
            {props.text}
        </div>
    )
}

// styling
const divStyle = {
    margin: '1em 0em 1em 1em',
}