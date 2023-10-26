import React, { Component } from 'react'

export class ClassComp2 extends Component {
    constructor(props) {
        console.log('class comp2 constructor')
      super(props)
    
      this.state = {
         first:'child first'
      }
    }
    componentDidMount()
    {
        console.log('class comp 2 did mount')
    }
    static getDerivedStateFromProps()
    {
     console.log('class comp2 Get derived state from props')
     return null;
    }
  render() {
    console.log('class comp 2 render')
    return (
      <div>ClassComp2
        <br />
        {this.state.first}
        <button onClick={()=>this.setState({first:'new child value'}) }>change child</button>
      </div>
    )
  }
}

export default ClassComp2