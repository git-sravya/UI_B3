import React, { Component } from 'react'

export class ComponentC extends Component {
  
    change2=()=>{     
        this.props.change('new value from child')
    }
  render() {
    return (
      <div>
       <h2>ComponentC</h2>  
       {this.props.value}

       <button onClick={this.change2}>Change</button>
      </div>
    )
  }
}

export default ComponentC