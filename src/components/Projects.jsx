
import {
  FaBriefcase,
  FaUser,
  FaSearch,
  FaFileAlt,
  FaClipboardCheck,
  FaBell,
  FaReact,
  FaJava,
  FaDatabase,
  FaDocker,
  FaAws,
  FaServer,
  FaShieldAlt,
  FaCodeBranch,
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiApachekafka,
  SiJenkins,
  SiMysql,
} from "react-icons/si";

import "../css/Project.css";

function Project() {

  const projectFeatures = [
    {
      icon: <FaSearch />,
      title: "Job Discovery",
      description: "Explore jobs and find relevant opportunities.",
      module: "job_portal",
      technologies: "React · REST APIs",
    },
    {
      icon: <FaUser />,
      title: "Candidate Profile",
      description: "Create and manage candidate profiles and resumes.",
      module: "user_profile",
      technologies: "React · Spring Boot",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Application Management",
      description: "Apply for jobs and track application progress.",
      module: "application",
      technologies: "Java · MySQL",
    },
    {
      icon: <FaBell />,
      title: "Notifications",
      description: "Application-related updates and communication.",
      module: "notification",
      technologies: "Kafka · Spring Boot",
    },
  ];

  const technologyStack = [
    {
      name: "Java",
      icon: <FaJava />,
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot />,
    },
    {
      name: "Spring Security & JWT",
      icon: <FaShieldAlt />,
    },
    {
      name: "React.js",
      icon: <FaReact />,
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
    },
    {
      name: "REST APIs",
      icon: <FaServer />,
    },
    {
      name: "Apache Kafka",
      icon: <SiApachekafka />,
    },
    {
      name: "Docker",
      icon: <FaDocker />,
    },
    {
      name: "Jenkins",
      icon: <SiJenkins />,
    },
    {
      name: "AWS",
      icon: <FaAws />,
    },
  ];

  return (
    <section id="projects" className="projects-section">

      <div className="container projects-container">

        {/* SECTION HEADER */}
        <div className="projects-header text-center">

          <span className="projects-eyebrow">
            WORK
          </span>

          <h2 className="projects-heading">
            Featured Projects
          </h2>

          <p className="projects-subtitle">
            Building practical full-stack applications with Java,
            Spring Boot, React and scalable backend architecture.
          </p>

        </div>

        {/* FEATURED PROJECT CARD */}
        <div className="featured-project-card">

          {/* PROJECT STATUS */}
          <div className="project-status">
            <span className="project-status-dot"></span>
            Personal Project · Job Portal
          </div>

          {/* PROJECT INTRO */}
          <div className="row align-items-center g-4 project-intro">

            <div className="col-12 col-md-7">

              <div className="project-logo">
                <FaBriefcase />
                <span>JobPortal</span>
              </div>

              <h3 className="project-title">
                A candidate-focused Job Portal built with Java
                and React.
              </h3>

              <p className="project-description">
                A full-stack job portal that enables candidates
                to discover opportunities, manage profiles and
                resumes, apply for jobs and track application
                progress through an integrated platform.
              </p>

              <div className="project-actions">

                <a
                  href="#job-portal-architecture"
                  className="project-primary-btn"
                >
                  Explore Architecture
                  <FaArrowRight />
                </a>

                <a
                  href="#contact"
                  className="project-secondary-btn"
                >
                  Discuss Project
                  <FaArrowRight />
                </a>

              </div>

            </div>

            {/* PROJECT HIGHLIGHTS */}
            <div className="col-12 col-md-5">

              <div className="project-metrics">

                <div className="project-metric">
                  <FaSearch />
                  <h4>Job Discovery</h4>
                  <p>Explore opportunities</p>
                </div>

                <div className="project-metric">
                  <FaUser />
                  <h4>Profiles</h4>
                  <p>Candidate management</p>
                </div>

                <div className="project-metric">
                  <FaFileAlt />
                  <h4>Applications</h4>
                  <p>Job application workflow</p>
                </div>

                <div className="project-metric">
                  <FaCodeBranch />
                  <h4>Microservices</h4>
                  <p>Architecture roadmap</p>
                </div>

              </div>

            </div>

          </div>

          {/* PROJECT FEATURE MODULES */}
          <div className="project-modules">

            {projectFeatures.map((feature) => (

              <div className="project-module" key={feature.title}>

                <div className="project-module-icon">
                  {feature.icon}
                </div>

                <h4>{feature.title}</h4>

                <span className="project-module-name">
                  {feature.module}
                </span>

                <p>{feature.description}</p>

                <small>{feature.technologies}</small>

              </div>

            ))}

          </div>

          {/* TECHNOLOGY STACK */}
          <div className="project-tech-section">

            <div className="project-section-label">
              TECHNOLOGY STACK
            </div>

            <div className="project-tech-grid">

              {technologyStack.map((technology) => (

                <div
                  className="project-tech-item"
                  key={technology.name}
                >

                  {technology.icon}

                  <span>{technology.name}</span>

                </div>

              ))}

            </div>

          </div>

          {/* ARCHITECTURE DIAGRAM */}
          <div
            className="project-architecture"
            id="job-portal-architecture"
          >

            <div className="project-section-label">
              APPLICATION ARCHITECTURE
            </div>

            <p className="architecture-caption">
              Planned microservices-based architecture
            </p>

            {/* CLIENT LAYER */}
            <div className="architecture-client-layer">

              <div className="architecture-node client-node">
                <FaReact />
                <strong>React Frontend</strong>
                <small>Candidate Portal</small>
              </div>

            </div>

            <div className="architecture-connector">
              HTTPS / REST APIs
            </div>

            {/* BACKEND LAYER */}
            <div className="architecture-backend">

              <div className="architecture-layer-title">
                JAVA · SPRING BOOT BACKEND
              </div>

              <div className="architecture-service-grid">

                <div className="architecture-node">
                  <FaShieldAlt />
                  <strong>Auth Service</strong>
                  <small>Spring Security · JWT</small>
                </div>

                <div className="architecture-node">
                  <FaUser />
                  <strong>User Service</strong>
                  <small>Candidate profiles</small>
                </div>

                <div className="architecture-node">
                  <FaBriefcase />
                  <strong>Job Service</strong>
                  <small>Job discovery</small>
                </div>

                <div className="architecture-node">
                  <FaClipboardCheck />
                  <strong>Application Service</strong>
                  <small>Application tracking</small>
                </div>

              </div>

              {/* EVENT COMMUNICATION */}
              <div className="architecture-connector">
                Asynchronous event communication
              </div>

              <div className="architecture-event-node">
                <SiApachekafka />
                <strong>Apache Kafka</strong>
                <small>Event-driven communication</small>
              </div>

              <div className="architecture-service-grid notification-grid">

                <div className="architecture-node">
                  <FaBell />
                  <strong>Notification Service</strong>
                  <small>Application updates</small>
                </div>

              </div>

            </div>

            {/* DATA LAYER */}
            <div className="architecture-connector">
              Service-specific data access
            </div>

            <div className="architecture-data-layer">

              <div className="architecture-node data-node">
                <SiMysql />
                <strong>MySQL</strong>
                <small>Service databases</small>
              </div>

            </div>

            {/* DEPLOYMENT */}
            <div className="architecture-deployment">

              <span>DEPLOYMENT & CI/CD ROADMAP</span>

              <div className="deployment-technologies">

                <span><FaDocker /> Docker</span>
                <span><SiJenkins /> Jenkins</span>
                <span><FaAws /> AWS</span>

              </div>

            </div>

          </div>

          {/* FOOTER NOTE */}
          <div className="project-card-footer">
            <span>
              <FaCodeBranch />
              Full-stack development · Backend architecture
            </span>
            <span>Java · React · Spring Boot</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Project;
