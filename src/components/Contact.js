import React from "react";

const Contact = () => {
  return (
    <section className="page-section container my-5">
      <div className="text-center mb-4">
        <h2 className="page-title">Contact Us</h2>
        <p className="page-subtitle">We’d love to hear from you! Reach out anytime.</p>
      </div>
      <div className="card p-4 shadow-sm border-0 rounded-4">
        <form className="row g-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Your Email" />
          </div>
          <div className="col-12">
            <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary rounded-pill px-4">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
