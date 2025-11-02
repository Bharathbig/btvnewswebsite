import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Jobs = () => {
  const [jobListings] = useState([
    {
      id: 1,
      title: "Frontend Developer (React.js)",
      company: "TechNova Solutions",
      location: "Bangalore, India",
      date: "October 30, 2025",
      image:
        "https://www.spec-india.com/wp-content/uploads/2021/04/ReactJS-Developer.png",
      description:
        "We're looking for a skilled React.js developer to join our growing engineering team and build engaging web experiences. You'll collaborate with designers and backend developers to create scalable, performant applications using modern front-end technologies.",
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "InsightEdge Analytics",
      location: "Mumbai, India",
      date: "October 29, 2025",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      description:
        "Join a fast-paced analytics startup and help uncover actionable business insights through data visualization and modeling. Strong Excel, SQL, and Power BI skills are required.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "PixelWorks Studio",
      location: "Remote",
      date: "October 28, 2025",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1200&q=80",
      description:
        "We're hiring creative designers to craft delightful user experiences for mobile and web products. Candidates should be skilled in Figma or Adobe XD and have a strong portfolio of design work.",
    },
    {
      id: 4,
      title: "Backend Engineer (Node.js)",
      company: "CloudSphere Technologies",
      location: "Hyderabad, India",
      date: "October 27, 2025",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      description:
        "Develop scalable APIs and cloud services using Node.js, Express, and MongoDB. Experience with AWS is a plus. You'll work closely with frontend teams to ensure seamless integration of APIs.",
    },
  ]);

  const [selectedJob, setSelectedJob] = useState(null);

  const handleReadMore = (job) => setSelectedJob(job);
  const handleCloseModal = () => setSelectedJob(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="jobs-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase section-title">Job Openings</h2>
          <p className="text-muted mb-0">
            Explore the latest tech and media jobs available across industries.
          </p>
        </div>

        <div className="row g-4">
          {jobListings.map((job) => (
            <div className="col-md-6 col-lg-4" key={job.id}>
              <div className="card job-card h-100 shadow-sm border-0">
                <img src={job.image} className="card-img-top" alt={job.title} />
                <div className="card-body d-flex flex-column">
                  <span className="badge bg-success mb-2">{job.company}</span>
                  <h5 className="card-title fw-bold">{job.title}</h5>
                  <p className="card-text text-muted small mb-1">
                    <i className="bi bi-geo-alt-fill me-1"></i>
                    {job.location}
                  </p>
                  <p className="card-text text-muted small mb-2">
                    <i className="bi bi-calendar-date me-1"></i>
                    {job.date}
                  </p>
                  <p className="card-text flex-grow-1">
                    {job.description.length > 100
                      ? job.description.slice(0, 100) + "..."
                      : job.description}
                  </p>
                  <button
                    className="btn btn-outline-success mt-auto"
                    onClick={() => handleReadMore(job)}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedJob && (
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
                <h5 className="modal-title fw-bold">{selectedJob.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedJob.image}
                  alt={selectedJob.title}
                  className="img-fluid rounded mb-3"
                />
                <p className="text-muted small mb-2">
                  <i className="bi bi-calendar-date me-1"></i>
                  {selectedJob.date} •{" "}
                  <span className="badge bg-success">{selectedJob.company}</span>{" "}
                  • <i className="bi bi-geo-alt-fill me-1"></i>
                  {selectedJob.location}
                </p>
                <p>{selectedJob.description}</p>
              </div>
              <div className="modal-footer border-0">
                <button
                  className="btn btn-success rounded-pill"
                  onClick={() =>
                    alert("Application feature coming soon!")
                  }
                >
                  Apply Now
                </button>
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
          color: #155724;
          letter-spacing: 1px;
        }

        .job-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
          overflow: hidden;
        }

        .job-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .job-card img {
          height: 220px;
          object-fit: cover;
        }

        .card-title {
          color: #155724;
        }

        .btn-outline-success {
          color: #155724;
          border-color: #155724;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .btn-outline-success:hover {
          background-color: #155724;
          color: #fff;
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
};

export default Jobs;