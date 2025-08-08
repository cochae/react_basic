import React, {useState, useEffect } from 'react';
import { useFormState } from 'react-dom';

const R031_ReactHook2 = (props) => {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(1);
    const buttonClick = () => {
        let temp = count;
        temp++;
        setCount(temp);
    }

    const buttonFlag = () => {
        let temp = flag;
        temp *= -1;
        setFlag(temp);
    }
    
    useEffect(() => {
        console.log('useEffect');
    }, [flag]);
    return (
        <div style={{padding: "0px"}}>
            <h2>{count}</h2>
            <button onClick={buttonClick}>count버튼</button>
            <button onClick={buttonFlag}>flag버튼</button>
        </div>
    );
};

export default R031_ReactHook2;