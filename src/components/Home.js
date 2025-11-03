import React, { useEffect, useState } from "react";
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
      "THE CONGRESS may endorse RJD leader Tejashwi Yadav as the chief minister face of the Mahagathbandhan as the alliance tries to smoothen the wrinkles and get off the ground...",
    fullContent:
      "The Congress party is reportedly considering backing RJD leader Tejashwi Yadav as the chief minister face of the Mahagathbandhan in Bihar. This move is being seen as an attempt to bring unity among the alliance partners and rebuild the coalition’s strategy ahead of the upcoming elections...",
    image: News,
    category: "News",
  },
  {
    id: 2,
    title:
      "Ind vs Aus LIVE Score, 2nd ODI Match: Rohit Sharma Sends Big Message With Fifty",
    summary:
      "Australia defeat India by 2 wickets in the second ODI encounter to take an unassailable 2-0 lead in the three-match series...",
    fullContent:
      "In a thrilling match, India fought hard but fell short as Australia clinched victory by 2 wickets. Rohit Sharma’s fifty gave India hope, but Australia’s lower order held their nerve to secure the series win. The final match now becomes a matter of pride for Team India...",
    image: News1,
    category: "Sports",
  },
  {
    id: 3,
    title:
      "Upcoming Government Jobs 2025 LIVE: Employment News Dec (14-20) 2025",
    summary:
      "If you aspire for a Government Job, you will get all the latest Live Updates for notifications in this article...",
    fullContent:
      "Aspirants preparing for government jobs can find updates on the latest vacancies announced by various departments this week. Stay tuned for details about eligibility, important dates, and application procedures for top opportunities in 2025...",
    image: News2,
    category: "Jobs",
  },
  {
    id: 4,
    title:
      "Baahubali vanishes from OTT: SS Rajamouli pauses his current film for THIS reason",
    summary:
      "Prabhas and Anushka Shetty, the leads in SS Rajamouli’s magnum opus Baahubali, are all set to reunite after 8 years!",
    fullContent:
      "Fans are thrilled as SS Rajamouli is planning to reunite Baahubali stars Prabhas and Anushka Shetty in his upcoming film. The director has paused his current project to fine-tune the script and create a grand spectacle for audiences worldwide...",
    image: News3,
    category: "Entertainment",
  },
];

// ✅ Your actual YouTube video links
const youtubeVideos = [
  { id: "8dPKpbG8L5I", title: "Breaking News Update" },
  { id: "ELhTvYxDRX8", title: "Trending News" },
  { id: "uZg0U4fMqOM", title: "Weather Highlights" },
  { id: "JE-J-1-pUMQ", title: "Entertainment Buzz" },
  { id: "UgoCCt7Cdyc", title: "Political Headlines Today" },
  { id: "-Eqf-b9MMjg", title: "Exclusive Interview" },
];

const Home = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleReadMore = (news) => setSelectedNews(news);
  const handleCloseModal = () => setSelectedNews(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="homepage">
      {/* 🌟 Hero Section */}
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

      {/* 📰 Featured News Section */}
      <section id="featured" className="featured-news container my-5">
        <h3 className="mb-4 text-center fw-bold text-primary">
          Featured News Highlights
        </h3>
        <div className="row g-4">
          {featuredNews.map((news) => (
            <div key={news.id} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden news-card">
                <img src={news.image} className="card-img-top" alt={news.title} />
                <div className="card-body d-flex flex-column">
                  <span className="badge bg-primary text-uppercase mb-2 align-self-start">
                    {news.category}
                  </span>
                  <h5 className="card-title fw-bold text-dark">{news.title}</h5>
                  <p className="card-text text-dark flex-grow-1">{news.summary}</p>
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

      {/* 🎬 YouTube Section */}
      <section className="youtube-videos-section py-5 bg-light">
        <div className="container text-center">
          <h3 className="fw-bold text-primary mb-4">
            Watch Our Latest YouTube Videos
          </h3>
          <div className="row g-4">
            {youtubeVideos.map((video) => (
              <div key={video.id} className="col-12 col-md-6 col-lg-4">
                <div className="card video-card shadow-sm border-0 h-100">
                  <div className="video-thumb position-relative">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="img-fluid rounded-top"
                    />
                    <button
                      className="btn btn-danger position-absolute top-50 start-50 translate-middle rounded-circle"
                      onClick={() => setSelectedVideo(video.id)}
                    >
                      <i className="bi bi-play-fill fs-3"></i>
                    </button>
                  </div>
                  <div className="card-body">
                    <h6 className="fw-bold text-dark">{video.title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            href="https://youtube.com/@btvmedia55?si=kyBDv_QTqiFoRbzV"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-danger btn-lg mt-4 rounded-pill px-4"
          >
            <i className="bi bi-youtube me-2"></i> Visit Our YouTube Channel
          </a>
        </div>
      </section>

      {/* 📰 News Modal */}
      {selectedNews && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content border-0 rounded-4 shadow-lg">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold text-primary">
                  {selectedNews.title}
                </h5>
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
                  <span className="badge bg-primary">{selectedNews.category}</span>
                </p>
                <p className="text-dark text-justify">{selectedNews.fullContent}</p>
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

      {/* 🎥 Video Modal */}
      {selectedVideo && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content border-0 rounded-4">
              <div className="modal-header border-0">
                <h5 className="modal-title text-dark">Now Playing</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedVideo(null)}
                ></button>
              </div>
              <div className="modal-body text-center">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo}`}
                    title="YouTube video"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🎨 Styles */}
      <style>{`
        .hero-section {
          background: linear-gradient(135deg, rgba(0, 51, 102, 0.85), rgba(0, 85, 165, 0.85)), url(${News1});
          background-size: cover;
          background-position: center;
          border-radius: 16px;
        }

        .news-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 16px;
          overflow: hidden;
          height: 380px;
        }

        .news-card img {
          height: 150px;
          object-fit: cover;
        }

        .news-card .card-body {
          padding: 0.9rem 1rem;
        }

        .news-card h5 {
          font-size: 1rem;
          line-height: 1.4;
        }

        .news-card p {
          font-size: 0.9rem;
          color: #333;
        }

        .news-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
        }

        .video-thumb img {
          height: 200px;
          width: 100%;
          object-fit: cover;
        }

        .video-card {
          border-radius: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .video-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          .news-card {
            height: auto;
          }
          .news-card img {
            height: 180px;
          }
        }
      `}</style>
    </main>
  );
};

export default Home;
