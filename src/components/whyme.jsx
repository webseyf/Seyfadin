import React from "react";
import "../styles/WhyMe.css";
import Animate from "./Animate.jsx";

const WhyMe = () => {
  return (
    <section className="why-me">
     
     
     <div className="core-aspects">
     <h2>Why Choose Me?</h2>
  <p className="subheading">
    As a developer passionate about crafting exceptional web experiences, here are the core aspects of my work:
  </p>
  <ul className="core-list">
    <li>
      
      <span>✔️ Cllient Frist Approach</span>
    </li>
    <li>
      
      <span>✔️ Scalable Solutions</span>
    </li>
    <li>
      
      <span>✔️ User-Centric Design</span>
    </li>
    <li>
      
      <span>✔️ Results-Driven Approach</span>
    </li>
    <li>
      
      <span>✔️ Innovative Thinking</span>
    </li>
    <li>
      
      <span>✔️ Attention To detail</span>
    </li>
  </ul>
</div>

<div className="animation-wrapper">
  <div className="animation">
    <Animate />
  </div>
</div>
    </section>
  );
};

export default WhyMe;
