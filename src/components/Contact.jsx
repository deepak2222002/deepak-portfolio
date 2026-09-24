import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-transparent text-white py-5">
      <div className="container py-5">

        {/* Section Heading */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary fw-bold text-uppercase mb-2">
            Get In Touch
          </p>

          <h2 className="display-5 fw-bold">
            Let's Build Something Together
          </h2>

          <p className="text-secondary lead mt-3">
            Have a project, opportunity, or just want to connect?
            Feel free to reach out.
          </p>
        </motion.div>

        <div className="row g-5 align-items-start">

          {/* LEFT SIDE */}
          <div className="col-12 col-lg-5">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <h3 className="fw-bold mb-4">
                Let's Connect
              </h3>

              <p className="text-secondary mb-4">
                I'm always open to discussing software development,
                interesting projects, career opportunities, and new ideas.
              </p>

              {/* Email */}
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                  <Mail className="text-primary" size={22} />
                </div>

                <div>
                  <small className="text-secondary d-block">
                    Email
                  </small>

                  <a
                    href="mailto:your-email@example.com"
                    className="text-white text-decoration-none"
                  >
                    your-email@example.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                  <MapPin className="text-primary" size={22} />
                </div>

                <div>
                  <small className="text-secondary d-block">
                    Location
                  </small>

                  <span>
                    New Delhi, India
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <h5 className="fw-bold mt-5 mb-3">
                Find Me Online
              </h5>

              <div className="d-flex gap-3">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light rounded-circle"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light rounded-circle"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>

                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light rounded-circle"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>

              </div>

            </motion.div>
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="col-12 col-lg-7">

            <motion.div
              className="card bg-black border-secondary shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <div className="card-body p-4 p-lg-5">

                <h4 className="fw-bold mb-4 text-light">
                  Send Me a Message
                </h4>

                <form>

                  {/* Name */}
                  <div className="mb-3">
                    <label
                      htmlFor="name"
                      className="form-label text-secondary"
                    >
                      Your Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      className="form-control bg-dark text-white border-secondary"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="form-label text-secondary"
                    >
                      Email Address
                    </label>

                    <input
                      type="email"
                      id="email"
                      className="form-control bg-dark text-white border-secondary"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Subject */}
                  <div className="mb-3">
                    <label
                      htmlFor="subject"
                      className="form-label text-secondary"
                    >
                      Subject
                    </label>

                    <input
                      type="text"
                      id="subject"
                      className="form-control bg-dark text-white border-secondary"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="form-label text-secondary"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      rows="5"
                      className="form-control bg-dark text-white border-secondary"
                      placeholder="Write your message..."
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2"
                  >
                    Send Message
                    <Send size={18} className="ms-2" />
                  </button>

                </form>

              </div>
            </motion.div>

          </div>
        </div>

        {/* Footer */}
        <hr className="border-secondary mt-5" />

        <div className="text-center pt-4">
          <p className="text-secondary mb-0">
            © 2026 Deepak Verma. Built with React & Bootstrap.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;