import styled from 'styled-components';
import React from 'react';
import { createGlobalStyle } from "styled-components";
import Bottom from "./Bottom.jsx";
import Top from "./Top.jsx";
import Flashcards from "./Flashcards.jsx";

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


const Container = styled.div`
  background-color: #FB6B6B;
  width: 375px;
  height: 667px;
  display: flex;
  flex-direction: column;
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
          <Top />
          <Flashcards />
          <Bottom />
        </Container>
    </div>
  );
}


