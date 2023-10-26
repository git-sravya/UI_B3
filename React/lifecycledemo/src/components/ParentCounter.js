import React, { Component } from 'react'
import Counter from './Counter'

export class ParentCounter extends Component {
    constructor(){
        super()
        this.state={
            mount:true
        }
    }
  render() {
    return (
      <div>
        <button disabled={!this.state.mount} onClick={()=> this.setState({mount:false})}>UnMount</button>
        <button disabled={this.state.mount} onClick={()=> this.setState({mount:true})}>Mount</button>
      <br /><br /><br />
      { this.state.mount ? <Counter/> :null}

      </div>
    )
  }
}

export default ParentCounter