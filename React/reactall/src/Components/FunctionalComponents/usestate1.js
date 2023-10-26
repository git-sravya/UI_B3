import React, { useState } from 'react'

export default function Usestate1() {
    const [count,changecount]=useState(0)
  return (
    <div>usestate1
         <button onClick={()=>changecount(count+1)}>Change</button>
            {count}
            <br />
            {3*4}
    </div>
  )
}
