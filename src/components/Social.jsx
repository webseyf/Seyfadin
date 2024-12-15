import React from 'react';
import styled from 'styled-components';

const Social = () => {
  return (
    <StyledWrapper>
      
      <div className="card">
      <ul>
  <li className="iso-pro">
    <span />
    <span />
    <span />
    <a href="https://www.linkedin.com/in/seyfadin-abdela-68112b33a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" className="svg">
        <path d="M100.28 448H7.4V148.9h92.88zm-46.44-332A53.68 53.68 0 1 1 107.52 69a53.68 53.68 0 0 1-53.68 47zM447.8 448h-92.68V304c0-34.37-.72-78.7-47.94-78.7-48.05 0-55.4 37.56-55.4 76.46V448H159.8V148.9h89.06v40.8h1.28c12.4-23.4 42.67-48 87.84-48 93.88 0 111.12 61.81 111.12 142.3V448z" />
      </svg>
    </a>
    <div className="text">LinkedIn</div>
  </li>

  <li className="iso-pro">
    <span />
    <span />
    <span />
    <a href="https://github.com/webseyf?tab=repositories" target="_blank" rel="noopener noreferrer">
      <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
        <path d="M165.9 397.4c0 2-2.3 3.6-4.8 3-9.6-2.1-18.4-5.4-26.4-9.9-3-1.9-2.4-6.1.8-7.3 7.5-2.7 15.6-6.8 22.5-11.6 3.1-2.2 7.8.3 7.9 3.6V397.4zm-27.1-21.1c-1.2.7-2.7-.1-2.4-1.5.3-1.4 1.5-2.6 2.9-3 1.3-.4 2.8.1 2.4 1.4-.3 1.4-1.5 2.6-2.9 3.1zM248 8C111 8 0 119 0 256c0 110.9 71.8 205.2 171.5 238.4 12.5 2.3 17.1-5.4 17.1-12v-44.3c-69.7 15.2-84.4-33.7-84.4-33.7-11.4-29-27.8-36.7-27.8-36.7-22.7-15.5 1.7-15.2 1.7-15.2 25.1 1.8 38.3 25.8 38.3 25.8 22.3 38.1 58.6 27.1 72.9 20.7 2.2-16.1 8.7-27.1 15.8-33.4-55.6-6.3-113.9-27.8-113.9-123.7 0-27.3 9.8-49.5 25.8-67-2.6-6.3-11.2-31.8 2.5-66.4 0 0 21.1-6.7 69.1 25.6 20-5.6 41.5-8.4 63-8.5 21.5.1 43 .2 63 8.5 48-32.4 69.1-25.6 69.1-25.6 13.7 34.6 5.1 60.1 2.5 66.4 16 17.5 25.8 39.7 25.8 67 0 96.1-58.5 117.3-114.3 123.5 8.9 7.7 16.8 23 16.8 46.3v68.7c0 6.7 4.5 14.4 17.2 11.9C424.2 461.2 496 366.9 496 256 496 119 385 8 248 8z" />
      </svg>
    </a>
    <div className="text">GitHub</div>
  </li>


  <li className="iso-pro">
  <span />
  <span />
  <span />
  <a href="https://t.me/seyfitti" target="_blank" rel="noopener noreferrer">
    <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
      <path d="M248,8C111,8,0,119,0,256S111,504,248,504,496,393,496,256,385,8,248,8Zm127.6,171.1L379.8,354.7c-2.6,11.3-9.5,14-19.3,9.7L290.9,299.4c-7.1-4.2-13.1-1.9-17.9,4.6l-27.1,34.5c-3.1,4-5.7,7.3-11.7,7.3H227.5c-3.3,0-6.4-1.3-9.1-3.4l-43-34.7c-7.4-6-5.3-11.7,2.8-13.6L366.3,173c8.1-2.3,13.7-.2,10.9,11.1Z" />
    </svg>
  </a>
  <div className="text">Telegram</div>
</li>

        </ul>
      </div>
    

    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    max-width: 550px;
    border-radius: 15px;
    display: flex;
    margin-top: 1rem;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    gap: 1rem;
    backdrop-filter: blur(15px);
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.192),
      inset 0 0 5px rgba(255, 255, 255, 0.274), 0 5px 5px rgba(0, 0, 0, 0.164);
    transition: 0.5s;
  }

  .card:hover {
    animation: ease-out 5s;
    background: rgba(173, 173, 173, 0.05);
  }

  .card ul {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .card ul li {
    cursor: pointer;
  }

  .svg {
    transition: all 0.3s;
    /* if you find some problems change w - h : 30px*/
    padding: 1rem;
    height: 60px;
    width: 60px;
    border-radius: 100%;
    color: rgb(255, 174, 0);
    fill: currentColor;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
      inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.164);
  }

  .text {
    opacity: 0;
    border-radius: 5px;
    padding: 6px;
    transition: all 0.3s;
    color: rgb(255, 174, 0);
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    z-index: 9999;
    box-shadow: -5px 0 1px rgba(153, 153, 153, 0.2),
      -10px 0 1px rgba(153, 153, 153, 0.2),
      inset 0 0 20px rgba(255, 255, 255, 0.3),
      inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.082);
  }

  /*isometric prooyection*/
  .iso-pro {
    transition: 0.5s;
  }
  .iso-pro:hover a > .svg {
    transform: translate(15px, -15px);
    border-radius: 100%;
  }

  .iso-pro:hover .text {
    opacity: 1;
    transform: translate(25px, -2px) skew(-5deg);
  }

  .iso-pro:hover .svg {
    transform: translate(5px, -5px);
  }

  .iso-pro span {
    opacity: 0;
    position: absolute;
    color: #1877f2;
    border-color: #1877f2;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
      inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.164);
    border-radius: 50%;
    transition: all 0.3s;
    height: 60px;
    width: 60px;
  }

  .iso-pro:hover span {
    opacity: 1;
  }

  .iso-pro:hover span:nth-child(1) {
    opacity: 0.2;
  }

  .iso-pro:hover span:nth-child(2) {
    opacity: 0.4;
    transform: translate(5px, -5px);
  }
  @media (max-width: 768px) {
    .card ul{
      flex-direction: row;
    }

  }
    .iso-pro:hover span:nth-child(3) {
    opacity: 0.6;
    transform: translate(10px, -10px);
  }`;

export default Social;
