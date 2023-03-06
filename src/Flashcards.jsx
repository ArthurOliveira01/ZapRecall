import styled from "styled-components";
import React, { useState } from "react";
import seta from "./img/seta_play.png"
import virar from "./img/seta_virar.png"
import bad from "./img/icone_erro.png"
import mid from "./img/icone_quase.png"
import good from "./img/icone_certo.png"

const Main = styled.div`
  margin-top: 153px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`            //caixa do initial
  background-color: #FFFFFF;
  width: 300px;
  height: 65px;
  margin-bottom: 25px;
  border-radius: 5px;
  margin-left: 10%;
  display: flex;
`;

const OnCard = styled.h2`      //initial
  font-family: 'Recursive';
  font-size: 16px;
  margin-top: 20px;
  margin-left: 5%;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;

`;

const Play = styled.img`    //imagem do initial
  width: 20px;
  height: 23px;
  margin-left: 54.33333333%;
  margin-top: 20px;
  cursor: pointer;
`;

const Question = styled.div`        //caixa da pergunta
    width: 300px;
    height: 131px;
    background-color: #FFFFD4;
    margin-bottom: 25px;
    margin-left: 10%;
    border-radius: 5px;
    display: flex;
`;
const Textquestion = styled.h2`  //pergunta
    font-family: Recursive;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #333333;
    margin-left: 5%;
    margin-top: 20px;
    width: 247.83px;
`;

const Turn = styled.img`  //imagem de virar a carta da pergunta
    width: 30px;
    height: 20px;
    margin-top: 105px;
    cursor: pointer;
`;

const Gabarito = styled.div`
    width: 300px;
    height: 174.88px;
    background-color: #FFFFD4;
    margin-bottom: 25px;
    border-radius: 5px;
    margin-left: 10%;
`;

const Ok = styled.h2`           //texto da resposta
    font-family: Recursive;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    width: 247.83px;
    margin-left: 5%;
    margin-top: 20px;
`;

const Botoes = styled.div`  //div de botões de resposta
    display: flex;
    margin-left: 5.66%;
    margin-top: 23px;
`;

const Bad = styled.button`
    width: 85.17px;
    height: 37.17px;
    border-radius: 5px;
    border: 1px;
    background-color: #FF3030;
    border-color: #FF3030;
    font-family: 'Recursive';
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
    color: #FFFFFF;
    margin-right: 7.74px;
`

const Mid = styled.button`
    width: 85.17px;
    height: 37.17px;
    border-radius: 5px;
    border: 1px;
    background-color: #FF922E;
    border-color: #FF922E;
    font-family: 'Recursive';
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
    color: #FFFFFF;
    margin-right: 7.74px;
`;

const Good = styled.button`
    width: 85.17px;
    background-color: #2fbe34;
    height: 37.17px;
    border-radius: 5px;
    border-color: #2FBE34;
    border: 1px;
    font-family: 'Recursive';
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
    color: #FFFFFF;
`;

const Final = styled.div`
    width: 300px;
    height: 65px;
    background-color: #FFFFFF;
    margin-bottom: 25px;
    border-radius: 5px;
    margin-left: 10%;
    display: flex;
`;

const Icon = styled.img`
    width: 23px;
    height: 23px;
    margin-left: 161px;
    margin-top: 20px;
`

//<Card data-test="flashcard">
  //                  <OnCard data-test="flashcard-text">{string}</OnCard>
    //                <Play data-test="play-btn" src={seta} alt="" />
      //          </Card>


//<Question data-test="flashcard">
  //                  <Textquestion>{string}</Textquestion>
    //                <Turn src={virar} alt="" />
      //          </Question>

//<Gabarito data-test="flashcard">
  //                  <Ok>{string}</Ok>
    //                <Botoes>
      //                  <Bad data-test="no-btn">Não lembrei</Bad>
        //                <Mid data-test="partial-btn">Quase não lembrei</Mid>
          //              <Good data-test="zap-btn">Zap!</Good>
            //        </Botoes>
              //  </Gabarito>

export default function Flashcards({initial, pergunta, resposta, text, setRespondidas, respondidas, num, setNum}){
    let aux = [good, mid, bad];
    const [fase1, setFase1] = useState(true);
    const [fase2, setFase2] = useState(false);
    const [fase3, setFase3] = useState(false);
    const [completed, setCompleted] = useState(false);


    function stepTwoToThree(){
        setFase3(true);
        setFase2(false);
    }

    function stepOneToTwo(){
        setFase2(true);
        setFase1(false);
    }

    function done(selected){
        setCompleted(true);
        setFase3(false);
        setRespondidas(respondidas + 1);
        setNum(selected);
    }


    {fase1 && (
        <Card data-test="flashcard">
            <OnCard data-test="flashcard-text"></OnCard>
            <Play data-test="play-btn" src={seta} alt="" />
        </Card>
    )}

    {fase2 && (
        <Question data-test="flashcard">
            <Textquestion data-test="flashcard-text"></Textquestion>
            <Turn data-test="turn-btn" src={virar} alt="" />
        </Question>
    )}

    return(
        <Main>
            {text.map((string, index) => (
            fase1 && (
                <Card data-test="flashcard">
                    <OnCard data-test="flashcard-text">{initial[index]}</OnCard>
                    <Play onClick={stepOneToTwo} data-test="play-btn" src={seta} alt="" />
                </Card>
            ) || 
            fase2 && (
                <Question data-test="flashcard">
                    <Textquestion data-test="flashcard-text">{pergunta[index]}</Textquestion>
                    <Turn onClick={stepTwoToThree} data-test="turn-btn" src={virar} alt="" />
                </Question>
            ) ||
            fase3 && (
                <Gabarito data-test="flashcard">
                    <Ok data-test="flashcard-test">{resposta[index]}</Ok>
                    <Botoes>
                        <Bad onClick={() => done(2)} data-test="no-btn">Não lembrei</Bad>
                        <Mid onClick={() => done(1)} data-test="partial-btn">Quase não lembrei</Mid>
                        <Good onClick={() => done(0)} data-test="zap-btn">Zap!</Good>
                    </Botoes>
                </Gabarito>
            ) ||
            completed && (
                <Final data-test="flashcard">
                    <OnCard data-test="flashcard-text">{initial[index]}</OnCard>
                    <Icon src={aux[num]} alt="" />
                </Final>
            )
            ))
        }    
        </Main>
    );
}