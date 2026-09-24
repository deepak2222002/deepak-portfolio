import { useState } from "react";
import { motion } from "framer-motion";
import ProjectDetails from "./ProjectDetails";
import projectsData from "../data/projectsData";
function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = projectsData;

  return (
    <section className="projects" id="projects">

      <div className="projects-heading">
        <p>WHAT I BUILT</p>

        <h2>My Projects</h2>

        <span>
          A collection of applications and systems I have worked on.
        </span>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
          >

            <div className="project-number">
              {project.number}
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <div className="project-actions">

              <button>
                GitHub
              </button>

              <button
                onClick={() => setSelectedProject(project)}
              >
                View Project →
              </button>

            </div>

          </motion.div>
        ))}

      </div>

      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  );
}

export default Projects;