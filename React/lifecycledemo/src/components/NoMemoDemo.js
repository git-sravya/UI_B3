import React, { useState } from 'react'

function MemoDemo() {
    const [counterone,setcounterone] =useState(0);
    const [countertwo,setcountertwo] =useState(0);

    const incrementOne= ()=>{
        setcounterone(counterone+1)
    }
    const incrementTwo= ()=>{
        setcountertwo(countertwo+1)
    }

    const Iseven =() =>{

        let i=0
        while(i<2000000000) i++
        return counterone%2==0
    }
  return (
    <>
     <div>MemoDemo</div>
     <div>
        <button onClick={incrementOne}>
        Counter1 - {counterone}
        </button>
        {Iseven() ? ' Even ' : ' Odd '}
    </div>
    <div>
        <button onClick={incrementTwo}>
        Counter2 - {countertwo}
        </button>
    </div>
    </>
   
  )
}

export default MemoDemo