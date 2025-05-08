import Footer from './Footer';
import Navbar from './Navbar';

const Aboutus = () => {
  return (
    <div className="aboutus-wrapper">
      <Navbar />

      <section className="container py-5">
        <h1 className="display-4 text-center text-gradient mb-5">About Us</h1>

        <div className="row align-items-center">
          {/* Team Image */}
          <div className="col-md-6 mb-4">
            <div className="card border-0 shadow-lg team-card">
              <img
                src="images/backgphoto.jpg"
                alt="Our Team"
                className="img-fluid rounded-3"
              />
            </div>
          </div>

          {/* Team Info */}
          <div className="col-md-6">
            <div className="info-box p-4 bg-light rounded-4 shadow-sm">
              <h2 className="text-success">Our Team</h2>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item">👩‍💼 Robin Nzioka – CEO</li>
                <li className="list-group-item">🧑‍💼 Tracy – COO</li>
                <li className="list-group-item">👨 Joseph – Member</li>
                <li className="list-group-item">👩 Moses – Member</li>
              </ul>
              <p className="text-muted">
                At Digi Depot, we're a passionate team committed to helping
                households in Kenya upgrade to better living through cutting-edge
                appliances and unmatched service.
              </p>
              <h4 className="text-primary">
                Over <strong>1700+ appliances</strong>, <strong>7 years of experience</strong>, <strong>1200+ customers</strong> served
              </h4>
            </div>
          </div>
        </div>
      </section>

      <Footer /> {/* Footer added here */}
    </div>
  );
};

export default Aboutus;
