import React from 'react';
import styled from 'styled-components';

const Services = () => {
  return (
    <StyledWrapper>
  <h2 className='title'>SERVICES I OFFER</h2>
<div className='full' id="services">

  <div className="outer">
    <div className="dot" />
    <div className="card">
      <div className="ray" />
      <div className="text">Landing Page Dev</div>
      <div className='p'>Create high-converting landing pages.</div>
      <div className="line topl" />
      <div className="line leftl" />
      <div className="line bottoml" />
      <div className="line rightl" />
    </div>
  </div>

  <div className="outer">
    <div className="dot" />
    <div className="card">
      <div className="ray" />
      <div className="text">Frontend Development</div>
      <div className='p'>Build responsive and modern interfaces.</div>
      <div className="line topl" />
      <div className="line leftl" />
      <div className="line bottoml" />
      <div className="line rightl" />
    </div>
  </div>

  <div className="outer">
    <div className="dot" />
    <div className="card">
      <div className="ray" />
      <div className="text">React Development</div>
      <div className='p'>Expert in building React applications.</div>
      <div className="line topl" />
      <div className="line leftl" />
      <div className="line bottoml" />
      <div className="line rightl" />
    </div>
  </div>

  <div className="outer">
    <div className="dot" />
    <div className="card">
      <div className="ray" />
      <div className="text">No-Code Development</div>
      <div className='p'>Build websites using WordPress and similar tools.</div>
      <div className="line topl" />
      <div className="line leftl" />
      <div className="line bottoml" />
      <div className="line rightl" />
    </div>
  </div>

  <div className="outer">
    <div className="dot" />
    <div className="card">
      <div className="ray" />
      <div className="text">UI Development</div>
      <div className='p'>Create intuitive and user-friendly designs.</div>
      <div className="line topl" />
      <div className="line leftl" />
      <div className="line bottoml" />
      <div className="line rightl" />
    </div>
  </div>

  <div className="outer">
    <div className="dot" />
    <div className="card">
      <div className="ray" />
      <div className="text">Team Collaboration</div>
      <div className='p'>Work seamlessly with teams on projects.</div>
      <div className="line topl" />
      <div className="line leftl" />
      <div className="line bottoml" />
      <div className="line rightl" />
    </div>
  </div>

</div>

      
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .outer {
    width: 300px;
    height: 200px;
    border-radius: 10px;
    padding: 1px;
    background: radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d);
    position: relative;
  }
.full{
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
align-items: center;
margin: 4rem auto;
gap: 2rem;

}
@media(max-width: 700px){
padding: 1.5rem;
}
@media(max-width: 400px){
padding: 2rem;
}

.title{
display: flex;

justify-content: center;
 font-size: 2rem;
  font-weight: 700;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  color: transparent;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  }
  .dot {
    width: 5px;
    aspect-ratio: 1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px #ffffff;
    border-radius: 100px;
    z-index: 2;
    right: 10%;
    top: 10%;
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0%,
    100% {
      top: 10%;
      right: 10%;
    }
    25% {
      top: 10%;
      right: calc(100% - 35px);
    }
    50% {
      top: calc(100% - 30px);
      right: calc(100% - 35px);
    }
    75% {
      top: calc(100% - 30px);
      right: 10%;
    }
  }

  .card {
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 9px;
    border: solid 1px #202222;
    background-size: 20px 20px;
    background: radial-gradient(circle 280px at 0% 0%, #444444,rgb(23, 33, 51));
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    color: #fff;
  }
  .ray {
    width: 220px;
    height: 45px;
    border-radius: 100px;
    position: absolute;
    background-color: #c7c7c7;
    opacity: 0.4;
    box-shadow: 0 0 50px #fff;
    filter: blur(10px);
    transform-origin: 10%;
    top: 0%;
    left: 0;
    transform: rotate(40deg);
  }
.p{
 font-size: 14px;
 padding: 0 2rem;
 display: flex;
 justify-content: center;
}
  .card .text {
    font-weight: bolder;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: linear-gradient(45deg, #000000 4%, #fff, #000);
    background-clip: text;
  color:  #64ffda;
  }

  .line {
    width: 100%;
    height: 1px;
    position: absolute;
    background-color:rgb(88, 84, 84);
  }
  .topl {
    top: 10%;
    background: linear-gradient(90deg, #888888 30%,rgb(45, 58, 58) 70%);
  }
  .bottoml {
    bottom: 10%;
  }
  .leftl {
    left: 10%;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, #747474 30%, #222424 70%);
  }
  .rightl {
    right: 10%;
    width: 1px;
    height: 100%;
  }`;

export default Services;
