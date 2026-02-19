import { FaLinkedin, FaGithub, FaYoutube, FaImdb } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section">
                    <h3 className="footer-brand">JM Creative</h3>
                    <p className="footer-tagline">
                        Digital Developer & Creative Technologist
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Explore</h4>
                    <Link to="/projects">Projects</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="footer-section">
                    <h4>Connect</h4>

                    <a 
                        href="https://www.linkedin.com/in/jean-machado-/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Jean Machado LinkedIn profile"
                        className="social-link"
                    >
                        <FaLinkedin /> <span>LinkedIn</span>
                    </a>

                    <a 
                        href="https://github.com/jeanMachadoNotes"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Jean Machado GitHub profile"
                        className="social-link"
                    >
                        <FaGithub /> <span>GitHub</span>
                    </a>

                    <a 
                        href="https://www.youtube.com/@LiveTheMachLife"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Jean Machado YouTube profile"
                        className="social-link"
                    >
                        <FaYoutube /> <span>YouTube</span>
                    </a>

                    <a 
                        href="https://www.imdb.com/name/nm2359342/?ref_=ext_shr_lnk"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Jean Machado IMDb profile"
                        className="social-link"
                    >
                        <FaImdb /> <span>IMDb</span>
                    </a>
                </div>

            </div>
            <div className="footer-bottom">
                © {new Date().getFullYear()} JM Creative. All rights reserved.
            </div>
        </footer>
    );
}


export default Footer;