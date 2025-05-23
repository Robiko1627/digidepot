import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

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

  const truncateDescription = (description) => {
    if (!description) return '';
    const words = description.split(' ');
    return words.length > 20 ? words.slice(0, 20).join(' ') + '...' : description;
  };

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.product_cost) * item.quantity,
    0
  );

  const finalAmount = directProduct
    ? parseFloat(directProduct.product_cost)
    : cartTotal;

  useEffect(() => {
    setAmount(finalAmount.toFixed(2));
  }, [finalAmount]);

  const handlePayment = () => {
    setError('');
    setPaymentStatus('');

    if (!isValidPhoneNumber(phoneNumber)) {
      setError('Please enter a valid Kenyan phone number (e.g., 0701234567)');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPaymentStatus(
        'Awaiting payment as an STK Push has been sent to your phone to complete the payment'
      );
    }, 3000);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg">
              <div className="card-header bg-primary text-white">
                <h2 className="mb-0">M-Pesa Payment</h2>
              </div>
              <div className="card-body p-4">
                {directProduct ? (
                  <div className="product-info mb-4">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <img
                          src={`https://Robiko.pythonanywhere.com/static/images/${directProduct.product_photo}`}
                          alt={directProduct.product_name}
                          className="img-fluid rounded"
                        />
                      </div>
                      <div className="col-md-8">
                        <h4>{directProduct.product_name}</h4>
                        <p>{truncateDescription(directProduct.product_description)}</p>
                        <p className="h5 text-success fw-bold">KES {directProduct.product_cost}</p>
                      </div>
                    </div>
                  </div>
                ) : cartItems.length > 0 ? (
                  <div className="product-info mb-4">
                    <h4 className="mb-3">Your Order</h4>
                    {cartItems.map((product) => (
                      <div key={product.id} className="row align-items-center mb-3 pb-3 border-bottom">
                        <div className="col-md-2">
                          <img
                            src={`https://Robiko.pythonanywhere.com/static/images/${product.product_photo}`}
                            alt={product.product_name}
                            className="img-fluid rounded"
                          />
                        </div>
                        <div className="col-md-6">
                          <h5>{product.product_name}</h5>
                          <p className="small">{truncateDescription(product.product_description)}</p>
                        </div>
                        <div className="col-md-4 text-end">
                          <p className="mb-1">KES {product.product_cost} x {product.quantity}</p>
                          <p className="fw-bold">KES {(product.product_cost * product.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                    <div className="row mt-3">
                      <div className="col-12 text-end">
                        <h4 className="text-success fw-bold">Total: KES {cartTotal.toFixed(2)}</h4>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="alert alert-warning">
                    <strong>No items selected for payment.</strong>
                  </div>
                )}

                <div className="payment-form mt-4">
                  <h4 className="mb-3">Payment Details</h4>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Phone Number</label>
                    <input
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="e.g. 0701234567"
                      className="form-control form-control-lg border-dark"
                    />
                    {!isValidPhoneNumber(phoneNumber) && phoneNumber.length > 0 && (
                      <div className="invalid-feedback d-block text-danger fw-bold">
                        Phone number must be in the format 07xxxxxxxx
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">Amount (KES)</label>
                    <div className="form-control form-control-lg border-dark fw-bold" style={{ color: '#28a745' }}>
                      {amount}
                    </div>
                  </div>

                  {error && (
                    <div className="alert alert-danger mb-4">
                      <strong>{error}</strong>
                    </div>
                  )}

                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-lg fw-bold"
                      onClick={handlePayment}
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Processing Payment...
                        </>
                      ) : (
                        'Make Payment'
                      )}
                    </button>
                  </div>

                  {paymentStatus && (
                    <div className="alert alert-info mt-4">
                      <strong>{paymentStatus}</strong>
                    </div>
                  )}
                </div>
              </div>
              <div className="card-footer bg-light">
                <p className="small mb-0 fw-bold">
                  You will receive an STK push on your phone to complete the payment.
                  Ensure your phone is nearby and unlocked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};

export default Mpesapayment;
