import "./App.css";

import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">

      <Navbar />

      <Hero />

      <Skills />  
      
      <Experience />

      {/* <Journey /> */}

      <Projects />

      {/* <Achievements /> */}

      <Contact />


      <Footer />

    </div>
  );
}

export default App;