import './App.css';
import { BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/signup';
import Signin from './components/Signin';
import Mpesapayment from './components/Mpesapayment';
import"bootstrap/dist/js/bootstrap.min.js";
import Getproducts from './components/Getproducts';
import Addproducts from './components/Addproducts';
import Aboutus from './components/Aboutus';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <p><b><i><span className='text-success'>Digi</span> <span className='text-warning'> Depot</span></i></b> <h9>- Home of Everything Tech</h9></p>
        
        
      </header>
      
      
      {/* <nav>
          <Link to={'/'} className='Links'>Get Appliance</Link>
          <Link to={'/signup'} className='Links'>Sign up</Link>
          <Link to={'/signin'} className='Links'>Register/Sign in</Link>
          <Link to={'/addappliance'} className='Links'>Add Appliance</Link>
        </nav> */}

      <Routes>
        <Route path ='/' element = {<Getproducts/>}/>     
        <Route path ='/addproducts' element = {<Addproducts/>}/>
        <Route path ='/signup' element = {<Signup/>}/>
        <Route path ='/signin' element = {<Signin/>}/>
        <Route path='/mpesapayment' element={<Mpesapayment/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
