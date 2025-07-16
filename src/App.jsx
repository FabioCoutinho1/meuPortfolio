import { useRef } from "react";

import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        scrollSmooth={{
          about: () => scrollToSection(aboutRef),
          projects: () => scrollToSection(projectsRef),
          skills: () => scrollToSection(skillsRef),
          contact: () => scrollToSection(contactRef),
        }}
      />
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scroll-mt-15">
        <section
          id="about"
          ref={aboutRef}
          className="min-h-screen pt-20 snap-start bg-blue-700"
        >
          <About />
        </section>
        <section
          id="projects"
          ref={projectsRef}
          className="min-h-screen pt-20 snap-start bg-blue-600"
        >
          <Projects />
        </section>
        <section
          id="skills"
          ref={skillsRef}
          className="min-h-screen pt-20 snap-start bg-blue-500"
        >
          <Skills />
        </section>
        <section
          id="contact"
          ref={contactRef}
          className="min-h-screen pt-20 snap-start bg-blue-400"
        >
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
