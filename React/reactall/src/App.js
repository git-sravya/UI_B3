import logo from './logo.svg';
import './App.css';
import Setstate1 from './Components/ClassComponents/Setstate1';
import Counterstate2 from './Components/ClassComponents/Counterstate2';
import Usestate1 from './Components/FunctionalComponents/usestate1';

function App() {
  return (
    <div className="App">
     {/* <Setstate1/> */}
     <Counterstate2/>
     <Usestate1/>
    </div>
  );
}

export default App;
