
import {
  Container,
  Nav,
  Navbar as BootstrapNavbar,
} from "react-bootstrap";

import {
  FaPhone,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

import "../css/Navbar.css";

function Navbar() {
  const navigation = [
    { label: "About", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <BootstrapNavbar
      expand="lg"
      variant="dark"
      sticky="top"
      className="portfolio-navbar"
    >

      <Container className="navbar-container">

        {/* BRAND */}
        <BootstrapNavbar.Brand
          href="#home"
          className="navbar-brand-custom"
        >

          <span className="navbar-logo">
            DV
          </span>

          <span className="navbar-brand-text">

            <strong>Deepak Verma</strong>

            <small>Java Full Stack Developer</small>

          </span>

        </BootstrapNavbar.Brand>

        {/* MOBILE TOGGLE */}
        <BootstrapNavbar.Toggle
          aria-controls="portfolio-navbar"
        />

        {/* NAVIGATION CONTENT */}
        <BootstrapNavbar.Collapse id="portfolio-navbar">

          {/* CENTER NAVIGATION */}
          <Nav className="mx-auto navbar-links">

            {navigation.map((item, index) => (
              <Nav.Link
                key={item.label}
                href={item.href}
                className={
                  index === 0
                    ? "navbar-link active"
                    : "navbar-link"
                }
              >
                {item.label}
              </Nav.Link>
            ))}

          </Nav>

          {/* RIGHT ACTION BUTTONS */}
          <div className="navbar-actions">

            {/* PHONE */}
            <a
              href="tel:+917217699545"
              className="navbar-icon-btn"
              aria-label="Call Deepak"
            >
              <FaPhone />
            </a>

            {/* EMAIL */}
            <a
              href="mailto:dverma6342@gmail.com"
              className="navbar-icon-btn"
              aria-label="Email Deepak"
            >
              <FaEnvelope />
            </a>

            {/* RESUME */}
            <a
              href={`${import.meta.env.BASE_URL}Deepak-java-full-stack.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-resume-btn"
            >
              <FaDownload />
              Resume
            </a>

          </div>

        </BootstrapNavbar.Collapse>

      </Container>

    </BootstrapNavbar>
  );
}

export default Navbar;
