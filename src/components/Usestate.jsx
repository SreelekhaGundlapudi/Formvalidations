import React, { useState } from 'react'

const Usestate = () => {
    const[name,setName] = useState("Lekha")
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={()=>setName("Sreelekha")}>Change</button>
    </div>
  )
}

export default Usestate
