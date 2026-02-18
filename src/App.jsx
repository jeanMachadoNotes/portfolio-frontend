import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AnalyticsTracker from "./components/AnalyticsTracker";

ReactGA.initialize("G-XRG25XWWVT");
ReactGA.send("pageview");

function App() {
  return (
    <>
      <AnalyticsTracker/>
      
      <div>
        <Navbar />
        <div className="page">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
