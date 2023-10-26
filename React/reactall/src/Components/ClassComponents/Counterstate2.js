import React, { Component } from 'react'

export class Counterstate2 extends Component {
    constructor(){
        super();
        this.state={
            counter:0
        }
    }
    increase()
    {
      //this.state.counter=this.state.counter+1;

      // this.setState({counter:this.state.counter+1},()=>{
      //   console.log(this.state.counter);
      // })

      this.setState((prev) =>({
        counter:prev.counter+1
      }))
     
    
    }

    increasefive()
    {
      this.increase();
      this.increase();
      this.increase();
      this.increase();
    }
  render() {
    return (
      <div>Counterstate2
        <br />
        <input type="button" value="changetext" onClick={()=> this.increasefive() } />
      <br />
      {this.state.counter}
      </div>
    )
  }
}

export default Counterstate2