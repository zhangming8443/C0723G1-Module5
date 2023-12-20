import React from 'react';
import useIncrement from "./CounterComponent";

function Counter2() {
    const [count, setCount] = useIncrement(2);
    return (
        <div>
            <p>Counter 2: {count}</p>
            <button onClick={setCount}>Add 2</button>
        </div>
    )
}

export default Counter2;