function ProjectCard({ project }) {
    return (
        <div className="card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="tech">
                {project.tech.join(" • ")}
            </p>
        </div>
    );
}

export default ProjectCard;