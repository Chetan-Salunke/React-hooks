import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [Counter, setCounter] = useState(0);


    useEffect(()=>{
        setTimeout(()=>{
            setCounter((Counter)=>Counter+1);
        },1000);
    },[])
    

  return (
    <div>
        <h1>The counter is update {Counter}</h1>
    </div>
  )
}
