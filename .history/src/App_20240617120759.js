import {useState} from 'react';
import './App.css';


const App = () => {
  const [counter,setcounter] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setcounter((prevcount) => prevcount-1 )}> - </button>
      <h1> {counter}</h1>
      <button onClick={() => setcounter((prevcount))}> + </button>
    </div>
  );
}

export default App;
