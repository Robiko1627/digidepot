import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import Signup from './components/signup';
import Signin from './components/Signin';
import Mpesapayment from './components/Mpesapayment';
import Getproducts from './components/Getproducts';
import Addproducts from './components/Addproducts';
import Aboutus from './components/Aboutus';
import Chat from './components/Chat';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import Navbar from './components/Navbar'; // Ensure your Navbar is in place
import Footer from './components/Footer'; // You can include Footer to have it globally if required
import Cart from './context/Cart'; // Import Cart page

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          {/* Header Section */}
          <header className="App-header">
            <p><b><i><span className='text-success'>Digi</span> <span className='text-warning'> Depot</span></i></b> <h9>- Home of Everything Tech</h9></p>
          </header>

          {/* Navbar with links to different pages */}
          <Navbar />

          {/* Main Routes */}
          <Routes>
            <Route path="/" element={<Getproducts />} />
            <Route path="/addproducts" element={<Addproducts />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/mpesapayment" element={<Mpesapayment />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/cart" element={<Cart />} /> {/* Add Cart Route */}
          </Routes>

          {/* Footer Section */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
