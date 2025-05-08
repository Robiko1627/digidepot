import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* Main Footer Section */}
      <section className="row gx-5 gy-4 px-4 py-5 footer-background text-light rounded-4">
        {/* About Us */}
        <div className="col-md-4">
          <h5 className="text-light fw-bold text-center mb-3">About Us</h5>
          <p className="text-light small">
            Digi Depot is your trusted partner in home appliances. Based in Westlands, Nairobi — we deliver top-tier appliances with unmatched customer support to suit your needs and budget.
          </p>
        </div>

        {/* Contact Form */}
        <div className="col-md-4">
          <h5 className="text-light fw-bold text-center mb-3">Contact Us</h5>
          <form
            action="https://formspree.io/f/myzwjlwg"
            method="POST"
          >
            <input
              className="form-control mb-2 rounded-pill shadow-sm border-0"
              type="email"
              name="email"
              placeholder="Your Email"
              aria-label="Email Address"
              required
            />
            <textarea
              className="form-control mb-2 rounded-pill shadow-sm border-0"
              name="message"
              rows="4"
              placeholder="Your Message"
              aria-label="Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary w-100 rounded-pill shadow-lg">
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="col-md-4 text-center">
          <h5 className="text-light fw-bold mb-3">Connect With Us</h5>
          <div className="d-flex justify-content-center mb-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-3">
              <img
                src="images/facebook.png"
                alt="Facebook"
                className="social-icon"
              />
            </a>
            <a href="https://instagram.com/_.simply_robin._" target="_blank" rel="noopener noreferrer" className="mx-3">
              <img
                src="images/instagram.jpg"
                alt="Instagram"
                className="social-icon"
              />
            </a>
          </div>
          <p className="small">
            Follow us for the latest updates, promotions, and exciting new arrivals!
          </p>
        </div>
      </section>

      {/* Bottom Footer */}
      <footer className="text-white text-center py-3 bg-dark border-top">
        <small>
          &copy; 2025 Digi Depot. All rights reserved. | Designed by Robin Nzioka
        </small>
      </footer>
    </div>
  );
};

export default Footer;
