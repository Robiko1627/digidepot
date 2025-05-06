import { useState } from 'react';
import { useCart } from '../context/CartContext'; // Adjust path if necessary
import { useLocation } from 'react-router-dom';


const Mpesapayment = () => {
  const { cartItems = [] } = useCart();
  const location = useLocation();
  const directProduct = location.state?.product || null;

  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const [error, setError] = useState('');

  const isValidPhoneNumber = (number) => /^07\d{8}$/.test(number);
  const isValidAmount = (amount) => !isNaN(amount) && parseFloat(amount) > 0;

  const handlePayment = () => {
    setError('');
    setPaymentStatus('');

    if (!isValidPhoneNumber(phoneNumber)) {
      setError('Please enter a valid Kenyan phone number (e.g., 0701234567)');
      return;
    }

    if (!isValidAmount(amount)) {
      setError('Please enter a valid amount greater than 0.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPaymentStatus('Awaiting payment as an STK Push has been sent to your phone to complete the payment');
    }, 3000);
  };

  // Calculate cart total or use direct product cost
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.product_cost) * item.quantity,
    0
  );
  const finalAmount = directProduct ? parseFloat(directProduct.product_cost) : cartTotal;

  return (
    <div className="mpesa-container">
      <h2>M-Pesa Payment</h2>

      {directProduct ? (
        <div className="product-info">
          <img
            src={`https://Robiko.pythonanywhere.com/static/images/${directProduct.product_photo}`}
            alt={directProduct.product_name}
            className="product-img mb-2"
            style={{ maxWidth: '200px', borderRadius: '8px' }}
          />
          <h5>{directProduct.product_name}</h5>
          <p>{directProduct.product_description}</p>
          <p><strong>Price:</strong> KES {directProduct.product_cost}</p>
        </div>
      ) : cartItems.length > 0 ? (
        <div className="product-info">
          {cartItems.map((product) => (
            <div key={product.id} className="mb-3 border-bottom pb-2">
              <img
                src={`https://Robiko.pythonanywhere.com/static/images/${product.product_photo}`}
                alt={product.product_name}
                className="product-img mb-2"
                style={{ maxWidth: '150px', borderRadius: '8px' }}
              />
              <h5>{product.product_name}</h5>
              <p>{product.product_description}</p>
              <p><strong>Price:</strong> KES {product.product_cost} x {product.quantity}</p>
            </div>
          ))}
          <h4 className="text-success">Total: KES {cartTotal.toFixed(2)}</h4>
        </div>
      ) : (
        <p className="text-danger">No items selected for payment.</p>
      )}

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
          className="form-control"
        />
        {!isValidPhoneNumber(phoneNumber) && phoneNumber.length > 0 && (
          <small className="error-message">Phone number must be in the format 07xxxxxxxx</small>
        )}
      </div>

      <div className="form-group">
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder={`KES ${finalAmount.toFixed(2)}`}
          className="form-control"
        />
        {!isValidAmount(amount) && amount.length > 0 && (
          <small className="error-message">Please enter a valid amount greater than 0</small>
        )}
      </div>

      {error && <div className="error-message">{error}</div>}

      <button className="btn btn-primary" onClick={handlePayment} disabled={loading}>
        {loading ? 'Processing Payment...' : 'Make Payment'}
      </button>

      {loading && (
        <div className="spinner">
          <div className="loader"></div>
        </div>
      )}

      {paymentStatus && <div className="payment-status">{paymentStatus}</div>}
    </div>
  );
};

export default Mpesapayment;
