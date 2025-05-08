import React from "react";

const Carousel = () => {
  return (
    <section className="row my-4">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <div
          id="mycarousel"
          className="carousel slide rounded-4 shadow-lg overflow-hidden"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            {[0, 1, 2, 3].map((num) => (
              <button
                key={num}
                type="button"
                data-bs-target="#mycarousel"
                data-bs-slide-to={num}
                className={num === 0 ? "active" : ""}
                aria-current={num === 0 ? "true" : undefined}
                aria-label={`Slide ${num + 1}`}
              ></button>
            ))}
          </div>

          {/* Slides */}
          <div className="carousel-inner">
            {["appliance1.jpg", "appliance2.jpg", "appliance3.jpg", "appliance4.jpg"].map((img, idx) => (
              <div key={img} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
                <div className="carousel-img-wrapper position-relative">
                  <img
                    src={`images/${img}`}
                    className="d-block w-100 carousel-img"
                    alt={`Slide ${idx + 1}`}
                    height="400"
                  />
                  <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                    <h5>Smart Tech for Modern Living</h5>
                    <p>Upgrade your home with cutting-edge appliances from DigiDepot.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <a className="carousel-control-prev" href="#mycarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#mycarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
      <div className="col-md-1"></div>
    </section>
  );
};

export default Carousel;
