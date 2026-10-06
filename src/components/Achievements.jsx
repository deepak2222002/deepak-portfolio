import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Rocket,
  GraduationCap,
} from "lucide-react";

function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Professional Recognition",
      description:
        "Recognized for contribution and performance in professional projects.",
      year: "2024",
    },
    {
      icon: Award,
      title: "Technical Achievement",
      description:
        "Successfully worked on backend applications using Java and Spring Boot.",
      year: "2025",
    },
    {
      icon: Rocket,
      title: "Project Milestone",
      description:
        "Worked on applications involving Microservices, Kafka and event-driven architecture.",
      year: "2025",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description:
        "Continuously expanding skills across backend, frontend, DevOps and cloud technologies.",
      year: "2026",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-5"
      style={{
        backgroundColor: "#0f172a",
      }}
    >
      <div className="container px-3">

        {/* ================= HEADING ================= */}
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
            Achievements
          </p>

          <h2 className="fw-bold text-light mb-2">
            Milestones That Matter
          </h2>

          <p className="text-secondary small mb-0">
            A few milestones and accomplishments from my professional journey.
          </p>
        </motion.div>


        {/* ================= ACHIEVEMENTS ================= */}
        <div className="row g-3">

          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <div
                className="col-12 col-sm-6 col-lg-3"
                key={achievement.title}
              >
                <motion.div
                  className="card h-100 border-0 shadow-sm"
                  style={{
                    backgroundColor: "#151c2c",
                    borderRadius: "10px",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                >

                  <div className="card-body p-3">

                    {/* Top */}
                    <div className="d-flex justify-content-between align-items-start mb-3">

                      <div
                        className="rounded-3 d-flex align-items-center justify-content-center"
                        style={{
                          width: "42px",
                          height: "42px",
                          backgroundColor:
                            "rgba(103, 199, 232, 0.08)",
                          border:
                            "1px solid rgba(103, 199, 232, 0.25)",
                        }}
                      >
                        <Icon
                          size={21}
                          strokeWidth={1.8}
                          style={{ color: "#67c7e8" }}
                        />
                      </div>

                      <span
                        className="badge fw-normal"
                        style={{
                          color: "#8bd9f3",
                          backgroundColor:
                            "rgba(103, 199, 232, 0.07)",
                          border:
                            "1px solid rgba(103, 199, 232, 0.22)",
                        }}
                      >
                        {achievement.year}
                      </span>

                    </div>


                    {/* Title */}
                    <h5 className="fw-bold text-light mb-2">
                      {achievement.title}
                    </h5>


                    {/* Description */}
                    <p
                      className="small lh-lg mb-0"
                      style={{ color: "#94a3b8" }}
                    >
                      {achievement.description}
                    </p>

                  </div>
                </motion.div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Achievements;