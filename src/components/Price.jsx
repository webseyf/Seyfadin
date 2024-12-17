import React from 'react';
import styled from 'styled-components';
import Hire from './Hire';

const Price = () => {
  return (
    <StyledWrapper>
      <Header>
        <h1 className="main-heading">Plans /<span> Negotiable</span></h1>
        <p className="sub-heading">Choose the plan that suits your needs</p>
      </Header>
      <PricingContainer className="full">
        {plans.map((plan, index) => (
          <Card key={index} className={plan.type}>
            <h2 className="title">{plan.title}</h2>
            <p className="pricing">
              {plan.price} <span className="pricing-time">/ {plan.time}</span>
            </p>
            <p className="sub-title">{plan.subtitle}</p>
            <ul className="list">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="list-item">
                  <span className="check">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button className="button">{plan.buttonText}</button>
          </Card>
        ))}
      </PricingContainer>
      <Hire/>
    </StyledWrapper>
  );
};

const plans = [
  {
    type: 'basic',
    title: 'Starter',
    price: '$19',
    time: 'month',
    subtitle: 'Perfect for new users:',
    features: ['Basic Analytics', 'Email Support', 'Better websites'],
    buttonText: 'Sign Up',
  },
  {
    type: 'pro',
    title: 'Advanced',
    price: '$49',
    time: 'month',
    subtitle: 'Great for growing businesses:',
    features: ['Advanced Analytics', 'Priority Chat Support', 'Professional Looking'],
    buttonText: 'Upgrade Now',
  },
  {
    type: 'premium',
    title: 'Enterprise',
    price: '$149',
    time: 'month',
    subtitle: 'For large teams and companies:',
    features: ['All Advanced Features', 'Custom Solutions', 'Advanced Support'],
    buttonText: 'Get Started',
  },
];

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;
  background-color:rgb(25, 40, 63);
  color: #ffffff;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;

  .main-heading {
     font-size: 2.7rem;
  font-weight: 700;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  color: transparent;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
    animation: fadeIn 1.5s ease-out;
  }
span{
     font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 40px;

  letter-spacing: 1px;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  color: white;
    }
  .sub-heading {
    font-size: 1.2rem;
    color: #ccd6f6;
    margin-top: 0.5rem;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const PricingContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;

@media (max-width: 768px) {
flex-direction: column;
}
`;

const Card = styled.div`
  flex: 1;
  max-width: 300px;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  color: #ffffff;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }

  &.basic {
    background: linear-gradient(135deg, #1e293b, #3b82f6);
  }

  &.pro {
    position: relative;
    background: radial-gradient(circle at 50% 0%, #9333ea, #3b0d68);
    overflow: hidden;
  }

  &.pro::before {
    content: '';
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    background: linear-gradient(135deg, #9333ea, #d946ef);
    border-radius: 50%;
    box-shadow: 0 0 10px 5px rgba(211, 107, 252, 0.7),
      0 0 30px 10px rgba(211, 107, 252, 0.4);
  }

  &.premium {
    background: linear-gradient(135deg, #1c1917, #f59e0b);
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .pricing {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .pricing-time {
    font-size: 1rem;
    font-weight: normal;
  }

  .sub-title {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #d1d5db;
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
    font-size: 1rem;
  }

  .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .check {
    color: #64ffda;
    font-size: 1.2rem;
  }

  .button {
    background-color: #64ffda;
    color: #0a192f;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s, transform 0.3s;
  }

  .button:hover {
    background-color: #52e0c4;
    transform: translateY(-5px);
  }
`;

export default Price;
