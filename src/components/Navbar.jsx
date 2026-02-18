import { Link } from "react-router-dom";
import logo from "../assets/jm-creative-logo.png";

function Navbar() {
    return (
        <nav className ="navbar">
            <div className="nav-inner">
                <Link to="/" className="logo">
                    <img src={logo} alt="JM Creative" />
                </Link>

                <div className="links">
                    <Link to="/">Home</Link> | {" "}
                    <Link to="/projects">Projects</Link> | {" "}
                    <Link to="/services">Services</Link> | {" "}
                    <Link to="/contact">Contact</Link>
                </div>
            </div> 
        </nav>
    );
}

export default Navbar;