import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first:'Value1'
      }
    }
    // change(){
    //     this.setState({
    //         first:'Value2'
    //     })
    change=()=>{
        this.setState({
            first:'Value2'
        })
    }
  render() {
    return (
      <div>
        {this.state.first}
        {/* <button onClick={()=>this.change()}>Change</button> */}


        {/* <button onClick={this.change}>Change</button>  */}
        <button onClick={this.change.bind(this)}>click</button>
      </div>
    )
  }
}

export default EventBind