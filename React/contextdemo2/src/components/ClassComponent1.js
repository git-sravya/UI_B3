import React, { Component } from 'react'
import ClassComponent2 from './ClassComponent2'

export class ClassComponent1 extends Component {
  render() {
    return (
      <div>
        <ClassComponent2/>
      </div>
    )
  }
}

export default ClassComponent1