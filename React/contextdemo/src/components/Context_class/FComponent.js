import React from 'react'
import Fchildcomponent from './Fchildcomponent'

function FComponent(props) {
  return (
    <div className="main">
      <div>FComponent</div>
     <div>Counter value from parent - {props.value}
     </div>  
     <hr />
      <Fchildcomponent countval={props.value}/>
    </div>
  
  )
}

export default FComponent