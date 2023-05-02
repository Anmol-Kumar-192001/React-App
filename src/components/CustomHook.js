import React, { useEffect, useState } from 'react'
import useTitleCount from './useTitleCount';


const CustomHook = () => {

    const [count, setCount] = useState(0);

    //custom hook
    useTitleCount(count);


    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </>
    )
}

export default CustomHook