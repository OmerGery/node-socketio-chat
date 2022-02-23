import logo from './logo.svg';
import './App.css';
import {sendMsg} from './socket';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h4></h4>
      <input></input>
      
      <button onClick={sendMsg}>send msg</button>
      </header>
    </div>
    
  );
}

export default App;
