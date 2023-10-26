import React, { Component } from 'react'
import ClassComp2 from './ClassComp2';

class ClassComp1 extends Component {
   constructor(props) {
    console.log('Class comp1 constructor');
     super(props)
   
     this.state = {
        first:'Initial value'
     }
   }
   componentDidMount(){
    console.log('class comp1 component did mount')
   }
   static getDerivedStateFromProps()
   {
    console.log('class comp1 Get derived state from props')
    return null;
   }
   shouldComponentUpdate()
   {
    console.log('comp 1 should component update')
    return false
   }
   componentDidUpdate(){
    console.log('Comp1 did update')
   }
  render() {
    console.log('Class comp1 Render')
    return (
      <div>ClassComp1
        <br />
        {this.state.first}
        <button onClick={()=> this.setState({first:'New value'})}>Change</button>
       <ClassComp2/> 
      </div>
    )
  }
}

export default ClassComp1
