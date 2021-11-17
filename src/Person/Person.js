import React from 'react'
import '../App.css'

export default function Person(props) {
    return (
        <div className = "App">
            I am {props.name} and I am a {props.gender}.

        </div>
    )
}
