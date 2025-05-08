import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Cart = () => {
  const { 
    cartItems = [], 
    removeFromCart, 
    clearCart, 
    increaseQuantity, 
    decreaseQuantity,
    totalItems,
    totalPrice
  } = useCart();
  
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/mpesapayment');
  };

  // Calculate subtotal for each product with proper fallbacks
  const calculateSubtotal = (product) => {
    const cost = Number(product.product_cost) || 0;
    const quantity = Number(product.quantity) || 0;
    return (cost * quantity).toFixed(2);
  };

  // Calculate total price with proper fallback
  const displayTotal = () => {
    if (typeof totalPrice === 'number' && !isNaN(totalPrice)) {
      return totalPrice.toFixed(2);
    }
    
    // Fallback calculation if totalPrice is not provided
    const calculatedTotal = cartItems.reduce((sum, item) => {
      const cost = Number(item.product_cost) || 0;
      const quantity = Number(item.quantity) || 0;
      return sum + (cost * quantity);
    }, 0);
    
    return calculatedTotal.toFixed(2);
  };

  return (
    <>
      <main style={{ paddingBottom: '100px' }}>
        <div className="container mt-5 pb-5">
          <h2 className="text-center text-success">Your Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})</h2>
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
                          {product.product_description?.slice(0, 60)}...
                        </p>
                        <p className="text-warning">KES {Number(product.product_cost)?.toFixed(2) || '0.00'}</p>
                        <p className="text-info">Subtotal: KES {calculateSubtotal(product)}</p>

                        <div className="d-flex justify-content-between align-items-center">
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => decreaseQuantity(product.id)}
                            disabled={product.quantity <= 1}
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

                        <button
                          className="btn btn-danger mt-2 w-100"
                          onClick={() => removeFromCart(product.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="d-flex justify-content-between mt-4 align-items-center">
                <div>
                  <h3>Total: KES {displayTotal()}</h3>
                  <p className="text-muted">{cartItems.length} {cartItems.length === 1 ? 'product' : 'products'} in cart</p>
                </div>
                <div>
                  <button 
                    className="btn btn-secondary me-3" 
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>
                  <button 
                    className="btn btn-success" 
                    onClick={handleCheckout}
                    disabled={cartItems.length === 0}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Cart;