import React from 'react'

export default function Navbar(props) {
  return (
    <div className="wrapper">
      <h1>{props.title}</h1>
      <form>
      <fieldset>
         <label>
           <p>{props.name}</p>
           <input name="name" />
         </label>
       </fieldset>
       <button type="submit">{props.btn}</button>
      </form>
    </div>
  )
}
