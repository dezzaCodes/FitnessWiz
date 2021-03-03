import React from 'react'

const Button = ({label, id, cls, onClick}) => {
    return (
        <button type="button" className={cls} id={id} onClick={onClick}>{label}</button>
    )
}

export default Button
