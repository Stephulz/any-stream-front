import React from 'react'
import './Button.scss';

function Button({ label, onClick }) {
    return (
        <button className="btn" onClick={() => onClick()}>
            <p>{label}</p>
        </button>
    );
}

export default Button;
