import React from 'react';
import './button.scss';

const Button = ({ onIncrease, multiplier }) => {

    const handleClick = () => {
        onIncrease(multiplier);
    }

    return (
        <button className="button" onClick={handleClick}>
            Increase by {multiplier}
        </button>
    )
    
};

export default Button;