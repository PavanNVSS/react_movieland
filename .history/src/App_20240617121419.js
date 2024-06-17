import {useState,useEffect} from 'react';
import './App.css';


const App = () => {
  const [counter, setcounter] = useState(0);
  useEffect(() => ({
    console.alert("reloading")
  })
  return (
    <div className="App">
      <button onClick={() => setcounter((prevcount) => prevcount-1 )}> - </button>
      <h1> {counter}</h1>
      <button onClick={() => setcounter((prevcount)=> prevcount +1)}> + </button>
    </div>
  );
}

export default App;
