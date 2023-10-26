import React, { useState } from 'react'
import FComponent from './FComponent';
import CComponent from './CComponent';
import './style.css'
import { CounterContext } from '../CounterContext';

function ComponentP() {

    const [counter,setcounter]=useState(0)
    const increment=()=>{
        setcounter(counter+1);
    }
    const decrement=()=>{
        setcounter(counter-1);
    }
  return (
  <div className="main">
    
    <div>ComponentP</div>
    {counter}
    <br />
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <CounterContext.Provider value='hello function'>
    <div>
       <FComponent/>
    </div>
    <div>
        <CComponent/>
    </div>
    </CounterContext.Provider>
    </div>
    
  )
}

export default ComponentP