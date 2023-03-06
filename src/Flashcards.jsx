import styled from "styled-components";
import React from "react";
import seta from "./img/seta_play.png"

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
  cursor: pointer;
`;

export default function Flashcards(props){
    return(
        <Main>
            <Card data-test="flashcard">
              <OnCard data-test="flashcard-text">Pergunta 1</OnCard>
              <Play data-test="play-btn" src={seta} alt="" />
            </Card>
            <Card data-test="flashcard">
              <OnCard data-test="flashcard-text">Pergunta 2</OnCard>
              <Play data-test="play-btn" src={seta} alt="" />
            </Card>
            <Card data-test="flashcard">
              <OnCard data-test="flashcard-text">Pergunta 3</OnCard>
              <Play data-test="play-btn" src={seta} alt="" />
            </Card>
            <Card data-test="flashcard">
              <OnCard data-test="flashcard-text">Pergunta 4</OnCard>
              <Play data-test="play-btn" src={seta} alt="" />
            </Card>
            <Card data-test="flashcard">
              <OnCard data-test="flashcard-text">Pergunta 5</OnCard>
              <Play data-test="play-btn" src={seta} alt="" />
            </Card>
            <Card data-test="flashcard">
              <OnCard data-test="flashcard-text">Pergunta 6</OnCard>
              <Play data-test="play-btn" src={seta} alt="" />
            </Card>
            <Card data-test="flashcard">
              <OnCard data-test="flashcard-text">Pergunta 7</OnCard>
              <Play data-test="play-btn" src={seta} alt="" />
            </Card>
            <Card data-test="flashcard">
              <OnCard data-test="flashcard-text">Pergunta 8</OnCard>
              <Play data-test="play-btn" src={seta} alt="" />
            </Card>
          </Main>
    );
}