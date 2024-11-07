import React from "react";
import Header from "./layout/Header";
import styled from "styled-components";

export default function App() {
  return (
    <AppContainer>
      <Intro>
        <h1>Alma Shop'ко кош келдиңиз!</h1>
        <p>
          Биздин дүкөндөн эң мыкты продукттарды таап алыңыз жана жаңы дүйнөнү
          ачыңыз.
        </p>
      </Intro>
      <img src="/apple-products.png" alt="apple produts" />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  color: #1c1c1e;
  background-color: #f5f5f7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  gap: 70px;
`;

const Intro = styled.div`
  max-width: 600px;
  text-align: center;
  margin-top: 50px;
  padding: 0 20px;
  color: #f5f5f7;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 16px;
    color: #0a84ff;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #a1a1a6;
  }
`;
