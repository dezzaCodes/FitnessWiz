import React from 'react'
import './style.css'

const Button = ({label, id, onClick}) => {
    return (
        <button type="button" id={id} onClick={onClick}>{label}</button>
    )
}

export default Button
