
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../css/Experience.css";

function Experience() {

  // Add new companies at the beginning of this array.
  // The first item will always appear at the top.

  const experiences = [
    {
      id: 1,
      company: "Begapt Tech Solutions Pvt. Ltd.",
      role: "Java Full Stack Developer",
      employmentType: "Full-time",
      period: "Apr 2023 – Aug 2026",
      duration: "",
      location: "India",
      client: "Industrial Automation & Manufacturing",
      marker: "B",

      stats: [
        {
          value: "10+",
          label: "Full-stack modules developed",
        },
        {
          value: "150+",
          label: "RESTful APIs deployed",
        },
        {
          value: "40%",
          label: "API response time reduced",
        },
      ],

      achievements: [
        "Designed and developed 10+ full-stack modules using Java, Spring Boot, and React.js, shipping production features across Manufacturing Execution Systems (MES) and Machine Inspection & Monitoring Systems (MI&MS) for the automobile industry.",

        "Developed and deployed 150+ RESTful APIs using Spring Boot and SQL Server, improving integration efficiency by 30% and enabling scalable microservices architecture.",

        "Reduced API response time by 40% through backend optimization, caching strategies, and efficient database query design.",

        "Optimized SQL Server queries across 5+ modules, achieving 25% improvement in backend performance and reduced page load times.",

        "Engineered dynamic production monitoring dashboards using React.js and implemented React Hooks and reusable components for high-performance UIs.",

        "Managed Git-based version control and CI/CD pipelines, enabling automated builds and zero-downtime deployments; conducted peer code reviews.",
      ],

      techStack: [
        "Java",
        "Spring Boot",
        "Kafka",
        "Microservices",
        "REST APIs",
        "Microsoft SQL Server",
        "JUnit",
        "Jenkins CI/CD",
      ],
    },

    

    // ADD YOUR NEXT COMPANY HERE.
    // Newest experience should be placed first.
  ];

  return (
    <section id="experience" className="experience-section">

      <div className="container experience-container">

        {/* SECTION HEADER */}
        <div className="experience-header text-center">

          <span className="experience-eyebrow">
            CAREER
          </span>

          <h2 className="experience-heading">
            Professional Experience
          </h2>

          <p className="experience-subtitle">
            Professional experience building scalable enterprise
            applications, backend systems and full-stack solutions.
          </p>

        </div>

        {/* DYNAMIC EXPERIENCE TIMELINE */}
        <div className="experience-timeline">

          {experiences.map((experience, index) => (

            <div
              className="experience-item"
              key={experience.id}
            >

              {/* TIMELINE MARKER */}
              <div className="experience-marker">

                {experience.logo ? (
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="experience-company-logo"
                  />
                ) : (
                  <span>
                    {experience.marker || (
                      <FaBriefcase />
                    )}
                  </span>
                )}

              </div>

              {/* EXPERIENCE CARD */}
              <div className="experience-card">

                {/* COMPANY AND ROLE */}
                <div className="experience-card-header">

                  <div className="experience-company-row">

                    <span className="experience-company">
                      {experience.company}
                    </span>

                    {experience.employmentType && (
                      <span className="experience-current">
                        {experience.employmentType}
                      </span>
                    )}

                  </div>

                  <h3 className="experience-role">
                    {experience.role}
                  </h3>

                  {/* EXPERIENCE META */}
                  <div className="experience-meta">

                    {experience.period && (
                      <span>
                        <FaCalendarAlt />
                        {experience.period}
                      </span>
                    )}

                    {experience.duration && (
                      <span className="experience-duration">
                        {experience.duration}
                      </span>
                    )}

                    {experience.location && (
                      <span>
                        <FaMapMarkerAlt />
                        {experience.location}
                      </span>
                    )}

                    {experience.client && (
                      <span className="experience-client">
                        {experience.client}
                      </span>
                    )}

                  </div>

                </div>

                {/* OPTIONAL DESCRIPTION */}
                {experience.description && (
                  <p className="experience-description">
                    {experience.description}
                  </p>
                )}

                {/* OPTIONAL STATISTICS */}
                {experience.stats?.length > 0 && (
                  <div className="experience-highlights">

                    {experience.stats.map((stat, statIndex) => (
                      <div
                        className="experience-highlight-box"
                        key={statIndex}
                      >
                        <h4>{stat.value}</h4>
                        <p>{stat.label}</p>
                      </div>
                    ))}

                  </div>
                )}

                {/* KEY ACHIEVEMENTS */}
                {experience.achievements?.length > 0 && (
                  <>
                    <div className="experience-divider"></div>

                    <div className="experience-achievements">

                      <h4 className="experience-label">
                        KEY ACHIEVEMENTS
                      </h4>

                      <ul>
                        {experience.achievements.map(
                          (achievement, achievementIndex) => (
                            <li key={achievementIndex}>
                              {achievement}
                            </li>
                          )
                        )}
                      </ul>

                    </div>
                  </>
                )}

                {/* TECH STACK */}
                {experience.techStack?.length > 0 && (
                  <>
                    <div className="experience-divider"></div>

                    <div className="experience-tech">

                      <h4 className="experience-label">
                        TECH STACK
                      </h4>

                      <div className="d-flex flex-wrap gap-2">

                        {experience.techStack.map((technology) => (
                          <span
                            className="experience-tech-tag"
                            key={technology}
                          >
                            {technology}
                          </span>
                        ))}

                      </div>

                    </div>
                  </>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;
