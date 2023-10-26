import React, { Component } from 'react'
import ErrorComponent from './ErrorComponent';


export class Counter extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
        console.log('Counter Constructor');
    }
    componentDidMount(){
        console.log('Component did Mount')
    }
    componentWillUnmount(){
        console.log('Component will UnMount')
    }
    static getDerivedStatefromError(error)
    {
        console.log('Get derived state from error')

        return {hasError:true}
    }

    componentDidCatch(error,info)
    {
        console.log('component did catch ')
        console.log('error occured '+ error)
    }
  render() {
    
    console.log('Render Method')
    return (
      <div>{this.state.count}
        <br />
        <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
        <button onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>
       <ErrorComponent name='John'/>
       <ErrorComponent name='Sam'/>
        <ErrorComponent name='Unknown'/> 
       
      </div>

    )
  }
}

export default Counter