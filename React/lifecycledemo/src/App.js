import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ParentCounter from './components/ParentCounter';
import ClassComp1 from './components/ClassComp1';
import EventBind from './components/EventBind';
import UseEffect1 from './components/UseEffect1';
import UserApi from './components/UserApi';
import MemoDemo from './components/MemoDemo';
import Memo1 from './components/Memo1';
import ComponentA from './components/ComponentA';

function App() {
  
  return (
    <div className="App">
   {/* <ParentCounter/>
    <EventBind/>

    <UseEffect1/> 
    <UserApi/>*/}
    {/* <MemoDemo/> 
    <Memo1/>*/}
    <ComponentA/>
    </div>
  );
}

export default App;
