function ProjectCard({ project, compact = false }) {
    return (
        <div className="project-card">

            {/* Project Image */}
            {project.image && project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                <img
                    src={project.image}
                    alt={`${project.image} screenshot`}
                    className="project-image"
                /> </a>
            )}


            <h3>{project.name}</h3>

            <p>{project.description}</p>

           {!compact && project.details && (
            <p className="project-details">
                {project.details}
            </p>
           )}

           {project.tech && (
            <ul className="project-tech">
                {project.tech.map((item, index)=> (
                    <li key={index}>{item}</li>
                ))}
            </ul>
           )}

           <div className="project-links">
            {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                    Live Demo
                </a>
            )}

            {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            )}

           </div>
        </div>
    );
}

export default ProjectCard;