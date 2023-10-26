import React, { Component } from 'react'
import ComponentB from './ComponentB'

export class ComponentA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first:'class A data'
      }

    }
    changestate =(val)=>{
        this.setState({first:val})

    }
  render() {
    return (
      <div>
        <h1> ComponentA</h1>
        {this.state.first}
        <ComponentB value={this.state.first} change={this.changestate}/>


      </div>
    )
  }
}

export default ComponentA