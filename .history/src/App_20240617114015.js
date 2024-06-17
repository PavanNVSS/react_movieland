import './App.css';

const App = () => {
  let id = 'miao';
  let check = true;
  return (
    <div className="App">
      <h1>Hai {check ? id : 'nice to meet you.'}</h1>
      {check ? <>
      </>}
    </div>
  );
}

export default App;
