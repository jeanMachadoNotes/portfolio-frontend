function Hero() {
    return (
        <section className="hero">
            <h1>Hi, I'm Jean</h1>

            <p className="hero-subtitle">
                I build clean, modern web applications using React and Python.
            </p>

            <div className="hero-actions">
                <a href="/projects" className="button primary">
                    View Projects
                </a>
                <a href="/contact" className="button secondary">
                    Contact Me
                </a>
            </div>
        </section>
    );
}

export default Hero;