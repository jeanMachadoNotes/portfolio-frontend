import projects from "../data/projects";

function Projects() {
    return (
        <div>
            <h2>Projects</h2>

            {projects.map((project, index) => (
                <div key={index}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <p>Tech: {project.tech.join(", ")}</p>
                </div>
            ))}
        </div>
    );
}

export default Projects;