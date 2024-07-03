import React, { useState, useRef } from 'react'
import { useEffect } from 'react';

export default function Refhook() {
    const [count, setCount] = useState(0)

    const a = useRef(0)
    // let a  = 0

  useEffect(() => {
    a.current = a.current + 1
    console.log(`rerendering and the value of a is ${a.current}..`) 
  });

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
