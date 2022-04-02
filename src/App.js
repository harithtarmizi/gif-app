import logo from './logo.svg';
import './App.css';
import Giphy from './components/Giphy';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Let's do our best.
        </p>
        <Giphy />
      </header>
    </div>
  );
}

export default App;
