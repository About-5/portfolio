import React from 'react'
import Image from './Image'
import Text from './Text'

export default function Content(props) {
    return (
        <div style={divStyle}>
            <Image name={props.name} img={props.img}/>
            <Text text={props.text}/>
        </div>
    )
}


// styling
const divStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '1em 1em 0em 1em',
}