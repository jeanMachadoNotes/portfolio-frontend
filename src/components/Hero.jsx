import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero">
            <h1>Hi, I'm Jean</h1>

            <p className="hero-subtitle">
                I build clean, modern web applications using React and Python.
            </p>

            <div className="hero-actions">
                <Link href="/projects" className="button primary">
                    View Projects
                </Link>
                <Link href="/contact" className="button secondary">
                    Contact Me
                </Link>
            </div>
        </section>
    );
}

export default Hero;