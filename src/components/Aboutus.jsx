import Footer from './Footer';
import Navbar from './Navbar';

const Aboutus = () => {
  return (
    <div className="aboutus-wrapper bg-dark text-white">
      <Navbar />

      <section className="container py-5">
        <h1 className="display-4 text-center mb-5 text-white">About Us</h1>

        {/* Mission Section */}
        <div className="row mb-5">
          <div className="col-md-6 order-md-2">
            <img
              src="images/mission.jpg"
              alt="Our Mission"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-white">Our Mission</h2>
            <p className="fs-5 text-white">
              At <strong>Digi Depot</strong>, our mission is to revolutionize how Kenyan households access and enjoy home appliances. 
              We are committed to offering quality, affordability, and convenience—empowering our customers with modern living solutions backed by excellent service.
            </p>
          </div>
        </div>

        {/* Why Us Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img
              src="images/backgphoto.jpg"
              alt="Why Choose Us"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-white">Why Choose Digi Depot?</h2>
            <ul className="list-group list-group-flush fs-5">
              <li className="list-group-item bg-transparent border-0 text-white">✅ Nationwide delivery and secure payments</li>
              <li className="list-group-item bg-transparent border-0 text-white">✅ Dedicated customer support</li>
              <li className="list-group-item bg-transparent border-0 text-white">✅ 7+ years of trusted experience</li>
              <li className="list-group-item bg-transparent border-0 text-white">✅ Access to 1700+ appliances</li>
              <li className="list-group-item bg-transparent border-0 text-white">✅ Handpicked quality products</li>
            </ul>
          </div>
        </div>

        {/* Experience Section */}
        <div className="row mb-5">
          <div className="col-md-6 order-md-2">
            <img
              src="images/experience.png"
              alt="Our Experience"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-white">Our Experience</h2>
            <p className="fs-5 text-white">
              With over <strong>7 years</strong> in the e-commerce and electronics industry, Digi Depot has served more than <strong>1200 customers</strong> and delivered over <strong>1700 appliances</strong> across Kenya. 
              Our depth of knowledge and passion for service means every order is treated with care, precision, and reliability.
            </p>
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <div className="card border-0 shadow-lg team-card">
              <img
                src="images/blackteam.jpg"
                alt="Our Team"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="info-box p-4 bg-secondary bg-opacity-25 rounded-4 shadow-sm">
              <h2 className="text-white">Meet the Team</h2>
              <ul className="list-group list-group-flush mb-3 fs-5">
                <li className="list-group-item bg-transparent border-0 text-white">👩‍💼 <strong>Robin Nzioka</strong> – CEO & Visionary Leader</li>
                <li className="list-group-item bg-transparent border-0 text-white">🧑‍💼 <strong>Jorell</strong> – Chief Operations Officer (COO)</li>
                <li className="list-group-item bg-transparent border-0 text-white">👨 <strong>Joseph</strong> – Customer Success Specialist</li>
                <li className="list-group-item bg-transparent border-0 text-white">👩 <strong>Moses</strong> – Logistics & Delivery Coordinator</li>
              </ul>
              <p className="text-white">
                We are a diverse, dedicated team focused on delivering excellence in every product and interaction. At Digi Depot, we’re not just selling appliances—we’re improving lives.
              </p>
              <h5 className="text-info mt-3">
                Join over <strong>1200 happy customers</strong> and experience the Digi Depot difference.
              </h5>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Aboutus;
