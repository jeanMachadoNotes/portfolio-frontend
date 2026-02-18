import { Link } from "react-router-dom";
import headshot from "../assets/jean-machado-headshot.png"

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Designing and building reliable web applications.</h1>

                <p className="hero-subtitle">
                    Crafting modern websites, web apps, and custom solutions.
                </p>
                <div className="hero-actions">
                    <Link to="/projects" className="button primary">
                        View Projects →
                    </Link>
                    <Link to="/contact" className="button secondary">
                        Contact Me
                    </Link>
                </div>
            </div>

            <div className="hero-image">
                <img src={headshot} alt="Jean Machado Headshot" />
            </div>

        </section>
    );
}

export default Hero;