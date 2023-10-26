import React, { useContext } from 'react'
import { Context1 } from '../Context/Context1';

function FunchildComponent() {
    const value=useContext(Context1);
  return (
    <div>
        <h1>
        {value}
        </h1>
       
       

    </div>
  )
}

export default FunchildComponent