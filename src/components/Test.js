import React, { useState } from 'react'
import useTitleCount from './useTitleCount';

const Test = () => {

    const [count, setCount] = useState(0);

      //custom hook
      useTitleCount(count);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Click me of Test</button>
        </>
    )
}

export default Test