import './App.css';

const Test = (props) => {
  return <>
    <h1> Name : Pavan Sastry</h1>
    <h2> Last Name : NVSS</h2>
    <h3> Age : 20</h3>
  </>
}
const App = () => {
  return (
    <div className="App">
      <>
        <Test  />
        </>
      
    </div>
  );
}

export default App;
