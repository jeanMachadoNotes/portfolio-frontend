import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import { Link } from "react-router-dom";
import SkillGroup from "../components/SkillGroup";
import skills from "../data/skills";

function Home() {
    const featureProjects = projects.filter(
        function(project) {
            return project.featured;
        }
    );
    
    return (
        <>
            <Hero />
            
            <section>
                <h2>About Me</h2>

                <p>I'm a developer focused on building fast, maintanable web applications with modern tools.</p>
            </section>

            <section>
                <h2>Featured Projects</h2>

                <div className="projects-grid">
                    {featureProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} compact/>
                    ))}
                </div>

                <Link to="/projects" className="button secondary">
                View All Projects →
                </Link>
            </section>
            
            <section>
                <h2>Skills</h2>

                <div className="skills-grid">
                    <SkillGroup title="Frontend" items={skills.frontend} />
                    <SkillGroup title="Backend" items={skills.backend} />
                    <SkillGroup title="Tools" items={skills.tools} />
                </div>
            </section>
        </>
    );
}

export default Home;