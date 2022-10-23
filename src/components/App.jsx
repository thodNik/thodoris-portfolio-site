import React from "react";
import Header from "./header/Header";
import About from "./about/About";
import Nav from "./nav/Nav"
import Contact from "./contact/Contact";
import Experience from "./experience/Experience";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";


const App = () => {
  return (
    <div>
      <Nav />
      <Header />      
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
