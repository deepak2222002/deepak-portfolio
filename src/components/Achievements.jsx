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
    <section id="achievements" className="bg-transparent py-5">
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
            Achievements
          </p>

          <h2 className="display-5 fw-bold">
            Milestones That Matter
          </h2>

          <p className="text-secondary lead mt-3">
            A few milestones and accomplishments from my professional journey.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="row g-4 justify-content-center">

          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <div
                className="col-12 col-md-6 col-lg-3"
                key={achievement.title}
              >
                <motion.div
                  className="card h-100 border-0 shadow-sm text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                >
                  <div className="card-body p-4">

                    {/* Icon */}
                    <div className="mb-4">
                      <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-3">
                        <Icon
                          size={32}
                          className="text-primary"
                        />
                      </div>
                    </div>

                    {/* Year */}
                    <span className="badge bg-secondary mb-3">
                      {achievement.year}
                    </span>

                    {/* Title */}
                    <h4 className="h5 fw-bold mb-3">
                      {achievement.title}
                    </h4>

                    {/* Description */}
                    <p className="text-secondary mb-0">
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