import "./App.css";

import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="app">

      <Navbar />

      <Hero />

      <Journey />

      <Projects />

      <Skills />
      <Experience />

      <Achievements />

      <Contact />

    </div>
  );
}

export default App;