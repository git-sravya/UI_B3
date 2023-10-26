import React, { Component } from 'react'

export class Counterstate extends Component {
    constructor(){
        super();
        this.state={
            counter:0
        }
    }
  render() {
    return (
      <div>Counterstate
        <br />
        <input type="button" value="changetext" onClick={()=>this.setState({counter:this.state.counter+1})} />
      <br />
      {this.state.counter}
      </div>
    )
  }
}

export default Counterstate