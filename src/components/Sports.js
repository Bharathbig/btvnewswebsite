import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Sports = () => {
  const [sportsNews] = useState([
    {
      id: 1,
      title: "India Clinches Victory in Thrilling Final Over Against Australia",
      image:
        "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80",
      category: "Cricket",
      date: "October 30, 2025",
      description:
        "In an electrifying match, India secured a narrow win over Australia in the final over. Rohit Sharma's brilliant 85 and Bumrah's death bowling sealed the victory. This win marks India's third consecutive series triumph against Australia this season.",
    },
    {
      id: 2,
      title: "Lionel Messi Scores Hat-Trick to Secure Inter Miami Win",
      image:
        "https://www.hindustantimes.com/ht-img/img/2025/10/19/550x309/Messi_1760837056350_1760837056566.JPG",
      category: "Football",
      date: "October 29, 2025",
      description:
        "Lionel Messi dazzled the crowd with a stunning hat-trick as Inter Miami defeated LA Galaxy 3–1 in a Major League Soccer showdown. Messi's performance keeps Miami at the top of the table and continues his incredible goal-scoring form.",
    },
    {
      id: 3,
      title: "Novak Djokovic Wins His 25th Grand Slam Title",
      image:
        "https://images.unsplash.com/photo-1570158268183-d296b2892211?auto=format&fit=crop&w=1200&q=80",
      category: "Tennis",
      date: "October 28, 2025",
      description:
        "Djokovic made history once again, claiming his 25th Grand Slam title at the Australian Open, cementing his status as one of the greatest of all time. He defeated rising star Carlos Alcaraz in straight sets, showcasing unmatched consistency and power.",
    },
    {
      id: 4,
      title: "Team USA Dominates in Olympic Swimming Events",
      image:
        "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
      category: "Olympics",
      date: "October 27, 2025",
      description:
        "The United States continued their dominance in the pool, winning multiple gold medals in freestyle and butterfly events during the Olympic Games. Veteran swimmer Katie Ledecky led the charge with two individual golds.",
    },
  ]);

  const [selectedNews, setSelectedNews] = useState(null);

  const handleReadMore = (news) => setSelectedNews(news);
  const handleCloseModal = () => setSelectedNews(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="sports-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase section-title">
            Sports Highlights
          </h2>
          <p className="text-muted mb-0">
            Get the latest updates and scores from the world of sports.
          </p>
        </div>

        <div className="row g-4">
          {sportsNews.map((news) => (
            <div className="col-md-6 col-lg-4" key={news.id}>
              <div className="card sports-card h-100 shadow-sm border-0">
                <img
                  src={news.image}
                  className="card-img-top"
                  alt={news.title}
                />
                <div className="card-body d-flex flex-column">
                  <span className="badge bg-danger mb-2">{news.category}</span>
                  <h5 className="card-title fw-bold">{news.title}</h5>
                  <p className="card-text text-muted small mb-2">
                    <i className="bi bi-calendar-date me-1"></i>
                    {news.date}
                  </p>
                  <p className="card-text flex-grow-1">
                    {news.description.length > 100
                      ? news.description.slice(0, 100) + "..."
                      : news.description}
                  </p>
                  <button
                    className="btn btn-outline-danger mt-auto"
                    onClick={() => handleReadMore(news)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
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
                  <span className="badge bg-danger">{selectedNews.category}</span>
                </p>
                <p>{selectedNews.description}</p>
              </div>
              <div className="modal-footer border-0">
                <button
                  className="btn btn-danger rounded-pill"
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
          color: #8b0000;
          letter-spacing: 1px;
        }

        .sports-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
          overflow: hidden;
        }

        .sports-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .sports-card img {
          height: 220px;
          object-fit: cover;
        }

        .card-title {
          color: #8b0000;
        }

        .btn-outline-danger {
          color: #8b0000;
          border-color: #8b0000;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .btn-outline-danger:hover {
          background-color: #8b0000;
          color: #fff;
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
};

export default Sports;