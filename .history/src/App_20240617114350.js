import './App.css';

const test = () => {
  return <>
    <h1></h1>
  </>
}
const App = () => {
  let id = 'miao';
  let check = false;
  return (
    <div className="App">
      <h1>Hai {check ? id : 'nice to meet you.'}</h1>
      {check ? <>
        hello,nice to meet you. {id};
      </> : <>
          ID NOT FOUND alert
          <h1> ID NOT FOUND</h1>
      </>}
    </div>
  );
}

export default App;
