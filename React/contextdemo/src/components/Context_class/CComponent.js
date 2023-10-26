import React, { Component } from 'react'
import { CounterContext } from '../CounterContext'

export class CComponent extends Component {
  render() {
    return (
        <div className="main">
         <div>CComponent</div>
             Counter value from parent - {this.props.value}
             <CounterContext.Consumer>
              {(value)=>{
                return <h2>{value}</h2>
              }}
             </CounterContext.Consumer>
        </div>
     
    )
  }
}

export default CComponent