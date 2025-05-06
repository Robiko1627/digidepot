const Footer = () => {
    return (
      <div>
        <section className="row mt-5 py-4 footer-background-color text-light">
          {/* About Us */}
          <div className="col-md-4 mb-4">
            <h5 className="text-center text-info">About Us</h5>
            <p>
              Digi Depot is your trusted partner in home appliances. Based in the heart of Westlands, we’re committed to delivering top-quality products, reliable service, and expert advice to suit your modern lifestyle and budget.
            </p>
          </div>
  
          {/* Contact Form */}
          <div className="col-md-4 mb-4">
            <h5 className="text-center text-info">Contact Us</h5>
            <form>
              <input
                className="form-control mb-2"
                type="email"
                placeholder="Your Email"
                aria-label="Email Address"
              />
              <textarea
                className="form-control mb-2"
                rows="5"
                placeholder="Your Message"
                aria-label="Message"
              ></textarea>
              <button type="submit" className="btn btn-info w-100">
                Send Message
              </button>
            </form>
          </div>
  
          {/* Social Media */}
          <div className="col-md-4 mb-4 text-center">
            <h5 className="text-info">Connect With Us</h5>
            <div className="d-flex justify-content-center my-2">
              <a href="https://facebook.com" aria-label="Facebook" className="mx-2">
                <img src="images/facebook.png" alt="Facebook" className="socialspictures" />
              </a>
              <a href="https://instagram.com/_.simply_robin._" aria-label="Instagram" className="mx-2">
                <img src="images/instagram.jpg" alt="Instagram" className="socialspictures" />
              </a>
            </div>
            <p className="text-light">
              We're active on social media! Follow us and let us know how we can better serve you.
            </p>
          </div>
        </section>
  
        {/* Bottom Footer */}
        <footer className="text-white text-center py-3 bg-dark">
          <small>
            &copy; 2025 Digi Depot. All rights reserved. | Designed by Robin Nzioka
          </small>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  