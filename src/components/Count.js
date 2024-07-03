import React, { useEffect, useState } from 'react'

export default function Count() {
  const [Count, setCount] = useState(0);
  useEffect(() => {
    
  }, [])
  
  return (
    <>
    <div>The count is {Count}</div>
    <button onClick={()=>{setCount(Count+1)}}>Update Count</button>
    </>

  )
}
