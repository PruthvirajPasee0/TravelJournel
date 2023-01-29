import './App.css';
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './components/data'
function App() {
  let displayData = data.map((item) => <Card {...item}/> )
  return (
    <div className="App">
      <Navbar />
      {displayData}
    </div>
  );
}

export default App;
