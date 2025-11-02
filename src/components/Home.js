import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import News from "../Images/Newsimg1.jpg";
import News1 from "../Images/Newsimg2.jpg";
import News2 from "../Images/Jobimg1.jpg";
import News3 from "../Images/Ent1.jpg";

const featuredNews = [
  {
    id: 1,
    title: 'Congress may agree to Tejashwi as CM face to get Bihar alliance back on track',
    summary: 'THE CONGRESS may endorse RJD leader Tejashwi Yadav as the chief minister face of the Mahagathbandhan as the alliance tries to smoothen the wrinkles and get off the ground. Sources said that talks held Wednesday had helped narrow the differences, and friendly fights might now come down to a handful of seats.Ahead of the final deadline for withdrawal of nominations on Thursday, the Mahagathbandhan has not yet announced a seat-sharing deal. The alliance is facing at least three friendly fights in the first phase of polling on November 6, for which withdrawal of nominations has already closed.',
    image: News,  
    category: 'News',
  },
  {
    id: 2,
    title: "Ind vs Aus LIVE Score, 2nd ODI Match: Rohit Sharma Sends Big Message With Fifty, Leads India's Fightback",
    summary: 'Australia defeat India by 2 wickets in the second ODI encounter to take an unassailable 2-0 lead in the three-match series. Chasing a target of 265, Matthew Short top-scored with 74 while Cooper Connolly remained unbeaten on 61 as Australia clinched the game with more than 3 overs to spare. Arshdeep Singh, Harshit Rana and Washington Sundar took two wickets each but it was not enough for the visitors. Earlier, India posted a competitive total of 264/9. Rohit Sharma (73 off 97) and Shreyas Iyer (61 off 77) laid the foundation with a key partnership, while Axar Patel (44) played a fiery knock in the middle overs.',
    image: News1, 
    category: 'Sports',
  },
  {
    id: 3,
    title: 'Upcoming Government Jobs 2025 LIVE: Employment News Dec (14-20)2025, Admit Card, Exam Date, Notifications and much more',
    summary: 'If you aspire for a Government Jobs then you will  get all the latest Live Updates for the various Government jobs notifications in this article. Notifications including Govt Jobs based on Education, Qualification wise Govt Jobs like 8th Passed Govt Jobs, 10th Passed Govt Jobs, 12th Pass Govt Jobs, ITI Jobs, Diploma Jobs, Degree are shared in the article. Candidates can check the latest Government Jobs Updates. This article features the Government jobs such as State and Central Government Jobs, PSU Jobs, Railway, SSC, Banks, Defence Jobs, Army, Navy, Air Force etc.',
    image: News2,
    category: 'Jobs',
  },
  {
    id: 4,
    title: 'Baahubali vanishes from OTT: SS Rajamouli pauses his current film for THIS reason',
    summary: 'Prabhas and Anushka Shetty who played the leads in SS Rajamouli magnum opus Baahubali are all set to reunite on screen after 8 years. Yes you read that right! The beloved duo of Indian cinema is back and fans cannot keep calm about this exciting update. Their sparkling chemistry in Baahubali The Beginning and its sequel Baahubali The Conclusion won immense love and praise from audiences.',
    image: News3,
    category: 'Entertainment',
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
        <h2>Welcome to BTV MEDIA NEWS</h2>
        <p className="lead mt-3">Stay informed with the latest updates in Tech, Sports, Jobs, and Entertainment</p>
        <a href="#featured" className="btn btn-warning btn-lg mt-4">Explore Featured News</a>
      </section>

      {/* Featured News Grid */}
      <section id="featured" className="featured-news container my-5">
        <h3 className="mb-4 text-center">Featured News</h3>
        <div className="row g-4">
          {featuredNews.map((news) => (
            <div key={news.id} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 shadow-lg border-0 rounded-4 overflow-hidden">
                <img src={news.image} className="card-img-top" alt={news.title} />
                <div className="card-body d-flex flex-column">
                  <span className="badge bg-primary text-uppercase mb-2 align-self-start">{news.category}</span>
                  <h5 className="card-title fw-bold">{news.title}</h5>
                  <p className="card-text text-secondary flex-grow-1">{news.summary.substring(0, 120)}...</p>
                  <button onClick={() => handleReadMore(news)} className="btn btn-outline-primary mt-auto rounded-pill">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Read More */}
      {selectedNews && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content rounded-4 shadow-lg border-0">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold">{selectedNews.title}</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedNews(null)}></button>
              </div>
              <div className="modal-body">
                <img src={selectedNews.image} alt={selectedNews.title} className="img-fluid rounded mb-3" />
                <p>{selectedNews.summary}</p>
              </div>
              <div className="modal-footer border-0">
                <button className="btn btn-secondary rounded-pill" onClick={() => setSelectedNews(null)}>Close</button>
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
          background: linear-gradient(135deg, #003366, #0055a5);
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          margin-top: 1rem;
        }

        .card-img-top {
          height: 200px;
          object-fit: cover;
        }

        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .btn-outline-primary:hover {
          background-color: #0055a5;
          color: white;
          border-color: #0055a5;
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
          }
        }
      `}</style>
    </main>
  );
};

export default Home;