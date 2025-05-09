import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Navbar from './Navbar';
import './signup.css'; // Make sure this file supports your layout

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const togglePassword = () => setShowPassword(!showPassword);

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait as we upload your details...");
    setError("");
    setSuccess("");
    setPasswordError("");

    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters long and contain letters, numbers, and special characters.");
      setLoading("");
      return;
    }

    try {
      const data = new FormData();
      data.append("username", username);
      data.append("email", email);
      data.append("password", password);
      data.append("phone", phone);

      const response = await axios.post("http://Robiko.pythonanywhere.com/api/signup", data);
      setLoading("");
      setSuccess(response.data.Message);

      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="signup-wrapper" style={{ minHeight: "calc(100vh - 100px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div className="signup-container">
          <div className="signup-card">
            <h2 className="signup-title">📝 Sign Up</h2>
            <form onSubmit={submit}>
              {loading && <p className="loading-msg">{loading}</p>}
              {success && <p className="success-msg">{success}</p>}
              {error && <p className="error-msg">{error}</p>}
              {passwordError && <p className="error-msg">{passwordError}</p>}

              <input
                type="text"
                placeholder="Enter your username"
                className="signup-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Enter your email"
                className="signup-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`signup-input ${showPassword ? 'beam-on' : ''}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={togglePassword}
                >
                  {showPassword ? "🙈 Hide" : "👁 Show"}
                </button>
              </div>

              <input
                type="text"
                placeholder="Enter your phone number"
                className="signup-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <button type="submit" className="signup-button">Sign Up</button>
            </form>
            <p className="signup-link">
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
