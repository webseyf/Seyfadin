import React from "react";
import "../styles/Hobbies.css";

const hobbies = [
  {
    title: "Code Challenges",
    description: "Solving coding puzzles and algorithms keeps my skills sharp and my mind engaged.",
    funFact: "I once solved a 5-star HackerRank problem in under 30 minutes!",
    image: "/chall.jpg",
  },
  {
    title: "Tech Blogging",
    description: "Sharing knowledge about web development and coding helps me connect with the community.",
    funFact: "My article on React hooks reached 10k readers in a week!",
    image: "as.jpg",
  },
  {
    title: "Open Source Contributions",
    description: "Collaborating on open source projects allows me to learn and give back to the developer community.",
    funFact: "I've contributed to a project with over 5k stars on GitHub!",
    image: "/sa.jpg",
  },
];


const Hobbies = () => {
  return (
    <section className="hobbies">
      <h2 className="section-title">My Hobbies & Passions</h2>
      {hobbies.map((hobby, index) => (
        <div
          key={index}
          className={`hobby-row ${index % 2 === 0 ? "row-reverse" : ""}`}
        >
          <div className="hobby-content">
            <h3 className="hobby-title">{hobby.title}</h3>
            <p className="hobby-description">{hobby.description}</p>
            <p className="hobby-fun-fact">
              <strong>Fun Fact:</strong> {hobby.funFact}
            </p>
          </div>
          <div className="hobby-image-container">
            <img
              src={hobby.image}
              alt={hobby.title}
              className="hobby-image"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hobbies;
