import React, { Component } from 'react'

export class CComponent extends Component {
  render() {
    return (
        <div className="main">
         <div>CComponent</div>
             Counter value from parent - {this.props.value}
        </div>
     
    )
  }
}

export default CComponent