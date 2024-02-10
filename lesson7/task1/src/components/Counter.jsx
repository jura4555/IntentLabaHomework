import React, { useState } from 'react';
import Button from './Button'
import './counter.scss';

const Counter = () => {
    const [count, setCount] = useState(0);


    const handleIncrease = (multiplier) => {
        setCount(count + multiplier);
    }

    return (
        <div className="counter-container">
            <h1 className="counter-title">Counter: {count}</h1>
            <div className="counter-bitton">
                <Button onIncrease = {handleIncrease} multiplier = {1}/>
                <Button onIncrease = {handleIncrease} multiplier = {5}/>
                <Button onIncrease = {handleIncrease} multiplier = {10}/>
            </div>
        </div>
    )
    
};

export default Counter;