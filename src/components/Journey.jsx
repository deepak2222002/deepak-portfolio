import { motion } from "framer-motion";

function Journey() {
  const journey = [
    {
      year: "2023",
      title: "The Beginning",
      description:
        "Started my journey as a software developer and built my foundation in programming.",
      technologies: ["Java", "SQL", "HTML", "CSS"],
    },
    {
      year: "2024",
      title: "Backend Development",
      description:
        "Started building backend applications and working with APIs and databases.",
      technologies: ["Spring Boot", "REST API", "JPA", "Hibernate"],
    },
    {
      year: "2025",
      title: "Microservices & Distributed Systems",
      description:
        "Moved towards more complex application architecture and event-driven systems.",
      technologies: [
        "Microservices",
        "Kafka",
        "Spring Security",
        "Docker",
      ],
    },
    {
      year: "2026",
      title: "Full Stack Journey",
      description:
        "Expanding into frontend development, CI/CD and modern application deployment.",
      technologies: ["React", "JavaScript", "CI/CD", "Cloud"],
    },
  ];

  return (
    <section id="journey" className="bg-transparent py-2">
      <div className="container py-2">

        {/* SECTION HEADING */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary fw-bold text-uppercase mb-2">
            My Journey
          </p>

          <h2 className="display-5 fw-bold text-light">
            Three Years of Growth
          </h2>

          <p className="text-secondary lead mt-3 mx-auto">
            From writing my first programs to building full-stack
            applications.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="position-relative">

          {/* CENTER LINE */}
          <div
            className="position-absolute top-0 bottom-0 start-50 translate-middle-x bg-primary d-none d-md-block"
            style={{ width: "3px" }}
          ></div>

          {journey.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.year}
                className="row mb-5 position-relative"
                initial={{
                  opacity: 0,
                  x: isLeft ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
              >

                {/* LEFT SIDE */}
                <div
                  className={`col-md-5 ${isLeft
                      ? "text-md-end"
                      : "order-md-3 text-md-start"
                    }`}
                >
                  <div className="mb-3">
                    <span className="badge bg-primary fs-6 px-3 py-2">
                      {item.year}
                    </span>
                  </div>

                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">

                      <h3 className="h4 fw-bold mb-3">
                        {item.title}
                      </h3>

                      <p className="text-secondary mb-4">
                        {item.description}
                      </p>

                      <div className="d-flex flex-wrap gap-2 justify-content-md-end">
                        {item.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="badge bg-light text-dark border px-3 py-2"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>

                {/* CENTER DOT */}
                <div className="col-md-2 d-none d-md-flex justify-content-center align-items-start">
                  <motion.div
                    className="bg-primary border border-4 border-light rounded-circle shadow"
                    style={{
                      width: "22px",
                      height: "22px",
                    }}
                    whileHover={{
                      scale: 1.4,
                    }}
                  ></motion.div>
                </div>

                {/* EMPTY SIDE */}
                <div
                  className={`col-md-5 ${isLeft ? "order-md-3" : "order-md-1"
                    }`}
                ></div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Journey;