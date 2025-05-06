import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./signin.css"; // Add this line

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait as we log you in...");
    setError("");

    try {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);

      const response = await axios.post("https://Robiko.pythonanywhere.com/api/addappliance", data);
      setLoading("");

      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
      } else {
        setError(response.data.Message);
      }
    } catch (error) {
      setLoading("");
      setError(error.response?.data?.Message || "An error occurred.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="signin-container">
        <div className="signin-card">
          <h2 className="signin-title">🔐 Sign In</h2>
          <form onSubmit={submit}>
            {loading && <p className="loading-msg">{loading}</p>}
            {error && <p className="error-msg">{error}</p>}

            <input
              type="email"
              placeholder="Enter your email"
              className="signin-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="signin-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="signin-button">
              Sign In
            </button>
          </form>
        </div>
      </div>
      
    </>
  );
};

export default Signin;
