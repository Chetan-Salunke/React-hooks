import React, { useState } from 'react'

export default function CountHover() {

    const [count, setCount] = useState(0)

    const resetBtn = () => {
        setCount(0);
    }

    return (
        <>
        <div className="count">
            <h1>{count}</h1>
        </div>
        <div className="btn">
            <div className="btn1"><button onMouseOver={()=>setCount(count + 1)}>Increment</button></div>
            <div className="btn2"><button onMouseOver={()=>setCount(count - 1)}>Decrement</button></div>
            <div className="btn3"><button onMouseOver={resetBtn}>Reset</button></div>
        </div>
        </>
    
    )
}
