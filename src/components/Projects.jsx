import { useState } from "react";
import { motion } from "framer-motion";
import ProjectDetails from "./ProjectDetails";
import projectsData from "../data/projectsData";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const accentColors = [
    {
      border: "border-primary",
      icon: "text-primary",
      bg: "bg-primary-subtle",
      badge: "text-bg-primary",
    },
    {
      border: "border-info",
      icon: "text-info",
      bg: "bg-info-subtle",
      badge: "text-bg-info",
    },
    {
      border: "border-warning",
      icon: "text-warning",
      bg: "bg-warning-subtle",
      badge: "text-bg-warning",
    },
  ];

  const projectIcons = [
    "bi bi-cart-check-fill",
    "bi bi-diagram-3-fill",
    "bi bi-code-slash",
  ];

  return (
    <section id="projects" className="py-5 bg-dark text-light bg-transparent">

      <div className="container py-5 ">

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
          <p className="text-primary fw-bold text-uppercase small mb-2">
            WHAT I BUILT
          </p>

          <h2 className="display-5 fw-bold mb-3">
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
            const color =
              accentColors[index % accentColors.length];

            const icon =
              projectIcons[index % projectIcons.length];

            return (
              <div
                className="col-md-6 col-xl-4"
                key={project.title}
              >

                <motion.div
                  className={`card h-100 bg-black text-light shadow-lg border-2 ${color.border}`}
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
                    y: -10,
                    scale: 1.01,
                  }}
                >

                  {/* =========================
                      COLOUR HEADER
                  ========================== */}

                  <div
                    className={`card-header border-0 ${color.bg} d-flex justify-content-between align-items-center p-4`}
                  >

                    <div
                      className={`rounded-3 p-3 bg-dark ${color.icon}`}
                    >
                      <i className={`${icon} fs-2`}></i>
                    </div>

                    <span
                      className={`badge ${color.badge} fs-6 px-3 py-2`}
                    >
                      {project.number ||
                        String(index + 1).padStart(2, "0")}
                    </span>

                  </div>


                  {/* =========================
                      CARD BODY
                  ========================== */}

                  <div className="card-body p-4">

                    <div className="mb-3">

                      <span className={`badge ${color.badge} mb-3`}>
                        PROJECT
                      </span>

                      <h3 className="card-title fw-bold fs-4">
                        {project.title}
                      </h3>

                    </div>


                    <p className="card-text text-secondary mb-4">
                      {project.description}
                    </p>


                    {/* TECHNOLOGIES */}

                    <div className="d-flex flex-wrap gap-2">

                      {project.technologies.map(
                        (technology) => (

                          <span
                            key={technology}
                            className="badge rounded-pill bg-dark border border-secondary text-light px-3 py-2"
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

                  <div className="card-footer bg-transparent border-secondary p-4">

                    <div className="d-flex gap-2">

                      {/* GITHUB */}

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


                      {/* DETAILS */}

                      <button
                        type="button"
                        className={`btn ${color.badge} flex-fill`}
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