import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Tech = () => {
  const [techNews] = useState([
    {
      id: 1,
      title: "AI Revolutionizes Healthcare Diagnostics",
      image:
        "https://esdst.eu/wp-content/uploads/2024/06/ai-in-health.jpg",
      category: "AI & Healthcare",
      date: "October 30, 2025",
      description:
        "AI-powered tools are now outperforming human doctors in detecting early-stage diseases, marking a paradigm shift in healthcare technology. These systems analyze thousands of data points instantly, providing faster, more accurate diagnoses that could save millions of lives. Hospitals are rapidly adopting this innovation worldwide.",
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough Promises Faster Encryption",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
      category: "Quantum Tech",
      date: "October 29, 2025",
      description:
        "Researchers announced a breakthrough quantum chip design that can process cryptographic algorithms 100x faster than current systems. This leap forward could redefine cybersecurity and enable governments and corporations to build unbreakable encryption protocols in real-time.",
    },
    {
      id: 3,
      title: "Next-Gen Smartphones to Feature Built-in AI Companions",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
      category: "Mobile",
      date: "October 28, 2025",
      description:
        "Tech companies are integrating personal AI companions directly into phones, enabling offline reasoning and real-time learning capabilities. These assistants can analyze your voice tone, adapt to your preferences, and even summarize your day automatically.",
    },
    {
      id: 4,
      title: "Startups Race to Build Eco-Friendly Data Centers",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
      category: "Green Tech",
      date: "October 27, 2025",
      description:
        "A wave of innovation is reshaping data infrastructure, with startups building solar-powered, carbon-neutral server farms. These eco-friendly facilities are drastically reducing the tech industry's environmental footprint.",
    },
  ]);

  const [selectedNews, setSelectedNews] = useState(null);

  const handleReadMore = (news) => setSelectedNews(news);
  const handleCloseModal = () => setSelectedNews(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="tech-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase section-title">Tech Updates</h2>
          <p className="text-muted mb-0">
            Discover the latest innovations and trends in technology shaping the
            future.
          </p>
        </div>

        <div className="row g-4">
          {techNews.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <div className="card tech-card h-100 shadow-sm border-0">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body d-flex flex-column">
                  <span className="badge bg-info mb-2">{item.category}</span>
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  <p className="card-text text-muted small mb-2">
                    <i className="bi bi-calendar-date me-1"></i>
                    {item.date}
                  </p>
                  <p className="card-text flex-grow-1">
                    {item.description.length > 100
                      ? item.description.slice(0, 100) + "..."
                      : item.description}
                  </p>
                  <button
                    className="btn btn-outline-info mt-auto"
                    onClick={() => handleReadMore(item)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedNews && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content border-0 rounded-4 overflow-hidden shadow-lg">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold">{selectedNews.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="img-fluid rounded mb-3"
                />
                <p className="text-muted small mb-2">
                  <i className="bi bi-calendar-date me-1"></i>
                  {selectedNews.date} •{" "}
                  <span className="badge bg-info">{selectedNews.category}</span>
                </p>
                <p>{selectedNews.description}</p>
              </div>
              <div className="modal-footer border-0">
                <button
                  className="btn btn-secondary rounded-pill"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .section-title {
          color: #004085;
          letter-spacing: 1px;
        }

        .tech-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
        }

        .tech-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .tech-card img {
          height: 220px;
          object-fit: cover;
        }

        .card-title {
          color: #001f3f;
        }

        .btn-outline-info {
          color: #004085;
          border-color: #004085;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .btn-outline-info:hover {
          background-color: #004085;
          color: #fff;
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
};

export default Tech;