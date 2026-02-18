import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
    return (
        <div>
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;