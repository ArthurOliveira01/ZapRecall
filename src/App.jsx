import styled from 'styled-components';
import React, { useState } from 'react';
import { createGlobalStyle } from "styled-components";
import Foot from "./Foot.jsx";
import Head from "./Head.jsx";
import Flashcards from "./Flashcards.jsx";


const GlobalStyle = createGlobalStyle`
  :root{
    background-color: #FB6B6B;
    width: 100%;
    height: 1450px;
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
	{ id: 1, question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ id: 2, question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ id: 3, question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ id: 4, question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ id: 5, question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ id: 6, question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ id: 7, question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ id: 8, question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
];

export default function App() {
  
  let initial = [];
  let pergunta = [];
  let resposta = [];
  
  cards.map(cards => {
    initial.push(`Pergunta ${cards.id}`)
    pergunta.push(cards.question)
    resposta.push(cards.answer)
  });
  const [respondidas, setRespondidas] = useState(0);
  const [estado, setEstado] = useState(0);
  const [conjunto, setConjunto] = useState([]);
  const [text, setText] = useState(resposta);
  const [num, setNum] = useState(-1);
  
  

  return (
    <div>
      <GlobalStyle />
        <Container>
          <Head />
          <Flashcards
          text = {text}
          initial = {initial}
          pergunta = {pergunta}
          resposta = {resposta}
          setRespondidas = {setRespondidas}
          respondidas = {respondidas}
          setNum = {setNum}
          num = {num}
          />
          <Foot
          respondidas = {respondidas}
          />
        </Container>
    </div>
  );
}


