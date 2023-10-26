import React, { useEffect, useState } from 'react'

function UseEffect1() {
    const [count,change]=useState(0)
    const [count1,change1]=useState(0)
  

    useEffect(()=>{
        console.log('Use effect');
        document.title=count;
    },[])

  return (
    <div>
      
        <br />
       Count: {count}       
        <button onClick={()=>change(count+1)}>Change count</button>
        <br />
        Count1:{count1} <button onClick={()=>change1(count1+1)}>Change Count</button>
        
    </div>
  )
}

export default UseEffect1