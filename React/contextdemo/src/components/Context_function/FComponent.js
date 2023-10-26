import React, { useContext } from 'react'
import Fchildcomponent from './Fchildcomponent'
import { CounterContext } from '../CounterContext'

function FComponent() {
  const value=useContext(CounterContext);
  return (
    <div className="main">
      <div>FComponent</div>
     <div>Counter value from parent - {value}
     </div>  
     <hr />
      <Fchildcomponent/>
    </div>
  
  )
}

export default FComponent