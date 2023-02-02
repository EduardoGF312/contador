import logo from './logo.svg';
import './App.css';
import BarraSuperior from './components/BarraSuperior';
import Contador from './components/Contador';
import Cartas from './components/Cartas';


function App() {
  return (
    <div className="App">
      <BarraSuperior />
      <Cartas />
      {/* <Contador /> */}
    </div>
  );
}

export default App;