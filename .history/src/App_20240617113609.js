import './App.css';

const App = () => {
  let id = 'miao';
  let check = true;
  return (
    <div className="App">
      <h1>Hai {check ? {id}: 'how are you'}</h1>
    </div>
  );
}

export default App;
