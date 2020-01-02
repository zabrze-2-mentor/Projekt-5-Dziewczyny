import React from 'react';
import './Button.css';

const styles = [
    "btn_blue",
    "btn_white",
]

const Button = ({
    children,
    type,
    onClick,
    buttonStyle
}) => {

    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0];

    return (
        <button className={`btn_main ${checkButtonStyle}`} type={type} onClick={onClick}>
            {children}
        </button>
    )
};

export default Button;

