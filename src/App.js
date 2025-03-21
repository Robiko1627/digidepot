import './App.css';
import { BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Getappliance from './components/Getappliance';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <p><b><span className='text-success'>Digi</span> <span className='text-warning'>Depot</span></b> <h9>- Home of Everything Tech</h9></p>
      </header>
      <nav>
          <Link to={'/'} className='Links'>Get Appliance</Link>
          <Link to={'/signup'} className='Links'>Sign up</Link>
          <Link to={'/signin'} className='Links'>Sign in</Link>
          <Link to={'/addappliance'} className='Links'>Add Appliance</Link>
        </nav>

      <Routes>
        <Route path ='/' element = {<Getappliance/>}/>     
        <Route path ='/addappliance' element = {<Addappliance/>}/>
        <Route path ='/signup' element = {<Signup/>}/>
        <Route path ='/signin' element = {<Signin/>}/>
        <Route path='/mpesapayment' element={<Mpesapayment/>}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
