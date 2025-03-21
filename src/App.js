import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Getappliance from './components/Getappliance';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1 className='text-success'>Digi</h1><h1 className='text-danger'>Depot</h1><h1> - Home of Everything Tech</h1>
      </header>
      <Routes>
      <Route path ='/getappliance' element = {<Getappliance/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
