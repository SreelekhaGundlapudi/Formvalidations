import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>console.log(count),[count])
  return (
    <div>
    
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>click me</button>
    </div>
  )
}

export default Useeffect
