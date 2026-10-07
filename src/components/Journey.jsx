import React from "react";

import {
  CupHot,
  Server,
  ShieldCheck,
  CloudArrowUp,
  Diagram3,
} from "react-bootstrap-icons";

const journey = [
  {
    year: "2023",
    title: "CORE JAVA",
    icon: CupHot,
    technologies: ["Java", "OOP", "Collections", "SQL", "Git"],
  },
  {
    year: "2024",
    title: "BACKEND DEVELOPMENT",
    icon: Server,
    technologies: [
      "Spring",
      "Spring Boot",
      "REST API",
      "JPA / Hibernate",
      "MySQL",
    ],
  },
  {
    year: "2025",
    title: "SECURITY & MICROSERVICES",
    icon: ShieldCheck,
    technologies: [
      "Spring Security",
      "Microservices",
      "API Gateway",
      "Apache Kafka",
      "SQL Server",
    ],
  },
  {
    year: "2026",
    title: "FULL STACK & DEVOPS",
    icon: CloudArrowUp,
    technologies: [
      "React.js",
      "Docker",
      "Jenkins",
      "CI/CD",
      "Kubernetes",
      "AWS",
    ],
  },
  {
    year: "NEXT",
    title: "SYSTEM DESIGN",
    icon: Diagram3,
    technologies: [
      "System Design",
      "Distributed Systems",
      "Scalability",
      "Caching",
    ],
  },
];

function Journey() {
  return (
    <section
      id="journey"
      className="py-5"
      style={{
        background: "#0f172a",
        overflow: "hidden",
      }}
    >
      <div className="container">

        {/* =========================
            HEADING
        ========================== */}

        <div className="text-center mb-5">

          <div
            className="text-uppercase fw-bold small mb-2"
            style={{
              color: "#67c7e8",
              letterSpacing: "3px",
            }}
          >
            My Technical Journey
          </div>

          <h2 className="display-5 fw-bold text-white mb-2">
            Java Full Stack Developer
          </h2>

          <p className="text-secondary mb-0">
            From Core Java to System Design
          </p>

        </div>


        {/* =========================
            TIMELINE
        ========================== */}

        <div className="position-relative">

          {/* Timeline Line */}

          <div
            className="position-absolute d-none d-lg-block"
            style={{
              top: "190px",
              left: "7%",
              right: "7%",
              height: "3px",
              background: "#367f99",
              zIndex: 0,
            }}
          />


          <div className="row g-4 position-relative">

            {journey.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.year}
                  className="col-12 col-md-6 col-lg"
                >

                  {/* =========================
                      CARD
                  ========================== */}

                  <div
                    className="card h-100 text-center border-0"
                    style={{
                      background: "#172235",
                      borderRadius: "16px",
                      position: "relative",
                      zIndex: 1,
                      transition:
                        "transform .3s ease, box-shadow .3s ease, border .3s ease",
                      border: "1px solid transparent",
                      cursor: "pointer",
                    }}

                    onMouseEnter={(e) => {

                      e.currentTarget.style.transform =
                        "translateY(-10px)";

                      e.currentTarget.style.boxShadow =
                        "0 15px 35px rgba(103, 199, 232, 0.20)";

                      e.currentTarget.style.border =
                        "1px solid #67c7e8";
                    }}

                    onMouseLeave={(e) => {

                      e.currentTarget.style.transform =
                        "translateY(0)";

                      e.currentTarget.style.boxShadow =
                        "none";

                      e.currentTarget.style.border =
                        "1px solid transparent";
                    }}
                  >

                    <div className="card-body p-4">


                      {/* =========================
                          ICON
                      ========================== */}

                      <div
                        className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                        style={{
                          width: "60px",
                          height: "60px",
                          background: "#1e3a50",
                          color: "#67c7e8",
                          transition: "all .3s ease",
                        }}
                      >

                        <Icon
                          size={27}
                          strokeWidth={1.5}
                        />

                      </div>


                      {/* =========================
                          YEAR
                      ========================== */}

                      <h3
                        className="fw-bold mb-2"
                        style={{
                          color: "#67c7e8",
                          fontSize: "28px",
                        }}
                      >
                        {item.year}
                      </h3>


                      {/* =========================
                          TITLE
                      ========================== */}

                      <h6
                        className="text-white fw-bold mb-3"
                        style={{
                          minHeight: "40px",
                        }}
                      >
                        {item.title}
                      </h6>


                      {/* =========================
                          TECHNOLOGIES
                      ========================== */}

                      <div
                        className="d-flex flex-wrap justify-content-center gap-2"
                        style={{
                          minHeight: "75px",
                        }}
                      >

                        {item.technologies.map((tech) => (

                          <span
                            key={tech}
                            className="badge rounded-pill fw-normal px-3 py-2"
                            style={{
                              background: "#0f172a",
                              color: "#cbd5e1",
                              border: "1px solid #334155",
                              transition: "all .2s ease",
                            }}

                            onMouseEnter={(e) => {
                              e.currentTarget.style.color =
                                "#67c7e8";

                              e.currentTarget.style.borderColor =
                                "#67c7e8";

                              e.currentTarget.style.transform =
                                "translateY(-2px)";
                            }}

                            onMouseLeave={(e) => {
                              e.currentTarget.style.color =
                                "#cbd5e1";

                              e.currentTarget.style.borderColor =
                                "#334155";

                              e.currentTarget.style.transform =
                                "translateY(0)";
                            }}
                          >
                            {tech}
                          </span>

                        ))}

                      </div>


                      {/* =========================
                          TIMELINE DOT
                      ========================== */}

                      <div
                        className="rounded-circle mx-auto mt-4"
                        style={{
                          width: "16px",
                          height: "16px",
                          background: "#67c7e8",
                          border: "3px solid #0f172a",
                          position: "relative",
                          zIndex: 2,
                        }}
                      />

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Journey;