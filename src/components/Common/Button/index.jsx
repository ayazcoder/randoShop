import React from 'react'

export const Button = ({
    label = "Button",
    type = "button",
    className = "",
    disabled = false,
    onClick = () => { }
}) => {
    return (
        <button type={type} onClick={onClick} className={` ${className}  bg-primary hover:bg-primary rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center`} disabled={disabled}>
            {label}
        </button>
    )
}
