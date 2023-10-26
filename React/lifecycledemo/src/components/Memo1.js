import React, { useMemo, useState } from 'react'

function Memo1() {
    const [counter,setcount] =useState(0)
    const [counter1,setcount1]=useState(0)
  

    const isEven=  useMemo(()=>{
        let i=1;
        while(i<900000000) {i++}
        return counter%2==0
    },[counter])

  return (
    <div>
       <h2>Memo1</h2> 
       <p>{counter} - - { isEven ?'Even' : 'Odd'}</p> 
    <p><button onClick={()=>setcount(counter+1)}>Increment counter1</button></p>
    <p>{counter1}</p> 
    <p><button onClick={()=>setcount1(counter1+1)}>Increment counter 2</button></p>
    </div>
  )
}

export default Memo1