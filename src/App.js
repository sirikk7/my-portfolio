import react from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Interests from "./components/Interests";
import Awards from "./components/Awards";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import "./App.css";

export default function App() {
  return (
    <div>
        <Navbar />
        <div className="container-fluid p-0">
        <About />
        <hr class="m-0" />
        <Experience/>
          <hr class="m-0" />
        <Education/>
          <hr class="m-0" />
        <Skills />
          <hr class="m-0" />
        <Interests />
          <hr class="m-0" />
        <Awards />
          <hr class="m-0" /> 
        <Projects />
      </div>

    </div>
  );
}
