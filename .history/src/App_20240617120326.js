import {useState} from 'react';
import './App.css';


const App = () => {
  const [count] = useState();
  return (
    <div className="App">
      <button> - </button>
      <h1> Counter</h1>
      <button> + </button>
    </div>
  );
}

export default App;
