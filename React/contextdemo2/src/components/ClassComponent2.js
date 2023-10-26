import React, { Component } from 'react'
import { Context1 } from '../Context/Context1'

export class ClassComponent2 extends Component {
  render() {
    return (
        <Context1.Consumer>
        {
        (value)=>{ return <div><h1>Class Component 2</h1> <h2>{value}</h2></div>  }
        }
        </Context1.Consumer>   
    )
  }
}

export default ClassComponent2