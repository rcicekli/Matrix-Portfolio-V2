// src/App.js
import React, { useEffect, useState } from "react";
import MyNav from "./components/MyNav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [, setNavHeight] = useState(0);

  useEffect(() => {
    document.title = "[MATRIX_PORTAL]";
  }, []);

  return (
    <div className="App">
      <MyNav setNavHeight={setNavHeight} />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
