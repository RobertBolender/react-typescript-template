import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "./logo.svg";

const App: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Logo src={logo} className="App-logo" alt="logo" />
        <p>React + TypeScript + Styled Components</p>
      </Header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const LogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  animation: ${LogoSpin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

export default App;
