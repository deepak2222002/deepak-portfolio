
import { useState } from "react";

import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaCheck,
  FaPaperPlane,
  FaClock,
} from "react-icons/fa";

import "../css/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiry: "Job opportunity",
    subject: "",
    message: "",
  });

  const emailAddress = "dverma6342@gmail.com";
  const phoneNumber = "+917217699545";

  const socialLinks = {
    linkedin: "https://linkedin.com/in/verma-iot-solutions",
    github: "https://github.com/deepak2222002",
  };

  const expertise = [
    "Java & Spring Boot backend services",
    "Microservices & REST API design",
    "Full-stack delivery with React",
    "Solution design & system modernization",
    "Performance & test-coverage improvements",
    "Technical mentoring",
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject =
      formData.subject.trim() ||
      `${formData.inquiry} - ${formData.name}`;

    const body = `
Hello Deepak,

${formData.message}

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Inquiry Type: ${formData.inquiry}
    `;

    const mailtoLink =
      `mailto:${emailAddress}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const quickActions = [
    {
      title: "Call Me",
      subtitle: phoneNumber,
      description: "Opens your phone dialer",
      icon: <FaPhone />,
      href: `tel:${phoneNumber}`,
    },
    {
      title: "Email Me",
      subtitle: emailAddress,
      description: "Opens your email app",
      icon: <FaEnvelope />,
      href: `mailto:${emailAddress}`,
    },
    {
      title: "LinkedIn",
      subtitle: "Professional Profile",
      description: "Connect professionally",
      icon: <FaLinkedin />,
      href: socialLinks.linkedin,
      external: true,
    },
    {
      title: "GitHub",
      subtitle: "View My Code",
      description: "Explore my repositories",
      icon: <FaGithub />,
      href: socialLinks.github,
      external: true,
    },
  ];

  return (
    <section id="contact" className="contact-section">

      <div className="container contact-container">

        {/* SECTION HEADER */}
        <div className="contact-header text-center">

          <h2 className="contact-heading">
            Contact
          </h2>

          <p className="contact-subtitle">
            Hiring for a senior backend or full-stack engineer?
            Send a message or email me directly, and I'll reply
            with availability and a current resume.
          </p>

        </div>

        {/* MAIN CONTENT */}
        <div className="row g-4 contact-content">

          {/* LEFT COLUMN */}
          <div className="col-12 col-lg-6">

            <div className="contact-info">

              <h3 className="contact-subheading">
                Get in touch
              </h3>

              <p className="contact-intro">
                Open to Java Developer, backend and full-stack roles.
                Email is the fastest way to reach me.
              </p>

              {/* AVAILABILITY CARD */}
              <div className="availability-card">

                <div className="availability-title">
                  <span className="availability-dot"></span>
                  Open to senior & lead roles
                </div>

                <div className="availability-details">

                  <span>Response Time:</span>
                  <strong>Usually within 24 hours</strong>

                  <span>Working Hours:</span>
                  <strong>Flexible, IST working hours</strong>

                  <span>Timezone:</span>
                  <strong>IST (UTC+5:30)</strong>

                </div>

              </div>

              {/* QUICK ACTIONS */}
              <div className="contact-block">

                <h4 className="contact-block-title">
                  Quick Actions
                </h4>

                <div className="row g-2">

                  {quickActions.map((action) => (

                    <div className="col-6" key={action.title}>

                      <a
                        href={action.href}
                        target={action.external ? "_blank" : undefined}
                        rel={
                          action.external
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="quick-action-card text-decoration-none"
                      >

                        <div className="quick-action-icon">
                          {action.icon}
                        </div>

                        <div className="quick-action-content">

                          <h5>{action.title}</h5>

                          <span>{action.subtitle}</span>

                          <small>{action.description}</small>

                        </div>

                      </a>

                    </div>

                  ))}

                </div>

              </div>

              {/* EXPERTISE */}
              <div className="contact-block">

                <h4 className="contact-block-title">
                  Where I add value
                </h4>

                <div className="row g-2">

                  {expertise.map((item, index) => (

                    <div className="col-6" key={index}>

                      <div className="expertise-item">
                        <FaCheck />
                        <span>{item}</span>
                      </div>

                    </div>

                  ))}

                </div>

              </div>

              {/* LOCATION */}
              <div className="contact-location">

                <FaMapMarkerAlt />

                <div>
                  <strong>New Delhi, India</strong>
                  <span>
                    Open to remote work and international projects
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT COLUMN - CONTACT FORM */}
          <div className="col-12 col-lg-6">

            <div className="contact-form-card">

              <div className="contact-form-header">

                <h3>Send a message</h3>

                <p>Fields marked * are required.</p>

              </div>

              <form onSubmit={handleSubmit}>

                {/* NAME AND EMAIL */}
                <div className="row g-3">

                  <div className="col-12 col-md-6">

                    <label
                      htmlFor="contact-name"
                      className="contact-label"
                    >
                      Full Name *
                    </label>

                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      className="form-control contact-input"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  <div className="col-12 col-md-6">

                    <label
                      htmlFor="contact-email"
                      className="contact-label"
                    >
                      Email Address *
                    </label>

                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      className="form-control contact-input"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  {/* COMPANY AND INQUIRY */}
                  <div className="col-12 col-md-6">

                    <label
                      htmlFor="contact-company"
                      className="contact-label"
                    >
                      Company (Optional)
                    </label>

                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      className="form-control contact-input"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={handleChange}
                    />

                  </div>

                  <div className="col-12 col-md-6">

                    <label
                      htmlFor="contact-inquiry"
                      className="contact-label"
                    >
                      Inquiry type
                    </label>

                    <select
                      id="contact-inquiry"
                      name="inquiry"
                      className="form-select contact-input"
                      value={formData.inquiry}
                      onChange={handleChange}
                    >
                      <option>Job opportunity</option>
                      <option>Recruitment</option>
                      <option>Technical discussion</option>
                      <option>Freelance project</option>
                      <option>Collaboration</option>
                      <option>Other</option>
                    </select>

                  </div>

                  {/* SUBJECT */}
                  <div className="col-12">

                    <label
                      htmlFor="contact-subject"
                      className="contact-label"
                    >
                      Subject
                    </label>

                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      className="form-control contact-input"
                      placeholder="Optional - will auto-generate if left empty"
                      value={formData.subject}
                      onChange={handleChange}
                    />

                  </div>

                  {/* MESSAGE */}
                  <div className="col-12">

                    <label
                      htmlFor="contact-message"
                      className="contact-label"
                    >
                      Message *
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      className="form-control contact-input contact-textarea"
                      placeholder="Role, team and anything else I should know"
                      rows="5"
                      maxLength={1000}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />

                    <div className="message-counter">
                      {formData.message.length}/1000 characters
                    </div>

                  </div>

                  {/* SUBMIT */}
                  <div className="col-12">

                    <button
                      type="submit"
                      className="btn contact-submit-btn w-100"
                    >
                      <FaPaperPlane className="me-2" />
                      Send Message
                    </button>

                  </div>

                </div>

                <p className="contact-privacy">
                  * Your details are used only to respond to your inquiry.
                </p>

              </form>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Contact;
