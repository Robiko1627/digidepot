import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';
import './navbar.css';

const Navbar = () => {
  const { cartItems } = useCart();
  const itemCount = Array.isArray(cartItems) ? cartItems.length : 0;

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar navbar-expand-md fixed-top glass-navbar shadow-sm py-3 px-4 animate-navbar ${showNavbar ? 'navbar-show' : 'navbar-hide'}`}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold fs-4 text-white">
          Digi<span className="text-warning">Depot</span>
        </Link>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarcontents"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarcontents">
          <ul className="navbar-nav me-auto gap-2">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white fw-semibold glow-link">
                View Appliance
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addproducts" className="nav-link text-white fw-semibold glow-link">
                Sell Appliance
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link text-white fw-semibold glow-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/chat" className="nav-link text-white fw-semibold glow-link">
                Chat With Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link text-white fw-semibold glow-link">
                <i className="fas fa-shopping-cart"></i>
                Cart
                {itemCount > 0 && (
                  <span className="badge bg-warning text-dark ms-2">{itemCount}</span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="btn btn-outline-info text-white border-white">
                Sign IN
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="btn btn-info text-white">
                Sign UP
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
