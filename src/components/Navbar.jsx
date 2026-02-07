import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className ="navbar">
            <div className="nav-inner">
                <h2 className="logo">Jean Machado</h2>

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