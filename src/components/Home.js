import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import News from "../Images/Newsimg1.jpg";
import News1 from "../Images/Newsimg2.jpg";
import News2 from "../Images/Jobimg1.jpg";
import News3 from "../Images/Ent1.jpg";

const featuredNews = [
  {
    id: 1,
    title:
      "Congress may agree to Tejashwi as CM face to get Bihar alliance back on track",
    summary:
      "THE CONGRESS may endorse RJD leader Tejashwi Yadav as the chief minister face of the Mahagathbandhan as the alliance tries to smoothen the wrinkles and get off the ground. Sources said that talks held Wednesday had helped narrow the differences, and friendly fights might now come down to a handful of seats...",
    image: News,
    category: "News",
  },
  {
    id: 2,
    title:
      "Ind vs Aus LIVE Score, 2nd ODI Match: Rohit Sharma Sends Big Message With Fifty, Leads India's Fightback",
    summary:
      "Australia defeat India by 2 wickets in the second ODI encounter to take an unassailable 2-0 lead in the three-match series. Chasing a target of 265, Matthew Short top-scored with 74 while Cooper Connolly remained unbeaten on 61...",
    image: News1,
    category: "Sports",
  },
  {
    id: 3,
    title:
      "Upcoming Government Jobs 2025 LIVE: Employment News Dec (14-20)2025, Admit Card, Exam Date, Notifications and much more",
    summary:
      "If you aspire for a Government Job, you will get all the latest Live Updates for notifications in this article. Including jobs based on Education, Qualification, and Government Sectors such as Railway, SSC, Banks, Defence, Army, Navy, and more.",
    image: News2,
    category: "Jobs",
  },
  {
    id: 4,
    title:
      "Baahubali vanishes from OTT: SS Rajamouli pauses his current film for THIS reason",
    summary:
      "Prabhas and Anushka Shetty, the leads in SS Rajamouli’s magnum opus Baahubali, are all set to reunite after 8 years! Fans are thrilled to see this iconic duo make a comeback in Rajamouli’s next ambitious project.",
    image: News3,
    category: "Entertainment",
  },
];

const Home = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  const handleReadMore = (news) => {
    setSelectedNews(news);
  };

  return (
    <main className="homepage">
      {/* Hero Section */}
      <section className="hero-section text-center text-white py-5 px-3 container my-4">
        <h2 className="fw-bold display-6">Welcome to BTV MEDIA NEWS</h2>
        <p className="lead mt-3">
          Stay informed with the latest updates in Tech, Sports, Jobs, and
          Entertainment
        </p>
        <a href="#featured" className="btn btn-warning btn-lg mt-4 rounded-pill">
          Explore Featured News
        </a>
      </section>

      {/* Featured News */}
      <section id="featured" className="featured-news container my-5">
        <h3 className="mb-4 text-center fw-bold text-primary">
          Featured News Highlights
        </h3>
        <div className="row g-4">
          {featuredNews.map((news) => (
            <div key={news.id} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 shadow-lg border-0 rounded-4 overflow-hidden">
                <img
                  src={news.image}
                  className="card-img-top"
                  alt={news.title}
                />
                <div className="card-body d-flex flex-column">
                  <span className="badge bg-primary text-uppercase mb-2 align-self-start">
                    {news.category}
                  </span>
                  <h5 className="card-title fw-bold">{news.title}</h5>
                  <p className="card-text text-secondary flex-grow-1">
                    {news.summary.substring(0, 120)}...
                  </p>
                  <button
                    onClick={() => handleReadMore(news)}
                    className="btn btn-outline-primary mt-auto rounded-pill"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* YouTube Channel Section */}
      <section className="youtube-section py-5 text-center text-white">
        <div className="container">
          <h3 className="fw-bold mb-3">
            Watch Latest News on Our YouTube Channel
          </h3>
          <p className="mb-4">
            Stay updated with video news, exclusive interviews, and trending
            reports.
          </p>
          <a
            href="https://youtube.com/@btvmedia55?si=kyBDv_QTqiFoRbzV" 
            target="_blank"
            rel="noopener noreferrer" 
            className="btn btn-danger btn-lg rounded-pill px-4"
          >
            <i className="bi bi-youtube me-2"></i> Visit Our Btv News YouTube Channel
          </a>
        </div>
      </section>

      {/* Modal for Read More */}
      {selectedNews && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content rounded-4 shadow-lg border-0">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold">{selectedNews.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedNews(null)}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="img-fluid rounded mb-3"
                />
                <p>{selectedNews.summary}</p>
              </div>
              <div className="modal-footer border-0">
                <button
                  className="btn btn-secondary rounded-pill"
                  onClick={() => setSelectedNews(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style>{`
        .homepage {
          padding-top: 1rem;
          min-height: 100vh;
        }

        .hero-section {
          background: linear-gradient(135deg, rgba(0, 51, 102, 0.85), rgba(0, 85, 165, 0.85)), url(${News1});
          background-size: cover;
          background-position: center;
          border-radius: 16px;
          backdrop-filter: blur(5px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .card-img-top {
          height: 200px;
          object-fit: cover;
        }

        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: none;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .btn-outline-primary:hover {
          background-color: #0055a5;
          color: white;
          border-color: #0055a5;
        }

        .youtube-section {
          background: radial-gradient(circle at center, #ff0000, #990000);
        }

        .youtube-section i {
          font-size: 1.4rem;
          vertical-align: middle;
        }

        .badge.bg-primary {
          background-color: #0055a5 !important;
        }

        @media (max-width: 767px) {
          .card-img-top {
            height: 150px;
          }

          .hero-section {
            margin-top: 0.5rem;
            padding: 2.5rem 1rem;
          }

          .youtube-section h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </main>
  );
};

export default Home;
