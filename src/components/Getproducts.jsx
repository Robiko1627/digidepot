import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Footer from "./Footer";
import ImageCarousel from "./Carousel";
import Navbar from "./Navbar";

const Getproducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const img_url = "https://Robiko.pythonanywhere.com/static/images/";
  const productsPerPage = 16;

  useEffect(() => {
    const getproducts = async () => {
      setLoading("Please wait, retrieving products...");
      try {
        const response = await axios.get("https://Robiko.pythonanywhere.com/api/getproducts");
        setProducts(response.data);
        setLoading("");
      } catch {
        setLoading("");
        setError("There was an error loading products.");
      }
    };
    getproducts();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const filtered_products = products.filter(
    (item) =>
      item.product_name.toLowerCase().includes(search.toLowerCase()) ||
      item.product_description.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filtered_products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filtered_products.length / productsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="background-wrapper py-3">
      {/* Video background */}
      <div className="video-background">
        <video autoPlay loop muted className="background-video">
          <source src="/videos/video1.mp4" type="video/mp4" />
        </video>
      </div>

      <Navbar />
      <ImageCarousel />

      <div className="container">
        <h3 className="text-center text-info my-4">Explore Our Appliance Collection</h3>

        {/* Opaque Search Bar */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-8 col-lg-6">
            <div
              className="input-group shadow-lg"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                borderRadius: "50px",
                overflow: "hidden"
              }}
            >
              <span className="input-group-text bg-info text-white border-0">
                <i className="bi bi-search"></i>
              </span>
              <input
                className="form-control border-0"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)"
                }}
                type="search"
                placeholder="Search for appliances, brands, or features..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Loader/Error */}
        {loading && <p className="text-center text-muted">{loading}</p>}
        {error && <p className="text-danger text-center">{error}</p>}

        {/* Products Grid */}
        <div className="row g-4">
          {currentProducts.map((product) => (
            <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 border-0 shadow-lg rounded-4 product-card">
                <img
                  className="card-img-top rounded-top-4"
                  src={img_url + product.product_photo}
                  alt={product.product_name}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold text-dark">{product.product_name}</h5>
                  <p className="card-text text-muted small mb-2">
                    {product.product_description.slice(0, 70)}...
                  </p>
                  <div className="mt-auto">
                    <p className="text-primary fw-bold fs-6">KES {product.product_cost}</p>
                    <div className="d-grid gap-2">
                      <button
                        className="btn btn-info text-white"
                        onClick={() => navigate("/mpesapayment", { state: { product } })}
                      >
                        Buy Now
                      </button>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center my-5">
          <nav>
            <ul className="pagination pagination-lg">
              {[...Array(totalPages).keys()].map((num) => (
                <li
                  key={num + 1}
                  className={`page-item ${currentPage === num + 1 ? "active" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => goToPage(num + 1)}
                  >
                    {num + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Getproducts;
