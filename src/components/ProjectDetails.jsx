function ProjectDetails({ project, onClose }) {
  return (
    <div className="project-details">

      {/* Header */}
      <div className="project-details-header">
        <span>{project.number}</span>
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <button onClick={onClose}>✕</button>
      </div>


      {/* Project Preview */}
      <div className="project-preview">
        {/* Screenshot / visual */}
      </div>


      {/* Problem */}
      <section>
        <h3>Problem</h3>
        <p>{project.problem}</p>
      </section>


      {/* Solution */}
      <section>
        <h3>Solution</h3>
        <p>{project.solution}</p>
      </section>


      {/* Architecture */}
      <section>
        <h3>Architecture</h3>

        <div className="architecture">
          {/* Architecture diagram */}
        </div>
      </section>


      {/* Technologies */}
      <section>
        <h3>Technologies</h3>

        <div className="technology-list">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </section>


      {/* Contribution */}
      <section>
        <h3>My Contribution</h3>

        <ul>
          {project.contribution.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>


      {/* Links */}
      <div className="project-links">
        <a href={project.github}>GitHub</a>
        <a href={project.live}>Live Demo</a>
      </div>

    </div>
  );
}

export default ProjectDetails;