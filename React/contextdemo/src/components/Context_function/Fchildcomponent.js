import { useContext } from 'react'
import React from 'react'

import { CounterContext } from '../CounterContext'

function Fchildcomponent() {
  const value=useContext(CounterContext);
  return (
    <div className="main">
      <div>F Child Component</div>
     <div>{value}</div> 
    </div>
  )
}

export default Fchildcomponent