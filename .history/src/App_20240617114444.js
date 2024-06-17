import './App.css';

const test = () => {
  return <>
    <h1> Name : Pavan Sastry</h1>
    <h2> Last Name : NVSS</h2>
    <h3> Age : 20</h3>
  </>
}
const App = () => {

  return (
    <div className="App">
      <test />
    </div>
  );
}

export default App;
