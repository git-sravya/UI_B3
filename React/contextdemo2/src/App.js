import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunComponent from './components/FunComponent';
import { useState } from 'react';
import { Context1 } from './Context/Context1';

function App() {

  const[name,setname]=useState('Andrew');
   
  return (
    <div className="App">

      <Context1.Provider value={name}>
      <div>
      <FunComponent/>
      </div>
      <div>
      <ClassComponent/>
      </div>
      </Context1.Provider>
    </div>
  );
}


export default App;
