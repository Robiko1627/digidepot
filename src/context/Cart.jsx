import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Cart = () => {
  const { cartItems = [], removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart(); // added functions to handle quantity change
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate total price
    if (Array.isArray(cartItems)) {
      setTotalPrice(
        cartItems.reduce((total, item) => total + parseFloat(item.product_cost) * item.quantity, 0) // Update total with quantity
      );
    }
  }, [cartItems]);

  const handleCheckout = () => {
    // Proceed to checkout page
    navigate('/mpesapayment');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-success">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-danger">Your cart is empty</p>
      ) : (
        <div>
          <div className="row">
            {cartItems.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card shadow">
                  <img
                    src={`https://Robiko.pythonanywhere.com/static/images/${product.product_photo}`}
                    className="card-img-top"
                    alt={product.product_name}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.product_name}</h5>
                    <p className="card-text text-muted">
                      {product.product_description.slice(0, 60)}...
                    </p>
                    <p className="text-warning">KES {product.product_cost}</p>

                    {/* Quantity Control */}
                    <div className="d-flex justify-content-between align-items-center">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => decreaseQuantity(product.id)}
                        disabled={product.quantity <= 1} // Disable if quantity is 1
                      >
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => increaseQuantity(product.id)}
                      >
                        +
                      </button>
                    </div>

                    {/* Remove Item */}
                    <button
                      className="btn btn-danger mt-2"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-between mt-4">
            <h3>Total: KES {totalPrice.toFixed(2)}</h3>
            <div>
              <button className="btn btn-secondary" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="btn btn-success ml-3" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
