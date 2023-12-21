import React from 'react';

function useIncrement(addAmount) {
    const [count, setCount] = React.useState(0);
    const increase = () => setCount(count + addAmount);

    return [count, increase];
}

export default useIncrement;
