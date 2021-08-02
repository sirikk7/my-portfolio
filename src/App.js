import react from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />

      <main>
        <Navbar />
        <About />
        <Contact />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}
