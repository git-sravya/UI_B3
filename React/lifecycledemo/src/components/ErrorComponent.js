import React, { Component } from 'react'

export class ErrorComponent extends Component {    

    
  render() {
    if(this.props.name=='Unknown')
    throw new Error('invalid')
    return (
      <div>ErrorComponent
        
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default ErrorComponent