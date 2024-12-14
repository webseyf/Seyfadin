import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css'; // Create this CSS file for styles

const skillsData = [
  { name: 'HTML', icon: '📄', description: 'Markup language for structuring web content.' },
  { name: 'CSS', icon: '🎨', description: 'Styling language for designing web interfaces.' },
  { name: 'JavaScript', icon: '⚙️', description: 'Programming language for web interactivity.' },
  { name: 'React', icon: '⚛️', description: 'JavaScript library for building UI components.' },
  { name: 'Firebase', icon: '🔥', description: 'Backend-as-a-service platform for modern web apps.' },
  { name: 'Wordpress', icon: '💨', description: 'No code website development, Any Website in 24hr.' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  hover: { scale: 1.1, boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.4)', transition: { duration: 0.3 } },
};

const SkillsCards = () => {
  return (
    <div className="skills-container">
      <h2 className="skill-title">Skills I have Aquired!</h2>
      {skillsData.map((skill, index) => (
        <motion.div
          className="skill-card"
          key={index}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={cardVariants}
        >
          <div className="skill-icon">{skill.icon}</div>
          <h3 className="skill-name">{skill.name}</h3>
          <p className="skill-description">{skill.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsCards;

