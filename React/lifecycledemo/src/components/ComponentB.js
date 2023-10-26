import React, { Component } from 'react'
import ComponentC from './ComponentC'

export class ComponentB extends Component {
  render() {
    return (
      <div>
        <h2>ComponentB</h2>
        <ComponentC value={this.props.value} change={this.props.change}/> 

      </div>
    )
  }
}

export default ComponentB