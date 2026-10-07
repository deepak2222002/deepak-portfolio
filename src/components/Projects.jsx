import { useState } from "react";
import { motion } from "framer-motion";
import ProjectDetails from "./ProjectDetails";
import projectsData from "../data/projectsData";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectIcons = [
    "bi bi-cart-check-fill",
    "bi bi-diagram-3-fill",
    "bi bi-code-slash",
  ];

  return (
    <section
      id="projects"
      className="py-5 text-light"
      style={{ background: "transparent" }}
    >
      <div className="container py-5">

        {/* =========================
            SECTION HEADING
        ========================== */}

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="fw-bold text-uppercase small mb-2"
            style={{
              color: "#67c7e8",
              letterSpacing: "3px",
            }}
          >
            WHAT I BUILT
          </p>

          <h2 className="display-5 fw-bold mb-3 text-white">
            Featured Projects
          </h2>

          <p className="text-secondary mx-auto col-lg-7">
            A collection of applications and systems built using
            Java, Spring Boot, React, Microservices and modern
            development technologies.
          </p>
        </motion.div>


        {/* =========================
            PROJECT CARDS
        ========================== */}

        <div className="row g-4">

          {projectsData.map((project, index) => {

            const icon =
              projectIcons[index % projectIcons.length];

            return (
              <div
                className="col-md-6 col-xl-4"
                key={project.title}
              >

                <motion.div
                  className="card h-100 text-light shadow-lg"
                  style={{
                    background: "#111c2e",
                    border: "1px solid #26364f",
                    borderRadius: "16px",
                    overflow: "hidden",
                  }}

                  initial={{
                    opacity: 0,
                    y: 50,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}

                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}

                  whileHover={{
                    y: -8,
                    boxShadow:
                      "0 15px 35px rgba(103, 199, 232, 0.12)",
                    borderColor: "#67c7e8",
                  }}
                >

                  {/* =========================
                      HEADER
                  ========================== */}

                  <div
                    className="p-4 d-flex justify-content-between align-items-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #17263a, #111c2e)",
                      borderBottom: "1px solid #26364f",
                    }}
                  >

                    {/* Icon */}

                    <div
                      className="rounded-3 p-3 d-flex align-items-center justify-content-center"
                      style={{
                        background: "#0f172a",
                        color: "#67c7e8",
                        width: "58px",
                        height: "58px",
                      }}
                    >
                      <i className={`${icon} fs-3`}></i>
                    </div>


                    {/* Number */}

                    <span
                      className="fw-bold"
                      style={{
                        color: "#64748b",
                        fontSize: "24px",
                      }}
                    >
                      {project.number ||
                        String(index + 1).padStart(2, "0")}
                    </span>

                  </div>


                  {/* =========================
                      BODY
                  ========================== */}

                  <div className="card-body p-4">

                    {/* Project Label */}

                    <span
                      className="badge rounded-pill mb-3 px-3 py-2"
                      style={{
                        background: "#1e3a50",
                        color: "#67c7e8",
                      }}
                    >
                      PROJECT
                    </span>


                    {/* Title */}

                    <h3 className="card-title fw-bold fs-4 text-white">
                      {project.title}
                    </h3>


                    {/* Description */}

                    <p className="card-text text-secondary mb-4">
                      {project.description}
                    </p>


                    {/* Technologies */}

                    <div className="d-flex flex-wrap gap-2">

                      {project.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="badge rounded-pill fw-normal px-3 py-2"
                            style={{
                              background: "#0f172a",
                              color: "#cbd5e1",
                              border:
                                "1px solid #334155",
                            }}
                          >
                            {technology}
                          </span>
                        )
                      )}

                    </div>

                  </div>


                  {/* =========================
                      FOOTER
                  ========================== */}

                  <div
                    className="p-4"
                    style={{
                      borderTop: "1px solid #26364f",
                    }}
                  >

                    <div className="d-flex gap-2">

                      {/* GitHub */}

                      <a
                        href={project.github || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn btn-outline-light flex-fill ${
                          !project.github
                            ? "disabled"
                            : ""
                        }`}
                      >
                        <i className="bi bi-github me-2"></i>
                        GitHub
                      </a>


                      {/* Details */}

                      <button
                        type="button"
                        className="btn flex-fill"
                        style={{
                          background: "#67c7e8",
                          color: "#0f172a",
                          fontWeight: "600",
                        }}
                        onClick={() =>
                          setSelectedProject(project)
                        }
                      >
                        Details
                        <i className="bi bi-arrow-up-right ms-2"></i>
                      </button>

                    </div>

                  </div>

                </motion.div>

              </div>
            );
          })}

        </div>


        {/* =========================
            PROJECT DETAILS
        ========================== */}

        {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            onClose={() =>
              setSelectedProject(null)
            }
          />
        )}

      </div>
    </section>
  );
}

export default Projects;