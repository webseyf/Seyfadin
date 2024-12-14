import React, { useEffect, useRef } from "react";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;

    const scrollCarousel = () => {
      if (carousel) {
        // Increment scroll position
        scrollAmount += 300; // Move one card width at a time
        if (scrollAmount >= carousel.scrollWidth) {
          // Reset to the beginning when reaching the end
          scrollAmount = 0;
        }
        carousel.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    };

    const interval = setInterval(scrollCarousel, 2000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const testimonials = [
    {
      name: "Jane Doe",
      role: "Product Manager",
      feedback: "Working with you was an absolute pleasure. Your creativity and attention to detail were phenomenal! I highly recommend your work to anyone seeking excellence.",
      photo: "/d.jpg",
      rating: 5,
    },
    {
      name: "Sophia Smith",
      role: "CEO, Tech Innovators",
      feedback: "The project exceeded expectations! Your expertise and dedication brought our vision to life. It was a game-changer for our company.",
      photo: "/ef.jpg",
      rating: 4.5,
    },
    {
      name: "Jack Brown",
      role: "UX Designer",
      feedback: "Your designs are always thoughtful and user-centric. You understand how to create intuitive and visually stunning experiences. It's been a joy collaborating with you!",
      photo: "/Z.jpg",
      rating: 5,
    },
    {
      name: "Wonder Lee",
      role: "Software Engineer",
      feedback: "Your coding skills and problem-solving abilities are unmatched. I’m always impressed by how you find innovative solutions for complex challenges.",
      photo: "/images.jpg",
      rating: 5,
    },
    {
      name: "Michael Lee",
      role: "Marketing Specialist",
      feedback: "You have a remarkable ability to bridge technical details with clear communication. Your work has consistently driven excellent results for our campaigns.",
      photo: "/9k=.jpg",
      rating: 4.8,
    },
    {
      name: "David White",
      role: "Entrepreneur",
      feedback: "From start to finish, your professionalism and creativity stood out. I’ve received countless compliments on the project we worked on together.",
      photo: "/2Q==.jpg",
      rating: 5,
    },
  ];
  

  return (
    <section className="testimonials">
      <h2 className="section-title">What People Say!</h2>
      <div className="carousel" ref={carouselRef}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.photo} alt={testimonial.name} className="testimonial-photo" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-role">{testimonial.role}</p>
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <div className="testimonial-rating">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < Math.floor(testimonial.rating) ? "star filled" : "star"}>
                  ★
                </span>
              ))}
              {testimonial.rating % 1 !== 0 && <span className="half-star">★</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
