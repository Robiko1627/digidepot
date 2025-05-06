import axios from 'axios';
import { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './addproducts.css'; // Link the new CSS

const Addproducts = () => {
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");

  const [loading, setLoading] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Adding product...");

    const data = new FormData();
    data.append("product_name", product_name);
    data.append("product_description", product_description);
    data.append("product_cost", product_cost);
    data.append("product_photo", product_photo);

    try {
      const response = await axios.post(
        "https://Robiko.pythonanywhere.com/api/addproducts",
        data
      );
      setLoading("");
      setMessage(response.data.Message);
      setError("");

      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto("");
    } catch (err) {
      setLoading("");
      setMessage("");
      setError("Failed to add product. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-wrapper d-flex justify-content-center align-items-center">
        <div className="glass-card p-4 shadow">
          <h2 className="text-glow text-center mb-4">Add Appliance</h2>
          {loading && <div className="alert alert-info">{loading}</div>}
          {message && <div className="alert alert-success">{message}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={submit} className="d-grid gap-3">
            <input
              type="text"
              className="form-control"
              placeholder="Appliance Name"
              value={product_name}
              onChange={(e) => setProductName(e.target.value)}
            />

            <textarea
              className="form-control"
              placeholder="Description..."
              value={product_description}
              onChange={(e) => setProductDescription(e.target.value)}
              rows="3"
            ></textarea>

            <input
              type="number"
              className="form-control"
              placeholder="Price"
              value={product_cost}
              onChange={(e) => setProductCost(e.target.value)}
            />

            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => setProductPhoto(e.target.files[0])}
            />

            <button type="submit" className="btn neon-button mt-3">
              🚀 Add Product
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Addproducts;
