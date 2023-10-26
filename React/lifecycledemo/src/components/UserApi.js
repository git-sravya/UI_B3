import React, { Component } from 'react'
import axios from 'axios'

export class UserApi extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         users:[]
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
             .then(res=>{
              this.setState({users:res.data})
                        console.log(res)
                    })
             .catch(e=>{
                console.log(e)
             })
    }
  render() {
    return (
      <div>
        <h1>UserApi</h1> 

        <table>
         {
      this.state.users.map(x =>
        <tr><td>{x.name}</td><td>{x.email}</td><td>{x.phone}</td><td>{x.address.street}</td></tr>
                )
         } 
        </table>

      </div>
    )
  }
}

export default UserApi