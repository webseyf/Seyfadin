import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Loader from './components/Loader.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Project.jsx';
import Testimonials from './components/Testimonials.jsx';
import Hobbies from './components/Hobbies.jsx';
import Services from './components/Services.jsx';

//import Price from './components/Price.jsx';
import Contact from './components/Contact.jsx';

import './App.css'
import WhyMe from './components/whyme.jsx';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="whyme"><WhyMe /></div>
      <div id="projects"><Projects /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="hobbies"><Hobbies /></div>
      <div id="services"><Services /></div>
      {/* <div id="pricing"><Price /></div> */}
      <div id="contact"><Contact /></div>
      

      <Footer />
    </div>
  );
}

export default App;
