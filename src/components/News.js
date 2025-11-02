import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const News = () => {
  const [latestNews] = useState([
    {
      id: 1,
      title: "Global Summit 2025: World Leaders Pledge Climate Action",
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
      category: "World",
      date: "October 30, 2025",
      description:
        "In a historic gathering, world leaders committed to aggressive carbon reduction targets aiming to achieve net-zero emissions by 2040. The summit marked a turning point in international cooperation, with significant pledges from major economies to invest in renewable energy, carbon capture technology, and sustainable infrastructure.",
    },
    {
      id: 2,
      title: "Tech Giants Unveil Breakthrough in AI-Powered Search",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      category: "Technology",
      date: "October 29, 2025",
      description:
        "A new AI-powered search engine redefines how information is accessed – delivering context-aware, conversational answers. The technology promises to revolutionize how users interact with the web, providing personalized, precise, and verified information faster than ever before.",
    },
    {
      id: 3,
      title: "Stock Markets Rally as Inflation Eases",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJfAs7lKRkwRRnN_PQPIi30Y2J36tbNvoOg&s",
      category: "Business",
      date: "October 28, 2025",
      description:
        "Global markets surged today following reports of cooling inflation and optimistic forecasts for economic recovery. Analysts expect this trend to stabilize investor sentiment and encourage higher spending levels worldwide.",
    },
    {
      id: 4,
      title: "New Space Telescope Captures Stunning Deep-Space Images",
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80",
      category: "Science",
      date: "October 27, 2025",
      description:
        "NASA's latest space telescope transmitted breathtaking images of distant galaxies, providing new insights into cosmic evolution. Astronomers say these images could help answer key questions about the origins of the universe and dark matter.",
    },
  ]);

  const [selectedNews, setSelectedNews] = useState(null);

  const handleReadMore = (news) => {
    setSelectedNews(news);
  };

  const handleCloseModal = () => {
    setSelectedNews(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="news-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase section-title">Latest News</h2>
          <p className="text-muted mb-0">
            Stay updated with the most recent happenings around the globe.
          </p>
        </div>

        <div className="row g-4">
          {latestNews.map((news) => (
            <div className="col-md-6 col-lg-4" key={news.id}>
              <div className="card news-card h-100 shadow-sm border-0">
                <img
                  src={news.image}
                  className="card-img-top"
                  alt={news.title}
                />
                <div className="card-body d-flex flex-column">
                  <span className="badge bg-primary mb-2">{news.category}</span>
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
                    className="btn btn-outline-primary mt-auto"
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
                  <span className="badge bg-primary">
                    {selectedNews.category}
                  </span>
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
          color: #001f3f;
          letter-spacing: 1px;
        }

        .news-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 16px;
          overflow: hidden;
          background: #fff;
        }

        .news-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .news-card img {
          height: 220px;
          object-fit: cover;
        }

        .btn-outline-primary {
          color: #001f3f;
          border-color: #001f3f;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .btn-outline-primary:hover {
          background-color: #001f3f;
          color: #fff;
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
};

export default News;