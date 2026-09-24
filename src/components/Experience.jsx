import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      period: "2023 – Present",
      role: "Java Full Stack Developer",
      company: "Company Name",
      location: "India",
      description:
        "Working on enterprise applications and full-stack development using Java, Spring Boot and modern frontend technologies.",
      responsibilities: [
        "Developed REST APIs using Spring Boot",
        "Worked with Microservices architecture",
        "Implemented authentication and authorization using Spring Security",
        "Worked with databases using JPA and Hibernate",
        "Integrated frontend applications with backend APIs",
        "Worked with Kafka for event-driven communication",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "Kafka",
        "React",
        "SQL",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-transparent text-white py-5">
      <div className="container py-5">

        {/* Heading */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary fw-bold text-uppercase mb-2">
            Professional Experience
          </p>

          <h2 className="display-5 fw-bold">
            Where I've Worked
          </h2>

          <p className="text-secondary lead mt-3">
            My professional experience and the work I've contributed to.
          </p>
        </motion.div>

        {/* Experience */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                className="card bg-black text-white border-secondary shadow-lg mb-4"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -5 }}
              >
                <div className="card-body p-4 p-lg-5">

                  {/* Top */}
                  <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-4">

                    <div>
                      <h3 className="h3 fw-bold mb-2">
                        {experience.role}
                      </h3>

                      <h5 className="text-primary mb-2">
                        {experience.company}
                      </h5>

                      <p className="text-secondary mb-0">
                        {experience.location}
                      </p>
                    </div>

                    <div>
                      <span className="badge bg-primary fs-6 px-3 py-2">
                        {experience.period}
                      </span>
                    </div>

                  </div>

                  <hr className="border-secondary" />

                  {/* Description */}
                  <p className="text-secondary lead fs-6 mt-4">
                    {experience.description}
                  </p>

                  {/* Responsibilities */}
                  <h5 className="fw-bold mt-4 mb-3">
                    Key Responsibilities
                  </h5>

                  <ul className="text-secondary">
                    {experience.responsibilities.map((item) => (
                      <li key={item} className="mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <h5 className="fw-bold mt-4 mb-3">
                    Technologies
                  </h5>

                  <div className="d-flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="badge bg-secondary px-3 py-2"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;