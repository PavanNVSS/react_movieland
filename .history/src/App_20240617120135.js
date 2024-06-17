import {useState} from 'react';
import './App.css';

const Test = (props) => {
  return <>
    <h1> Name : {props.name}</h1>
    <h2> Last Name : {props.lname}</h2>
    <h3> Age : {props.age}</h3>
  </>
}
const Testing = () => {
  return 2 + 4;
}
const App = () => {
  return (
    <div className="App">
    </div>
  );
}

export default App;
