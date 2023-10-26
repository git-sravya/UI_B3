import React, { useContext, useState } from 'react'
import { LoginContext } from '../context/LoginContext'


function Login() {
    const {username,setusername,setprofilestatus}=useContext(LoginContext)
    const [pwd,setpwd]=useState('');
    const [msg,setmsg]=useState();


    function clickfn(){
       

        if(username=='john' && pwd=='12345')
        {
            setprofilestatus(true)
        }
        else{
            setmsg('Invalid Username and Password')
        }
        


    }
  return (
    <div>
        <h1>Login</h1>
        <p>User Name<input type="text" onChange={(e)=>setusername(e.target.value)} /></p>
        <p>Password<input type="text" onChange={(e)=>setpwd(e.target.value)} /></p>
        <p><input type="button" value="Login" onClick={()=> clickfn() } /></p>
    {msg}
    </div>
  )
}

export default Login