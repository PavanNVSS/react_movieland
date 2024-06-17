import './App.css';

const Test = (props) => {
  return <>
    <h1> Name : {props.name}</h1>
    <h2> Last Name : {props.lname}</h2>
    <h3> Age : {props.age}</h3>
  </>
}
const App = () => {
  return (
    <div className="App">
      <Test />
      <Test name = {'pavan'} lname = {"sastry nvss"} age = {20}/>
      <Test />
      <h1></h1>
    </div>
  );
}

export default App;
