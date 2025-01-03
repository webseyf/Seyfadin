import React from "react";
import styled from "styled-components";

const Animate = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="cube">
          {[-1, 0, 1].map((x) => (
            <div key={x} style={{ "--x": x, "--y": 0 }}>
              {[3, 2, 1].map((i) => (
                <span key={i} style={{ "--i": i }} />
              ))}
            </div>
          ))}
        </div>
        <div className="cube">
          {[-1, 0, 1].map((x) => (
            <div key={x} style={{ "--x": x, "--y": 0 }}>
              {[3, 2, 1].map((i) => (
                <span key={i} style={{ "--i": i }} />
              ))}
            </div>
          ))}
        </div>
        <div className="cube">
          {[-1, 0, 1].map((x) => (
            <div key={x} style={{ "--x": x, "--y": 0 }}>
              {[3, 2, 1].map((i) => (
                <span key={i} style={{ "--i": i }} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  @keyframes animate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }

  .container {
    position: relative;
    top: -80px;
    transform: skewY(-20deg);
    animation: animate 5s linear infinite;

    .cube {
      position: relative;
      z-index: 2;

      &:nth-child(2) {
        z-index: 1;
        transform: translate(-60px, -60px);
      }

      &:nth-child(3) {
        z-index: 3;
        transform: translate(60px, 60px);
      }

      div {
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 30px;
        transform: translate(calc(-70px * var(--x)), calc(-60px * var(--y)));

        span {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 50px;
          background: #dcdcdc;
          z-index: calc(1 * var(--i));
          transition: 1.5s;

          &:hover {
            transition: 0s;
            background: #ef4149;
            filter: drop-shadow(0 0 30px #ef4149);

            &:before,
            &:after {
              transition: 0s;
              background: #ef4149;
            }
          }

          &:before {
            content: "";
            position: absolute;
            left: -40px;
            width: 40px;
            height: 100%;
            background: #fff;
            transform-origin: right;
            transform: skewY(45deg);
            transition: 1.5s;
          }

          &:after {
            content: "";
            position: absolute;
            top: -40px;
            left: 0;
            width: 100%;
            height: 40px;
            background: #f2f2f2;
            transform-origin: bottom;
            transform: skewX(45deg);
            transition: 1.5s;
          }
        }
      }
    }
  }
`;

export default Animate;