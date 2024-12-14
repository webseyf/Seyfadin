import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <StyledWrapper>
      <div className="form-container">
        <div className="form-card">
          <form
            className="form"
           action="https://formspree.io/f/xdkovoqj"
  method="POST"
          >
            <h2 className="form-heading">Get In Touch</h2>
            <p className="form-description">
              Have a question or want to work together? Drop a message below!
            </p>

            
            <div className="form-field">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="input-field"
                placeholder="Your Email"
                required
              />
            </div>

            
            <div className="form-field">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="input-field"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>

            <button type="submit" className="sendMessage-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  
  padding: 2rem;

  .form-container {
    width: 100%;
    max-width: 600px;
    background: linear-gradient(135deg, #112240, #233554);
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }

  .form-card {
    padding: 2rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    color: #ccd6f6;
  }

  .form-heading {
    text-align: center;
    font-size: 1.8rem;
    color: #64ffda;
  }

  .form-description {
    text-align: center;
    font-size: 1rem;
    color: #a8b2d1;
    margin-bottom: 1.5rem;
  }

  .form-field {
    display: flex;
    flex-direction: column;
  }

  .form-label {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    color: #a8b2d1;
  }

  .input-field {
    background: #1d283a;
    border: 1px solid #3b4a62;
    border-radius: 5px;
    padding: 0.8rem;
    color: #ccd6f6;
    font-size: 1rem;
    outline: none;
    transition: border 0.3s, box-shadow 0.3s;
  }

  .input-field:focus {
    border-color: #64ffda;
    box-shadow: 0 0 5px #64ffda;
  }

  .sendMessage-btn {
    background: #64ffda;
    color: #0a192f;
    font-size: 1rem;
    font-weight: bold;
    padding: 1rem;
    border: 2px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s, border-color 0.3s, transform 0.3s;
  }

  .sendMessage-btn:hover {
    background: #52e0c4;
    border-color: #64ffda;
    transform: translateY(-3px);
  }

  .sendMessage-btn:active {
    transform: translateY(1px);
  }

  @media (max-width: 768px) {
    .form-card {
      padding: 1.5rem;
    }

    .form-heading {
      font-size: 1.5rem;
    }

    .form-description {
      font-size: 0.9rem;
    }
  }
`;

export default Contact;
