import React, { useState, useEffect } from 'react';
import '../styles/Footer.css';
import Loved from './Loved';
import Like from './Like';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the scroll-to-top button based on scroll position
  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  // Scroll to the top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add/remove scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="love">
        <span><Loved/></span>
        <span ><Like/></span>
        </div>
      <div className="footer-content">
        <nav>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </nav>
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Seyfadin. All rights reserved.
        </p>
      </div>
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          🔼
        </button>
      )}
    </footer>
  );
};

export default Footer;









