import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowDown } from "react-icons/fa";
import profileImage from "../assets/image.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-vh-50 d-flex align-items-center bg-transparent text-white"
    >
      <div className="container py-5">
        <div className="row align-items-center g-5">

          {/* LEFT SIDE */}
          <div className="col-12 col-lg-7">

            <motion.p
              className="text-secondary fw-bold text-uppercase mb-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="display-2 fw-bold mb-3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Deepak <span className="text-primary">Verma</span>
            </motion.h1>

            <motion.h2
              className="h2 fw-semibold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Java Full Stack Developer
            </motion.h2>

            <motion.p
              className="lead text-secondary mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Building scalable applications, exploring new technologies,
              and growing through real-world development.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              className="d-flex flex-wrap gap-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="#journey"
                className="btn btn-primary btn-lg px-4"
              >
                Explore My Journey
                <FaArrowDown className="ms-2" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light btn-lg px-4"
              >
                View Resume
              </a>
            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div
              className="d-flex gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-secondary rounded-circle"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-secondary rounded-circle"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-secondary rounded-circle"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE - PROFILE IMAGE */}
          <div className="col-12 col-lg-5 d-flex justify-content-center">

            <motion.div
              className="position-relative"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >

              {/* Background circle */}
              <div
                className="bg-primary rounded-circle position-absolute top-50 start-50 translate-middle opacity-25"
                style={{
                  width: "340px",
                  height: "340px",
                }}
              ></div>

              {/* Profile image */}
              <motion.img
                src={profileImage}
                alt="Deepak Verma"
                className="rounded-circle border border-4 border-primary position-relative shadow-lg"
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;