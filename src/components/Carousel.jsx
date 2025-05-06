import React from "react";
import { Link } from "react-router-dom"; // ✅ Fixes "Link is not defined"

const ImageCarousel = () => {
  return (
    <section className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">
          {/* Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>

          {/* Slides */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/appliance1.jpg" className="d-block w-100" height="300px" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src="images/appliance2.jpg" className="d-block w-100" height="300px" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src="images/appliance3.jpg" className="d-block w-100" height="300px" alt="Slide 3" />
            </div>
            <div className="carousel-item">
              <img src="images/appliance4.jpg" className="d-block w-100" height="300px" alt="Slide 4" />
            </div>
          </div>

          {/* Controls */}
          <Link to="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </Link>
          <Link to="#mycarousel" className="carousel-control-next" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </Link>
        </div>
      </div>
      <div className="col-md-1"></div>
    </section>
  );
};

export default ImageCarousel; 
