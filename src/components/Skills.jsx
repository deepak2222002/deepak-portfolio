import { motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      number: "01",
      title: "Backend Development",
      description:
        "Building APIs, business logic and backend services.",
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
      description:
        "Creating responsive and interactive user interfaces.",
      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
      ],
    },
    {
      number: "03",
      title: "Microservices & Messaging",
      description:
        "Working with distributed and event-driven applications.",
      skills: [
        "Microservices",
        "Apache Kafka",
        "API Gateway",
        "Event-Driven Architecture",
      ],
    },
    {
      number: "04",
      title: "Database",
      description:
        "Working with relational databases and persistence.",
      skills: [
        "MySQL",
        "PostgreSQL",
        "Oracle",
        "SQL",
      ],
    },
    {
      number: "05",
      title: "DevOps & Tools",
      description:
        "Development, version control and deployment tools.",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Jenkins",
        "CI/CD",
        "Maven",
      ],
    },
  ];

  return (
    <section id="skills" className="py-5 bg-transparent text-white">

      {/* Heading */}
      <div className="container py-5">

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-secondary text-uppercase fw-semibold small">
            What I Work With
          </p>

          <h2 className="display-5 fw-bold">
            Technical Skills
          </h2>

          <p className="text-secondary mx-auto mt-3" style={{ maxWidth: "650px" }}>
            Technologies and tools I have worked with throughout
            my development journey.
          </p>
        </motion.div>


        {/* Skill Cards */}
        <div className="row g-4">

          {skillCategories.map((category, index) => (

            <div
              className="col-12 col-md-6 col-lg-4"
              key={category.title}
            >

              <motion.div
                className="card h-100 bg-black text-white border-secondary shadow-sm"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
              >

                <div className="card-body p-4">

                  {/* Number */}
                  <div className="text-secondary fw-bold mb-3">
                    {category.number}
                  </div>

                  {/* Title */}
                  <h4 className="card-title fw-bold mb-3">
                    {category.title}
                  </h4>

                  {/* Description */}
                  <p className="card-text text-secondary mb-4">
                    {category.description}
                  </p>


                  {/* Skills */}
                  <div className="d-flex flex-wrap gap-2">

                    {category.skills.map((skill) => (

                      <motion.span
                        key={skill}
                        className="badge text-bg-secondary px-3 py-2"
                        whileHover={{
                          scale: 1.05,
                        }}
                      >
                        {skill}
                      </motion.span>

                    ))}

                  </div>

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