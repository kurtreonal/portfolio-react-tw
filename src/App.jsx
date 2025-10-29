import React, { useEffect, useState } from "react";
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './index.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ParallaxProvider>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black-50' : 'bg-gray-200'}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Work darkMode={darkMode} />
        <Contact darkMode={darkMode}/>
        <Footer darkMode={darkMode}/>
      </div>
    </ParallaxProvider>
  );
}
