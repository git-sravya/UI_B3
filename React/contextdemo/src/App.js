import logo from './logo.svg';
import './App.css';
import ComponentP from './components/withoutContext/ComponentP';
import ComponentP1 from './components/Context_class/ComponentP';
import ComponentP2 from './components/Context_function/ComponentP'
function App() {
  return (
    <div className="App">
       {/* <ComponentP/>  */}
      {/* <ComponentP1/>  */}
      <ComponentP2/>
      
    </div>
  );
}

export default App;
