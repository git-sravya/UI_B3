import React from 'react'

function Fchildcomponent(props) {
  return (
    <div className="main">
      <div>F Child Component</div>
     <div>Counter value from parent - {props.countval}</div> 
    </div>
  )
}

export default Fchildcomponent