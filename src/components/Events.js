import React from 'react'

export default function Events() {

    const handleClick = ()=>{
        alert("hey i am clicked")
    }

  return (
    <div>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}
