import './App.css';
import Giphy from './components/Giphy';
import { SearchBox } from './components/TextField';

function App() {
  return (
    <div className="App">
      <div>
        <SearchBox />
      </div>
      <div className="App-header">
        <Giphy />
      </div>
    </div>
  );
}

export default App;
