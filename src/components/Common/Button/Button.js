import React from 'react'
import './Button.scss';

function Button({ label, type, onClick, customClass, labelCustomClass, customHover }) {
    return (
        <button type={type} className={customHover ? `btn-no-hover ${customClass}` : `btn ${customClass}`} onClick={onClick ? () => onClick() : undefined}>
            <p className={labelCustomClass}>{label}</p>
        </button>
    );
}

export default Button;
