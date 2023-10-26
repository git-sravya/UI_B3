import React, { Component } from 'react'

export class Setstate1 extends Component {
    name='john'
    constructor(){
        super();
        this.state={
            name:'peter',
            age:20
        }
    }
  render() {
    return (
      <div>
        Setstate1
        <br />
        <input type="button" value="changetext" onClick={()=>this.setState({name:'Sam',age:23})} />
        <br />
        {this.state.name} -- {this.state.age}

      </div>
    )
  }
}

export default Setstate1