import './App.css';

const Test = (props) => {
  return <>
    <h1> Name : {props.name}</h1>
    <h2> Last Name : {props.lname}</h2>
    <h3> Age : {props.age}</h3>
  </>
}
const testing = () => {
  return (
  <h1>
    test
  </h1>
  <h2> </h2>)
}
const App = () => {
  return (
    <div className="App">
      <Test />
      <Test name = {'pavan'} lname = {"sastry nvss"} age = {20}/>
      <Test />
      <h1>nname</h1>
      <h2>give</h2>
    </div>
  );
}

export default App;
