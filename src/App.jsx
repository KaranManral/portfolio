import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./index.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "./components/hookmediaquery";
import Header from "./components/header";
import "./font/Conneqt/stylesheet.css";
import Photo from "./components/photo";
import Contact from "./components/contact";
import Education from "./components/education";
import Designation from "./components/designation";
import Title from "./components/title";
import Experience from "./components/experience";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";

function App() {
  const { pathname } = useLocation();
  const isDesktop = useMediaQuery("(min-width: 993px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!isDesktop) {
    return (
      <div className="container-md shadow-lg">
        <Header isMobile={true} />
        <Photo />
        <Title />
        <Designation />
        <About />
        <Contact />
        <Experience />
        <Skills isMobile={true} />
        <Projects />
        <Education />
      </div>
    );
  } else {
    return (
      <div className="container-md shadow-lg">
        <Header isMobile={false} />
        <div className="row">
          <div className="col-5" id="leftPanel">
            <Photo />
            <Contact />
            <Education />
          </div>
          <div className="col-7" id="rightPanel">
            <Title />
            <Designation />
            <About />
            <Experience />
            <Skills isMobile={false} />
            <Projects />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
