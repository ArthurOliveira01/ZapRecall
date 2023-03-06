import logo from "./img/logo.png";
import seta from "./img/seta_play.png"
import styled from 'styled-components';
import React from 'react';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    background-color: #FB6B6B;
    width: 100%;
    height: 950px;
  }

   /* Reset de CSS */
   *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    line-height: 1.5;
    font-family: sans-serif;
  }

  /* Remove a decoração de link padrão */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Define as cores padrão de seleção de texto */
  ::selection {
    background-color: #0080ff;
    color: #fff;
  } 
`;

const Header = styled.div`
  display:flex;
  justify-content: center;
  position: fixed;
  border-top: 44px solid;
  border-color: #FB6B6B;
  width: 100%;
  left: 50%; 
  transform: translateX(-50%); 
  background-color: #FB6B6B;
`;

const Container = styled.div`
  background-color: #FB6B6B;
  width: 375px;
  height: 667px;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 52px;
  height: 60px;
`;

const Text = styled.h1`
  font-family: Righteous;
  font-size: 36px;
  font-weight: 400;
  line-height: 45px;
  letter-spacing: -0.012em;
  text-align: center;
  color: #FFFFFF;

`;

const Box = styled.div`
  width: 203.17px;
  height: 44px;
`;

const Main = styled.div`
  margin-top: 153px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  background-color: #FFFFFF;
  width: 300px;
  height: 65px;
  margin-bottom: 25px;
  border-radius: 5px;
  margin-left: 10%;
  display: flex;
`;

const OnCard = styled.h2`
  font-family: 'Recursive';
  font-size: 16px;
  margin-top: 20px;
  margin-left: 5%;

  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;

`;

const Play = styled.img`
  width: 20px;
  height: 23px;
  margin-left: 54.33333333%;
  margin-top: 20px;
`;

const Footer = styled.div`
  width: 100%;
  background-color: #FFFFFF;  
  display: flex;
  position: fixed;
  margin-top: 597px;
`;

const Finish = styled.p`
  height: 80px;
  width: 100%;
  font-family: 'Recursive';
  text-align: center;
  font-family: Recursive;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  margin-top: 24px;
`;

const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
];

export default function App() {
  return (
    <div>
      <GlobalStyle />
        <Container>
          <Header>
            <Img src={logo} alt="" />
            <Box>
              <Text>ZapRecall</Text>
            </Box>
          </Header>
          <Main>
            <Card data-test="flashcard">
              <OnCard>Pergunta 1</OnCard>
              <Play data-test="play-btn" src={seta} alt="" />
            </Card>
            <Card data-test="flashcard">
              <OnCard>Pergunta 2</OnCard>
              <Play data-test="play-btn" src={seta} alt="" />
            </Card>
            <Card data-test="flashcard">
              <OnCard>Pergunta 3</OnCard>
              <Play data-test="play-btn" src={seta} alt="" />
            </Card>
            <Card data-test="flashcard">
              <OnCard>Pergunta 4</OnCard>
              <Play data-test="play-btn" src={seta} alt="" />
            </Card>
            <Card data-test="flashcard">
              <OnCard>Pergunta 5</OnCard>
              <Play data-test="play-btn" src={seta} alt="" />
            </Card>
            <Card data-test="flashcard">
              <OnCard>Pergunta 6</OnCard>
              <Play data-test="play-btn" src={seta} alt="" />
            </Card>
            <Card data-test="flashcard">
              <OnCard>Pergunta 7</OnCard>
              <Play data-test="play-btn" src={seta} alt="" />
            </Card>
            <Card data-test="flashcard">
              <OnCard>Pergunta 8</OnCard>
              <Play data-test="play-btn" src={seta} alt="" />
            </Card>
          </Main>
          <Footer data-test="footer">
            <Finish>0/8 CONCLUÍDOS</Finish>
          </Footer>
        </Container>
    </div>
  );
}


