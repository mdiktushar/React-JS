import React from 'react'
import '../App.css'

export default function Person(props) {
    return (
        <div className = "App">
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}
