import React from 'react';
import useIncrement from './CounterComponent';

function Counter1() {
    const [count, setCount] = useIncrement(1);
    return (
        <div>
            <p>Counter 1: {count}</p>
            <button onClick={setCount}>Add 1</button>
        </div>
    )
}

export default Counter1;
