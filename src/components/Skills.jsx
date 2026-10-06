import { motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      number: "01",
      title: "Backend Development",
      icon: "bi bi-server",
      color: "primary",
      description:
        "Building backend services, REST APIs and application business logic.",

      skills: [
        "Java",
        "Spring Boot",
        "Spring MVC",
        "Spring Security",
        "JPA / Hibernate",
        "REST API",
      ],
    },

    {
      number: "02",
      title: "Frontend Development",
      icon: "bi bi-window-stack",
      color: "info",
      description:
        "Building responsive and interactive web interfaces.",

      skills: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
      ],
    },

    {
      number: "03",
      title: "Microservices & Messaging",
      icon: "bi bi-diagram-3-fill",
      color: "warning",
      description:
        "Working with distributed and event-driven application architectures.",

      skills: [
        "Microservices",
        "Apache Kafka",
        "API Gateway",
        "Event-Driven Architecture",
      ],
    },

    {
      number: "04",
      title: "Database & Persistence",
      icon: "bi bi-database-fill",
      color: "success",
      description:
        "Working with relational databases, SQL and persistence frameworks.",

      skills: [
        "MySQL",
        "SQL Server",
        "PostgreSQL",
        "Oracle",
        "SQL",
        "JPA / Hibernate",
      ],
    },

    {
      number: "05",
      title: "DevOps & Cloud",
      icon: "bi bi-cloud-arrow-up-fill",
      color: "danger",
      description:
        "Containerization, CI/CD and application deployment.",

      skills: [
        "Docker",
        "Jenkins",
        "CI/CD",
        "Kubernetes",
        "AWS",
        "Tomcat",
      ],
    },

    {
      number: "06",
      title: "Development Tools",
      icon: "bi bi-tools",
      color: "secondary",
      description:
        "Tools used for development, API testing, documentation and version control.",

      skills: [
        "Git",
        "GitHub",
        "Maven",
        "Swagger / OpenAPI",
        "Postman",
        "Python",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-5 bg-transparent text-white"
    >
      <div className="container py-5">

        {/* =================================
            HEADING
        ================================== */}

        <motion.div
          className="text-center mb-5"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <p className="text-primary text-uppercase fw-bold small mb-2">
            WHAT I WORK WITH
          </p>

          <h2 className="display-5 fw-bold mb-3">
            Technical Skills
          </h2>

          <p className="text-secondary mx-auto col-lg-7">
            Technologies, frameworks and tools I use to build
            backend services, full-stack applications and
            distributed systems.
          </p>
        </motion.div>


        {/* =================================
            SKILL CARDS
        ================================== */}

        <div className="row g-4">

          {skillCategories.map((category, index) => (

            <div
              className="col-md-6 col-xl-4"
              key={category.title}
            >

              <motion.div
                className={`card h-100 bg-black text-white border-${category.color} border-2 shadow-lg`}
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                }}
              >

                {/* =========================
                    CARD HEADER
                ========================== */}

                <div
                  className={`card-header bg-${category.color}-subtle border-0 p-4`}
                >

                  <div className="d-flex justify-content-between align-items-center">

                    {/* ICON */}

                    <div
                      className={`bg-dark text-${category.color} rounded-3 p-3`}
                    >
                      <i
                        className={`${category.icon} fs-2`}
                      ></i>
                    </div>


                    {/* NUMBER */}

                    <span
                      className={`text-${category.color} fw-bold fs-3`}
                    >
                      {category.number}
                    </span>

                  </div>

                </div>


                {/* =========================
                    CARD BODY
                ========================== */}

                <div className="card-body p-4">

                  <h4 className="fw-bold mb-3">
                    {category.title}
                  </h4>


                  <p className="text-secondary mb-4">
                    {category.description}
                  </p>


                  {/* =========================
                      SKILLS
                  ========================== */}

                  <div className="d-flex flex-wrap gap-2">

                    {category.skills.map((skill) => (

                      <motion.span
                        key={skill}
                        className={`badge rounded-pill bg-dark border border-${category.color} text-light px-3 py-2`}
                        whileHover={{
                          scale: 1.06,
                        }}
                      >
                        {skill}
                      </motion.span>

                    ))}

                  </div>

                </div>


                {/* =========================
                    CARD FOOTER
                ========================== */}

                <div className="card-footer bg-transparent border-secondary px-4 pb-4">

                  <span
                    className={`small text-${category.color} fw-semibold`}
                  >
                    {category.skills.length} Technologies
                  </span>

                </div>

              </motion.div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;