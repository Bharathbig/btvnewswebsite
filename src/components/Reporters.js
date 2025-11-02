import React, { useEffect, useState } from "react";
import AP_Editor from "../Images/Bharath1.jpeg";
import TG_Editor from "../Images/Bharath2.jpg";

const Reporters = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const editors = [
    {
      id: "25001",
      name: "K. Bharath",
      state: "Andhra Pradesh State Editor",
      image: AP_Editor,
      contact: "+91 9642520584",
      role: "State Editor",
      description:
        "As the Andhra Pradesh State Editor, Bharath leads the editorial team with a focus on accurate and timely regional coverage. His deep understanding of local politics and culture helps shape the publication's voice in the state.",
    },
    {
      id: "25002",
      name: "T. Basaweshwar",
      state: "Telangana State Editor",
      image: TG_Editor,
      contact: "+91 87654 32109",
      role: "State Editor",
      description:
        "Basaweshwar oversees the Telangana editorial division, ensuring journalistic integrity and balanced reporting. His commitment to ground-level news has earned him respect across the media industry.",
    },
  ];

  const reporters = [
    { id: "25003", name: "K. Satyam", area: "Srikakulam District", contact: "+91 9440485370" },
    { id: "25004", name: "B. Laxman Rao", area: "Visakhapatnam District", contact: "+91 8519822213" },
    { id: "25005", name: "P. Vasu", area: "Burja Mandalam Srikakulam", contact: "+91 9676971477" },
    { id: "25006", name: "P. Jagadeesh", area: "Gajuwaka Visakhapatnam", contact: "+91 8500231958" },
    { id: "25007", name: "H. Lachumayya", area: "Vizianagaram District", contact: "+91 7382699451" },
    { id: "25008", name: "P. Sunil", area: "Anakapalli District", contact: "+91 90032 10708" },
    { id: "25009", name: "H. Harsha", area: "Vijayawada District", contact: "+91 8523894251" },
  ];

  const handleCardClick = (person) => setSelectedPerson(person);
  const handleCloseModal = () => setSelectedPerson(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="reporters-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase section-title">
            Our Dedicated Reporters
          </h2>
          <p className="text-muted">
            Meet the hardworking journalists bringing you trusted and timely
            news coverage across Andhra Pradesh and Telangana.
          </p>
        </div>

        {/* Editors Section */}
        <div className="row justify-content-center mb-5">
          {editors.map((editor) => (
            <div
              className="col-md-5 col-lg-4 mb-4"
              key={editor.id}
              onClick={() => handleCardClick(editor)}
              style={{ cursor: "pointer" }}
            >
              <div className="card editor-card shadow-sm border-0 text-center h-100 overflow-hidden">
                <div className="image-wrapper">
                  <img src={editor.image} alt={editor.name} className="editor-img" />
                </div>
                <div className="card-body">
                  <h5 className="fw-bold text-primary">{editor.name}</h5>
                  <p className="text-muted mb-1">{editor.state}</p>
                  <p className="small mb-1">
                    <strong>ID No:</strong> {editor.id}
                  </p>
                  <p className="small text-secondary mb-0">
                    <i className="bi bi-telephone me-1"></i>
                    {editor.contact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reporters Section */}
        <div className="row g-4">
          {reporters.map((rep) => (
            <div
              className="col-md-6 col-lg-4"
              key={rep.id}
              onClick={() => handleCardClick(rep)}
              style={{ cursor: "pointer" }}
            >
              <div className="card reporter-card h-100 shadow-sm border-0 text-center p-4">
                <div className="card-body">
                  <i className="bi bi-person-circle display-5 text-primary mb-3"></i>
                  <h6 className="fw-bold">{rep.name}</h6>
                  <p className="text-muted mb-1 small">{rep.area}</p>
                  <p className="small text-secondary mb-1">ID No: {rep.id}</p>
                  <p className="small text-primary mb-0">
                    <i className="bi bi-telephone me-1"></i>
                    {rep.contact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedPerson && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 rounded-4 shadow-lg overflow-hidden">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fw-bold text-primary">
                  {selectedPerson.name}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body text-center">
                {selectedPerson.image && (
                  <img
                    src={selectedPerson.image}
                    alt={selectedPerson.name}
                    className="img-fluid rounded mb-3"
                    style={{ maxHeight: "250px", objectFit: "contain" }}
                  />
                )}
                <p className="text-muted mb-1">
                  {selectedPerson.state || selectedPerson.area}
                </p>
                <p className="small text-secondary">
                  ID No: {selectedPerson.id}
                </p>
                <p className="small text-primary mb-3">
                  <i className="bi bi-telephone me-1"></i>
                  {selectedPerson.contact}
                </p>
                {selectedPerson.description && (
                  <p className="text-muted">{selectedPerson.description}</p>
                )}
              </div>
              <div className="modal-footer border-0">
                <button
                  className="btn btn-primary text-white fw-semibold rounded-pill"
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

        .editor-card,
        .reporter-card {
          border-radius: 15px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .editor-card:hover,
        .reporter-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
        }

        .image-wrapper {
          width: 100%;
          height: 250px;
          overflow: hidden;
          border-bottom: 3px solid #004080;
        }

        .editor-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.4s ease;
        }

        .editor-card:hover .editor-img {
          transform: scale(1.05);
        }

        .reporter-card {
          background: linear-gradient(to bottom right, #f8f9fa, #e9f3ff);
        }

        .bi-person-circle,
        .bi-telephone {
          color: #004080;
        }

        .btn-primary {
          background-color: #004080;
          border: none;
        }

        .btn-primary:hover {
          background-color: #002a5c;
        }

        @media (max-width: 767px) {
          .image-wrapper {
            height: 200px;
          }
        }
      `}</style>

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
      />
    </section>
  );
};

export default Reporters;