import React, { useState } from 'react'

export default function Events() {

    const [name, setName] = useState("enter your name")

    const handleClick = ()=>{
        alert("hey i am clicked")
    }

    const handleChange = (e) =>{
        setName(e.target.value)
    }

  return (
    <div>
        <button onClick={handleClick}>Click Me</button> <br />
        <input type="text" value={name} onChange={handleChange}/>
    </div>
  )
}
