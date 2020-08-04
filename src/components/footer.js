import React from 'react';
import styled from 'styled-components';


const Footer = () => (
  <Container>
    blog in soon || 
    <a target="blank" href="https://app.picpay.com/user/bluues">Pay me a coffee</a> 
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 3.5rem;
  position: fixed;
  
  bottom: 0;
  border-top: 1px solid #FF5260;

  
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: #1A1C21;
  color: #fff;

  font-style: normal;
  font-weight: 500;
  font-size: 1.175rem;

  a {
    margin-left: 5px;
    text-decoration: underline;
    text-decoration-color: #FF5260;
    color: #fff;
    transition: 0.2s color;

    &:hover {
      color: #EFEDED;
    
    }
  }

  

`;

export default Footer;