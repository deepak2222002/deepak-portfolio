
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp,
  FaArrowRight,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";

import "../css/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { label: "About", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const technicalFocus = [
    "Java & Spring Boot",
    "Microservices & REST APIs",
    "React & Full Stack Development",
    "System Design & Architecture",
    "Manufacturing Automation",
  ];

  return (
    <footer className="footer-section">

      <div className="container footer-container">

        {/* TOP CTA CARD */}
        <div className="footer-cta">

          <div className="footer-cta-content">
            <h3>Have a role or project in mind?</h3>

            <p>
              I'm open to Java backend and full-stack engineering
              opportunities. Let's connect and discuss how I can
              contribute to your team.
            </p>
          </div>

          <div className="footer-cta-actions">

            <a
              href="mailto:dverma6342@gmail.com"
              className="btn footer-email-btn"
            >
              <FaEnvelope />
              Email Me
            </a>

            <a
              href="tel:+917217699545"
              className="btn footer-call-btn"
            >
              <FaPhone />
              Call Me
            </a>

          </div>

        </div>

        {/* FOOTER MAIN CONTENT */}
        <div className="row g-4 footer-main">

          {/* BRAND COLUMN */}
          <div className="col-12 col-md-6 col-lg-3">

            <div className="footer-brand">

              <a href="#home" className="footer-brand-heading">

                <span className="footer-logo">
                  DV
                </span>

                <span>
                  Deepak Verma
                </span>

              </a>

              <p className="footer-description">
                Building enterprise systems with Java, Spring Boot,
                React and microservices, from solution design
                through production delivery.
              </p>

              {/* SOCIAL LINKS */}
              <div className="footer-socials">

                <a
                  href="https://linkedin.com/in/verma-iot-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/deepak2222002"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

              </div>

            </div>
          </div>

          {/* NAVIGATION COLUMN */}
          <div className="col-6 col-md-6 col-lg-2">

            <div className="footer-column">

              <h4>NAVIGATE</h4>

              <ul className="footer-links">

                {navigation.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}

              </ul>

            </div>
          </div>

          {/* CONTACT COLUMN */}
          <div className="col-12 col-md-6 col-lg-3">

            <div className="footer-column">

              <h4>CONTACT</h4>

              <ul className="footer-contact-list">

                <li>
                  <FaPhone />

                  <a href="tel:+917217699545">
                    +91 7217699545
                  </a>
                </li>

                <li>
                  <FaEnvelope />

                  <a href="mailto:dverma6342@gmail.com">
                    dverma6342@gmail.com
                  </a>
                </li>

                <li>
                  <FaMapMarkerAlt />

                  <span>India</span>
                </li>

              </ul>

            </div>
          </div>

          {/* TECHNICAL FOCUS COLUMN */}
          <div className="col-12 col-md-6 col-lg-4">

            <div className="footer-column">

              <h4>TECHNICAL FOCUS</h4>

              <ul className="footer-focus-list">

                {technicalFocus.map((item) => (
                  <li key={item}>
                    <FaCode />
                    <span>{item}</span>
                  </li>
                ))}

              </ul>

            </div>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">

          <p>
            © {currentYear} Deepak Verma. All rights reserved.
          </p>

          <a href="#home" className="footer-back-top">
            Back to top
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
