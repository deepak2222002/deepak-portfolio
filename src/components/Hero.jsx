
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaChevronDown,
  FaMapMarkerAlt,
} from "react-icons/fa";

import profileImage from "../assets/image.png";
import "../css/Hero.css";

function Hero() {
  const skills = [
    "Java & Spring Boot",
    "Microservices",
    "React",
    "SQL & NoSQL",
    "System Design",
  ];

  const stats = [
    {
      value: "3+",
      label: "Years of experience",
    },
    {
      value: "5–10 Lakh",
      label: "Rows processed in Excel imports",
    },
    {
      value: "MES & MI&MS",
      label: "Enterprise applications",
    },
    {
      value: "Full Stack",
      label: "End-to-end development",
    },
  ];

  return (
    <section
      id="home"
      className="hero-section text-white d-flex align-items-center position-relative"
    >
      {/* Background Effects */}
      <div className="hero-stars" aria-hidden="true"></div>
      <div className="hero-glow" aria-hidden="true"></div>

      <div className="container hero-container position-relative">
        <div className="row align-items-center gx-lg-5 gy-5">

          {/* LEFT CONTENT */}
          <div className="col-12 col-lg-7">

            {/* Availability & Location */}
            <div className="d-flex align-items-center flex-wrap gap-3 mb-4">

              <span className="availability-badge">
                <span className="availability-dot"></span>
                Open to Java Developer roles
              </span>

              <span className="hero-location">
                <FaMapMarkerAlt className="me-2" />
                India
              </span>

            </div>

            {/* Name */}
            <h1 className="hero-name mb-2">
              Deepak <span>Verma</span>
            </h1>

            {/* Designation */}
            <h2 className="hero-role mb-2">
              Java Full Stack Developer
            </h2>

            {/* Specialization */}
            <p className="hero-specialization mb-4">
              Java & Spring Boot · Microservices · React
            </p>

            {/* Introduction */}
            <p className="hero-description mb-4">
              Java Full Stack Developer with 3+ years of experience
              designing and developing scalable enterprise applications.
              Experienced in building REST API-driven backend systems,
              manufacturing automation solutions, and responsive
              frontend applications using Java, Spring Boot and React.
              Passionate about system design, performance optimization
              and solving real-world engineering challenges.
            </p>

            {/* Skills */}
            <div className="d-flex flex-wrap gap-2 mb-4">
              {skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap align-items-center gap-2">

              {/* Email */}
              <a
                href="mailto:dverma6342@gmail.com"
                className="btn hero-primary-btn"
              >
                <FaEnvelope className="me-2" />
                Email me
              </a>

              {/* Resume */}
              <a
                href="/resume.pdf"
                download="Deepak-Verma-Resume.pdf"
                className="btn hero-resume-btn"
              >
                <FaDownload className="me-2" />
                Download resume
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/verma-iot-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="btn hero-social-btn"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/deepak2222002"
                target="_blank"
                rel="noopener noreferrer"
                className="btn hero-social-btn"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-12 col-lg-5 d-flex justify-content-center">

            <div className="hero-profile-area d-flex flex-column align-items-center">

              {/* Profile Image */}
              <div className="profile-image-wrapper position-relative">

                <div className="profile-image-glow"></div>

                <img
                  src={profileImage}
                  alt="Deepak Verma"
                  className="hero-profile-image position-relative"
                />

              </div>

              {/* Statistics Card */}
              <div className="hero-stats-grid">

                {stats.map((stat, index) => (
                  <div className="hero-stat" key={index}>

                    <h3>{stat.value}</h3>

                    <p>{stat.label}</p>

                  </div>
                ))}

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#journey"
        className="hero-scroll d-flex flex-column align-items-center text-decoration-none"
      >
        <span>Scroll to explore</span>

        <div className="scroll-icon mt-2">
          <FaChevronDown />
        </div>

      </a>

    </section>
  );
}

export default Hero;
