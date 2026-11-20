
import {
  FaServer,
  FaDesktop,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

import "../css/Skill.css";

function Skill() {
  const skillCategories = [
    {
      title: "Backend & Architecture",
      description: "Services, APIs and event-driven systems",
      icon: <FaServer />,
      skills: [
        { name: "Java 11/17", highlight: true },
        { name: "Spring Boot", highlight: true },
        { name: "Microservices", highlight: true },
        { name: "REST APIs", highlight: true },
        { name: "Kafka", highlight: true },
        { name: "Redis", highlight: true },
        { name: "Elasticsearch", highlight: true },
        { name: "Spring Security" },
        { name: "Spring Data JPA" },
        { name: "System Design" },
        { name: "Design Patterns" },
      ],
    },
    {
      title: "Frontend & Mobile",
      description: "Web and cross-platform interfaces",
      icon: <FaDesktop />,
      skills: [
        { name: "React", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "JavaScript", highlight: true },
        { name: "React Native", highlight: true },
        { name: "HTML" },
        { name: "CSS" },
      ],
    },
    {
      title: "Databases SQL & NoSQL",
      description: "Relational data and query design",
      icon: <FaDatabase />,
      skills: [
        { name: "MySQL" , highlight: true},
        { name: "Microsoft SQL Server" , highlight: true},
        { name: "PostgreSQL" },
        { name: "Redis" , highlight: true},
      ],
    },
    {
      title: "Cloud & DevOps",
      description: "Build, release and hosting",
      icon: <FaCloud />,
      skills: [
        { name: "GitLab CI/CD", highlight: true },
        { name: "Jenkins", highlight: true },
        { name: "PCF", highlight: true },
        { name: "GCP", highlight: true },
        { name: "AWS (EC2, S3)" },
        { name: "Docker" },
        { name: "Terraform" },
        { name: "nginx" },
        { name: "Linux" },
        { name: "Git" },
      ],
    },
    {
      title: "Engineering Practices",
      description: "How the work gets delivered",
      icon: <FaUsers />,
      skills: [
        { name: "Code Reviews", highlight: true },
        { name: "Technical Mentoring", highlight: true },
        { name: "Technical Interviewing", highlight: true },
        { name: "Agile / Scrum", highlight: true },
        { name: "Architecture Reviews" },
        { name: "Cross-functional Delivery" },
        { name: "Jira" },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">

      <div className="container skills-container">

        {/* SECTION HEADER */}
        <div className="skills-header text-center">

          <span className="skills-eyebrow">
            EXPERTISE
          </span>

          <h2 className="skills-heading">
            Technical Skills
          </h2>

          <p className="skills-subtitle">
            The stack I use to design, build and ship enterprise
            backend and full-stack systems.
          </p>

          {/* LEGEND */}
          <div className="skills-legend">

            <span className="skill-badge skill-highlight">
              Highlighted
            </span>

            <p>
              Used in professional production work. Others are also
              used on independent projects.
            </p>

          </div>

        </div>

        {/* SKILL CARDS */}
        <div className="row g-3 g-lg-3">

          {skillCategories.map((category, index) => (

            <div
              className="col-12 col-md-6 col-lg-4"
              key={category.title}
            >

              <div className="skill-card h-100">

                {/* CARD HEADER */}
                <div className="d-flex align-items-center gap-3 mb-3">

                  <div className="skill-icon">
                    {category.icon}
                  </div>

                  <div>
                    <h3 className="skill-card-title">
                      {category.title}
                    </h3>

                    <p className="skill-card-description">
                      {category.description}
                    </p>
                  </div>

                </div>

                {/* TECHNOLOGY TAGS */}
                <div className="d-flex flex-wrap gap-2">

                  {category.skills.map((skill) => (

                    <span
                      key={skill.name}
                      className={`skill-badge ${
                        skill.highlight
                          ? "skill-highlight"
                          : "skill-normal"
                      }`}
                    >
                      {skill.name}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skill;
