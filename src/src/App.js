import logo from './logo.svg';
import './App.css';
import LazyInputs from './lazyInputs.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LazyInputs />
      </header>
    </div>
  );
}

export default App;
