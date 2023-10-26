import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LoginContext } from './context/LoginContext';
import Profile from './components/Profile';
import Login from './components/Login';
import FormValidation from './components/FormValidation';

function App() {
  const [username,setusername]=useState();
  const[profilestatus,setprofilestatus]=useState(false)
  return (
    <div className="App">
      {/* <LoginContext.Provider value= {{username,setusername,setprofilestatus}}>
      { profilestatus ? <Profile/> : <Login/> }
      </LoginContext.Provider> */}

      
     <FormValidation/>  
    </div>
  );
}

export default App;
