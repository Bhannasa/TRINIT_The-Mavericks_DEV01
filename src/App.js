import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar items={[{name:'Home',link:'#'},{name:'Support',link:'#'},{name:'Contact',link:'#'},]}/>
    </div>
  );
}

export default App;
