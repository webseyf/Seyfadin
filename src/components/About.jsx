import React from 'react';
import '../styles/About.css'
const About = () => {
  return (
    <section className="about-section">
     
      <div className="about-box">
      <h2 className="about-title">Who is Seyfadin?</h2>
        <ul className="about-list">
          <li className="about-item">Frontend Developer with a passion for <strong>user-centric designs</strong>.</li>
          <li className="about-item">Specialized in <strong>React, JavaScript</strong>, and modern web technologies.</li>
          <li className="about-item">Focused on creating <strong>intuitive, responsive, and visually stunning</strong> interfaces.</li>
          <li className="about-item">Exploring the latest <strong>tech trends</strong> and enhancing my <strong>photography skills</strong>.</li>
          <li className="about-item">Always learning and pushing creative boundaries to build <strong>better user experiences</strong>.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
