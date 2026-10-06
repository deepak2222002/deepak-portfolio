import { motion } from "framer-motion";

function Experience() {
  const experience = {
    period: "Apr 2023 – Oct 2026",
    role: "Java Full Stack Developer",
    company: "Begapt Tech Solutions Pvt. Ltd.",
    location: "India",

    description:
      "Worked on enterprise applications for manufacturing and business requirements, covering development, API integration, database, deployment and production support.",

    responsibilities: [
      "Handled development activities from requirement understanding to development, deployment and production support.",
      "Developed backend and frontend features based on project requirements and application needs.",
      "Understood customer requirements and contributed to solution planning and application design.",
      "Managed GitHub branches, API coordination and integration between frontend and backend teams.",
      "Worked with developers throughout development, testing, debugging, deployment and production support.",
    ],

    technicalContributions: [
      "Developed Spring Boot microservices and REST APIs for manufacturing and business applications.",
      "Implemented Apache Kafka for event-driven communication and asynchronous processing.",
      "Developed React.js modules and integrated frontend applications with backend APIs.",
      "Worked with MySQL, Spring Security, JWT, Docker, Kubernetes and Jenkins for development and deployment.",
    ],

    technologies: [
      "Java",
      "Spring Boot",
      "Microservices",
      "REST API",
      "Apache Kafka",
      "React.js",
      "MySQL",
      "Spring Security",
      "JWT",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub",
      "Swagger",
    ],
  };

  return (
    <section
      id="experience"
      className="py-5"
      style={{
        backgroundColor: "#0f172a",
      }}
    >
      <div className="container px-3">

        {/* ================= SECTION HEADER ================= */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="fw-semibold small text-uppercase mb-1"
            style={{ color: "#67c7e8" }}
          >
            Professional Experience
          </p>

          <h2 className="fw-bold text-light mb-2">
            My Experience
          </h2>

          <p className="text-secondary small mb-0">
            Java Full Stack development across enterprise applications.
          </p>
        </motion.div>


        {/* ================= EXPERIENCE CARD ================= */}
        <motion.div
          className="card border-0 shadow-lg w-100"
          style={{
            backgroundColor: "#151c2c",
            borderRadius: "12px",
          }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div className="card-body p-3 p-md-4">


            {/* ================= HEADER ================= */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">

              {/* Company / Role */}
              <div className="d-flex align-items-center gap-3">

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "rgba(103, 199, 232, 0.08)",
                    border: "1px solid rgba(103, 199, 232, 0.30)",
                  }}
                >
                  <i
                    className="bi bi-code-slash fs-5"
                    style={{ color: "#67c7e8" }}
                  ></i>
                </div>

                <div>
                  <h4 className="fw-bold text-light mb-1">
                    {experience.role}
                  </h4>

                  <div className="small text-secondary">
                    {experience.company}{" "}
                    <span className="mx-1">•</span>{" "}
                    {experience.location}
                  </div>
                </div>

              </div>


              {/* Period */}
              <span
                className="badge fw-normal px-3 py-2 align-self-start align-self-md-center"
                style={{
                  color: "#8bd9f3",
                  backgroundColor: "rgba(103, 199, 232, 0.07)",
                  border: "1px solid rgba(103, 199, 232, 0.28)",
                }}
              >
                <i className="bi bi-calendar3 me-2"></i>
                {experience.period}
              </span>

            </div>


            {/* Divider */}
            <hr
              className="my-3"
              style={{
                borderColor: "rgba(255,255,255,0.10)",
              }}
            />


            {/* ================= DESCRIPTION ================= */}
            <p
              className="small lh-lg mb-4"
              style={{ color: "#94a3b8" }}
            >
              {experience.description}
            </p>


            {/* ================= RESPONSIBILITIES ================= */}
            <div className="mb-4">

              <div className="d-flex align-items-center gap-2 mb-3">

                <i
                  className="bi bi-briefcase"
                  style={{ color: "#67c7e8" }}
                ></i>

                <h6 className="fw-bold text-light mb-0">
                  Roles & Responsibilities
                </h6>

              </div>


              <div className="row g-2">

                {experience.responsibilities.map((item, index) => (
                  <motion.div
                    key={index}
                    className="col-12 col-lg-6"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.04,
                    }}
                  >
                    <div className="d-flex gap-2">

                      <span
                        className="fw-bold small flex-shrink-0"
                        style={{ color: "#67c7e8" }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="small lh-lg"
                        style={{ color: "#94a3b8" }}
                      >
                        {item}
                      </span>

                    </div>
                  </motion.div>
                ))}

              </div>

            </div>


            {/* ================= TECHNICAL CONTRIBUTIONS ================= */}
            <div className="mb-4">

              <div className="d-flex align-items-center gap-2 mb-3">

                <i
                  className="bi bi-terminal"
                  style={{ color: "#67c7e8" }}
                ></i>

                <h6 className="fw-bold text-light mb-0">
                  Technical Contributions
                </h6>

              </div>


              <div className="row g-2">

                {experience.technicalContributions.map((item, index) => (
                  <motion.div
                    key={index}
                    className="col-12 col-lg-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.05,
                    }}
                  >

                    <div className="d-flex gap-2">

                      <i
                        className="bi bi-check2 flex-shrink-0"
                        style={{ color: "#67c7e8" }}
                      ></i>

                      <span
                        className="small lh-lg"
                        style={{ color: "#94a3b8" }}
                      >
                        {item}
                      </span>

                    </div>

                  </motion.div>
                ))}

              </div>

            </div>


            {/* ================= TECHNOLOGIES ================= */}
            <div>

              <div className="d-flex align-items-center gap-2 mb-2">

                <i
                  className="bi bi-stack"
                  style={{ color: "#67c7e8" }}
                ></i>

                <h6 className="fw-bold text-light mb-0">
                  Technologies
                </h6>

              </div>


              <div className="d-flex flex-wrap gap-2">

                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="badge fw-normal"
                    style={{
                      color: "#aeb9c8",
                      backgroundColor: "#111827",
                      border: "1px solid #334155",
                      padding: "6px 9px",
                    }}
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;