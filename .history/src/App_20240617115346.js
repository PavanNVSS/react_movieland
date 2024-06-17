import './App.css';

const Test = (props) => {
  return <>
    <h1> Name : {props.name}</h1>
    <h2> Last Name : {props.lname}</h2>
    <h3> Age : 20</h3>
  </>
}
const App = () => {
  return (
    <div className="App">
      <>
        <Test name={'Pavan'} />
        <Test />
        </>
      
    </div>
  );
}

export default App;
